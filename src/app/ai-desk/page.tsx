"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Zap, Shield, BarChart3, Users, Music, Bot } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const platforms = [
  {
    id: "songx",
    name: "SONGX",
    tagline: "Studio Mode",
    description: "AI Music Creation Engine combining Songwriter, Producer, and Vocal Coach agents.",
    icon: Music,
    features: ["Creative Prompts", "Genre Selection", "Mood Matching", "AI Composition"],
    status: "active",
    cta: "Create Song",
  },
  {
    id: "ipterminal",
    name: "IPTERMINAL",
    tagline: "IP Protection",
    description: "On-chain IP registration and chain-of-title management for your catalog.",
    icon: Shield,
    features: ["IP Registration", "Chain of Title", "Rights Management", "Blockchain Verified"],
    status: "active",
    cta: "Register IP",
  },
  {
    id: "songiq",
    name: "SONGIQ",
    tagline: "Intelligence Engine",
    description: "Commercial readiness scoring and music intelligence platform.",
    icon: BarChart3,
    features: ["Track Analysis", "Billboard Comparison", "AI Recommendations", "Market Insights"],
    status: "active",
    cta: "Analyze Track",
    external: "https://songiq.io",
  },
  {
    id: "pitchsquad",
    name: "PITCH SQUAD",
    tagline: "AI Agent Collective",
    description: "Five specialized AI agents for pitch optimization and deal management.",
    icon: Users,
    features: ["ARIA", "ATLAS", "SYNCRA", "DASH", "LEX"],
    status: "active",
    cta: "Manage Pitches",
  },
];

const agents = [
  { name: "ARIA", role: "Creative Director", description: "Artistic vision and brand alignment" },
  { name: "ATLAS", role: "Data Analyst", description: "Market research and opportunity mapping" },
  { name: "SYNCRA", role: "Sync Specialist", description: "Film, TV, and advertising placement" },
  { name: "DASH", role: "Deal Architect", description: "Contract structuring and negotiation" },
  { name: "LEX", role: "Legal Counsel", description: "Rights verification and compliance" },
];

const systemStatus = [
  { name: "API", status: "online" },
  { name: "Studio Mode", status: "online" },
  { name: "Admin Mode", status: "online" },
  { name: "Blockchain", status: "standby" },
];

export default function AIDeskPage() {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-sovereign">
          <Link href="/" className="btn-ghost mb-10 inline-flex">
            <ArrowLeft size={12} />
            Back
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Bot size={16} className="text-white/30" />
              <p className="label">Intelligence Platform</p>
            </div>
            <h1 className="display-lg text-white mb-6">AI Desk</h1>
            <p className="body-lg max-w-xl">
              Multi-agent creative workstation for songwriting,
              IP protection, and monetization. Zero friction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* System Status Bar */}
      <section className="py-6 border-t border-b border-white/[0.04]">
        <div className="container-sovereign">
          <div className="flex items-center justify-between">
            <p className="label opacity-40">System Status</p>
            <div className="flex items-center gap-8">
              {systemStatus.map((system) => (
                <div key={system.name} className="flex items-center gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      system.status === "online"
                        ? "bg-emerald-500"
                        : system.status === "standby"
                        ? "bg-amber-500"
                        : "bg-red-500"
                    }`}
                  />
                  <span className="label opacity-60">{system.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="section-page">
        <div className="container-sovereign">
          <p className="label mb-12">Platforms</p>

          <div className="grid md:grid-cols-2 gap-px bg-white/[0.04]">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-black p-8 lg:p-12 group cursor-pointer transition-all duration-500 ${
                  activeModule === platform.id ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                }`}
                onClick={() => setActiveModule(activeModule === platform.id ? null : platform.id)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <platform.icon size={20} className="text-white/30" />
                    <div>
                      <h3 className="text-lg font-light text-white">{platform.name}</h3>
                      <p className="label opacity-40">{platform.tagline}</p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 text-[10px] uppercase tracking-wider ${
                      platform.status === "active"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-white/5 text-white/30"
                    }`}
                  >
                    {platform.status}
                  </span>
                </div>

                <p className="body-sm mb-6">{platform.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {platform.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 bg-white/[0.02] border border-white/[0.04] text-xs text-white/40"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {platform.external ? (
                  <a
                    href={platform.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sovereign"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {platform.cta}
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <button className="btn-sovereign">
                    {platform.cta}
                    <Zap size={14} />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Squad Agents */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <p className="label mb-4">Pitch Squad</p>
              <p className="body-lg">
                Five AI agents working in harmony to optimize your pitches
                and maximize deal potential.
              </p>
            </div>
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {agents.map((agent, i) => (
                  <motion.div
                    key={agent.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-6 bg-white/[0.015] border border-white/[0.04] hover:border-white/[0.08] transition-colors"
                  >
                    <h4 className="text-base font-light text-white mb-1">{agent.name}</h4>
                    <p className="label opacity-40 mb-3">{agent.role}</p>
                    <p className="text-xs text-white/30">{agent.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <p className="label mb-12">Quick Actions</p>

          <div className="grid sm:grid-cols-3 gap-px bg-white/[0.04]">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-black p-8 text-left group hover:bg-white/[0.01] transition-colors"
            >
              <Music size={24} className="text-white/20 mb-4 group-hover:text-white/40 transition-colors" />
              <h3 className="text-base font-light text-white mb-2">Create Song</h3>
              <p className="body-sm">Generate new music with AI assistance</p>
            </motion.button>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-black p-8 text-left group hover:bg-white/[0.01] transition-colors"
            >
              <Shield size={24} className="text-white/20 mb-4 group-hover:text-white/40 transition-colors" />
              <h3 className="text-base font-light text-white mb-2">Register IP</h3>
              <p className="body-sm">Protect your work on-chain</p>
            </motion.button>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-black p-8 text-left group hover:bg-white/[0.01] transition-colors"
            >
              <BarChart3 size={24} className="text-white/20 mb-4 group-hover:text-white/40 transition-colors" />
              <h3 className="text-base font-light text-white mb-2">Analyze Catalog</h3>
              <p className="body-sm">Get commercial readiness scores</p>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-page-lg border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="max-w-2xl">
            <p className="label mb-6">Philosophy</p>
            <p className="display-md text-white/70 leading-relaxed mb-6">
              Intelligence should amplify creativity, not replace it.
              Every tool designed for zero friction.
            </p>
            <p className="body-lg">
              The AI Desk is where technology meets artistry.
              A sovereign workspace for the modern creator.
            </p>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="py-12 border-t border-white/[0.04]">
        <div className="container-sovereign">
          <Link href="/technology" className="group flex items-center justify-between py-6">
            <div>
              <p className="label mb-2 opacity-40">Explore</p>
              <span className="display-md text-white group-hover:opacity-50 transition-opacity">
                Technology
              </span>
            </div>
            <ArrowUpRight size={20} className="text-white/20 group-hover:text-white/60 transition-all" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
