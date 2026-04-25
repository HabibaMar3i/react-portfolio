function HeroSection({ profile }) {
  return (
    <section className="reveal hover-lift gpu-safe rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 md:p-9">
      <p className="mb-3 inline-flex rounded-full border border-fuchsia-300/40 bg-fuchsia-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-200">
        {profile.title}
      </p>
      <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">{profile.name}</h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-lg">{profile.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2.5 text-xs text-slate-300 md:text-sm">
        <span className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 transition duration-300 hover:border-fuchsia-300/50 hover:bg-fuchsia-300/10 hover:text-white">
          {profile.location}
        </span>
        <span className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 transition duration-300 hover:border-fuchsia-300/50 hover:bg-fuchsia-300/10 hover:text-white">
          {profile.phone}
        </span>
        <span className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 transition duration-300 hover:border-fuchsia-300/50 hover:bg-fuchsia-300/10 hover:text-white">
          {profile.availability}
        </span>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="minimal-btn rounded-lg bg-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-fuchsia-400 hover:shadow-fuchsia-500/30"
        >
          Email
        </a>
        <a
          href={profile.linkedInUrl}
          target="_blank"
          rel="noreferrer"
          className="minimal-btn rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:text-cyan-200"
        >
          LinkedIn
        </a>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="minimal-btn rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:text-cyan-200"
        >
          GitHub
        </a>
        <a
          href={profile.cvUrl}
          download
          className="minimal-btn rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:text-cyan-200"
        >
          Download CV
        </a>
      </div>
    </section>
  )
}

export default HeroSection
