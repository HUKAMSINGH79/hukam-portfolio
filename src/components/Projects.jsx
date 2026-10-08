import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { projects } from '../data'
import { Button, Icon, Section } from './ui'

function Shot({ src, title }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="aspect-video overflow-hidden rounded-lg border border-line bg-ink">
      {failed ? (
        <div className="grid h-full place-items-center text-center text-sm text-slate-500">
          <div><Icon name="ImageOff" size={26} className="mx-auto mb-2" />Screenshot coming soon</div>
        </div>
      ) : (
        <img src={src} alt={`${title} screenshot`} loading="lazy" onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
      )}
    </div>
  )
}

function Architecture({ steps }) {
  return (
    <div className="mt-5 rounded-lg border border-line bg-ink/60 p-4">
      <h4 className="text-sm font-semibold text-white">Architecture</h4>
      <ol className="mt-3 flex flex-col items-stretch gap-1.5 sm:flex-row sm:items-center sm:gap-2">
        {steps.map((s, i) => (
          <li key={s} className="flex flex-col items-center gap-1.5 sm:flex-row sm:gap-2">
            <span className="w-full rounded-md border border-line bg-panel px-3 py-1.5 text-center text-xs font-medium text-slate-200 sm:w-auto">{s}</span>
            {i < steps.length - 1 && (<>
              <ChevronDown size={14} className="text-accent sm:hidden" aria-hidden="true" />
              <ChevronRight size={14} className="hidden text-accent sm:block" aria-hidden="true" />
            </>)}
          </li>
        ))}
      </ol>
    </div>
  )
}

function ProjectCard({ p }) {
  return (
    <article className="group grid gap-6 rounded-2xl border border-line bg-panel p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/50 sm:p-6 lg:grid-cols-2 lg:gap-8">
      <div className="lg:self-start"><Shot src={p.image} title={p.title} /></div>
      <div className="flex flex-col">
        <p className="text-sm font-medium text-accent2">{p.category}</p>
        <h3 className="mt-1 text-2xl font-semibold text-white">{p.title}</h3>
        <p className="mt-3 leading-relaxed text-slate-400">{p.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {p.tech.map((t) => <li key={t} className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">{t}</li>)}
        </ul>
        <ul className="mt-5 grid gap-1.5 text-sm text-slate-300 sm:grid-cols-2" aria-label="Key features">
          {p.features.map((f) => <li key={f} className="flex gap-2"><span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2" />{f}</li>)}
        </ul>
        {p.architecture && <Architecture steps={p.architecture} />}
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <Button href={p.github} external icon="Github" disabledLabel="Code link coming soon">View Code</Button>
          <Button href={p.demo} external variant="primary" icon="ExternalLink" disabledLabel="Live demo coming soon">Live Demo</Button>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Selected projects demonstrating my backend, API and frontend development skills.">
      <div className="space-y-8">{projects.map((p) => <ProjectCard key={p.title} p={p} />)}</div>
    </Section>
  )
}
