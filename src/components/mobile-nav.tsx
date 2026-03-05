"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-[#737373] hover:text-white transition-colors"
        aria-label="Menu"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-[#0c0c0c] border-b border-[#262626] p-6 space-y-4 z-50">
          <Link href="/services" onClick={() => setOpen(false)} className="block text-white text-lg font-medium py-2 hover:text-cyan-400 transition-colors">
            Services
          </Link>
          <Link href="/case-studies" onClick={() => setOpen(false)} className="block text-white text-lg font-medium py-2 hover:text-cyan-400 transition-colors">
            Case Studies
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block text-white text-lg font-medium py-2 hover:text-cyan-400 transition-colors">
            About
          </Link>
          <Link href="/insights" onClick={() => setOpen(false)} className="block text-white text-lg font-medium py-2 hover:text-cyan-400 transition-colors">
            Insights
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg text-center">
            Start a Project
          </Link>
        </div>
      )}
    </div>
  );
}
