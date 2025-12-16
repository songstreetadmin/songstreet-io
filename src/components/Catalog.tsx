"use client";

import { motion } from "framer-motion";
import { Play, Clock, TrendingUp, Disc3 } from "lucide-react";

const featuredReleases = [
  {
    title: "Don't Tell Nobody",
    artist: "THE NEIGHBRS",
    status: "Release Ready",
    genre: "R&B",
    duration: "3:42",
    rating: 89,
  },
  {
    title: "You'll Never See Me Again",
    artist: "THE NEIGHBRS",
    status: "Release Ready",
    genre: "Soul",
    duration: "4:15",
    rating: 87,
  },
  {
    title: "Before You Say Goodbye",
    artist: "MASON STONE",
    status: "Release Ready",
    genre: "Country",
    duration: "3:28",
    rating: 85,
  },
  {
    title: "Trucker",
    artist: "MASON STONE",
    status: "Release Ready",
    genre: "Country Pop",
    duration: "3:55",
    rating: 82,
  },
  {
    title: "Over & Over",
    artist: "MASON STONE",
    status: "Release Ready",
    genre: "Pop Country",
    duration: "3:31",
    rating: 84,
  },
];

const catalogStats = [
  { label: "Total Assets", value: "286", icon: Disc3 },
  { label: "Release Ready", value: "29", icon: TrendingUp },
  { label: "In Production", value: "46", icon: Clock },
  { label: "Investment ROI", value: "$8.85M", icon: TrendingUp },
];

export function Catalog() {
  return (
    <section id="catalog" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs mb-4">Music Library</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            286 Assets
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A growing catalog of professionally produced music across multiple genres,
            ready for commercial release and sync licensing opportunities.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {catalogStats.map((stat, i) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 text-center"
            >
              <stat.icon className="mx-auto mb-3 text-cyan-400" size={24} />
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Releases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Phase 1 Launch Candidates</h3>

          <div className="space-y-4">
            {featuredReleases.map((track, i) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer card-hover"
              >
                {/* Play Button */}
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Play size={18} className="text-white/50 group-hover:text-cyan-400 transition-colors ml-0.5" />
                </div>

                {/* Track Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold truncate">{track.title}</h4>
                  <p className="text-white/40 text-sm truncate">{track.artist}</p>
                </div>

                {/* Genre Badge */}
                <div className="hidden md:block">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-white/50 text-xs">
                    {track.genre}
                  </span>
                </div>

                {/* Duration */}
                <div className="hidden sm:flex items-center gap-1 text-white/40 text-sm">
                  <Clock size={14} />
                  <span>{track.duration}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500"
                      style={{ width: `${track.rating}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-white">{track.rating}</span>
                </div>

                {/* Status */}
                <div className="hidden lg:block">
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs">
                    {track.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 md:p-12 rounded-3xl border border-white/5 bg-gradient-to-r from-cyan-500/5 via-transparent to-fuchsia-500/5"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                $5M Marketing Investment
              </h3>
              <p className="text-white/50 mb-6">
                Strategic allocation of $50K per song with industry-leading ROI projections
                of $1.77 per marketing dollar invested.
              </p>
              <div className="flex gap-4">
                <div>
                  <div className="text-3xl font-bold gradient-text">100</div>
                  <div className="text-white/40 text-sm">Song Campaign</div>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <div className="text-3xl font-bold gradient-text">$8.85M</div>
                  <div className="text-white/40 text-sm">Projected Return</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Investment Breakdown Visual */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Production", pct: 30 },
                  { label: "Marketing", pct: 45 },
                  { label: "Distribution", pct: 25 },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-2">
                      <svg className="w-full h-full -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="35"
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="6"
                          fill="none"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="35"
                          stroke="url(#gradient)"
                          strokeWidth="6"
                          fill="none"
                          strokeDasharray={`${item.pct * 2.2} 220`}
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#d946ef" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold">{item.pct}%</span>
                      </div>
                    </div>
                    <span className="text-white/40 text-xs">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
