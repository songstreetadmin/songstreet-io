"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Music,
  Shield,
  BarChart3,
  Users,
  Mic,
  Sliders,
  PenTool,
  FileCheck,
  Link2,
  Database,
  Sparkles,
  Play,
  Send,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

type Mode = "creative" | "admin";

// SONGX Creative Agents
const creativeAgents = [
  {
    name: "The Songwriter",
    icon: PenTool,
    capabilities: ["Concept Architecture", "Emotional Map", "Section Scaffolding", "Lyric Logic"],
  },
  {
    name: "The Producer",
    icon: Sliders,
    capabilities: ["BPM & Key Selection", "Sonic Palette", "Arrangement", "Beat Design"],
  },
  {
    name: "The Vocal Coach",
    icon: Mic,
    capabilities: ["Cadence & Breath", "Melodic Movement", "Dynamic Range", "Genre Phrasing"],
  },
];

// Admin Mode Modules
const adminModules = [
  {
    id: "ipterminal",
    name: "IPTERMINAL",
    tagline: "IP Registration Terminal",
    description: "On-chain IP registration and chain-of-title management.",
    icon: Shield,
    features: ["On-Chain Registration", "Chain of Title", "CFT Integration", "PRO/CMO Export"],
  },
  {
    id: "songiq",
    name: "SONGIQ",
    tagline: "Intelligence Engine",
    description: "Commercial readiness scoring and market intelligence.",
    icon: BarChart3,
    features: ["Track Analysis", "Billboard Comparison", "Trend Engine", "AI Recommendations"],
    external: "https://songiq.io",
  },
  {
    id: "pitchsquad",
    name: "PITCH SQUAD",
    tagline: "Dealflow Team",
    description: "Five AI agents for pitch optimization and deal management.",
    icon: Users,
    agents: ["ARIA", "ATLAS", "SYNCRA", "DASH", "LEX"],
  },
];

const systemStatus = [
  { name: "API", status: "online" },
  { name: "SONGX", status: "online" },
  { name: "IPTERMINAL", status: "online" },
  { name: "Blockchain", status: "standby" },
];

