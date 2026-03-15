import { motion } from 'framer-motion'

type PageHeroProps = {
  label: string
  title: string
  description: string
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 px-6 py-10 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur md:px-10 md:py-14"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">{label}</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">{description}</p>
    </motion.section>
  )
}
