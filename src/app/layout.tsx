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

export const metadata: Metadata = {
  title: "AetherFlow | AI Infrastructure",
  description:
    "Build, orchestrate and scale AI infrastructure with enterprise-grade automation.",
  keywords: [
    "AI",
    "Infrastructure",
    "Automation",
    "Machine Learning",
    "Cloud",
    "Data",
  ],
  authors: [{ name: "Khushi Sawalkar" }],
  creator: "Khushi Sawalkar",
  themeColor: "#172B36",
  openGraph: {
    title: "AetherFlow",
    description:
      "Enterprise AI Infrastructure Platform",
    type: "website",
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
