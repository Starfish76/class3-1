import { CalendarDays } from 'lucide-react'
import { PageHero } from '../components/PageHero'

const schedules = [
  {
    month: '3월',
    title: '새 학기 시작',
    detail: '학급 소개, 자리 배치, 첫 단체 사진처럼 한 해의 출발을 기록하는 일정입니다.',
  },
  {
    month: '5월',
    title: '체육대회',
    detail: '학급 응원전과 경기 일정을 모아 두고 사진 앨범과 함께 보기 쉽게 정리할 수 있습니다.',
  },
  {
    month: '9월',
    title: '축제 준비',
    detail: '공연 준비, 부스 운영, 리허설 같은 프로젝트성 일정을 정리하기 좋은 구간입니다.',
  },
  {
    month: '10월',
    title: '현장체험학습',
    detail: '이동 일정, 방문 장소, 반별 활동 내용을 빠르게 확인할 수 있는 일정 카드입니다.',
  },
]

export function SchoolCalendarPage() {
  return (
    <div className="space-y-10">
      <PageHero
        label="School Calendar"
        title="학사일정"
        description="학급 주요 일정과 프로젝트 일정을 정리하는 탭입니다. 월별 주요 행사와 활동을 한눈에 볼 수 있게 구성했습니다."
      />

      <section className="space-y-4">
        {schedules.map((item) => (
          <article
            key={`${item.month}-${item.title}`}
            className="grid gap-4 rounded-[1.75rem] border border-white/70 bg-white/90 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:grid-cols-[120px_minmax(0,1fr)]"
          >
            <div className="flex items-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                <CalendarDays className="h-4 w-4" />
                {item.month}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{item.detail}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
