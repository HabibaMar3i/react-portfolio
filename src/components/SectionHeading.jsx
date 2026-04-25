function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="mb-5">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-300/90">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      {description ? <p className="mt-2 max-w-3xl text-sm text-slate-300 md:text-base">{description}</p> : null}
    </header>
  )
}

export default SectionHeading
