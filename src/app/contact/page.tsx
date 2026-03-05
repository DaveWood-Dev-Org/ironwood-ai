"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", budget: "", timeline: "", message: "",
  });

  const update = (key: string, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <div className="text-4xl mb-4">✦</div>
        <h1 className="text-2xl font-bold mb-4">Message Received</h1>
        <p className="text-[#737373] mb-2">Thanks, {form.name}. We&apos;ll be in touch within 24 hours.</p>
        <p className="text-xs text-[#525252]">(Demo mode — no actual submission)</p>
      </div>
    );
  }

  return (
    <div>
      <section className="py-24 px-4 grid-bg">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Build Something</h1>
          <p className="text-lg text-[#737373]">Tell us about your project. We respond within 24 hours.</p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="md:col-span-3 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#525252] uppercase tracking-wider mb-1">Name *</label>
                <input required value={form.name} onChange={e => update("name", e.target.value)}
                  className="w-full h-11 bg-[#141414] border border-[#262626] rounded-lg px-4 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs text-[#525252] uppercase tracking-wider mb-1">Email *</label>
                <input type="email" required value={form.email} onChange={e => update("email", e.target.value)}
                  className="w-full h-11 bg-[#141414] border border-[#262626] rounded-lg px-4 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-[#525252] uppercase tracking-wider mb-1">Company</label>
              <input value={form.company} onChange={e => update("company", e.target.value)}
                className="w-full h-11 bg-[#141414] border border-[#262626] rounded-lg px-4 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#525252] uppercase tracking-wider mb-1">Budget Range</label>
                <select value={form.budget} onChange={e => update("budget", e.target.value)}
                  className="w-full h-11 bg-[#141414] border border-[#262626] rounded-lg px-4 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors">
                  <option value="">Select...</option>
                  <option value="5-15k">$5,000 – $15,000</option>
                  <option value="15-50k">$15,000 – $50,000</option>
                  <option value="50-100k">$50,000 – $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-[#525252] uppercase tracking-wider mb-1">Timeline</label>
                <select value={form.timeline} onChange={e => update("timeline", e.target.value)}
                  className="w-full h-11 bg-[#141414] border border-[#262626] rounded-lg px-4 text-sm text-white focus:border-cyan-500 focus:outline-none transition-colors">
                  <option value="">Select...</option>
                  <option value="asap">ASAP</option>
                  <option value="1-2w">1-2 weeks</option>
                  <option value="1-2m">1-2 months</option>
                  <option value="3m+">3+ months</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs text-[#525252] uppercase tracking-wider mb-1">Tell us about your project *</label>
              <textarea required rows={5} value={form.message} onChange={e => update("message", e.target.value)}
                placeholder="What are you building? What problem are you solving? What does success look like?"
                className="w-full bg-[#141414] border border-[#262626] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#525252] focus:border-cyan-500 focus:outline-none transition-colors resize-none" />
            </div>
            <button type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>

          <div className="md:col-span-2 space-y-6">
            <div className="bg-[#141414] rounded-xl p-6 border border-[#262626]">
              <h3 className="text-sm font-bold text-white mb-4">Quick Contact</h3>
              <div className="space-y-3 text-sm text-[#737373]">
                <p>📍 Nashville, Tennessee</p>
                <p>✉️ davewood.assistant@gmail.com</p>
                <p>📞 Available upon request</p>
              </div>
            </div>
            <div className="bg-[#141414] rounded-xl p-6 border border-[#262626]">
              <h3 className="text-sm font-bold text-white mb-4">What Happens Next</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-cyan-400 text-sm font-bold">1</span>
                  <p className="text-sm text-[#737373]">We review your message within 24 hours</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyan-400 text-sm font-bold">2</span>
                  <p className="text-sm text-[#737373]">30-minute discovery call to understand your needs</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyan-400 text-sm font-bold">3</span>
                  <p className="text-sm text-[#737373]">Proposal with scope, timeline, and pricing</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyan-400 text-sm font-bold">4</span>
                  <p className="text-sm text-[#737373]">We start building</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/5 to-violet-500/5 rounded-xl p-6 border border-[#262626]">
              <p className="text-sm text-[#a3a3a3] italic">
                &ldquo;Most consultants take weeks to scope a project. Dave had working code deployed before our first call ended.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
