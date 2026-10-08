import { journey, profile } from '../data'
import { Button, Section } from './ui'

export default function Experience() {
  return (
    <>
      <Section id="experience" title="Professional Journey">
        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
          Currently focused on strengthening my Java and Spring Boot development skills through practical projects while expanding my frontend development experience with React.
        </p>
        <ol className="mt-10 max-w-md border-l border-line pl-8">
          {journey.map((step) => (
            <li key={step} className="relative pb-8 last:pb-0">
              <span aria-hidden="true" className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-ink" />
              <p className="font-medium text-white">{step}</p>
            </li>
          ))}
        </ol>
      </Section>
      <section aria-labelledby="resume-title" className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="rounded-2xl border border-line bg-gradient-to-br from-accent2/15 via-panel to-accent/10 p-8 text-center sm:p-12">
          <h2 id="resume-title" className="text-2xl font-bold text-white sm:text-3xl">Let's build something useful.</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">I'm open to opportunities where I can contribute as a Java/Spring Boot developer and continue growing through real-world engineering challenges.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={profile.resume} download variant="primary" icon="Download" disabledLabel="Resume coming soon">Download Resume</Button>
            <Button href="#contact" icon="Mail">Contact Me</Button>
          </div>
        </div>
      </section>
    </>
  )
}
