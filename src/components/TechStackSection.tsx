"use client";

import { Cpu, Database, GitBranch, Shield, Zap, Layout } from "lucide-react";

export default function TechStackSection() {
  const technologies = [
    {
      name: "C#",
      category: "Language",
      description: "Strongly-typed language used for building enterprise-grade backend services and robust application structures.",
      icon: Cpu,
      color: "from-brand-emerald/20 to-brand-emerald/5",
      borderColor: "hover:border-brand-emerald/50",
      textColor: "text-brand-emerald",
      badgeBg: "bg-brand-emerald/10 text-brand-emerald",
    },
    {
      name: ".NET",
      category: "Framework",
      description: "Cross-platform ecosystem (.NET Core/6/8/10) for building high-performance APIs, microservices, and backend logic.",
      icon: Shield,
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "hover:border-purple-500/50",
      textColor: "text-purple-400",
      badgeBg: "bg-purple-500/10 text-purple-400",
    },
    {
      name: "SQL Server",
      category: "Database",
      description: "Enterprise relational database. Proficient in query optimization, indexing strategies, views, triggers, and store procedures.",
      icon: Database,
      color: "from-blue-500/20 to-blue-500/5",
      borderColor: "hover:border-blue-500/50",
      textColor: "text-blue-400",
      badgeBg: "bg-blue-500/10 text-blue-400",
    },
    {
      name: "Go (Golang)",
      category: "Language",
      description: "Compiled language used for writing concurrent microservices, high-throughput network routines, and utilities.",
      icon: Zap,
      color: "from-brand-cyan/20 to-brand-cyan/5",
      borderColor: "hover:border-brand-cyan/50",
      textColor: "text-brand-cyan",
      badgeBg: "bg-brand-cyan/10 text-brand-cyan",
    },
    {
      name: "Git",
      category: "Version Control",
      description: "Distributed version control for source code management, branching strategy compliance, and pull request collaborations.",
      icon: GitBranch,
      color: "from-orange-500/20 to-orange-500/5",
      borderColor: "hover:border-orange-500/50",
      textColor: "text-orange-400",
      badgeBg: "bg-orange-500/10 text-orange-400",
    },
    {
      name: "Postman",
      category: "API Testing",
      description: "Comprehensive suite for testing RESTful services, mock endpoints, and validating API contract responses.",
      icon: Layout,
      color: "from-amber-500/20 to-amber-500/5",
      borderColor: "hover:border-amber-500/50",
      textColor: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400",
    },
  ];

  return (
    <section id="tech-stack" className="py-24 bg-zinc-950/40 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-emerald/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-brand-emerald uppercase">
            {"// Technical Skillset"}
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Architecting Robust & Scalable Backends
          </p>
          <p className="text-zinc-400 text-sm sm:text-base">
            I specialize in Microsoft enterprise technologies alongside modern high-concurrency tooling. Here is my core toolkit for building high-performance backend systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className={`group p-6 rounded-xl border border-zinc-800 bg-gradient-to-br ${tech.color} hover:bg-zinc-900/40 transition-all duration-300 ${tech.borderColor} hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 ${tech.textColor} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-semibold font-mono tracking-wider uppercase px-2.5 py-1 rounded-full ${tech.badgeBg}`}>
                    {tech.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
