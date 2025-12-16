"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const contactTypes = [
  { title: "Investors", description: "Access our data room and explore opportunities.", cta: "Request Access" },
  { title: "Artists", description: "Join the SongStreet universe.", cta: "Apply Now" },
  { title: "Partners", description: "Sync licensing and strategic partnerships.", cta: "Start Conversation" },
  { title: "Press", description: "Media inquiries and press materials.", cta: "Press Kit" },
];

export default function ContactPage() {
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
            <p className="label mb-4">Get in Touch</p>
            <h1 className="display-lg text-white mb-6">Contact</h1>
            <p className="body-lg max-w-xl">
              Whether you're an investor, artist, or partner,
              we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Types */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="grid sm:grid-cols-2 gap-px bg-white/[0.04]">
            {contactTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-black p-8 lg:p-12 group cursor-pointer hover:bg-white/[0.01] transition-colors"
              >
                <h3 className="text-lg font-light text-white mb-3 group-hover:opacity-60 transition-opacity">
                  {type.title}
                </h3>
                <p className="body-sm mb-6">{type.description}</p>
                <span className="btn-ghost">
                  {type.cta}
                  <ArrowRight size={10} />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <p className="label">General Inquiries</p>
            </div>
            <div className="md:col-span-3">
              <a
                href="mailto:hello@songstreet.com"
                className="display-md text-white hover:opacity-50 transition-opacity flex items-center gap-4"
              >
                <Mail size={24} className="opacity-25" />
                hello@songstreet.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="max-w-md">
            <p className="label mb-4">Stay Updated</p>
            <p className="body-lg mb-8">
              Get the latest on releases, artist updates, and ecosystem news.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-transparent border border-white/[0.08] text-white text-sm placeholder-white/25 focus:outline-none focus:border-white/20 transition-colors"
              />
              <button type="submit" className="btn-sovereign whitespace-nowrap">
                Subscribe
              </button>
            </form>
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
