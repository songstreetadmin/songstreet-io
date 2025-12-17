"use client";

import { motion } from "framer-motion";
import { Music, Users, Disc } from "lucide-react";

const artists = [
  { name: "THE NEIGHBRS", genre: "R&B / Soul", status: "Lead Artist", tracks: 12, color: "#d946ef" },
  { name: "MASON STONE", genre: "Country / Pop", status: "Priority", tracks: 8, color: "#a855f7" },
  { name: "MACEY STONE", genre: "Pop / Country", status: "Active", tracks: 6, color: "#8b5cf6" },
  { name: "YUNA LEE", genre: "K-Pop / R&B", status: "Active", tracks: 7, color: "#06b6d4" },
  { name: "AKANNI", genre: "Afrobeats", status: "Active", tracks: 5, color: "#ec4899" },
  { name: "BROKEN VESSELS", genre: "Gospel / CCM", status: "Active", tracks: 4, color: "#f97316" },
  { name: "SIERRA BELLO", genre: "Latin Pop", status: "Active", tracks: 6, color: "#eab308" },
  { name: "VINCENT BERRY II", genre: "Hip-Hop / Soul", status: "Active", tracks: 9, color: "#22c55e" },
  { name: "NIA UDO", genre: "Afro-Soul", status: "Active", tracks: 5, color: "#14b8a6" },
  { name: "PIERRE SUNDAY", genre: "Jazz / Soul", status: "Active", tracks: 6, color: "#3b82f6" },
  { name: "VNICE", genre: "Electronic / Pop", status: "Active", tracks: 4, color: "#6366f1" },
  { name: "ESI ISAH", genre: "Afrobeats", status: "Development", tracks: 3, color: "#f43f5e" },
  { name: "DNJR", genre: "Hip-Hop", status: "Development", tracks: 3, color: "#84cc16" },
];

export function Artists() {
  return (
    <section id="artists" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-fuchsia-500/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-fuchsia-400 uppercase tracking-[0.3em] text-xs mb-4">The Roster</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            19 vArtists
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A diverse roster of AI-powered vArtists spanning genres from R&B to K-Pop,
            Country to Afrobeats. Each with unique personas, voices, and creative visions.
          </p>
        </motion.div>

        {/* Featured Artists (Top 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {artists.slice(0, 3).map((artist, i) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden card-hover"
            >
              {/* Gradient Top */}
              <div
                className="h-40 relative"
                style={{ background: `linear-gradient(135deg, ${artist.color}40, transparent)` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${artist.color}30` }}
                  >
                    <Music size={32} style={{ color: artist.color }} />
                  </div>
                </div>
                {artist.status === "Lead Artist" && (
                  <span className="absolute top-4 right-4 bg-fuchsia-500 text-white text-xs px-3 py-1 rounded-full">
                    Lead
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{artist.name}</h3>
                <p className="text-white/40 text-sm mb-4">{artist.genre}</p>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-white/50">
                    <Disc size={14} />
                    <span>{artist.tracks} Tracks</span>
                  </div>
                  <div
                    className="px-2 py-0.5 rounded text-xs"
                    style={{ backgroundColor: `${artist.color}20`, color: artist.color }}
                  >
                    {artist.status}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${artist.color}10, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* All Artists Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {artists.slice(3).map((artist, i) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-xl p-4 card-hover cursor-pointer"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: `${artist.color}20` }}
              >
                <Users size={16} style={{ color: artist.color }} />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1 truncate">{artist.name}</h4>
              <p className="text-xs text-white/40 truncate">{artist.genre}</p>

              {/* Hover Glow */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 30px ${artist.color}20` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gradient-to-r from-fuchsia-500/5 via-purple-500/5 to-cyan-500/5 rounded-2xl border border-white/5"
        >
          {[
            { value: "75+", label: "Total Tracks" },
            { value: "29", label: "Release Ready" },
            { value: "52", label: "Weekly Releases/Year" },
            { value: "8+", label: "Genres Covered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-white/40 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
