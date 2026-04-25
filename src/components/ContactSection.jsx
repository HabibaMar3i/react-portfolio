function ContactSection({ profile }) {
  return (
    <section className="reveal hover-lift rounded-3xl border border-cyan-300/20 bg-cyan-300/[0.03] p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">Let&apos;s Connect</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
        If you are hiring for frontend roles, I&apos;d love to discuss how I can contribute to your team.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="minimal-btn rounded-md bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300 hover:shadow-cyan-300/30"
        >
          Send Email
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s+/g, '')}`}
          className="minimal-btn rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:text-cyan-200"
        >
          Call {profile.phone}
        </a>
        <a
          href={profile.linkedInUrl}
          target="_blank"
          rel="noreferrer"
          className="minimal-btn rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:text-cyan-200"
        >
          Open LinkedIn
        </a>
      </div>
    </section>
  )
}

export default ContactSection
