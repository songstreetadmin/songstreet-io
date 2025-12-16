"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const sections = [
  { number: "01", title: "Universe", description: "13 Virtual Artists", href: "/universe" },
  { number: "02", title: "Entertainment", description: "The Company", href: "/entertainment" },
  { number: "03", title: "Intelligence", description: "30 AI Agents", href: "/intelligence" },
  { number: "04", title: "Catalog", description: "The Foundation", href: "/catalog" },
  { number: "05", title: "Technology", description: "SONGIQ Platform", href: "/technology" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero */}
      <section className="section-sovereign">
        <div className="container-sovereign">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="label mb-6 opacity-0 animate-fade-up">
              Music Entertainment Reimagined
            </p>

            <h1 className="display-xl text-white mb-10 opacity-0 animate-fade-up delay-100">
              SongStreet
            </h1>

            <p className="body-lg max-w-lg mb-12 opacity-0 animate-fade-up delay-200">
              A universe of virtual artists, each with their own story,
              sound, and soul. Powered by intelligence. Built to last.
            </p>

            <div className="flex gap-6 opacity-0 animate-fade-up delay-300">
              <Link href="/universe" className="btn-sovereign">
                Enter Universe
                <ArrowRight size={14} />
              </Link>
              <Link href="/entertainment" className="btn-ghost">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* Navigation Links */}
      <section className="section-page">
        <div className="container-sovereign">
          {sections.map((section, i) => (
            <motion.div
              key={section.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={section.href}
                className="group flex items-center justify-between py-6 border-b border-white/[0.04] hover:border-white/[0.12] transition-colors"
              >
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="label opacity-30 w-8">{section.number}</span>
                  <span className="display-md text-white group-hover:opacity-50 transition-opacity">
                    {section.title}
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="body-sm hidden md:block">{section.description}</span>
                  <ArrowRight
                    size={18}
                    className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statement */}
      <section className="section-page-lg">
        <div className="container-sovereign">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="display-md text-white/70 leading-relaxed max-w-3xl"
          >
            We are building the Marvel of music.
            A universe where every artist has a story,
            every song has meaning,
            and every moment is designed to last 500 years.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {[
              { value: "13", label: "Virtual Artists" },
              { value: "30", label: "AI Agents" },
              { value: "∞", label: "Possibilities" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="display-lg text-white mb-3">{stat.value}</div>
                <div className="label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-page-lg">
        <div className="container-sovereign text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="label mb-8">Ready to explore?</p>
            <Link href="/universe" className="btn-sovereign">
              Enter the Universe
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
