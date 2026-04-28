import { projects } from "@/data/portfolio";
export const metadata = { title: "Projects | Yash Urade" };
export default function Projects() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <section className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <span className="material-symbols-outlined">code</span>
            <h3 className="title-sm">Selected Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <div key={i} className="bg-surface border border-border-subtle rounded-[8px] p-5 hover:border-accent transition-colors flex flex-col h-full">
                <h4 className="body-md font-medium text-primary mb-2">{project.title}</h4>
                <p className="body-sm text-secondary mb-4 flex-1">
                  {Array.isArray(project.description) ? project.description[0] : project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.tech.map((tech: string) => (
                    <span key={tech} className="label-caps px-2 py-1 bg-surface-elevated text-secondary rounded-[4px]">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4 flex-wrap mt-2">
                    <span className="body-sm text-secondary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">link</span> {project.link}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}