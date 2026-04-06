import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin, type ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
// TypeScript does not infer local .mjs config helpers cleanly here, but Vite loads it correctly at runtime.
// @ts-expect-error local build-time helper module
import { generateAlbumManifest } from './scripts/generateAlbumManifest.mjs'

const configFilePath = fileURLToPath(import.meta.url)
const projectRoot = path.dirname(configFilePath)
const photosRoot = path.resolve(projectRoot, 'public', 'photos')

function albumManifestPlugin(): Plugin {
  let refreshTimer: NodeJS.Timeout | undefined

  const queueManifestRefresh = (server?: ViteDevServer) => {
    clearTimeout(refreshTimer)

    refreshTimer = setTimeout(() => {
      void generateAlbumManifest().then(() => {
        server?.ws.send({ type: 'full-reload' })
      })
    }, 80)
  }

  return {
    name: 'album-manifest-plugin',
    async buildStart() {
      await generateAlbumManifest()
    },
    configureServer(server) {
      const refreshIfPhotoChanged = (filePath: string) => {
        const absolutePath = path.resolve(filePath)

        if (absolutePath.startsWith(photosRoot)) {
          queueManifestRefresh(server)
        }
      }

      server.watcher.on('add', refreshIfPhotoChanged)
      server.watcher.on('change', refreshIfPhotoChanged)
      server.watcher.on('unlink', refreshIfPhotoChanged)
      server.watcher.on('addDir', refreshIfPhotoChanged)
      server.watcher.on('unlinkDir', refreshIfPhotoChanged)
    },
  }
}

export default defineConfig(async () => {
  await generateAlbumManifest()

  return {
    plugins: [albumManifestPlugin(), react(), tailwindcss()],
    base: '/class3-1/',
  }
})
