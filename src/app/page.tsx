"use client";
import { useState } from "react";
import { personalInfo, projects, skills, education, leadership, achievements } from "@/data/portfolio";
import { DiReact, DiJavascript, DiPython, DiNodejs, DiJava } from "react-icons/di";
import { SiNextdotjs, SiTypescript, SiDocker, SiTailwindcss, SiPostgresql, SiFirebase, SiSolidity } from "react-icons/si";

const skillIcons: Record<string, any> = {
  JavaScript: DiJavascript,
  TypeScript: SiTypescript,
  React: DiReact,
  "Next.js": SiNextdotjs,
  "Node.js": DiNodejs,
  Python: DiPython,
  "C++": DiPython, 
  Solidity: SiSolidity,
  PostgreSQL: SiPostgresql,
  "Tailwind CSS": SiTailwindcss,
  Firebase: SiFirebase,
  Docker: SiDocker,
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("About Me");

  const tabs = ["About Me", "Skills", "Projects", "Education", "Achievements / Certifications", "Resume Section"];

  return (
    <div className="min-h-screen bg-surface text-secondary p-4 md:p-8 lg:p-12 font-sans selection:bg-accent selection:text-surface">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Contact info remains top level / Hero */}
        <section className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 sm:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="display-lg text-primary mb-2">{personalInfo.name}</h1>
            <h2 className="headline-md text-secondary mb-4">{personalInfo.title}</h2>
            <p className="body-md max-w-2xl mb-6">{personalInfo.about}</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href={"mailto:" + personalInfo.email} className="px-5 py-2.5 bg-primary text-surface border border-border-subtle rounded-[8px] body-sm font-medium hover:bg-secondary transition-colors">
                Contact Me
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-transparent border border-border-subtle text-primary rounded-[8px] body-sm hover:bg-border-subtle transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">code</span> GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-transparent border border-border-subtle text-primary rounded-[8px] body-sm hover:bg-border-subtle transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">link</span> LinkedIn
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-transparent border border-border-subtle text-primary rounded-[8px] body-sm hover:bg-border-subtle transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">description</span> Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Top Navigation / Tabs */}
        <nav className="flex flex-wrap gap-2 md:gap-3 border-b border-border-subtle pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-[6px] body-sm font-medium transition-all ${
                activeTab === tab 
                  ? "bg-surface-elevated text-primary border border-border-subtle" 
                  : "text-secondary hover:text-primary hover:bg-surface-raised border border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Tab Content Rendering */}
        <div className="animate-in fade-in duration-500">
          
          {activeTab === "About Me" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <span className="material-symbols-outlined">rocket_launch</span>
                  <h3 className="title-sm">Overview</h3>
                </div>
                <p className="body-sm text-secondary">
                  I am a passionate developer focusing on Full-Stack, Web3, and highly polished scalable architectures. Welcome to my portfolio! Browse the tabs above to explore my work experience, project demos, technical skills, and certifications.
                </p>
              </section>
              
              <section className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                  <h3 className="title-sm">Current Status</h3>
                </div>
                <ul className="space-y-4 body-sm text-secondary">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent text-[18px]">school</span> Studying at {education[0]?.institution}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent text-[18px]">integration_instructions</span> Building decentralized applications & robust backends
                  </li>
                </ul>
              </section>
            </div>
          )}

          {activeTab === "Skills" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <section key={category} className="bg-surface-raised border border-border-subtle rounded-[8px] p-6">
                  <div className="flex items-center gap-2 mb-6 text-primary">
                    <span className="material-symbols-outlined">laptop_mac</span>
                    <h3 className="title-sm capitalize">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(items) && items.map(skill => {
                      const Icon = skillIcons[skill];
                      return (
                        <div key={skill} className="flex items-center gap-1.5 bg-surface border border-border-subtle px-3 py-1.5 rounded-[4px] body-sm group hover:border-secondary transition-colors">
                          {Icon && <Icon className="text-secondary group-hover:text-primary text-lg" />}
                          <span>{skill}</span>
                        </div>
                      )
                    })}
                  </div>
                </section>
              ))}
            </div>
          )}

          {activeTab === "Projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <div key={i} className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 hover:border-accent transition-colors flex flex-col h-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <h4 className="title-sm text-primary">{project.title}</h4>
                    <span className="label-caps px-2 py-1 bg-surface-elevated text-secondary rounded-[4px] border border-border-subtle self-start">{project.status}</span>
                  </div>
                  <div className="body-sm text-secondary mb-6 flex-1 space-y-2">
                    {Array.isArray(project.description) ? project.description.map((desc: string, x: number) => <p key={x}>• {desc}</p>) : <p>{project.description}</p>}
                  </div>
                  <div className="mt-auto pt-6 border-t border-border-subtle">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech: string) => (
                        <span key={tech} className="label-caps px-2 py-1 bg-surface text-secondary rounded-[4px] border border-border-subtle">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                       <a href={project.link} target="_blank" rel="noopener noreferrer" className="body-sm text-accent hover:text-primary transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">code</span> GitHub Repo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Education" && (
            <div className="grid grid-cols-1 gap-6 max-w-4xl">
              {education.map((edu, i) => (
                <section key={i} className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 lg:p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                    <div>
                      <h4 className="title-sm text-primary">{edu.degree}</h4>
                      <p className="body-md text-secondary mt-1">{edu.institution}</p>
                    </div>
                    <span className="label-caps text-secondary bg-surface-elevated px-3 py-1 rounded-[4px] border border-border-subtle self-start">{edu.duration}</span>
                  </div>
                  <p className="text-secondary body-sm bg-surface p-4 rounded-[6px] border border-border-subtle mt-4">
                    {edu.details}
                  </p>
                </section>
              ))}
            </div>
          )}

          {activeTab === "Achievements / Certifications" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-6 text-primary">
                  <span className="material-symbols-outlined">emoji_events</span>
                  <h3 className="title-sm">Awards & Competitions</h3>
                </div>
                <ul className="space-y-6">
                  {achievements.map((ach, i) => (
                    <li key={i} className="bg-surface border border-border-subtle rounded-[6px] p-5">
                      <div className="flex justify-between items-start mb-2 gap-4">
                        <span className="font-medium text-primary flex items-start gap-2">
                          <span className="material-symbols-outlined text-accent text-[18px] mt-0.5">military_tech</span> {ach.title}
                        </span>
                      </div>
                      <span className="body-sm text-secondary block pl-7">
                        {ach.description}
                      </span>
                      {ach.date && (
                        <span className="label-caps text-secondary bg-surface-elevated border border-border-subtle px-2 py-1 rounded-[4px] mt-4 inline-block ml-7">
                          {ach.date}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-6 text-primary">
                  <span className="material-symbols-outlined">workspace_premium</span>
                  <h3 className="title-sm">Leadership & Roles</h3>
                </div>
                <ul className="space-y-6">
                  {leadership.map((item, i) => (
                    <li key={i} className="bg-surface border border-border-subtle rounded-[6px] p-5 relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-border-subtle"></div>
                      <h4 className="body-md font-medium text-primary mb-1">{item.role}</h4>
                      <p className="body-sm text-secondary mb-3">{item.organization}</p>
                      <p className="body-sm text-secondary mb-4 italic">{item.description}</p>
                      <span className="label-caps text-secondary bg-surface-elevated border border-border-subtle px-2 py-1 rounded-[4px]">
                        {item.duration}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          )}

          {activeTab === "Resume Section" && (
            <div className="bg-surface-raised border border-border-subtle rounded-[8px] p-6 lg:p-10 max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-border-subtle pb-6 gap-4">
                <div>
                  <h2 className="display-lg text-primary">{personalInfo.name}</h2>
                  <p className="body-md text-secondary mt-2">{personalInfo.title}</p>
                  <p className="body-sm text-secondary mt-1">{personalInfo.email} • {personalInfo.phone}</p>
                </div>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-primary text-surface rounded-[8px] body-sm font-medium hover:bg-secondary inline-block">
                  View Full CV / LinkedIn
                </a>
              </div>
              
              <div className="space-y-10">
                <div>
                  <h3 className="title-sm text-primary border-b border-border-subtle pb-2 mb-6 uppercase tracking-wider text-[14px]">Experience & Leadership</h3>
                  <div className="space-y-8">
                    {leadership.map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <div className="sm:w-1/4 shrink-0">
                          <span className="label-caps text-secondary">{item.duration}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="body-md font-medium text-primary">{item.role}</h4>
                          <p className="body-sm text-secondary mb-2">{item.organization}</p>
                          <p className="body-sm text-secondary">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="title-sm text-primary border-b border-border-subtle pb-2 mb-6 uppercase tracking-wider text-[14px]">Key Projects Summary</h3>
                  <div className="space-y-8">
                    {projects.slice(0, 3).map((project, i) => (
                      <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <div className="sm:w-1/4 shrink-0">
                          <span className="label-caps text-secondary">{project.status}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="body-md font-medium text-primary flex items-center gap-2">
                            {project.title} 
                            <a href={project.link} className="text-secondary hover:text-primary"><span className="material-symbols-outlined text-[14px]">link</span></a>
                          </h4>
                          <p className="body-sm text-secondary mb-2">
                            {Array.isArray(project.description) ? project.description[0] : project.description}
                          </p>
                          <p className="text-xs text-secondary/70">
                            <strong>Tech:</strong> {project.tech.join(", ")}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="title-sm text-primary border-b border-border-subtle pb-2 mb-6 uppercase tracking-wider text-[14px]">Education Summary</h3>
                  <div className="space-y-6">
                    {education.map((edu, i) => (
                      <div key={i} className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <div className="sm:w-1/4 shrink-0">
                          <span className="label-caps text-secondary">{edu.duration}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="body-md font-medium text-primary">{edu.degree}</h4>
                          <p className="body-sm text-secondary">{edu.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}