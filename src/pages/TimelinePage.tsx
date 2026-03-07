import { PageHero } from '../components/PageHero'
import { TimelineItem } from '../components/TimelineItem'
import { timelineEntries } from '../data/memories'

export function TimelinePage() {
  return (
    <div className="space-y-10">
      <PageHero label="Timeline" title="한 해를 월별로 다시 펼쳐보기" description="큰 이벤트뿐 아니라 계절과 분위기까지 같이 기억할 수 있도록 월별 단위로 정리한 추억 타임라인입니다." />
      <section className="space-y-5">
        {timelineEntries.map((item) => (
          <TimelineItem key={`${item.month}-${item.title}`} item={item} />
        ))}
      </section>
    </div>
  )
}
