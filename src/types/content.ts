export type Photo = {
  id: string
  src: string
  alt: string
  caption: string
  width: number
  height: number
  featured?: boolean
  tag?: string
}

export type Album = {
  id: string
  title: string
  date: string
  description: string
  coverImage: string
  location: string
  accent: string
  photos: Photo[]
}

export type TimelineEntry = {
  month: string
  title: string
  description: string
  photo: string
}

export type Message = {
  id: string
  name: string
  role: string
  text: string
}

export type BestMomentSection = {
  id: string
  title: string
  description: string
  photoIds: string[]
}
