import { personalInfo } from "@/data/portfolio";
export const metadata = { title: "Contact | Yash Urade" };
export default function Contact() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <section className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 lg:p-8">
          <div className="flex items-center justify-center gap-2 mb-10 text-primary">
            <span className="material-symbols-outlined">mail</span>
            <h3 className="title-sm">Contact Me</h3>
          </div>
          <div className="flex flex-col gap-4 max-w-xl mx-auto">
            <a href={"mailto:" + personalInfo.email} className="px-5 py-4 bg-surface border border-border-subtle rounded-[8px] body-sm font-medium hover:border-accent text-primary transition-colors flex items-center justify-between group">
              <span className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">email</span> {personalInfo.email}</span>
              <span className="material-symbols-outlined text-secondary group-hover:text-accent">arrow_outward</span>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="px-5 py-4 bg-surface border border-border-subtle rounded-[8px] body-sm font-medium hover:border-accent text-primary transition-colors flex items-center justify-between group">
              <span className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">code</span> GitHub Profile</span>
              <span className="material-symbols-outlined text-secondary group-hover:text-accent">arrow_outward</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-5 py-4 bg-surface border border-border-subtle rounded-[8px] body-sm font-medium hover:border-accent text-primary transition-colors flex items-center justify-between group">
              <span className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary">cases</span> LinkedIn Profile</span>
              <span className="material-symbols-outlined text-secondary group-hover:text-accent">arrow_outward</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}