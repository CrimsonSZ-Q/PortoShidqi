"use client";

import { FileText, ArrowRight, Code } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-950"
    >
      {/* Decorative Orbs & Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm text-brand-emerald text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
              Available for Backend Opportunities
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald to-brand-cyan">Shidqi Ramadhandy Rizqulloh</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-300">
                .NET & Backend Developer Specializing in Enterprise Systems
              </h2>
            </div>

            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              With a solid background in <span className="text-zinc-200">Electrical Engineering</span>, I transitioned into enterprise backend engineering to build robust, high-performance web systems. I combine analytical hardware thinking with modular software design to write clean, scalable APIs, optimize complex database operations, and manage enterprise data integration pipelines.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold font-mono text-zinc-950 bg-brand-emerald hover:bg-brand-emerald/90 transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold font-mono text-zinc-300 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                Download CV
              </a>
            </div>
          </div>

          {/* Code/Terminal Mockup */}
          <div className="lg:col-span-5 w-full">
            <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md shadow-2xl overflow-hidden font-mono text-xs text-zinc-400">
              {/* Window Controls */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800/80">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <span className="text-zinc-500 text-[10px] tracking-wider uppercase font-semibold">developer.cs</span>
                <Code className="w-3.5 h-3.5 text-zinc-500" />
              </div>

              {/* Code Area */}
              <div className="p-5 space-y-4 overflow-x-auto">
                <div>
                  <span className="text-brand-purple">using</span> <span className="text-zinc-200">System;</span>
                  <br />
                  <span className="text-brand-purple">using</span> <span className="text-zinc-200">System.Threading.Tasks;</span>
                </div>

                <div>
                  <span className="text-brand-purple">namespace</span> <span className="text-brand-cyan">ShidqiPorto</span>
                  <br />
                  <span className="text-zinc-300">{"{"}</span>
                </div>

                <div className="pl-4">
                  <span className="text-brand-purple">public class</span> <span className="text-yellow-400">DeveloperInfo</span>
                  <br />
                  <span className="text-zinc-300">{"{"}</span>
                  <div className="pl-4 space-y-1">
                    <p>
                      <span className="text-brand-purple">public string</span> Name = <span className="text-brand-emerald">&quot;Shidqi Ramadhandy Rizqulloh&quot;</span>;
                    </p>
                    <p>
                      <span className="text-brand-purple">public string[]</span> Role = <span className="text-brand-cyan">new</span>[] <span className="text-zinc-300">{"{"}</span> <span className="text-brand-emerald">&quot;.NET&quot;</span>, <span className="text-brand-emerald">&quot;Backend&quot;</span> <span className="text-zinc-300">{"}"}</span>;
                    </p>
                    <p>
                      <span className="text-brand-purple">public string</span> Degree = <span className="text-brand-emerald">&quot;Electrical Engineering&quot;</span>;
                    </p>
                    <p>
                      <span className="text-brand-purple">public double</span> GPA = <span className="text-yellow-500">3.70</span>;
                    </p>
                  </div>
                  <span className="text-zinc-300">{"}"}</span>
                </div>

                <div className="pl-4">
                  <span className="text-brand-purple">public async Task</span> <span className="text-yellow-400">Main</span>()
                  <br />
                  <span className="text-zinc-300">{"{"}</span>
                  <div className="pl-4">
                    <span className="text-brand-purple">await</span> Console.Out.WriteLineAsync(<span className="text-brand-emerald">&quot;Deploying robust systems...&quot;</span>);
                  </div>
                  <span className="text-zinc-300">{"}"}</span>
                </div>

                <div>
                  <span className="text-zinc-300">{"}"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
