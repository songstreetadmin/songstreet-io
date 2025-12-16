"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerSections = [
  {
    title: "Ecosystem",
    links: [
      { name: "Universe", href: "/universe" },
      { name: "Entertainment", href: "/entertainment" },
      { name: "Intelligence", href: "/intelligence" },
      { name: "Catalog", href: "/catalog" },
    ],
  },
  {
    title: "Technology",
    links: [
      { name: "SONGIQ", href: "https://songiq.io", external: true },
      { name: "Platform", href: "/technology" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Press", href: "/press" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer-sovereign">
      <div className="container-sovereign">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="label block mb-6">
              SongStreet
            </Link>
            <p className="body-sm max-w-xs">
              The future of music entertainment.
              A universe of artists, powered by intelligence.
            </p>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <span className="label block mb-6">{section.title}</span>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="body-sm flex items-center gap-1 hover:text-white transition-colors"
                      >
                        {link.name}
                        <ArrowUpRight size={12} />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="body-sm hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="divider-solid mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="body-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} SongStreet Entertainment
          </p>
          <p className="body-sm opacity-50">
            Timeless by Design
          </p>
        </div>
      </div>
    </footer>
  );
}
