"use client";

import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Credit */}
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
            <Terminal className="w-4 h-4 text-brand-emerald" />
            <span>
              Designed & Built by <span className="text-zinc-350">Shidqi Ramadhandy Rizqulloh</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="font-mono text-[10px] text-zinc-500 text-center">
            &copy; {year} SRR.dev. All rights reserved. Managed under C#/.NET Core framework paradigms.
          </p>
        </div>
      </div>
    </footer>
  );
}
