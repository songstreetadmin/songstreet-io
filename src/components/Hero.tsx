"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

        {/* Grid Background */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Orbital Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "40s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/50 uppercase tracking-[0.3em] text-xs md:text-sm mb-6"
          >
            Welcome to the Future of Music Entertainment
          </motion.p>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6">
            <span className="text-white">THE</span>
            <br />
            <span className="gradient-text">SONGSTREET</span>
            <br />
            <span className="text-white">UNIVERSE</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            19 vArtists. 67 AI Agents. 286 Music Assets.
            One Unified Entertainment Ecosystem Powered by Intelligence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#artists" className="btn-primary flex items-center justify-center gap-2">
              <Play size={18} />
              Explore Artists
            </a>
            <a href="#intelligence" className="btn-outline flex items-center justify-center gap-2">
              Discover Intelligence
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={16} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-[#030303]/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "13", label: "vArtists" },
              { value: "67", label: "AI Agents" },
              { value: "286", label: "Music Assets" },
              { value: "$95M+", label: "Trust Structure" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
