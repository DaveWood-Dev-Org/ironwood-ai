import Link from "next/link";

const caseStudies = [
  {
    title: "Mission Control",
    category: "AI Agent Platform",
    challenge: "An enterprise needed a centralized platform to manage AI agents across multiple healthcare domains. Each domain needed independent deployment with shared identity, RBAC, and audit infrastructure — a true control plane for AI operations.",
    solution: "Built a full control plane / data plane architecture. The control plane manages RBAC (5 built-in roles), audit logging, agent registry, and data plane orchestration. Data planes run independently with their own APIs, connected via an HttpPlatformClient pattern. Both deployed to Azure with separate CI/CD pipelines.",
    results: [
      "6-project .NET 10 monorepo with clean separation",
      "5 RBAC roles with real-time authorization",
      "Audit middleware capturing every API call",
      "Independent deployment: control plane + N data planes",
      "Next.js dashboard with full platform management",
      "Cosmos DB persistence with cross-subscription access",
    ],
    tech: [".NET 10", "Azure App Service", "Cosmos DB", "Next.js", "GitHub Actions"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Praxis of Medicine",
    category: "Healthcare AI",
    challenge: "Healthcare organizations struggle with clinical compliance, provider performance tracking, and operational inefficiency. They needed an AI-powered platform that could monitor, analyze, and optimize clinical workflows at scale — while meeting strict regulatory requirements.",
    solution: "Designed and built an intelligent clinical platform leveraging Azure AI services, real-time data pipelines, and automated compliance engines. The system integrates with existing EHR systems, provides AI-driven analytics for provider performance, and automates compliance reporting with full audit trails.",
    results: [
      "AI-powered clinical compliance monitoring",
      "Real-time provider analytics dashboard",
      "Automated regulatory reporting workflows",
      "EHR integration with FHIR-compliant APIs",
      "HIPAA-compliant Azure infrastructure",
      "Reduced compliance review time by 60%",
    ],
    tech: [".NET 10", "Azure AI Foundry", "Cosmos DB", "FHIR", "Healthcare APIs"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Enterprise Cloud Migration",
    category: "Cloud Architecture",
    challenge: "A multi-site healthcare organization needed to migrate legacy on-premise systems to Azure while maintaining HIPAA compliance, zero downtime, and multi-region disaster recovery — all within a tight regulatory timeline.",
    solution: "Designed a phased migration strategy with blue-green deployments, Infrastructure as Code (Terraform), and automated compliance validation. Built multi-region Azure architecture with Cosmos DB global replication, App Service deployment slots, and comprehensive monitoring with Azure Monitor and Application Insights.",
    results: [
      "Zero-downtime migration for 50+ services",
      "Multi-region DR with automatic failover",
      "HIPAA compliance validated and documented",
      "Infrastructure as Code for all resources",
      "40% cost reduction vs on-premise",
      "CI/CD pipelines for all environments",
    ],
    tech: [".NET 10", "Azure", "Terraform", "Cosmos DB", "GitHub Actions"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "MCP Authentication Framework",
    category: "Security Architecture",
    challenge: "AI agents accessing enterprise resources via MCP (Model Context Protocol) need proper identity — not shared API keys. The framework needed to support both autonomous agent operations and user-delegated actions with full audit trails.",
    solution: "Designed a three-tier auth architecture: SPN (client credentials) for autonomous reads, On-Behalf-Of flow for user-delegated writes, and a complete delete prohibition via MCP. Built a sample .NET 10 MCP server with per-tool scope enforcement (MCP.Read, MCP.Write, MCP.Execute).",
    results: [
      "Complete auth architecture document",
      "SPN vs OBO flow decision framework",
      "Per-tool scope enforcement (4 scopes)",
      "Sample C# MCP server with auth middleware",
      "Azure DevOps integration example",
      "No-delete-via-MCP security policy",
    ],
    tech: [".NET 10", "Entra ID", "MCP Protocol", "OAuth 2.0"],
    color: "from-amber-500 to-orange-500",
  },
];

export default function CaseStudies() {
  return (
    <div>
      <section className="py-24 px-4 grid-bg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Work. Real Results.</h1>
          <p className="text-lg text-[#737373]">Every project ships production code. Here&apos;s the proof.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {caseStudies.map(cs => (
            <div key={cs.title} className="bg-[#141414] rounded-2xl border border-[#262626] overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${cs.color}`} />
              <div className="p-8 md:p-10">
                <p className="text-xs text-cyan-400 uppercase tracking-wider mb-2">{cs.category}</p>
                <h2 className="text-2xl font-bold text-white mb-6">{cs.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#525252] mb-2">Challenge</h4>
                    <p className="text-sm text-[#737373] leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#525252] mb-2">Solution</h4>
                    <p className="text-sm text-[#737373] leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#525252] mb-3">Results</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {cs.results.map(r => (
                      <div key={r} className="flex gap-2 text-sm">
                        <span className="text-emerald-400 shrink-0">✓</span>
                        <span className="text-[#a3a3a3]">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cs.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-[#1c1c1c] text-[#525252] rounded-full border border-[#262626]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Your project could be next</h2>
        <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
          Let&apos;s Talk
        </Link>
      </section>
    </div>
  );
}
