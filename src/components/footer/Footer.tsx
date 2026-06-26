import Link from "next/link";

const sectionLinks = [
  { title: "Solutions", href: "#solutions" },
  { title: "Features", href: "#features" },
  { title: "Developers", href: "#developers" },
  { title: "Pricing", href: "#pricing" },
];

const resourceLinks = [
  { title: "Documentation", href: "/get-started" },
  { title: "Watch the demo", href: "/demo" },
  { title: "Get started", href: "/get-started" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-arctic/10 bg-oceanic/40 pt-32 pb-12 overflow-hidden z-10">
      <div className="section max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-24">

          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-nocturnal to-oceanic border border-arctic/10 shadow-lg">
                <span className="font-serif italic font-medium text-arctic/90 text-lg">A</span>
              </div>
              <span className="text-[17px] font-medium tracking-wide text-arctic/90">AetherFlow</span>
            </Link>
            <p className="text-arctic/50 text-[15px] leading-relaxed font-light max-w-sm">
              Build, orchestrate, and scale AI infrastructure with sub-millisecond telemetry and enterprise-grade automation.
            </p>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-mono text-arctic/70 mb-8 text-[11px] uppercase tracking-widest">Platform</h4>
            <ul className="space-y-5 text-[15px] text-arctic/50 font-light">
              {sectionLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:text-arctic transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-mono text-arctic/70 mb-8 text-[11px] uppercase tracking-widest">Resources</h4>
            <ul className="space-y-5 text-[15px] text-arctic/50 font-light">
              {resourceLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:text-arctic transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-4 flex flex-col items-start md:items-end md:text-right">
            <h4 className="font-mono text-arctic/70 mb-8 text-[11px] uppercase tracking-widest">Stay in sync</h4>
            <p className="text-arctic/50 text-[15px] font-light leading-relaxed mb-6 max-w-[240px]">
              Product updates, quietly, once a month. No noise.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center rounded-full bg-arctic/5 border border-arctic/10 px-6 py-3 text-[14px] font-medium text-arctic hover:bg-arctic hover:text-oceanic transition-all duration-500 shadow-[0_0_20px_rgba(241,246,244,0.05)] hover:shadow-[0_10px_30px_rgba(241,246,244,0.1)]"
            >
              Join the quiet
            </Link>
          </div>

        </div>

        <div className="pt-8 border-t border-arctic/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-arctic/40 text-[13px] font-mono font-light">
            &copy; {new Date().getFullYear()} AetherFlow Intelligence. All rights reserved.
          </p>
          <a
            href="#"
            className="text-arctic/40 hover:text-arctic text-[11px] font-mono uppercase tracking-widest transition-colors flex items-center gap-2 group"
          >
            Back to top
            <span className="w-5 h-5 rounded-full border border-arctic/10 flex items-center justify-center group-hover:bg-arctic group-hover:text-oceanic transition-colors">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
