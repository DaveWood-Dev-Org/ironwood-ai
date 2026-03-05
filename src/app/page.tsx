import Link from "next/link";

const services = [
  {
    icon: "🧠",
    title: "AI Strategy & Roadmap",
    slug: "strategy",
    price: "From $15K",
    description: "AI readiness assessment, competitive landscape analysis, and a phased implementation roadmap tailored to your business.",
  },
  {
    icon: "🤖",
    title: "Agent Platform Development",
    slug: "agent-platforms",
    price: "From $50K",
    description: "Production-grade multi-agent systems with orchestration, tool integration, MCP servers, RBAC, and enterprise identity.",
  },
  {
    icon: "☁️",
    title: "Cloud & AI Architecture",
    slug: "cloud",
    price: "From $25K",
    description: "Azure-native infrastructure for AI workloads. Cosmos DB, AI Foundry, networking, security, and cost optimization.",
  },
  {
    icon: "⚡",
    title: "Rapid AI App Development",
    slug: "rapid-apps",
    price: "From $10K",
    description: "Full-stack AI applications built and deployed in days. Next.js, .NET, Azure — shipped with CI/CD from day one.",
  },
  {
    icon: "🔐",
    title: "AI Security & Governance",
    slug: "security",
    price: "From $20K",
    description: "Agent identity management, RBAC, audit frameworks, MCP authentication, and compliance tooling for enterprise AI.",
  },

];

const industries = [
  { name: "Healthcare", icon: "🏥", detail: "HIPAA-compliant AI, clinical workflows, quality registries" },
  { name: "Financial Services", icon: "🏦", detail: "Risk analytics, compliance automation, fraud detection" },
  { name: "Real Estate", icon: "🏗️", detail: "Property tech, self-guided tours, lead automation" },
  { name: "Professional Services", icon: "💼", detail: "Client portals, knowledge management, AI assistants" },
];

const techStack = [
  "Azure", ".NET", "Next.js", "Cosmos DB", "TypeScript",
  "OpenAI", "Anthropic", "MCP", "Terraform", "GitHub Actions",
];