export default function AIDeskPage() {
  const [mode, setMode] = useState<Mode>("creative");
  const [prompt, setPrompt] = useState("");
  const [genre, setGenre] = useState("");
  const [mood, setMood] = useState("");

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Cockpit Header */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-10 border-b border-white/[0.04]">
        <div className="container-sovereign">
          <div className="flex items-start justify-between">
            {/* Left: Back + Mode Toggle */}
            <div>
              <Link href="/" className="btn-ghost mb-6 inline-flex">
                <ArrowLeft size={12} />
                Back
              </Link>

              {/* Mode Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setMode("creative")}
                  className={`px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                    mode === "creative"
                      ? "bg-white text-black"
                      : "bg-white/[0.03] text-white/50 hover:bg-white/[0.06] hover:text-white/70"
                  }`}
                >
                  Creative
                </button>
                <button
                  onClick={() => setMode("admin")}
                  className={`px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                    mode === "admin"
                      ? "bg-white text-black"
                      : "bg-white/[0.03] text-white/50 hover:bg-white/[0.06] hover:text-white/70"
                  }`}
                >
                  Admin
                </button>
              </div>
            </div>

            {/* Right: Title + Status */}
            <div className="text-right">
              <h1 className="text-2xl md:text-3xl font-light text-white mb-2">
                SongStreet AI Desk
              </h1>
              <p className="label opacity-50">
                {mode === "creative" ? "Studio Mode" : "Admin Mode"}
              </p>

              {/* System Status */}
              <div className="flex items-center justify-end gap-6 mt-4">
                {systemStatus.map((sys) => (
                  <div key={sys.name} className="flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        sys.status === "online"
                          ? "bg-emerald-400"
                          : sys.status === "standby"
                          ? "bg-amber-400"
                          : "bg-red-400"
                      }`}
                    />
                    <span className="text-[10px] uppercase tracking-wider text-white/40">
                      {sys.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Cockpit Area */}
      <AnimatePresence mode="wait">
        {mode === "creative" ? (
          <motion.div
            key="creative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* SONGX - Creative Mode */}
            <section className="section-page">
              <div className="container-sovereign">
                {/* SONGX Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                    <Music size={18} className="text-white/60" />
                  </div>
                  <div>
                    <h2 className="text-xl font-light text-white">SONGX</h2>
                    <p className="label opacity-40">AI Music Creation Engine</p>
                  </div>
                </div>

                {/* Creation Interface */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left: Prompt Input */}
                  <div className="lg:col-span-2">
                    <div className="bg-white/[0.015] border border-white/[0.06] p-6 md:p-8">
                      <label className="label block mb-4">Creative Prompt</label>
                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Describe the song you want to create..."
                        className="w-full h-32 bg-transparent text-white placeholder-white/25 text-base font-light leading-relaxed resize-none focus:outline-none"
                      />

                      <div className="grid sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/[0.04]">
                        <div>
                          <label className="label block mb-2 opacity-60">Genre</label>
                          <input
                            type="text"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                            placeholder="e.g., R&B, Pop, Country"
                            className="w-full bg-white/[0.02] border border-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/[0.12] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="label block mb-2 opacity-60">Mood</label>
                          <input
                            type="text"
                            value={mood}
                            onChange={(e) => setMood(e.target.value)}
                            placeholder="e.g., Upbeat, Melancholic"
                            className="w-full bg-white/[0.02] border border-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/[0.12] transition-colors"
                          />
                        </div>
                      </div>

                      <button className="btn-sovereign mt-8 w-full sm:w-auto justify-center">
                        <Sparkles size={14} />
                        Create Song
                      </button>
                    </div>
                  </div>

                  {/* Right: Active Agents */}
                  <div className="space-y-4">
                    <p className="label opacity-40">Active Agents</p>
                    {creativeAgents.map((agent, i) => (
                      <motion.div
                        key={agent.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/[0.015] border border-white/[0.06] p-5"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <agent.icon size={16} className="text-white/40" />
                          <span className="text-sm font-light text-white">{agent.name}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {agent.capabilities.map((cap) => (
                            <span
                              key={cap}
                              className="text-[10px] px-2 py-1 bg-white/[0.03] text-white/40"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Output Preview */}
                <div className="mt-8 p-6 md:p-8 bg-white/[0.01] border border-dashed border-white/[0.06]">
                  <div className="flex items-center justify-between mb-4">
                    <p className="label opacity-40">Output Preview</p>
                    <div className="flex items-center gap-2 text-white/30">
                      <Play size={14} />
                      <span className="text-xs">Ready to generate</span>
                    </div>
                  </div>
                  <p className="body-sm opacity-40 text-center py-8">
                    Your SONGX output will appear here.
                    Full lyrics, structure, production design, and performance map.
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="admin"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Admin Mode */}
            <section className="section-page">
              <div className="container-sovereign">
                <p className="label mb-8 opacity-40">IP Protection · Intelligence · Monetization</p>

                {/* Admin Modules Grid */}
                <div className="grid md:grid-cols-3 gap-px bg-white/[0.04]">
                  {adminModules.map((module, i) => (
                    <motion.div
                      key={module.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-black p-6 md:p-8"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-10 h-10 bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                          <module.icon size={18} className="text-white/60" />
                        </div>
                        <span className="text-[10px] uppercase tracking-wider px-2 py-1 bg-emerald-500/10 text-emerald-400">
                          Active
                        </span>
                      </div>

                      <h3 className="text-lg font-light text-white mb-1">{module.name}</h3>
                      <p className="label opacity-40 mb-4">{module.tagline}</p>
                      <p className="body-sm mb-6">{module.description}</p>

                      {module.features && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {module.features.map((feature) => (
                            <span
                              key={feature}
                              className="text-[10px] px-2 py-1 bg-white/[0.03] text-white/40"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}

                      {module.agents && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {module.agents.map((agent) => (
                            <span
                              key={agent}
                              className="text-[10px] px-2 py-1 bg-white/[0.03] text-white/50 font-medium"
                            >
                              {agent}
                            </span>
                          ))}
                        </div>
                      )}

                      {module.external ? (
                        <a
                          href={module.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost"
                        >
                          Launch
                          <ArrowUpRight size={12} />
                        </a>
                      ) : (
                        <button className="btn-ghost">
                          Open
                          <ArrowUpRight size={12} />
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* IPTERMINAL Detailed Section */}
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                  {/* Register IP */}
                  <div className="bg-white/[0.015] border border-white/[0.06] p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield size={18} className="text-white/40" />
                      <h3 className="text-base font-light text-white">Register IP</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="label block mb-2 opacity-60">Asset Title</label>
                        <input
                          type="text"
                          placeholder="Song or catalog name"
                          className="w-full bg-white/[0.02] border border-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/[0.12] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="label block mb-2 opacity-60">Authorship</label>
                        <input
                          type="text"
                          placeholder="Writer(s)"
                          className="w-full bg-white/[0.02] border border-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/[0.12] transition-colors"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="label block mb-2 opacity-60">Ownership %</label>
                          <input
                            type="text"
                            placeholder="100"
                            className="w-full bg-white/[0.02] border border-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/[0.12] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="label block mb-2 opacity-60">Series/Trust</label>
                          <input
                            type="text"
                            placeholder="CFT-SH-MUS"
                            className="w-full bg-white/[0.02] border border-white/[0.06] px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-white/[0.12] transition-colors"
                          />
                        </div>
                      </div>

                      <button className="btn-sovereign mt-4 w-full justify-center">
                        <FileCheck size={14} />
                        Register On-Chain
                      </button>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-4">
                    <p className="label opacity-40">Quick Actions</p>

                    <button className="w-full bg-white/[0.015] border border-white/[0.06] p-5 text-left hover:bg-white/[0.03] transition-colors group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Link2 size={16} className="text-white/40" />
                          <div>
                            <p className="text-sm font-light text-white">Chain of Title</p>
                            <p className="text-xs text-white/40">View ownership history</p>
                          </div>
                        </div>
                        <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/50 transition-colors" />
                      </div>
                    </button>

                    <button className="w-full bg-white/[0.015] border border-white/[0.06] p-5 text-left hover:bg-white/[0.03] transition-colors group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Database size={16} className="text-white/40" />
                          <div>
                            <p className="text-sm font-light text-white">Export Package</p>
                            <p className="text-xs text-white/40">PRO/CMO/USCO ready</p>
                          </div>
                        </div>
                        <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/50 transition-colors" />
                      </div>
                    </button>

                    <button className="w-full bg-white/[0.015] border border-white/[0.06] p-5 text-left hover:bg-white/[0.03] transition-colors group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <BarChart3 size={16} className="text-white/40" />
                          <div>
                            <p className="text-sm font-light text-white">Analyze Catalog</p>
                            <p className="text-xs text-white/40">Commercial readiness scores</p>
                          </div>
                        </div>
                        <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/50 transition-colors" />
                      </div>
                    </button>

                    <button className="w-full bg-white/[0.015] border border-white/[0.06] p-5 text-left hover:bg-white/[0.03] transition-colors group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Send size={16} className="text-white/40" />
                          <div>
                            <p className="text-sm font-light text-white">Pitch Squad</p>
                            <p className="text-xs text-white/40">Manage active pitches</p>
                          </div>
                        </div>
                        <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/50 transition-colors" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Tagline */}
      <section className="py-12 border-t border-white/[0.04]">
        <div className="container-sovereign">
          <p className="body-sm text-center opacity-40">
            The AI-native songwriting and catalog OS of the SongStreet ecosystem.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
