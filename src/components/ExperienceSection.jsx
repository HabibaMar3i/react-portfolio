import SectionHeading from './SectionHeading'

function ExperienceSection({ experiences }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
      <SectionHeading eyebrow="Career" title="Experience" />
      <div className="space-y-4">
        {experiences.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="reveal hover-lift rounded-xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-fuchsia-300/30 hover:bg-black/30"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="text-base font-semibold text-white md:text-lg">
                {item.role} - {item.company}
              </h3>
              <p className="text-sm text-slate-400 transition duration-300 hover:text-slate-300">{item.period}</p>
            </div>
            <p className="mt-1 text-sm text-slate-400">{item.location}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300">
              {item.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
