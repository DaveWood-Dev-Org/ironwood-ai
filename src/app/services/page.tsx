import Link from "next/link";

const services = [
  {
    icon: "🧠",
    title: "AI Strategy & Roadmap",
    price: "Starting at $15,000",
    duration: "2-4 weeks",
    description: "A comprehensive assessment of your AI readiness, competitive landscape analysis, and a phased implementation roadmap tailored to your business.",
    deliverables: [
      "AI Readiness Assessment & Maturity Score",
      "Competitive AI Landscape Analysis",
      "Prioritized Use Case Identification",
      "90-Day Implementation Roadmap",
      "Technology Stack Recommendations",
      "ROI Projections & Business Case",
    ],
  },
  {
    icon: "🤖",
    title: "Agent Platform Development",
    price: "Starting at $50,000",
    duration: "4-12 weeks",
    description: "Custom AI agent platforms for enterprise. Multi-agent orchestration, tool integration, MCP servers, RBAC, audit trails, and production-grade infrastructure.",
    deliverables: [
      "Custom Control Plane Architecture",
      "Multi-Agent Orchestration Engine",
      "MCP Server Implementation",
      "Enterprise Identity & RBAC",
      "Audit Logging & Compliance",
      "Azure Cloud Deployment & CI/CD",
      "Documentation & Training",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud & AI Architecture",
    price: "Starting at $25,000",
    duration: "3-6 weeks",
    description: "Azure-native architecture designed for AI workloads. We design, build, and deploy infrastructure that's secure, scalable, and cost-effective.",
    deliverables: [
      "Architecture Design Document",
      "Azure Resource Deployment (IaC)",
      "Cosmos DB / AI Foundry Setup",
      "Networking & Security Configuration",
      "Monitoring & Alerting",
      "Cost Optimization Review",
    ],
  },
  {
    icon: "⚡",
    title: "Rapid AI App Development",
    price: "Starting at $10,000",
    duration: "1-4 weeks",
    description: "Full-stack AI applications built and deployed at speed. Perfect for MVPs, proof-of-concepts, or production apps that need AI from day one.",
    deliverables: [
      "Full-Stack Web Application",
      "AI Feature Integration",
      "Responsive UI/UX Design",
      "Cloud Deployment (Azure/Vercel)",
      "CI/CD Pipeline Setup",
      "Source Code & Documentation",
    ],
  },
  {
    icon: "🔐",
    title: "AI Security & Governance",
    price: "Starting at $20,000",
    duration: "2-6 weeks",
    description: "Enterprise AI security: agent identity management, RBAC, audit frameworks, and compliance tooling. Because AI without guardrails isn't enterprise-ready.",
    deliverables: [
      "AI Security Assessment",
      "Agent Identity Architecture (Entra ID)",
      "RBAC Policy Engine",
      "Audit Trail Implementation",
      "MCP Authentication Framework",
      "Compliance Documentation",
    ],
  },
  {
    icon: "🎓",
    title: "AI Training & Enablement",
    price: "Starting at $5,000",
    duration: "1-2 weeks",
    description: "Hands-on training for your team. From prompt engineering to building AI agents, we get your people productive with AI tools.",
    deliverables: [
      "Custom Training Curriculum",
      "Hands-On Workshop Sessions",
      "AI Tool Setup & Configuration",
      "Best Practices Playbook",
      "Ongoing Support (30 days)",
    ],
  },
];

export default function Services() {
  return (
    <div>
      <section className="py-24 px-4 grid-bg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Build</h1>
          <p className="text-lg text-[#737373] max-w-2xl mx-auto">
            From strategy to shipped code. Every engagement ends with working software.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {services.map(s => (
            <div key={s.title} className="bg-[#141414] rounded-xl border border-[#262626] overflow-hidden hover:border-cyan-500/20 transition-all">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{s.icon}</span>
                      <h2 className="text-xl font-bold text-white">{s.title}</h2>
                    </div>
                    <p className="text-sm text-[#737373] leading-relaxed max-w-xl">{s.description}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-lg font-bold gradient-text">{s.price}</p>
                    <p className="text-xs text-[#525252]">{s.duration}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#525252] mb-3">Deliverables</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {s.deliverables.map(d => (
                      <div key={d} className="flex gap-2 text-sm">
                        <span className="text-cyan-400 shrink-0">→</span>
                        <span className="text-[#737373]">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Not sure what you need?</h2>
        <p className="text-[#737373] mb-8">Book a free 30-minute discovery call. We&apos;ll figure it out together.</p>
        <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
          Book a Call
        </Link>
      </section>
    </div>
  );
}
