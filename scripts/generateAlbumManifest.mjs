import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const photosRoot = path.resolve(projectRoot, 'public', 'photos')
const outputFile = path.resolve(projectRoot, 'src', 'data', 'albums.generated.ts')

const supportedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'])
const accentPalette = [
  'from-sky-300 via-cyan-200 to-blue-100',
  'from-emerald-300 via-teal-200 to-cyan-100',
  'from-pink-200 via-rose-100 to-orange-50',
  'from-violet-200 via-fuchsia-100 to-sky-100',
  'from-amber-200 via-yellow-100 to-orange-50',
  'from-indigo-200 via-sky-100 to-cyan-50',
]

const collator = new Intl.Collator('ko', { numeric: true, sensitivity: 'base' })

function toPosixPath(value) {
  return value.split(path.sep).join('/')
}

function compareByName(left, right) {
  return collator.compare(left, right)
}

function hashText(value) {
  return [...value].reduce((accumulator, character) => accumulator * 31 + character.charCodeAt(0), 7)
}

function humanizeName(value) {
  return value
    .replace(/\.[^.]+$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((token) => (/^[a-z0-9]/i.test(token) ? token.charAt(0).toUpperCase() + token.slice(1) : token))
    .join(' ')
}

async function ensureOutputDirectory() {
  await fs.mkdir(path.dirname(outputFile), { recursive: true })
}

async function getAlbumDirectories() {
  try {
    const entries = await fs.readdir(photosRoot, { withFileTypes: true })
    return entries
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort(compareByName)
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      return []
    }

    throw error
  }
}

async function getImageFiles(albumDirectory) {
  const fullDirectoryPath = path.join(photosRoot, albumDirectory)
  const entries = await fs.readdir(fullDirectoryPath, { withFileTypes: true })

  return entries
    .filter((entry) => entry.isFile() && supportedExtensions.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort(compareByName)
}

function createAlbumModule(albums) {
  const body =
    albums.length === 0
      ? '[]'
      : `[\n${albums
          .map((album) => {
            const photos = album.photos
              .map(
                (photo) => `      {
        id: ${JSON.stringify(photo.id)},
        name: ${JSON.stringify(photo.name)},
        alt: ${JSON.stringify(photo.alt)},
        src: ${JSON.stringify(photo.src)},
      }`,
              )
              .join(',\n')

            return `  {
    id: ${JSON.stringify(album.id)},
    title: ${JSON.stringify(album.title)},
    coverImage: ${JSON.stringify(album.coverImage)},
    accent: ${JSON.stringify(album.accent)},
    photos: [
${photos}
    ],
  }`
          })
          .join(',\n')}\n]`

  return `import type { Album } from '../types/albums'

// This file is generated from public/photos. Edit the folders there instead.
export const generatedAlbums: Album[] = ${body}
`
}

export async function generateAlbumManifest() {
  await ensureOutputDirectory()

  const albumDirectories = await getAlbumDirectories()
  const albums = []

  for (const directoryName of albumDirectories) {
    const imageFiles = await getImageFiles(directoryName)

    if (imageFiles.length === 0) {
      continue
    }

    const title = humanizeName(directoryName) || directoryName
    const accent = accentPalette[Math.abs(hashText(directoryName)) % accentPalette.length]
    const photos = imageFiles.map((fileName) => {
      const name = humanizeName(fileName) || fileName
      const relativePath = toPosixPath(path.posix.join('photos', directoryName, fileName))

      return {
        id: `${directoryName}/${fileName}`,
        name,
        alt: `${title} - ${name}`,
        src: relativePath,
      }
    })

    albums.push({
      id: directoryName,
      title,
      coverImage: photos[0].src,
      accent,
      photos,
    })
  }

  const fileContents = createAlbumModule(albums)
  await fs.writeFile(outputFile, fileContents, 'utf8')

  return albums
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  await generateAlbumManifest()
}
