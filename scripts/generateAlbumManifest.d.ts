declare module './scripts/generateAlbumManifest.mjs' {
  import type { Album } from '../src/types/albums'

  export function generateAlbumManifest(): Promise<Album[]>
}
