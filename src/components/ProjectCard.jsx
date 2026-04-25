function ProjectCard({ project, index = 0 }) {
  return (
    <article
      className="reveal reveal-stagger hover-lift group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-fuchsia-300/40 hover:shadow-xl hover:shadow-fuchsia-500/10"
      style={{ '--reveal-delay': `${index * 90}ms` }}
    >
      <div className="animated-gradient relative h-44 w-full overflow-hidden border-b border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/10 to-cyan-400/20">
        <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs font-medium uppercase tracking-[0.25em] text-slate-300/80 transition duration-300 group-hover:text-white">
            Project Preview
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{project.type}</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="chip-fade-in rounded-md border border-cyan-300/20 bg-cyan-300/5 px-2.5 py-1 text-xs text-cyan-100 transition duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/15"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5 text-sm">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-glow rounded-md bg-fuchsia-500 px-3 py-1.5 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-fuchsia-400 hover:shadow-lg hover:shadow-fuchsia-500/30"
            >
              View Project
            </a>
          ) : null}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/20 px-3 py-1.5 font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:text-cyan-200"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
