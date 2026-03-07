import { MessageCard } from '../components/MessageCard'
import { PageHero } from '../components/PageHero'
import { messages } from '../data/memories'

export function MessagesPage() {
  return (
    <div className="space-y-10">
      <PageHero label="Messages" title="친구들의 한마디" description="아주 짧은 문장이어도 나중에 다시 읽으면 그때 분위기가 생각나는 기록들입니다." />
      <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {messages.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </section>
    </div>
  )
}
