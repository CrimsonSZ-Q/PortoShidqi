"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracker for active styling
      const sections = ["hero", "tech-stack", "projects", "experience", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#hero", id: "hero" },
    { name: "Tech Stack", href: "#tech-stack", id: "tech-stack" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group font-mono text-zinc-100 font-bold text-lg tracking-wider"
          >
            <Terminal className="w-5 h-5 text-brand-emerald group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-zinc-100 group-hover:text-brand-emerald transition-colors">
              SRR<span className="text-brand-cyan">.dev</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-mono text-sm tracking-wide transition-all duration-300 relative py-1 hover:text-brand-emerald ${
                  activeSection === link.id ? "text-brand-emerald" : "text-zinc-400"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-emerald rounded-full" />
                )}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg font-mono text-xs font-semibold text-zinc-950 bg-brand-emerald hover:bg-brand-emerald/90 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-[1.02]"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-zinc-100 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible py-6" : "opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block font-mono text-sm py-2 hover:text-brand-emerald transition-colors ${
                activeSection === link.id ? "text-brand-emerald" : "text-zinc-400"
              }`}
            >
              &gt; {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-2.5 rounded-lg font-mono text-xs font-semibold text-zinc-950 bg-brand-emerald hover:bg-brand-emerald/90 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
