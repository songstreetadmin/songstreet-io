"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const agentCategories = [
  { title: "Executive", agents: ["CEO", "CFO", "COO", "CMO", "GC", "CEO Creative"], count: 6 },
  { title: "Creative", agents: ["A&R", "Producer", "Songwriter", "Vocal Coach", "Manager", "Catalog Architect"], count: 6 },
  { title: "Operations", agents: ["Talent & Culture", "Risk & Governance", "Data Room Architect"], count: 3 },
  { title: "Business Development", agents: ["P1 Strategic", "P2 Implementation", "P3 Financial", "P4 Commercialization", "P5 Documentation"], count: 5 },
  { title: "Governance", agents: ["Chairman", "c-Chairman", "g-Chairman", "oa-Chairman", "XAVIER"], count: 5 },
  { title: "Validation", agents: ["Financial", "Legal", "Technology", "Strategic", "Asset/IP"], count: 5 },
];

const totalAgents = agentCategories.reduce((sum, cat) => sum + cat.count, 0);

export default function IntelligencePage() {
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
            <p className="label mb-4">The Intelligence</p>
            <h1 className="display-lg text-white mb-6">{totalAgents} AI Agents</h1>
            <p className="body-lg max-w-xl">
              A network of specialized AI agents working in harmony
              to power every aspect of the entertainment ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Counts */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {agentCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="display-md text-white mb-2">{category.count}</div>
                <div className="label">{category.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          {agentCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="grid md:grid-cols-5 gap-6 py-8 border-b border-white/[0.04] last:border-0"
            >
              <div className="md:col-span-2 flex items-start gap-6">
                <span className="label opacity-30">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-base font-light text-white">{category.title}</h3>
              </div>
              <div className="md:col-span-3 flex flex-wrap gap-2">
                {category.agents.map((agent) => (
                  <span
                    key={agent}
                    className="px-3 py-1.5 bg-white/[0.02] border border-white/[0.04] text-sm text-white/50"
                  >
                    {agent}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-page-lg border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="max-w-2xl">
            <p className="label mb-6">Philosophy</p>
            <p className="display-md text-white/70 leading-relaxed mb-6">
              Intelligence should be invisible.
              It should work seamlessly, enabling creativity
              without friction.
            </p>
            <p className="body-lg">
              Our AI agents don't replace human creativity.
              They amplify it.
            </p>
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="py-12 border-t border-white/[0.04]">
        <div className="container-sovereign">
          <Link href="/catalog" className="group flex items-center justify-between py-6">
            <div>
              <p className="label mb-2 opacity-40">Next</p>
              <span className="display-md text-white group-hover:opacity-50 transition-opacity">
                Catalog
              </span>
            </div>
            <ArrowRight size={20} className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
