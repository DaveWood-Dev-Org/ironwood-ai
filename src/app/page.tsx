import Link from "next/link";

const services = [
  {
    icon: "🧠",
    title: "AI Strategy & Roadmap",
    description: "Transform your business with a clear AI strategy. We assess your landscape, identify high-impact opportunities, and build a phased roadmap to AI maturity.",
  },
  {
    icon: "🤖",
    title: "Agent Platform Development",
    description: "Custom AI agent platforms that actually work in production. Multi-agent orchestration, tool integration, MCP servers, and enterprise-grade identity & auth.",
  },
  {
    icon: "☁️",
    title: "Cloud & AI Architecture",
    description: "Azure-native architecture for AI workloads. From Cosmos DB to Azure AI Foundry, we design infrastructure that scales with your ambition.",
  },
  {
    icon: "⚡",
    title: "Rapid AI App Development",
    description: "Full-stack AI applications built and deployed in days, not months. E-commerce, SaaS platforms, IoT solutions — all with AI baked in from day one.",
  },
  {
    icon: "🔐",
    title: "AI Security & Governance",
    description: "RBAC, audit trails, agent identity management, and compliance frameworks. Because AI without guardrails isn't enterprise-ready.",
  },
  {
    icon: "📊",
    title: "Data & Intelligence",
    description: "Turn your data into decisions. Custom analytics, AI-powered insights, and intelligent automation that learns from your business.",
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "3", label: "Apps Built Today" },
  { value: "∞", label: "Possibilities" },
];

const caseStudies = [
  {
    title: "Mission Control",
    category: "AI Agent Platform",
    description: "Enterprise control plane for AI agent orchestration. RBAC, audit logging, multi-tenant data planes, and real-time agent management across healthcare domains.",
    tech: [".NET 10", "Azure", "Cosmos DB", "Next.js"],
  },
  {
    title: "Praxis of Medicine",
    category: "Healthcare AI",
    description: "AI-powered clinical intelligence platform for healthcare organizations. Automated compliance monitoring, provider analytics, and intelligent workflow orchestration.",
    tech: [".NET 10", "Azure AI", "Cosmos DB", "Healthcare APIs"],
  },
  {
    title: "Self-Guided Tour Platform",
    category: "IoT + AI Platform",
    description: "Smart lock integration, SMS verification, rotating PIN codes, and automated scheduling for self-guided home tours.",
    tech: ["Next.js", "Azure", "SMS API", "Smart Locks"],
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c0c0c]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/5 to-violet-500/5 blur-3xl" />

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#262626] bg-[#141414] text-xs text-[#737373] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now accepting projects for Q2 2026
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Build the future with<br />
            <span className="gradient-text">intelligent systems</span>
          </h1>

          <p className="text-lg md:text-xl text-[#737373] max-w-2xl mx-auto mb-10 leading-relaxed">
            Ironwood AI turns complex AI capabilities into production-ready platforms.
            25 years of enterprise architecture expertise applied to the AI frontier.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg">
              Start a Project
            </Link>
            <Link href="/case-studies" className="px-8 py-4 border border-[#262626] text-white font-semibold rounded-lg hover:bg-[#141414] transition-colors text-lg">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#262626] bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text">{s.value}</p>
                <p className="text-xs text-[#737373] mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="bg-[#141414] rounded-xl p-8 border border-[#262626] hover:border-cyan-500/30 transition-all hover:glow group">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:gradient-text transition-all">{s.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 px-4 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-bold">Recent Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map(cs => (
              <div key={cs.title} className="bg-[#0c0c0c] rounded-xl p-8 border border-[#262626] hover:border-violet-500/30 transition-all group">
                <p className="text-xs text-violet-400 uppercase tracking-wider mb-3">{cs.category}</p>
                <h3 className="text-xl font-bold text-white mb-3">{cs.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed mb-4">{cs.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-[#1c1c1c] text-[#525252] rounded-full border border-[#262626]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">Our Approach</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Built Different</h2>
          <p className="text-[#737373] leading-relaxed mb-12">
            Most AI consultancies sell PowerPoints. We ship production code.
            Every engagement ends with working software — deployed, tested, and ready for users.
            That&apos;s the Ironwood difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl border border-[#262626] bg-[#141414]">
              <p className="text-2xl font-bold text-cyan-400 mb-2">01</p>
              <h3 className="font-bold text-white mb-2">Understand</h3>
              <p className="text-sm text-[#737373]">Deep dive into your business, tech stack, and goals. No generic templates.</p>
            </div>
            <div className="p-6 rounded-xl border border-[#262626] bg-[#141414]">
              <p className="text-2xl font-bold text-violet-400 mb-2">02</p>
              <h3 className="font-bold text-white mb-2">Build</h3>
              <p className="text-sm text-[#737373]">Rapid development with daily progress. You see working code, not slides.</p>
            </div>
            <div className="p-6 rounded-xl border border-[#262626] bg-[#141414]">
              <p className="text-2xl font-bold text-purple-400 mb-2">03</p>
              <h3 className="font-bold text-white mb-2">Deploy</h3>
              <p className="text-sm text-[#737373]">Production-ready. Cloud-deployed. CI/CD from day one. Your AI is live.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-2xl p-12 border border-[#262626] glow">
            <h2 className="text-3xl font-bold mb-4">Ready to build something?</h2>
            <p className="text-[#737373] mb-8 max-w-md mx-auto">
              Whether it&apos;s an AI agent platform, a smart application, or a complete digital transformation — let&apos;s talk.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
