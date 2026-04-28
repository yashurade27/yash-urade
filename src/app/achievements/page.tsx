import { achievements } from "@/data/portfolio";
export const metadata = { title: "Achievements | Yash Urade" };
export default function Achievements() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-6">
        <section className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <span className="material-symbols-outlined">emoji_events</span>
            <h3 className="title-sm">Achievements & Certifications</h3>
          </div>
          <ul className="space-y-6">
            {achievements.map((ach, i) => (
              <li key={i} className="body-sm text-secondary flex flex-col items-start gap-1 p-4 bg-surface rounded-[8px] border border-border-subtle">
                <span className="font-medium text-primary flex items-start gap-2">
                  <span className="text-accent mt-0.5">▹</span> 
                  {ach.title}
                </span>
                <span className="ml-[22px] text-secondary mt-2">{ach.description}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}