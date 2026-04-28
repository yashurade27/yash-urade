import { resumeLink } from "@/data/portfolio";
export const metadata = { title: "Resume | Yash Urade" };
export default function Resume() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <section className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 lg:p-10 flex flex-col items-center justify-center min-h-[40vh] text-center gap-6">
          <div>
            <span className="material-symbols-outlined text-[48px] text-primary mb-4 block">description</span>
            <h3 className="title-sm text-primary mb-2">Resume Section</h3>
            <p className="body-sm text-secondary max-w-md">Download my comprehensive resume for detailed professional experience, technical stacks, and notable milestones.</p>
          </div>
          <a href={resumeLink} download className="px-6 py-3 bg-primary text-surface rounded-[8px] body-sm font-medium hover:bg-secondary transition-colors whitespace-nowrap flex items-center gap-2 mt-4 inline-flex">
            <span className="material-symbols-outlined">download</span> Download PDF
          </a>
        </section>
      </div>
    </div>
  );
}