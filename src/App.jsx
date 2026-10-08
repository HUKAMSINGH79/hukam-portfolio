import { navLinks } from './data'
import { useActiveSection } from './hooks'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const ids = navLinks.map((n) => n.toLowerCase())

export default function App() {
  const active = useActiveSection(ids)
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
      <Navbar active={active} />
      <main><Hero /><About /><Skills /><Projects /><Experience /><Contact /></main>
      <Footer />
    </>
  )
}
