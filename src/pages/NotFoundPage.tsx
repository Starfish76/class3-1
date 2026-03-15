import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-slate-900">페이지를 찾을 수 없습니다</h1>
      <p className="mt-4 max-w-xl leading-8 text-slate-600">주소가 바뀌었거나 존재하지 않는 페이지입니다. 아래 버튼으로 홈이나 앨범 페이지로 돌아가세요.</p>
      <div className="mt-8 flex gap-3">
        <Link to="/" className="rounded-full bg-sky-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-200/80 transition hover:bg-sky-700">
          홈으로
        </Link>
        <Link to="/albums" className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700">
          앨범으로
        </Link>
      </div>
    </div>
  )
}
