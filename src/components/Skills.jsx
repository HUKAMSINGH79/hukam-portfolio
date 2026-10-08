import { skillGroups } from '../data'
import { Icon, Section } from './ui'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies I use to build backend services and web interfaces.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <article key={g.title} className="rounded-xl border border-line bg-panel p-6">
            <h3 className="flex items-center gap-2 font-semibold text-white"><Icon name={g.icon} size={18} className="text-accent2" />{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.skills.map(([name, icon]) => (
                <li key={name} className="flex items-center gap-2 rounded-lg border border-line bg-ink px-3 py-2 text-sm text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-white">
                  <Icon name={icon} size={15} className="text-accent" />{name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
