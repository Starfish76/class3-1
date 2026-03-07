import type { Message } from '../types/content'

type MessageCardProps = {
  message: Message
}

export function MessageCard({ message }: MessageCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-[0_16px_60px_rgba(15,23,42,0.08)]">
      <div className="mb-4 h-10 w-10 rounded-2xl bg-gradient-to-br from-rose-300 to-orange-200" />
      <p className="text-base leading-8 text-slate-700">“{message.text}”</p>
      <div className="mt-6">
        <p className="font-semibold text-slate-900">{message.name}</p>
        <p className="text-sm text-slate-500">{message.role}</p>
      </div>
    </article>
  )
}
