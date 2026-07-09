"use client";

import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      type: "work",
      title: ".NET Developer",
      company: "PT Astra International Tbk",
      period: "2023 - Present",
      description: "Driving engineering excellence in enterprise backend modules, API integration structures, and enterprise database systems.",
      details: [
        "Architected and optimized secure RESTful APIs using ASP.NET Core supporting concurrent internal services.",
        "Refactored heavy SSIS data packages, cutting ETL data synchronization window down by over 60% using stored procedure optimization.",
        "Designed relational database schemas, tables, indexes, and optimized query execution paths inside SQL Server.",
        "Participated in agile ceremonies, code reviews, and managed CI/CD deployment routines.",
      ],
      icon: Briefcase,
      color: "border-brand-emerald text-brand-emerald bg-brand-emerald/10",
    },
    {
      type: "work",
      title: "UI/UX Designer (Internship MSIB)",
      company: "Skilvul",
      period: "2021",
      description: "Bridging the gap between user psychology and engineering capabilities by designing fluid user workflows and wireframe prototypes.",
      details: [
        "Conducted user interviews and analyzed metrics to map journey paths and simplify dashboard complexity.",
        "Created high-fidelity interactive wireframes and visual design layouts.",
        "Collaborated closely with engineering developers to ensure CSS style matching and design system parity.",
      ],
      icon: Briefcase,
      color: "border-purple-500 text-purple-400 bg-purple-500/10",
    },
    {
      type: "education",
      title: "Bachelor of Electrical Engineering",
      company: "University of Singaperbangsa Karawang",
      period: "2018 - 2022",
      description: "Graduated with honors. Developed a strong analytical core, math foundation, and electrical systems logic that seamlessly translates into digital system modeling.",
      details: [
        "Acquired high honors with a cumulative GPA of 3.70 / 4.00.",
        "Specialized in control systems engineering, embedded programming, and signal logic analysis.",
        "Thesis: Built an automated microcontroller telemetry system communicating over server protocols.",
      ],
      icon: GraduationCap,
      color: "border-brand-cyan text-brand-cyan bg-brand-cyan/10",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-zinc-950/40 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-brand-emerald uppercase">
            {"// Qualifications & Career"}
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Experience & Credentials
          </p>
          <p className="text-zinc-400 text-sm sm:text-base">
            Tracing my professional journey from an analytical engineering background to enterprise backend development.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div key={index} className="relative pl-8 sm:pl-10 group">
                {/* Timeline Dot Icon */}
                <div className={`absolute -left-[19px] top-1.5 p-2 rounded-full border-2 ${exp.color} group-hover:scale-115 transition-transform duration-300 z-10`}>
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Content Card */}
                <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-900/10 group-hover:bg-zinc-900/30 group-hover:border-zinc-700/60 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-mono font-semibold tracking-wider text-brand-emerald uppercase px-2 py-0.5 rounded bg-brand-emerald/10">
                        {exp.title}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-2">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-zinc-500 font-mono text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-zinc-450 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Bullet Details */}
                  <ul className="space-y-2">
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-zinc-400 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-zinc-650 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
