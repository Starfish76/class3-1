type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  )
}
