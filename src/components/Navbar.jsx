import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data'
import { useScrolled } from '../hooks'

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const link = (n, mobile) => {
    const on = active === n.toLowerCase()
    return (
      <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} aria-current={on ? 'true' : undefined}
        className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${on ? 'text-white' : 'text-slate-400 hover:text-white'} ${mobile ? 'py-3 text-base' : ''}`}>
        {n}
        {on && !mobile && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-gradient-to-r from-accent to-accent2" />}
        {on && mobile && <span aria-hidden="true" className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />}
      </a>
    )
  }
  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || open ? 'border-line/70 bg-ink/85 backdrop-blur-md' : 'border-transparent bg-transparent'}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="text-lg font-bold tracking-tight text-white">{profile.name}</a>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-1 md:flex">{navLinks.map((n) => link(n))}</div>
          <span className="hidden items-center gap-2 rounded-full border border-line bg-panel/70 px-3 py-1.5 text-xs font-medium text-slate-300 lg:flex">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-400" />Available for opportunities
          </span>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-lg border border-line text-slate-200 md:hidden"
            aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      <div id="mobile-menu" className={`grid transition-[grid-template-rows] duration-300 md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className={`overflow-hidden ${open ? 'visible' : 'invisible'}`}>
          <div className="flex flex-col border-t border-line px-5 py-2">{navLinks.map((n) => link(n, true))}</div>
        </div>
      </div>
    </header>
  )
}