const caseStudies = [
  {
    title: "Mission Control",
    category: "AI AGENT PLATFORM",
    description: "Enterprise control plane for multi-agent orchestration. RBAC, audit logging, multi-tenant data planes, and real-time agent management.",
    tech: [".NET", "Azure", "Cosmos DB", "Next.js"],
    result: "Full platform shipped in 2 weeks",
  },
  {
    title: "QPP Quality Registry",
    category: "HEALTHCARE AI",
    description: "CMS Quality Payment Program platform with automated measure tracking, provider benchmarking, and submission workflows.",
    tech: [".NET", "Azure Functions", "Angular", "SQL Server"],
    result: "20+ API endpoints, live dashboard",
  },
  {
    title: "Enterprise Cloud Migration",
    category: "CLOUD ARCHITECTURE",
    description: "Large-scale Azure migration for healthcare systems. Multi-region deployment, HIPAA compliance, and zero-downtime cutover.",
    tech: ["Azure", "Terraform", "CI/CD", ".NET"],
    result: "150+ resources migrated",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero — Clear value prop */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c0c0c]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/5 to-violet-500/5 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#262626] bg-[#141414] text-xs text-[#737373] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Nashville-based · Accepting Q2 2026 projects
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6">
              We build <span className="gradient-text">AI systems</span> that actually work in production
            </h1>

            <p className="text-lg md:text-xl text-[#a3a3a3] max-w-xl mb-4 leading-relaxed">
              From strategy to shipped code. Agent platforms, cloud architecture, and intelligent applications — built by engineers, not slide decks.
            </p>

            <p className="text-sm text-[#525252] mb-8">
              25 years of enterprise architecture · Healthcare · Cloud · AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-center">
                Book a Free Discovery Call
              </Link>
              <Link href="#services" className="px-8 py-4 border border-[#262626] text-white font-semibold rounded-lg hover:bg-[#141414] transition-colors text-center">
                View Services & Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-[#262626] bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8 flex-wrap justify-center">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">25+</p>
                <p className="text-[10px] text-[#737373] uppercase tracking-wider mt-0.5">Years Experience</p>
              </div>
              <div className="w-px h-8 bg-[#262626] hidden md:block" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">100+</p>
                <p className="text-[10px] text-[#737373] uppercase tracking-wider mt-0.5">Projects Delivered</p>
              </div>
              <div className="w-px h-8 bg-[#262626] hidden md:block" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">Healthcare</p>
                <p className="text-[10px] text-[#737373] uppercase tracking-wider mt-0.5">Core Domain</p>
              </div>
              <div className="w-px h-8 bg-[#262626] hidden md:block" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">Azure</p>
                <p className="text-[10px] text-[#737373] uppercase tracking-wider mt-0.5">Cloud Platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — Front and Center */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Services & Pricing</h2>
            <p className="text-[#737373] max-w-lg mx-auto">Every engagement ends with working software — deployed, tested, and ready for users.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {services.map(s => (
              <Link key={s.title} href={`/services#${s.slug}`} className="block bg-[#141414] rounded-xl p-7 border border-[#262626] hover:border-cyan-500/40 transition-all hover:glow group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl">{s.icon}</span>
                  <span className="text-xs text-cyan-400 font-mono font-semibold">{s.price}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:gradient-text transition-all">{s.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed">{s.description}</p>
                <p className="text-xs text-cyan-400/60 mt-4 group-hover:text-cyan-400 transition-colors">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 px-4 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-violet-400 mb-3">Industries</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Who We Serve</h2>
            <p className="text-[#737373] max-w-lg mx-auto">Deep domain expertise where it matters most.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map(ind => (
              <div key={ind.name} className="bg-[#0c0c0c] rounded-xl p-6 border border-[#262626] hover:border-violet-500/30 transition-all text-center">
                <span className="text-3xl block mb-3">{ind.icon}</span>
                <h3 className="font-bold text-white mb-2">{ind.name}</h3>
                <p className="text-xs text-[#737373] leading-relaxed">{ind.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Founder */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">The Founder</p>
              <h2 className="text-3xl font-bold mb-6">Dave Wood</h2>
              <p className="text-[#a3a3a3] leading-relaxed mb-4">
                Senior engineer and AI architect with 25 years in enterprise software — most of it in healthcare technology. Original architect of a global Azure cloud platform for one of the Big Four consulting firms, designed to serve thousands of members worldwide. Built platforms that process millions of clinical records, manage quality registries, and orchestrate AI agents at scale.
              </p>
              <p className="text-[#a3a3a3] leading-relaxed mb-6">
                Ironwood AI exists because most &quot;AI consultancies&quot; sell strategy decks and never ship code. We&apos;re the opposite: architects who build, engineers who deploy, and consultants who stay until it&apos;s in production.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs px-3 py-1.5 bg-[#141414] text-[#737373] rounded-full border border-[#262626]">Azure Architect</span>
                <span className="text-xs px-3 py-1.5 bg-[#141414] text-[#737373] rounded-full border border-[#262626]">.NET Expert</span>
                <span className="text-xs px-3 py-1.5 bg-[#141414] text-[#737373] rounded-full border border-[#262626]">AI/ML Systems</span>
                <span className="text-xs px-3 py-1.5 bg-[#141414] text-[#737373] rounded-full border border-[#262626]">Healthcare IT</span>
                <span className="text-xs px-3 py-1.5 bg-[#141414] text-[#737373] rounded-full border border-[#262626]">HIPAA</span>
              </div>
            </div>
            <div className="bg-[#141414] rounded-2xl p-8 border border-[#262626]">
              <h3 className="text-sm font-bold text-[#737373] uppercase tracking-wider mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map(t => (
                  <span key={t} className="px-4 py-2 bg-[#0c0c0c] text-sm text-white rounded-lg border border-[#262626] hover:border-cyan-500/30 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-[#262626]">
                <p className="text-xs text-[#525252] uppercase tracking-wider mb-3">Based in</p>
                <p className="text-white font-semibold">Nashville, Tennessee</p>
                <p className="text-xs text-[#737373] mt-1">Serving clients nationwide · Remote-first</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-20 px-4 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">Our Work</p>
              <h2 className="text-3xl md:text-4xl font-bold">Recent Projects</h2>
            </div>
            <Link href="/case-studies" className="hidden md:block text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
              View all case studies →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudies.map(cs => (
              <Link key={cs.title} href="/case-studies" className="block bg-[#0c0c0c] rounded-xl p-7 border border-[#262626] hover:border-violet-500/30 transition-all group">
                <p className="text-[10px] text-violet-400 uppercase tracking-wider font-semibold mb-3">{cs.category}</p>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all">{cs.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed mb-4">{cs.description}</p>
                <p className="text-xs text-emerald-400 font-semibold mb-3">→ {cs.result}</p>
                <div className="flex flex-wrap gap-2">
                  {cs.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 bg-[#1c1c1c] text-[#525252] rounded-full border border-[#262626]">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="md:hidden text-center mt-6">
            <Link href="/case-studies" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
              View all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">How We Work</h2>
            <p className="text-[#737373]">No fluff. No months of &quot;discovery.&quot; We move fast and ship.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { n: "01", title: "Discovery Call", desc: "30-minute call to understand your goals, constraints, and timeline. Free, no commitment.", color: "text-cyan-400" },
              { n: "02", title: "Scope & Proposal", desc: "Clear scope, fixed price, defined deliverables. You know exactly what you're getting.", color: "text-violet-400" },
              { n: "03", title: "Build & Ship", desc: "Daily progress, working demos, real code in real environments. You see everything.", color: "text-purple-400" },
              { n: "04", title: "Deploy & Support", desc: "Production deployment with CI/CD, documentation, and 30 days of support included.", color: "text-emerald-400" },
            ].map(step => (
              <div key={step.n} className="p-6 rounded-xl border border-[#262626] bg-[#141414] relative">
                <p className={`text-2xl font-bold ${step.color} mb-2`}>{step.n}</p>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-[#737373] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-2xl p-12 border border-[#262626] glow">
            <h2 className="text-3xl font-bold mb-3">Let&apos;s build something real</h2>
            <p className="text-[#737373] mb-8 max-w-md mx-auto">
              Book a free 30-minute discovery call. We&apos;ll talk about your goals and see if we&apos;re a good fit. No pressure, no sales pitch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Book a Discovery Call
              </Link>
              <a href="mailto:davewood.assistant@gmail.com" className="px-10 py-4 border border-[#262626] text-white font-semibold rounded-lg hover:bg-[#141414] transition-colors">
                Email Us Directly
              </a>
            </div>
            <p className="text-xs text-[#525252] mt-6">davewood.assistant@gmail.com · Nashville, TN</p>
          </div>
        </div>
      </section>
    </div>
  );
}
