"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Shield, Zap, LineChart, Lock } from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    name: "SONGIQ Platform",
    description: "AI-powered music intelligence and analysis engine with FG-Score technology",
    features: ["Track Analysis", "Billboard Comparison", "AI Advisor"],
  },
  {
    icon: Database,
    name: "Data Room Architecture",
    description: "Investor-grade document management and secure asset storage",
    features: ["Vault Security", "Version Control", "Access Control"],
  },
  {
    icon: Shield,
    name: "Oracle Validators",
    description: "5-layer AI governance for financial, legal, and strategic validation",
    features: ["NAV Validation", "Compliance Check", "IP Verification"],
  },
  {
    icon: Zap,
    name: "XAVIER Orchestrator",
    description: "Meta-agent system for real-time multi-AI coordination",
    features: ["Task Routing", "Load Balancing", "State Management"],
  },
  {
    icon: LineChart,
    name: "Analytics Engine",
    description: "Comprehensive tracking and reporting across all operations",
    features: ["Revenue Tracking", "Performance Metrics", "Trend Analysis"],
  },
  {
    icon: Lock,
    name: "Charter Financial Trust",
    description: "$95M+ multi-tranche sovereign wealth preservation structure",
    features: ["Asset Protection", "Trust Governance", "Tax Optimization"],
  },
];

export function Technology() {
  return (
    <section id="technology" className="relative py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-fuchsia-500/5 rounded-full blur-[200px]" />
        <div className="grid-bg absolute inset-0 opacity-10" />
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
          <p className="text-fuchsia-400 uppercase tracking-[0.3em] text-xs mb-4">Infrastructure</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Technology Stack
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Built on cutting-edge AI infrastructure with enterprise-grade security
            and investor-ready governance systems.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-[#030303] border border-white/5 hover:border-fuchsia-500/30 transition-all card-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <tech.icon size={28} className="text-fuchsia-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
              <p className="text-white/50 text-sm mb-4">{tech.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {tech.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* SONGIQ Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  SONGIQ Studio
                </h3>
                <p className="text-white/80 text-lg mb-8">
                  The industry's most advanced music intelligence platform. Analyze tracks,
                  compare against Billboard hits, and receive AI-powered recommendations
                  to optimize your music for commercial success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                    Launch SONGIQ
                  </button>
                  <button className="px-8 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20">
                    View Demo
                  </button>
                </div>
              </div>

              <div className="relative">
                {/* Mock Dashboard Preview */}
                <div className="bg-[#030303] rounded-2xl p-6 border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  {/* Mock UI */}
                  <div className="space-y-4">
                    <div className="h-8 bg-white/5 rounded-lg w-3/4" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-lg" />
                      <div className="h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg" />
                      <div className="h-20 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-lg" />
                    </div>
                    <div className="h-32 bg-white/5 rounded-lg flex items-end p-3 gap-1">
                      {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-fuchsia-500 to-purple-500 rounded-t"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <div className="h-10 bg-fuchsia-500/30 rounded-lg flex-1" />
                      <div className="h-10 bg-white/5 rounded-lg flex-1" />
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Live Platform
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
