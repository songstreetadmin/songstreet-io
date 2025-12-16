"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Code, Mic2, Building2, BarChart3 } from "lucide-react";

const layers = [
  {
    level: 1,
    name: "Strategic Leadership",
    description: "GENESIS, THE CHAIRMAN - Executive decision-making",
    agents: 5,
    icon: Shield,
    color: "#d946ef",
  },
  {
    level: 2,
    name: "Chairman Trinity",
    description: "Claude, OpenAI, Gemini - Multi-AI governance",
    agents: 5,
    icon: Brain,
    color: "#a855f7",
  },
  {
    level: 3,
    name: "XAVIER Meta-Agent",
    description: "Oracle Creator & System Orchestrator",
    agents: 1,
    icon: Code,
    color: "#8b5cf6",
  },
  {
    level: 4,
    name: "Oracle Validators",
    description: "Financial, Legal, Tech, Strategic, Asset/IP",
    agents: 5,
    icon: BarChart3,
    color: "#06b6d4",
  },
  {
    level: 5,
    name: "Specialized Agents",
    description: "Development, Business, Marketing, Operations",
    agents: 21,
    icon: Building2,
    color: "#22c55e",
  },
  {
    level: 6,
    name: "SongStreet System",
    description: "Complete entertainment operations suite",
    agents: 30,
    icon: Mic2,
    color: "#ec4899",
  },
];

const agentCategories = [
  { name: "Leadership", count: 5, color: "#d946ef" },
  { name: "Governance", count: 5, color: "#a855f7" },
  { name: "Oracle", count: 5, color: "#8b5cf6" },
  { name: "Development", count: 4, color: "#06b6d4" },
  { name: "Business", count: 5, color: "#22c55e" },
  { name: "Marketing", count: 3, color: "#f97316" },
  { name: "Operations", count: 2, color: "#eab308" },
  { name: "Finance", count: 2, color: "#3b82f6" },
  { name: "Creative", count: 3, color: "#ec4899" },
  { name: "SongStreet", count: 30, color: "#14b8a6" },
];

export function Intelligence() {
  return (
    <section id="intelligence" className="relative py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 uppercase tracking-[0.3em] text-xs mb-4">AI Orchestration</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            67 AI Agents
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A sophisticated multi-layer intelligence system powered by the Chairman Trinity,
            XAVIER orchestrator, and Oracle validators.
          </p>
        </motion.div>

        {/* Layer Architecture */}
        <div className="relative mb-20">
          {/* Connection Lines */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-500/50 via-purple-500/30 to-cyan-500/50 hidden md:block" />

          {layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex items-center gap-8 mb-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Layer Card */}
              <div
                className={`flex-1 p-6 rounded-2xl border border-white/5 bg-[#030303]/50 backdrop-blur-sm ${
                  i % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                <div className={`flex items-center gap-4 mb-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${layer.color}20` }}
                  >
                    <layer.icon size={24} style={{ color: layer.color }} />
                  </div>
                  <div>
                    <span className="text-white/30 text-xs">Layer {layer.level}</span>
                    <h3 className="text-xl font-bold text-white">{layer.name}</h3>
                  </div>
                </div>
                <p className="text-white/50 text-sm mb-3">{layer.description}</p>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm"
                  style={{ backgroundColor: `${layer.color}20`, color: layer.color }}
                >
                  <span className="font-semibold">{layer.agents}</span>
                  <span>Agents</span>
                </div>
              </div>

              {/* Center Node */}
              <div
                className="hidden md:flex w-4 h-4 rounded-full absolute left-1/2 -translate-x-1/2"
                style={{ backgroundColor: layer.color, boxShadow: `0 0 20px ${layer.color}` }}
              />

              {/* Spacer */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* Agent Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {agentCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative p-4 rounded-xl bg-[#030303] border border-white/5 group card-hover"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm">{cat.name}</span>
                <span
                  className="text-2xl font-bold"
                  style={{ color: cat.color }}
                >
                  {cat.count}
                </span>
              </div>
              <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(cat.count / 30) * 100}%`,
                    backgroundColor: cat.color,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Chairman Trinity Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 via-purple-500/5 to-cyan-500/10 border border-white/5"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                The Chairman Trinity
              </h3>
              <p className="text-white/50 mb-6">
                A revolutionary multi-AI governance system combining the strengths of
                Claude (narrative intelligence), OpenAI (quantitative analysis), and
                Gemini (risk assessment) for comprehensive strategic oversight.
              </p>
              <div className="flex flex-wrap gap-3">
                {["c-Chairman (Claude)", "oa-Chairman (OpenAI)", "g-Chairman (Gemini)"].map((name) => (
                  <span
                    key={name}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 text-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-64 md:h-80">
              {/* Orbital Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Center */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center z-10">
                  <Brain className="text-white" size={28} />
                </div>

                {/* Orbits */}
                <div className="absolute w-40 h-40 border border-white/10 rounded-full animate-spin-slow" />
                <div className="absolute w-60 h-60 border border-white/5 rounded-full animate-spin-slow" style={{ animationDuration: "25s", animationDirection: "reverse" }} />
                <div className="absolute w-80 h-80 border border-white/5 rounded-full animate-spin-slow" style={{ animationDuration: "35s" }} />

                {/* Orbiting Nodes */}
                <div className="absolute w-40 h-40 animate-spin-slow" style={{ animationDuration: "10s" }}>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-fuchsia-500" />
                </div>
                <div className="absolute w-60 h-60 animate-spin-slow" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500" />
                </div>
                <div className="absolute w-80 h-80 animate-spin-slow" style={{ animationDuration: "20s" }}>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
