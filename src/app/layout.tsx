import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ironwood AI | AI Consulting & Agent Platform Development",
  description: "Enterprise AI consulting, agent platform development, and intelligent automation. 25 years of architecture expertise applied to the AI frontier.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#0c0c0c]/80 backdrop-blur-xl border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                  <span className="text-black font-black text-xs">IW</span>
                </div>
                <span className="text-lg font-bold text-white tracking-tight">Ironwood <span className="gradient-text">AI</span></span>
              </Link>
              <nav className="hidden md:flex items-center gap-8">
                <Link href="/services" className="text-sm text-[#737373] hover:text-white transition-colors">Services</Link>
                <Link href="/case-studies" className="text-sm text-[#737373] hover:text-white transition-colors">Case Studies</Link>
                <Link href="/about" className="text-sm text-[#737373] hover:text-white transition-colors">About</Link>
                <Link href="/insights" className="text-sm text-[#737373] hover:text-white transition-colors">Insights</Link>
                <Link href="/contact" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Start a Project
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-[#262626] bg-[#0c0c0c] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                    <span className="text-black font-black text-xs">IW</span>
                  </div>
                  <span className="text-lg font-bold text-white">Ironwood AI</span>
                </div>
                <p className="text-sm text-[#737373] leading-relaxed max-w-sm">
                  Enterprise AI consulting and agent platform development. Building the infrastructure layer for the AI-native enterprise.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#737373] mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-[#525252]">
                  <li><Link href="/services" className="hover:text-white transition-colors">AI Strategy</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Agent Platforms</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Cloud Architecture</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Custom AI Apps</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#737373] mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-[#525252]">
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-[#1c1c1c] mt-12 pt-8 flex justify-between items-center">
              <p className="text-xs text-[#525252]">© 2026 Ironwood AI. All rights reserved.</p>
              <p className="text-xs text-[#525252]">Nashville, TN</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
