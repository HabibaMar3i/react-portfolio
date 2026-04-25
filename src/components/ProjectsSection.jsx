import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection({ projects }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        description="Selected projects with GitHub links and full tools stack."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
