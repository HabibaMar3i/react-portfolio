import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import { profileData } from './data/portfolioData'
import { useEffect } from 'react'
import { initAnalytics, trackPageView } from './lib/analytics'

function App() {
  useEffect(() => {
    initAnalytics()
    trackPageView()
  }, [])

  return (
    <main className="min-h-screen bg-[#090b14] text-slate-100 selection:bg-fuchsia-400/30">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[10%] top-[6%] h-52 w-52 rounded-full bg-fuchsia-600/20 blur-2xl md:h-72 md:w-72" />
        <div className="absolute bottom-[8%] right-[8%] h-52 w-52 rounded-full bg-cyan-500/15 blur-2xl md:h-72 md:w-72" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:px-8 md:py-14">
        <HeroSection profile={profileData.profile} />
        <ExperienceSection experiences={profileData.experiences} />
        <ProjectsSection projects={profileData.projects} />
        <SkillsSection skills={profileData.skills} education={profileData.education} />
        <ContactSection profile={profileData.profile} />
      </div>
    </main>
  )
}

export default App
