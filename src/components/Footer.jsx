import { profile } from '../data'
import { SocialLinks } from './ui'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 text-center sm:px-8 md:flex-row md:text-left">
        <div>
          <p className="font-bold text-white">{profile.name}</p>
          <p className="text-sm text-slate-400">{profile.role}</p>
        </div>
        <SocialLinks profile={profile} />
        <p className="text-sm text-slate-500">© 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
