import { personalInfo } from "@/data/portfolio";
export const metadata = { title: "About | Yash Urade" };
export default function About() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <section className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 lg:p-8">
          <h3 className="title-sm text-primary mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined">person</span> About Me
          </h3>
          <p className="body-md max-w-3xl leading-relaxed text-secondary">{personalInfo.about}</p>
        </section>
      </div>
    </div>
  );
}