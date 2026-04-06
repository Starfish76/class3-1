export type AlbumPhoto = {
  id: string
  name: string
  alt: string
  src: string
}

export type Album = {
  id: string
  title: string
  coverImage: string
  accent: string
  photos: AlbumPhoto[]
}
