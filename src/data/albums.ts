import { generatedAlbums } from './albums.generated'

const withBaseUrl = (value: string) => `${import.meta.env.BASE_URL}${value.replace(/^\/+/, '')}`

export const albums = generatedAlbums.map((album) => ({
  ...album,
  coverImage: withBaseUrl(album.coverImage),
  photos: album.photos.map((photo) => ({
    ...photo,
    src: withBaseUrl(photo.src),
  })),
}))
