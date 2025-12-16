"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const platforms = [
  { name: "SONGIQ", description: "Music intelligence and analysis platform.", link: "https://songiq.io", external: true },
  { name: "Artist Portal", description: "Centralized artist management and analytics.", link: "#", external: false },
  { name: "Data Room", description: "Secure document management for stakeholders.", link: "#", external: false },
];

const capabilities = [
  "Track Analysis",
  "Billboard Comparison",
  "AI Recommendations",
  "Catalog Management",
  "Release Planning",
  "Sync Matching",
  "Revenue Tracking",
  "Performance Analytics",
];

export default function TechnologyPage() {
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
            <p className="label mb-4">The Platform</p>
            <h1 className="display-lg text-white mb-6">Technology</h1>
            <p className="body-lg max-w-xl">
              Purpose-built platforms that power the SongStreet ecosystem.
              Every tool designed for zero friction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SONGIQ Feature */}
      <section className="section-page-lg border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="label mb-4 opacity-40">Featured Platform</p>
              <h2 className="display-md text-white mb-6">SONGIQ</h2>
              <p className="body-lg mb-8">
                The industry's most advanced music intelligence platform.
                Analyze tracks, compare against Billboard hits, and receive
                AI-powered recommendations.
              </p>
              <a
                href="https://songiq.io"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sovereign"
              >
                Launch SONGIQ
                <ArrowUpRight size={14} />
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-8 lg:p-10 card-sovereign"
            >
              <p className="label mb-8">Capabilities</p>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={cap}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="body-sm py-2"
                  >
                    {cap}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Platforms */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <p className="label mb-12">All Platforms</p>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.04]">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black p-8 lg:p-10"
              >
                <h3 className="text-base font-light text-white mb-3 flex items-center gap-2">
                  {platform.name}
                  {platform.external && <ArrowUpRight size={12} className="opacity-30" />}
                </h3>
                <p className="body-sm mb-6">{platform.description}</p>
                {platform.external ? (
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    Visit
                    <ArrowUpRight size={10} />
                  </a>
                ) : (
                  <span className="label opacity-30">Coming Soon</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-page-lg border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="max-w-2xl">
            <p className="label mb-6">Philosophy</p>
            <p className="display-md text-white/70 leading-relaxed">
              Technology should disappear.
              The best tools are the ones you don't notice.
              They just work, seamlessly, in service of the music.
            </p>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="py-12 border-t border-white/[0.04]">
        <div className="container-sovereign">
          <Link href="/" className="group flex items-center justify-between py-6">
            <div>
              <p className="label mb-2 opacity-40">Return</p>
              <span className="display-md text-white group-hover:opacity-50 transition-opacity">
                Home
              </span>
            </div>
            <ArrowLeft size={20} className="text-white/20 group-hover:text-white/60 group-hover:-translate-x-1 transition-all" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
