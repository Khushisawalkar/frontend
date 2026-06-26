import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#172B36",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "AetherFlow | Advanced AI Telemetry Platform",
  description:
    "Build, orchestrate, and scale AI infrastructure with sub-millisecond telemetry and enterprise-grade automation.",
  keywords: [
    "AI",
    "Infrastructure",
    "Automation",
    "Machine Learning",
    "Cloud",
    "Data",
    "Telemetry",
    "Edge Nodes"
  ],
  authors: [{ name: "Khushi Sawalkar" }],
  creator: "Khushi Sawalkar",
  openGraph: {
    title: "AetherFlow",
    description: "Enterprise AI Infrastructure Platform",
    url: "https://Khushisawalkar.github.io/frontend/",
    siteName: "AetherFlow",
    images: [
      {
        url: "https://Khushisawalkar.github.io/frontend/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AetherFlow | Advanced AI Telemetry Platform",
    description: "Build, orchestrate, and scale AI infrastructure with sub-millisecond telemetry.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
