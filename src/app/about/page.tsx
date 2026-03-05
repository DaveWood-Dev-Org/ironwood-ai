import Link from "next/link";

export default function About() {
  return (
    <div>
      <section className="py-24 px-4 grid-bg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Architect Behind Ironwood</h1>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#141414] rounded-xl p-8 border border-[#262626] mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                <span className="text-black font-bold text-xl">DW</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Dave Wood</h2>
                <p className="text-sm text-cyan-400">Founder & Chief Architect</p>
              </div>
            </div>
            <div className="space-y-4 text-[#a3a3a3] leading-relaxed">
              <p>
                Dave is a Senior Engineer and AI Architect with <strong className="text-white">25 years</strong> in healthcare technology and enterprise systems. He&apos;s the original architect of a <strong className="text-white">global Azure cloud platform</strong> for one of the Big Four consulting firms, designed to serve thousands of practitioners worldwide.
              </p>
              <p>
                Before the cloud era, Dave wrote the <strong className="text-white">first physician rounding application for Pocket PC</strong> — pioneering mobile healthcare technology before smartphones existed. He&apos;s been a healthcare data architect, platform engineer, and AI innovator across every wave of technology transformation.
              </p>
              <p>
                Today, Dave builds <strong className="text-white">AI agent platforms</strong> — the infrastructure layer that lets enterprises deploy, manage, and govern AI agents at scale. His work spans multi-agent orchestration, MCP authentication, RBAC engines, and real-time compliance monitoring.
              </p>
              <p>
                Ironwood AI is the culmination of 25 years of architecture expertise applied to the most exciting frontier in technology. We don&apos;t just understand AI — we understand how enterprises actually adopt it.
              </p>
            </div>
          </div>

          {/* Expertise */}
          <h2 className="text-2xl font-bold mb-6 text-center">Deep Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              { area: "AI & Agent Systems", items: ["Multi-agent orchestration", "MCP servers & auth", "Azure AI Foundry", "LLM integration", "RAG pipelines"] },
              { area: "Cloud Architecture", items: ["Azure (25+ services)", "Cosmos DB", "App Services", "Static Web Apps", "Azure Functions"] },
              { area: "Application Development", items: [".NET / C#", "Next.js / React", "TypeScript", "Node.js", "Python"] },
              { area: "Enterprise", items: ["Healthcare systems", "HIPAA compliance", "Identity (Entra ID)", "RBAC & audit", "CI/CD pipelines"] },
            ].map(e => (
              <div key={e.area} className="bg-[#141414] rounded-xl p-6 border border-[#262626]">
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3">{e.area}</h3>
                <ul className="space-y-1.5">
                  {e.items.map(item => (
                    <li key={item} className="text-sm text-[#737373] flex gap-2">
                      <span className="text-[#525252]">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-br from-cyan-500/5 to-violet-500/5 rounded-xl p-8 border border-[#262626] text-center">
            <h2 className="text-2xl font-bold mb-4">The Ironwood Philosophy</h2>
            <p className="text-[#a3a3a3] leading-relaxed max-w-xl mx-auto mb-6">
              Ironwood is one of the hardest, most durable woods in nature. It doesn&apos;t rot. It doesn&apos;t break.
              That&apos;s how we build software — architected to last, engineered to perform, designed to endure.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div>
                <p className="text-2xl font-bold gradient-text">Ship</p>
                <p className="text-xs text-[#525252]">Code, not slides</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">Scale</p>
                <p className="text-xs text-[#525252]">Enterprise-ready</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">Endure</p>
                <p className="text-xs text-[#525252]">Built to last</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
