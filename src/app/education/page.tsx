import { education } from "@/data/portfolio";
export const metadata = { title: "Education | Yash Urade" };
export default function Education() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <section className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <span className="material-symbols-outlined">school</span>
            <h3 className="title-sm">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="border-l-2 border-border-subtle pl-4">
                <h4 className="body-md font-medium text-primary">{edu.degree}</h4>
                <p className="body-sm text-secondary py-1">{edu.institution}</p>
                <span className="label-caps text-secondary block mb-2">{edu.duration}</span>
                <p className="text-xs text-secondary/80 leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}