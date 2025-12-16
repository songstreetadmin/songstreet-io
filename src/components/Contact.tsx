"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Building2, Music } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-t from-fuchsia-500/10 via-purple-500/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6">
            Join the
            <br />
            <span className="gradient-text">Universe</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10">
            Whether you're an investor, artist, or industry partner,
            there's a place for you in the SongStreet ecosystem.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: Building2,
              title: "Investors",
              description: "Access our data room and learn about investment opportunities in the $95M+ trust structure.",
              cta: "Request Access",
              color: "#d946ef",
            },
            {
              icon: Music,
              title: "Artists",
              description: "Join our roster of virtual artists and leverage our AI-powered production pipeline.",
              cta: "Apply Now",
              color: "#a855f7",
            },
            {
              icon: Mail,
              title: "Partners",
              description: "Explore sync licensing, distribution deals, and strategic partnership opportunities.",
              cta: "Get in Touch",
              color: "#06b6d4",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all card-hover"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${card.color}20` }}
              >
                <card.icon size={28} style={{ color: card.color }} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-white/50 mb-6">{card.description}</p>

              <button
                className="flex items-center gap-2 font-semibold group-hover:gap-3 transition-all"
                style={{ color: card.color }}
              >
                {card.cta}
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-white/50 mb-6">
            Get the latest news on releases, artist updates, and ecosystem developments.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-fuchsia-500/50 transition-colors"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
