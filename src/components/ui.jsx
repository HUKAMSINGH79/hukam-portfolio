import { Coffee, Webhook, Component, Database, Code2, Braces, Server, Leaf, Sprout, Layers, Boxes, LayoutDashboard, FileCode, Palette, LayoutGrid, Wrench, GitBranch, Github, Linkedin, Package, Send, Terminal, CreditCard, Briefcase, FolderGit2, Download, Mail, ExternalLink, ImageOff, ArrowDown } from 'lucide-react'

// Explicit map keeps the bundle small (no wildcard import of every icon).
const Icons = { ImageOff, ArrowDown, Coffee, Webhook, Component, Database, Code2, Braces, Server, Leaf, Sprout, Layers, Boxes, LayoutDashboard, FileCode, Palette, LayoutGrid, Wrench, GitBranch, Github, Linkedin, Package, Send, Terminal, CreditCard, Briefcase, FolderGit2, Download, Mail, ExternalLink, ImageOff, ArrowDown }
import { useReveal } from '../hooks'

export const Icon = ({ name, ...props }) => {
  const C = Icons[name] || Icons.Code2
  return <C aria-hidden="true" {...props} />
}

/** Link-style button. Renders a disabled placeholder when `href` is empty. */
export function Button({ href, variant = 'secondary', icon, children, external, download, disabledLabel = 'Link coming soon', className = '' }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition'
  const styles = {
    primary: 'bg-gradient-to-r from-accent to-accent2 text-slate-950 hover:brightness-110',
    ghost: 'text-slate-300 hover:text-white underline-offset-4 hover:underline',
    secondary: 'border border-line bg-panel text-slate-200 hover:border-accent/60 hover:text-white',
  }[variant]
  const content = <>{icon && <Icon name={icon} size={16} />}{children}</>
  if (!href) {
    return <span role="link" aria-disabled="true" title={disabledLabel} className={`${base} ${styles} cursor-not-allowed opacity-45 ${className}`}>{content}</span>
  }
  return <a href={href} download={download} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={`${base} ${styles} ${className}`}>{content}</a>
}

export function Section({ id, title, subtitle, children, className = '' }) {
  const ref = useReveal()
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`mx-auto max-w-6xl px-5 py-20 sm:px-8 ${className}`}>
      <div ref={ref} className="reveal">
        <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

export const SocialLinks = ({ profile }) => {
  const items = [
    ['GitHub', 'Github', profile.github, true],
    ['LinkedIn', 'Linkedin', profile.linkedin, true],
    ['Email', 'Mail', profile.email && `mailto:${profile.email}`, false],
  ]
  return (
    <ul className="flex gap-3">
      {items.map(([label, icon, href, ext]) => {
        const cls = 'grid h-10 w-10 place-items-center rounded-lg border border-line bg-panel text-slate-300 transition'
        return (
          <li key={label}>
            {href
              ? <a href={href} aria-label={label} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={`${cls} hover:border-accent/60 hover:text-white`}><Icon name={icon} size={18} /></a>
              : <span role="link" aria-disabled="true" aria-label={`${label} (link not added yet)`} title={`${label} link coming soon`} className={`${cls} cursor-not-allowed opacity-45`}><Icon name={icon} size={18} /></span>}
          </li>
        )
      })}
    </ul>
  )
}
