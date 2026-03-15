import { Award, Medal, Trophy } from 'lucide-react'
import { PageHero } from '../components/PageHero'

const records = [
  {
    title: '최고의 발표왕',
    holder: '3-1 발표팀',
    detail: '수업 시간마다 가장 또렷하고 자신감 있게 발표한 팀을 기록하는 코너입니다.',
    icon: Trophy,
  },
  {
    title: '반응 속도 1등',
    holder: '게임 마스터',
    detail: '학급 행사와 레크리에이션에서 가장 빠르게 미션을 해결한 순간을 모아 둡니다.',
    icon: Medal,
  },
  {
    title: '아이디어 뱅크',
    holder: '프로젝트 기획팀',
    detail: '학급 프로젝트에서 가장 기발한 아이디어를 낸 기록을 남기는 공간입니다.',
    icon: Award,
  },
]

export function GuinnessBookPage() {
  return (
    <div className="space-y-10">
      <PageHero
        label="Pyones Book"
        title="표네스북"
        description="학급에서 진행하는 프로젝트용 기록 탭입니다. 우리 반의 재미있는 최고 기록과 오래 기억하고 싶은 장면을 모아 둘 수 있습니다."
      />

      <section className="grid gap-5 md:grid-cols-3">
        {records.map(({ title, holder, detail, icon: Icon }) => (
          <article key={title} className="rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-200 to-blue-300 text-sky-900">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm font-medium text-sky-700">{holder}</p>
            <p className="mt-4 leading-7 text-slate-600">{detail}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
