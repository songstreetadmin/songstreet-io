import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SongStreet Universe | AI-Powered Entertainment Ecosystem",
  description: "19 vArtists. 67 AI Agents. 286 Music Assets. The future of music entertainment powered by intelligence.",
  keywords: ["SongStreet", "AI Music", "vArtists", "Music Entertainment", "SONGIQ", "Charter Financial Trust"],
  authors: [{ name: "SongStreet Entertainment" }],
  openGraph: {
    title: "SongStreet Universe",
    description: "The future of music entertainment powered by AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SongStreet Universe",
    description: "The future of music entertainment powered by AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030303] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
