import { AlbumCard } from '../components/AlbumCard'
import { PageHero } from '../components/PageHero'
import { albums } from '../data/memories'

export function AlbumsPage() {
  return (
    <div className="space-y-10">
      <PageHero label="Albums" title="이벤트별로 정리한 3-1반의 사진첩" description="체육대회, 축제, 수학여행, 급식시간, 교실 일상까지. 사진이 많아져도 찾기 쉽도록 이벤트 단위로 나눠둔 앨범입니다." />
      <section className="grid gap-6 lg:grid-cols-2">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </section>
    </div>
  )
}
