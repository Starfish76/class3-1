import { AlbumCard } from '../components/AlbumCard'
import { PageHero } from '../components/PageHero'
import { albums } from '../data/albums'

export function AlbumsPage() {
  return (
    <div className="space-y-10">
      <PageHero
        label="Albums"
        title="사진 폴더에서 자동으로 만들어지는 앨범"
        description="public/photos/앨범이름/ 폴더를 만들고 사진만 넣으면 앨범 목록과 상세 페이지가 자동으로 갱신됩니다."
        className="px-8 md:px-14 xl:px-16"
        titleClassName="max-w-5xl"
        descriptionClassName="max-w-4xl"
      />

      {albums.length === 0 ? (
        <section className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white/70 px-6 py-12 text-center text-slate-600">
          아직 불러온 앨범이 없습니다. public/photos/앨범이름/ 폴더 안에 사진 파일을 넣어 주세요.
        </section>
      ) : (
        <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </section>
      )}
    </div>
  )
}
