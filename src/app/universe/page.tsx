"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const artists = [
  { id: "01", name: "The Neighbrs", genre: "R&B / Soul", status: "Lead", logo: "/artists/the-neighbrs.png" },
  { id: "02", name: "Mason Stone", genre: "Country / Pop", status: "Priority", logo: "/artists/mason-stone.png" },
  { id: "03", name: "Macey Stone", genre: "Pop / Country", status: "Active", logo: "/artists/macey-stone.png" },
  { id: "04", name: "Yuna Lee", genre: "K-Pop / R&B", status: "Active", logo: "/artists/yuna-lee.png" },
  { id: "05", name: "Akanni", genre: "Afrobeats", status: "Active", logo: "/artists/akanni.png" },
  { id: "06", name: "Broken Vessels", genre: "Gospel / CCM", status: "Active", logo: "/artists/broken-vessels.png" },
  { id: "07", name: "Sierra Bello", genre: "Latin Pop", status: "Active", logo: "/artists/sierra-bello.png" },
  { id: "08", name: "Vincent Berry II", genre: "Hip-Hop / Soul", status: "Active", logo: "/artists/vincent-berry-ii.png" },
  { id: "09", name: "Nia Udo", genre: "Afro-Soul", status: "Active", logo: "/artists/nia-udo.png" },
  { id: "10", name: "Pierre Sunday", genre: "Jazz / Soul", status: "Active", logo: "/artists/pierre-sunday.png" },
  { id: "11", name: "Michael Jiminez", genre: "R&B / Hip-Hop", status: "Active", logo: "/artists/michael-jiminez.png" },
  { id: "12", name: "DNJR", genre: "Hip-Hop", status: "Active", logo: "/artists/dnjr.png" },
  { id: "13", name: "Divina Rispetto", genre: "Pop / Soul", status: "Active", logo: "/artists/divina-rispetto.png" },
  { id: "14", name: "Paxton Jackson", genre: "Country / Rock", status: "Active", logo: "/artists/paxton-jackson.png" },
  { id: "15", name: "Kiaro VxN", genre: "Electronic / Pop", status: "Active", logo: "/artists/kiaro-vxn.png" },
  { id: "16", name: "Ikechukwu", genre: "Afrobeats", status: "Active", logo: "/artists/ikechukwu.png" },
  { id: "17", name: "Lani Akinlami", genre: "Afro-Soul", status: "Active", logo: "/artists/lani-akinlami.png" },
  { id: "18", name: "Space Galaxy", genre: "Electronic / Experimental", status: "Active", logo: "/artists/space-galaxy.png" },
  { id: "19", name: "Moontime", genre: "Indie / Alternative", status: "Active", logo: "/artists/moontime.png" },
];

export default function UniversePage() {
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
            <p className="label mb-4">The Universe</p>
            <h1 className="display-lg text-white mb-6">19 vArtists</h1>
            <p className="body-lg max-w-xl">
              Each artist in the SongStreet Universe has their own story,
              sound, and identity. Every character exists within a connected
              world of creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="section-page border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {artists.map((artist, i) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group bg-black p-8 lg:p-10 cursor-pointer hover:bg-white/[0.015] transition-all duration-500 text-center"
              >
                <span className="label opacity-25 block mb-6">{artist.id}</span>

                {artist.logo ? (
                  <div className="relative w-32 h-32 mb-6 mx-auto group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={artist.logo}
                      alt={artist.name}
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                ) : (
                  <div className="artist-avatar w-16 h-16 rounded-full mb-6 mx-auto">
                    <span className="text-sm">{artist.name.charAt(0)}</span>
                  </div>
                )}

                <h3 className="text-lg font-light text-white mb-2 group-hover:opacity-60 transition-opacity">
                  {artist.name}
                </h3>
                <p className="body-sm mb-4">{artist.genre}</p>
                <span className="label opacity-40">{artist.status}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-page-lg border-t border-white/[0.04]">
        <div className="container-sovereign">
          <div className="max-w-2xl">
            <p className="label mb-6">The Vision</p>
            <p className="display-md text-white/70 leading-relaxed mb-6">
              Every artist in our universe has been crafted with intention.
              Their stories interweave, their sounds complement, their
              legacies are designed to endure.
            </p>
            <p className="body-lg">
              This is not a label. This is a universe.
            </p>
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="py-12 border-t border-white/[0.04]">
        <div className="container-sovereign">
          <Link href="/entertainment" className="group flex items-center justify-between py-6">
            <div>
              <p className="label mb-2 opacity-40">Next</p>
              <span className="display-md text-white group-hover:opacity-50 transition-opacity">
                Entertainment
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
