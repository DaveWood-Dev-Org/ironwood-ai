const articles = [
  {
    title: "Why AI Agent Platforms Need a Control Plane",
    date: "March 2026",
    category: "Architecture",
    excerpt: "Most teams deploy AI agents as standalone services. But without centralized orchestration, RBAC, and audit logging, you're building a compliance nightmare. Here's why the control plane pattern matters.",
    readTime: "8 min",
  },
  {
    title: "MCP Authentication: The Missing Piece of Agent Security",
    date: "March 2026",
    category: "Security",
    excerpt: "The Model Context Protocol is powerful, but most implementations use shared API keys. We built a three-tier auth framework — SPN for reads, OBO for writes, no deletes. Here's how.",
    readTime: "12 min",
  },
  {
    title: "From Shopify to AI-Powered Store in 60 Minutes",
    date: "March 2026",
    category: "Case Study",
    excerpt: "We scraped 250 products from a Shopify store, built natural language search, added a full cart and checkout, and deployed to Azure — all in under an hour. Here's the playbook.",
    readTime: "6 min",
  },
  {
    title: "The Self-Guided Tour Stack: IoT + AI + SMS in One Platform",
    date: "March 2026",
    category: "IoT",
    excerpt: "Smart locks, SMS verification, rotating PIN pools, and 40-minute slot scheduling. How we turned a 2-page spec into a production platform in a single session.",
    readTime: "10 min",
  },
  {
    title: "Building for the AI-Native Enterprise",
    date: "February 2026",
    category: "Strategy",
    excerpt: "The companies that win the next decade won't just use AI — they'll be built on it. Here's what AI-native architecture looks like and how to get there.",
    readTime: "15 min",
  },
  {
    title: "Why We Ship Code, Not Slides",
    date: "February 2026",
    category: "Philosophy",
    excerpt: "The consulting industry has a deliverable problem. Clients pay for strategy decks that collect dust. At Ironwood, every engagement ends with deployed software. Here's why.",
    readTime: "5 min",
  },
];

export default function Insights() {
  return (
    <div>
      <section className="py-24 px-4 grid-bg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">Insights</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Thinking Out Loud</h1>
          <p className="text-lg text-[#737373]">Architecture patterns, AI strategy, and lessons from the field.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {articles.map((a, i) => (
            <article key={i} className="bg-[#141414] rounded-xl p-6 border border-[#262626] hover:border-cyan-500/20 transition-all cursor-pointer group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs px-2 py-0.5 bg-[#1c1c1c] text-cyan-400 rounded-full border border-[#262626]">{a.category}</span>
                <span className="text-xs text-[#525252]">{a.date}</span>
                <span className="text-xs text-[#525252]">· {a.readTime} read</span>
              </div>
              <h2 className="text-lg font-bold text-white group-hover:gradient-text transition-all mb-2">{a.title}</h2>
              <p className="text-sm text-[#737373] leading-relaxed">{a.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
