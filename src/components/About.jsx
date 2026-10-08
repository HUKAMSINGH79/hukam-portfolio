import { aboutParagraphs, aboutCards } from '../data'
import { Section } from './ui'

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="Building practical software with Java, Spring Boot and React.">
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-slate-300">
        {aboutParagraphs.map((t) => <p key={t}>{t}</p>)}
      </div>
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {aboutCards.map((c) => (
          <li key={c.n} className="rounded-xl border border-line bg-panel p-6 transition hover:border-accent/50">
            <span className="text-sm font-semibold text-accent2">{c.n}</span>
            <h3 className="mt-3 font-semibold text-white">{c.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{c.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
