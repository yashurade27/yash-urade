import { skills, competencies } from "@/data/portfolio";
import { DiReact, DiJavascript, DiPython, DiNodejs, DiJava } from "react-icons/di";
import { SiNextdotjs, SiTypescript, SiDocker, SiTailwindcss, SiPostgresql, SiFirebase, SiSolidity } from "react-icons/si";

const skillIcons: Record<string, any> = {
  JavaScript: DiJavascript, TypeScript: SiTypescript, React: DiReact, "Next.js": SiNextdotjs,
  "Node.js": DiNodejs, Python: DiPython, "C++": DiPython, Solidity: SiSolidity,
  PostgreSQL: SiPostgresql, "Tailwind CSS": SiTailwindcss, Firebase: SiFirebase, Docker: SiDocker,
};

export const metadata = { title: "Skills | Yash Urade" };
export default function Skills() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <section className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <span className="material-symbols-outlined">campaign</span>
            <h3 className="title-sm">Digital Expertise & Services</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {competencies.map((comp: string, i: number) => (
              <div key={i} className="bg-surface border border-border-subtle px-4 py-3 rounded-[4px] flex items-center gap-3">
                <span className="material-symbols-outlined text-accent">check_circle</span>
                <span className="body-sm font-medium text-primary">{comp}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-6 text-primary mt-12">
            <span className="material-symbols-outlined">build</span>
            <h3 className="title-sm">Technical Arsenal</h3>
          </div>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="label-caps text-primary mb-3 capitalize">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {(items as string[]).map(skill => {
                    const Icon = skillIcons[skill];
                    return (
                      <div key={skill} className="flex items-center gap-1.5 bg-surface border border-border-subtle px-3 py-1.5 rounded-[4px] body-sm group hover:border-secondary transition-colors">
                        {Icon && <Icon className="text-secondary group-hover:text-primary text-lg" />}
                        <span>{skill}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}