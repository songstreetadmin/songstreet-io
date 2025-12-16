"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Universe", href: "/universe" },
  { name: "Entertainment", href: "/entertainment" },
  { name: "Intelligence", href: "/intelligence" },
  { name: "Catalog", href: "/catalog" },
  { name: "Technology", href: "/technology" },
  { name: "AI Desk", href: "/ai-desk" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`nav-sovereign ${scrolled ? "scrolled" : ""}`}>
        <div className="container-sovereign">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="link-sovereign">
              <span className="label">SongStreet</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`label link-sovereign ${
                    pathname === link.href ? "opacity-100" : "opacity-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <Link href="/contact" className="hidden md:block btn-ghost">
              Contact
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-px bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-px bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-px bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black"
          >
            <div className="container-sovereign h-full flex flex-col justify-center">
              <nav className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="display-md text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="display-md text-white/80 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </motion.div>
              </nav>

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 p-2"
                aria-label="Close menu"
              >
                <span className="w-6 h-px bg-white block rotate-45 translate-y-0.5" />
                <span className="w-6 h-px bg-white block -rotate-45 -translate-y-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
