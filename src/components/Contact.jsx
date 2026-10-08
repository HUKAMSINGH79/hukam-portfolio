import { useState } from 'react'
import { profile } from '../data'
import { Icon, Section } from './ui'

const field = 'mt-1.5 w-full rounded-lg border border-line bg-ink px-3.5 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-accent focus:outline-none'

export default function Contact() {
  const [status, setStatus] = useState('')

  // No backend: opens the visitor's mail app once an email is set in data.js.
  const onSubmit = (e) => {
    e.preventDefault()
    if (!profile.email) return setStatus('This form is not connected yet: no email address has been configured. It will open your email app once one is added.')
    const d = Object.fromEntries(new FormData(e.currentTarget))
    const body = `${d.message}\n\n— ${d.name} (${d.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`
    setStatus('Opening your email app…')
  }

  const links = [
    ['Email', 'Mail', profile.email, profile.email && `mailto:${profile.email}`],
    ['GitHub', 'Github', profile.github, profile.github],
    ['LinkedIn', 'Linkedin', profile.linkedin, profile.linkedin],
  ]

  return (
    <Section id="contact" title="Let’s Connect" subtitle="Have a project, opportunity or collaboration in mind? I’d be happy to connect.">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <form onSubmit={onSubmit} className="lg:order-2 space-y-4 rounded-xl border border-line bg-panel p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-300">Name<input name="name" required autoComplete="name" className={field} placeholder="Your name" /></label>
            <label className="text-sm font-medium text-slate-300">Email<input name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" /></label>
          </div>
          <label className="block text-sm font-medium text-slate-300">Subject<input name="subject" required className={field} placeholder="What is this about?" /></label>
          <label className="block text-sm font-medium text-slate-300">Message<textarea name="message" required rows="5" className={field} placeholder="Tell me about the role or project" /></label>
          <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent2 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110">
            <Icon name="Send" size={16} />Send Message
          </button>
          <p role="status" className="min-h-5 text-sm text-slate-400">{status}</p>
        </form>

        <ul className="lg:order-1 space-y-4">
          {links.map(([label, icon, text, href]) => (
            <li key={label} className="flex items-center gap-4 rounded-xl border border-line bg-panel p-5">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent"><Icon name={icon} size={18} /></span>
              <div className="min-w-0">
                <p className="font-semibold text-white">{label}</p>
                {href
                  ? <a href={href} {...(label !== 'Email' ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="block truncate text-sm text-accent hover:underline">{text}</a>
                  : <p className="text-sm text-slate-500">Link coming soon</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
