import { Leaf } from 'lucide-react'
import { profile } from '../data'
import { Button, SocialLinks } from './ui'

const floating = 'flex items-center gap-2 rounded-xl border border-line bg-panel/90 px-3.5 py-2 text-sm font-medium text-white shadow-xl backdrop-blur'

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-16">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-accent2/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute top-48 -left-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-14 sm:px-8 md:grid-cols-[1.15fr_1fr] md:py-24">
        <div className="order-2 md:order-1">
          <p className="inline-block rounded-full border border-line bg-panel/70 px-3.5 py-1.5 text-xs font-semibold tracking-widest text-slate-300">JAVA • SPRING BOOT • REACT</p>
          <h1 id="hero-title" className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Hi, I'm Hukam Singh.
            <span className="mt-2 block text-2xl font-bold leading-snug text-slate-300 sm:text-3xl">
              <span className="text-accent">Java &amp; Spring Boot</span> Developer building modern web applications.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{profile.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#projects" variant="primary" icon="FolderGit2">View My Projects</Button>
            <Button href={profile.resume} download icon="Download" disabledLabel="Resume coming soon">Download Resume</Button>
            <Button href="#contact" variant="ghost">Let's Connect</Button>
          </div>
          <div className="mt-8"><SocialLinks profile={profile} /></div>
        </div>

        <div className="order-1 mx-auto w-full max-w-xs sm:max-w-sm md:order-2">
          <div className="relative sm:px-4">
            <div aria-hidden="true" className="absolute inset-4 rounded-3xl bg-gradient-to-br from-accent/25 to-accent2/25 blur-2xl" />
            <img src={profile.photo} alt="Portrait of Hukam Singh" width="1082" height="1454" fetchpriority="high"
              className="relative aspect-[4/5] w-full rounded-3xl border border-white/10 object-cover object-top shadow-2xl shadow-black/50" />
          </div>
          {/* Badges sit below the photo so nothing covers the portrait */}
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <div className={floating}>
              <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" /></span>
              Open to Opportunities
            </div>
            <div className={floating}><Leaf size={15} className="text-accent" aria-hidden="true" />Java • Spring Boot • React</div>
          </div>
        </div>
      </div>
    </section>
  )
}
