"use client";

import { useState } from "react";
import { Github, X, Database, Terminal, GitFork, CheckCircle, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "All" | "Web Application" | "Go";
  problem: string;
  solution: string;
  impact: string;
  architecture: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  detailsUrl?: string;
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"All" | "Web Application" | "Go">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Sobsite",
      category: "Web Application",
      problem: "Need platform for monitoring datas.",
      solution: "Create website for monitoring data and create admin interface to make it easier to monitoring datas.",
      impact: "Successfully created a platform for monitoring data and made it easier to monitoring datas.",
      architecture: "Website for monitoring data with admin interface.",
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/CrimsonSZ-Q/Sobsite",
    },
    {
      id: 2,
      title: "Shopping Cart API",
      category: "Go",
      problem: "Need logic for shopping cart in eccomerce application.",
      solution: "Create API for Shopping Cart.",
      impact: "Successfully created a API for Shopping Cart.",
      architecture: "API for Shopping Cart.",
      tags: ["Go"],
      githubUrl: "https://github.com/CrimsonSZ-Q/ShoppingCartAPI",
    },
    {
      id: 3,
      title: "Kebab Ardoga Web",
      category: "Web Application",
      problem: "Need website for selling kebab and other foods.",
      solution: "Create website for Kebab Ardoga.",
      impact: "Successfully created a website for Kebab Ardoga.",
      architecture: "Website for Kebab Ardoga.",
      tags: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/CrimsonSZ-Q/KebabArdogaWeb",
      demoUrl: "https://crimsonsz-q.github.io/KebabArdogaWeb/",
    },
    {
      id: 4,
      title: "Wedding Web",
      category: "Web Application",
      problem: "Need website for Wedding Invitation.",
      solution: "Create website for My Wedding.",
      impact: "Successfully created a website for Wedding Invitation.",
      architecture: "Website for Wedding Invitation.",
      tags: ["Node.js", "Next.JS", "CSS", "Typescript"],
      githubUrl: "https://github.com/CrimsonSZ-Q/WeddingShidqiHesti",
      demoUrl: "https://wedding-shidqi-hesti.vercel.app/invite/dGVzdA",
    },
  ];

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-mono tracking-widest text-brand-emerald uppercase">
            {"// Portfolio Showcases"}
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Backend & Data Engineering Projects
          </p>
          <p className="text-zinc-400 text-sm sm:text-base">
            A showcase of real-world backend architectures, high-performance APIs, and data integration systems I have designed and built.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {(["All", "Go", "Web Application"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-medium tracking-wide transition-all duration-300 ${filter === cat
                ? "bg-brand-emerald text-zinc-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700/80 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-[10px] uppercase">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>{project.category} project</span>
                  </div>
                  <GitFork className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-emerald transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-2 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  <p>
                    <span className="font-semibold text-zinc-300">Problem:</span> {project.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-300">Solution:</span> {project.solution}
                  </p>
                </div>
              </div>

              {/* Footer details */}
              <div className="space-y-4 pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md font-mono text-[10px] font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-zinc-800/80">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg font-mono text-xs font-semibold text-zinc-350 bg-zinc-800 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    Details
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-white transition-all font-mono text-xs"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-brand-emerald/30 hover:border-brand-emerald bg-brand-emerald/5 text-brand-emerald hover:text-white hover:bg-brand-emerald/15 transition-all font-mono text-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-zinc-850 bg-zinc-900/30 text-zinc-600 cursor-not-allowed font-mono text-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
          <div className="w-full max-w-2xl rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-brand-emerald" />
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-zinc-500 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh]">
              {/* Impact Callout */}
              <div className="p-4 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Key Architectural Impact</h4>
                  <p className="text-xs text-zinc-300 mt-1">{selectedProject.impact}</p>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-4 text-sm leading-relaxed">
                <div>
                  <h4 className="font-semibold text-zinc-300 font-mono text-xs uppercase tracking-wider mb-1.5">
                    {"// The Challenge"}
                  </h4>
                  <p className="text-zinc-400">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-300 font-mono text-xs uppercase tracking-wider mb-1.5">
                    {"// Proposed Implementation"}
                  </h4>
                  <p className="text-zinc-400">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-zinc-300 font-mono text-xs uppercase tracking-wider mb-1.5">
                    {"// Systems Architecture"}
                  </h4>
                  <p className="text-zinc-400">{selectedProject.architecture}</p>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-zinc-800/80">
                <h4 className="font-semibold text-zinc-300 font-mono text-xs uppercase tracking-wider mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md font-mono text-xs bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 bg-zinc-950/40 border-t border-zinc-800/80">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg font-mono text-xs font-medium text-zinc-400 hover:text-white"
              >
                Close Window
              </button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono text-xs font-semibold text-zinc-450 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              {selectedProject.demoUrl ? (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono text-xs font-semibold text-zinc-950 bg-brand-emerald hover:bg-brand-emerald/90 transition-colors animate-pulse"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono text-xs font-semibold border border-zinc-850 bg-zinc-900/40 text-zinc-650 cursor-not-allowed"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
