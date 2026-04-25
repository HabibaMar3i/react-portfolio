import SectionHeading from './SectionHeading'

function SkillsSection({ skills, education }) {
  const skillGroups = [
    { key: 'core', label: 'Core', items: skills.core },
    { key: 'frameworks', label: 'Frameworks', items: skills.frameworks },
    { key: 'uiStyling', label: 'UI & Styling', items: skills.uiStyling },
    { key: 'formsValidation', label: 'Forms & Validation', items: skills.formsValidation },
    { key: 'testingQuality', label: 'Testing & Quality', items: skills.testingQuality },
    { key: 'backendIntegration', label: 'Backend Integration', items: skills.backendIntegration },
    { key: 'devOpsTooling', label: 'DevOps & Tooling', items: skills.devOpsTooling },
    { key: 'deploymentInfra', label: 'Deployment & Infra', items: skills.deploymentInfra },
    { key: 'additional', label: 'Additional', items: skills.additional },
  ]

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
      <SectionHeading eyebrow="Stack" title="Skills & Education" />
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.key} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <h3 className="mb-2 text-sm font-semibold text-cyan-200">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-fuchsia-300/20 bg-fuchsia-300/5 px-3 py-1.5 text-xs text-fuchsia-100 transition duration-300 hover:-translate-y-0.5 hover:border-fuchsia-300/60 hover:bg-fuchsia-300/15 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm leading-relaxed text-slate-300">{education}</p>
    </section>
  )
}

export default SkillsSection
