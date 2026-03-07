export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-500 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p>3-1반의 사진과 순간들을 모아둔 정적 추억 아카이브</p>
        <p>사진과 문구는 `src/data/memories.ts`에서 바로 수정할 수 있습니다.</p>
      </div>
    </footer>
  )
}
