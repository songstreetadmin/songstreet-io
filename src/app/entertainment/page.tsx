"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const divisions = [
  { title: "Artist Development", description: "Crafting the next generation of virtual artists." },
  { title: "Music Production", description: "State-of-the-art production across genres." },
  { title: "Release Strategy", description: "Strategic rollout for maximum impact." },
  { title: "Distribution", description: "Global reach across every platform." },
  { title: "Sync Licensing", description: "Film, television, advertising, gaming." },
  { title: "Brand Partnerships", description: "Strategic collaborations that amplify." },
];

const values = [
  { title: "Timeless", description: "Built for centuries, not quarters" },
  { title: "Sovereign", description: "Independent and self-governing" },
  { title: "Elegant", description: "Simplicity in every detail" },
  { title: "Intelligent", description: "Powered by AI, guided by vision" },
];

export default function EntertainmentPage() {
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
            <p className="label mb-4">The Company</p>
            <h1 className="display-lg text-white mb-6">SongStreet Entertainment</h1>
            <p className="body-lg max-w-xl">
              A vertically integrated entertainment company building
              the future of music. Every touchpoint designed with intention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <p className="label">Mission</p>
            </div>
            <div className="md:col-span-3">
              <p className="display-md text-white/70 leading-relaxed">
                To create a universe of music that transcends time.
                Artists that inspire. Songs that endure.
                An ecosystem built for the 500-year horizon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <p className="label mb-12">Divisions</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {divisions.map((division, i) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-black p-8 lg:p-10"
              >
                <h3 className="text-base font-light text-white mb-3">
                  {division.title}
                </h3>
                <p className="body-sm">{division.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <p className="label">Values</p>
            </div>
            <div className="md:col-span-3 space-y-10">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <h4 className="text-lg font-light text-white mb-2">{value.title}</h4>
                  <p className="body-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <p className="display-md text-white/70">
                Ready to be part of something timeless?
              </p>
            </div>
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-sovereign">
                Partner With Us
                <ArrowRight size={14} />
              </Link>
              <Link href="/universe" className="btn-ghost">
                Meet the Artists
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="py-12 border-t border-white/[0.04]">
        <div className="container-sovereign">
          <Link href="/intelligence" className="group flex items-center justify-between py-6">
            <div>
              <p className="label mb-2 opacity-40">Next</p>
              <span className="display-md text-white group-hover:opacity-50 transition-opacity">
                Intelligence
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
