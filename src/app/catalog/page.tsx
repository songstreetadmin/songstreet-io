"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Award } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const legacyStats = [
  { value: "5,330", label: "Legacy Catalog" },
  { value: "10K+", label: "AI-Assisted Rights" },
  { value: "2%", label: "Commercialized" },
];

const accolades = [
  { value: "1", label: "Grammy Award", detail: "Beyoncé's Lemonade, 2017" },
  { value: "6", label: "Grammy Nominations", detail: "Across multiple projects" },
  { value: "700M+", label: "Streams", detail: "Global reach" },
  { value: "100M+", label: "Views", detail: "Visual impact" },
];

const phaseOneReleases = [
  { title: "Don't Tell Nobody", artist: "The Neighbrs" },
  { title: "You'll Never See Me Again", artist: "The Neighbrs" },
  { title: "Before You Say Goodbye", artist: "Mason Stone" },
  { title: "Trucker", artist: "Mason Stone" },
  { title: "Over & Over", artist: "Mason Stone" },
];

export default function CatalogPage() {
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
            <p className="label mb-4">The Foundation</p>
            <h1 className="display-lg text-white mb-6">The Catalog</h1>
            <p className="body-lg max-w-xl">
              Every empire is built on a foundation.
              SongStreet stands on the legacy of its Founder.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-page-lg border-t border-white/[0.04]">
        <div className="container-sovereign">
          <p className="label mb-12 opacity-40">Founder's Legacy</p>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="display-md text-white mb-6">Vincent Berry II</h2>
              <p className="body-lg mb-6">
                A catalog forged over decades. 5,330 works spanning genres,
                collaborations, and cultural moments. Grammy-winning.
                Grammy-nominated. Hundreds of millions of streams.
              </p>
              <p className="body-lg">
                Yet only 2% has been commercialized.
                The remaining 98% represents the untapped foundation
                upon which SongStreet is built.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="text-center">
                <div className="display-xl text-white mb-3">98%</div>
                <p className="label">Untapped Potential</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="grid grid-cols-3 gap-8">
            {legacyStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center py-8"
              >
                <div className="display-lg text-white mb-2">{stat.value}</div>
                <div className="label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accolades */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="flex items-center gap-3 mb-12">
            <Award size={18} className="text-white/25" />
            <p className="label">Accolades</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
            {accolades.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-black p-8 lg:p-10"
              >
                <div className="display-md text-white mb-2">{item.value}</div>
                <div className="text-white font-light text-sm mb-3">{item.label}</div>
                <p className="body-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bedrock Statement */}
      <section className="section-page-lg border-t border-white/[0.04]">
        <div className="container-sovereign">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="display-md text-white/70 leading-relaxed max-w-3xl"
          >
            5,330 legacy works.
            10,000+ AI-assisted rights.
            This is the bedrock of SongStreet.
          </motion.p>
        </div>
      </section>

      {/* Phase 1 */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <p className="label mb-4">Phase 1 Releases</p>
              <p className="body-lg">
                Building on this foundation, the next generation
                carries the legacy forward.
              </p>
            </div>

            <div className="md:col-span-3">
              {phaseOneReleases.map((track, i) => (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="py-4 border-b border-white/[0.04]"
                >
                  <div className="text-white font-light">{track.title}</div>
                  <div className="body-sm">{track.artist}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sync */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <p className="label">Sync Licensing</p>
            </div>
            <div className="md:col-span-3">
              <p className="display-md text-white/70 leading-relaxed mb-8">
                15,000+ works available for sync.
                Film. Television. Advertising. Gaming.
              </p>
              <Link href="/contact" className="btn-sovereign">
                License Music
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="py-12 border-t border-white/[0.04]">
        <div className="container-sovereign">
          <Link href="/technology" className="group flex items-center justify-between py-6">
            <div>
              <p className="label mb-2 opacity-40">Next</p>
              <span className="display-md text-white group-hover:opacity-50 transition-opacity">
                Technology
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
