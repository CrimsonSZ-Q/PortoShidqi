"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, BookOpen, Copy, Check, Send } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "shidqi.ramadhandy@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shidqiramadhandyrizqulloh",
      icon: Linkedin,
      label: "Connect professionally",
      color: "hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5",
    },
    {
      name: "GitHub",
      href: "https://github.com/CrimsonSZ-Q",
      icon: Github,
      label: "Inspect source code",
      color: "hover:text-zinc-100 hover:border-zinc-700 hover:bg-zinc-800/10",
    },
    {
      name: "Medium",
      href: "https://medium.com/@shidqi.ramadhandy.r",
      icon: BookOpen,
      label: "Read technical articles",
      color: "hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-emerald/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-brand-emerald uppercase">
            {"// Establish Connection"}
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get in Touch
          </p>
          <p className="text-zinc-400 text-sm sm:text-base">
            Whether you want to discuss backend architecture, enterprise database integration, or a new project opportunity, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Contact Direct Copy Panel */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Send className="w-5 h-5 text-brand-emerald" />
                Let&apos;s Build Something Big
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                I am responsive to backend consulting work, full-time engineering roles, or tech chats. Click to copy my email address or visit my social profiles.
              </p>

              {/* Copy Email Box */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-semibold tracking-wider text-zinc-500 uppercase">
                  Primary Email
                </span>
                <div className="flex items-center justify-between p-3 rounded-lg border border-zinc-800 bg-zinc-950 font-mono text-xs sm:text-sm text-zinc-300">
                  <span className="truncate mr-2 select-all">{emailAddress}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md hover:bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-brand-emerald" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border border-zinc-800 bg-zinc-950/40 text-zinc-450 text-center transition-all duration-300 ${link.color}`}
                  >
                    <IconComponent className="w-5 h-5 mb-2" />
                    <span className="font-bold text-xs text-white mb-0.5">{link.name}</span>
                    <span className="text-[9px] text-zinc-500 hidden sm:block truncate w-full">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Terminal Email Panel */}
          <div className="lg:col-span-6">
            <div className="h-full rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md shadow-2xl overflow-hidden font-mono text-xs text-zinc-400 flex flex-col">
              {/* Window header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/80 border-b border-zinc-800/80">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <span className="text-zinc-500 text-[10px] tracking-wider uppercase font-semibold">smtp-client.sh</span>
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
              </div>

              {/* Console logs simulating contact protocol */}
              <div className="p-6 flex-1 flex flex-col justify-between min-h-[250px] leading-relaxed">
                <div className="space-y-3">
                  <p className="text-zinc-500">
                    # Establishing SMTP handshakes...
                  </p>
                  <p>
                    <span className="text-brand-emerald">$&gt;</span> telnet smtp.gmail.com 587
                  </p>
                  <p className="text-zinc-300">
                    220 mx.google.com ESMTP r81-20020a5d481b000000b00344d5c9578sm4210406wrq.64 - gsmtp
                  </p>
                  <p>
                    <span className="text-brand-emerald">$&gt;</span> EHLO shidqi.dev
                  </p>
                  <p className="text-zinc-300">
                    250-mx.google.com at your service
                    <br />
                    250-SIZE 35882577
                    <br />
                    250 STARTTLS
                  </p>
                  <p>
                    <span className="text-brand-emerald">$&gt;</span> MAIL FROM: &lt;client@example.com&gt;
                  </p>
                  <p className="text-zinc-300">250 2.1.0 OK</p>
                </div>
                <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-[10px] text-zinc-500">
                    Connection: Secured (STARTTLS)
                  </div>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded bg-brand-emerald hover:bg-brand-emerald/90 text-zinc-950 font-semibold text-xs tracking-wide transition-colors"
                  >
                    Open Mail App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
