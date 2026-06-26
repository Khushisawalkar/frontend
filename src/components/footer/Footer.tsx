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
    <footer className="relative border-t border-arctic/10 bg-oceanic/40 pt-24 pb-10 overflow-hidden z-10">
      <div className="section max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-nocturnal to-oceanic border border-arctic/10">
                <span className="font-serif italic font-medium text-arctic/90 text-base">A</span>
              </div>
              <span className="text-[16px] font-medium tracking-wide text-arctic/90">AetherFlow</span>
            </Link>
            <p className="text-arctic/50 text-[14px] leading-relaxed font-light max-w-xs">
              Build, orchestrate, and scale AI infrastructure with sub-millisecond telemetry and enterprise-grade automation.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-arctic/70 mb-6 text-[12px] uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4 text-[14px] text-arctic/50 font-light">
              {sectionLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:text-arctic transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-arctic/70 mb-6 text-[12px] uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4 text-[14px] text-arctic/50 font-light">
              {resourceLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:text-arctic transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-arctic/70 mb-6 text-[12px] uppercase tracking-widest">Stay in sync</h4>
            <p className="text-arctic/50 text-[14px] font-light leading-relaxed mb-4">
              Product updates, quietly, once a month. No noise.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center rounded-full bg-arctic/5 border border-arctic/10 px-5 py-2.5 text-[13px] font-medium text-arctic hover:bg-arctic hover:text-oceanic transition-all duration-500"
            >
              Get Started
            </Link>
          </div>

        </div>

        <div className="pt-8 border-t border-arctic/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-arctic/40 text-[12px] font-mono">
            &copy; {new Date().getFullYear()} AetherFlow Intelligence. All rights reserved.
          </p>
          <a
            href="#"
            className="text-arctic/50 hover:text-arctic text-[12px] font-mono uppercase tracking-widest transition-colors"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
