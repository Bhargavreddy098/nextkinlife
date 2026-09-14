import { NAV_LINKS } from "@/lib/site";
import { OFFICES } from "@/lib/data";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink-border bg-ink text-ink-foreground">
      <div className="container-site py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              A global technology company engineering custom software, AI systems, data platforms
              and cloud infrastructure for ambitious businesses.
            </p>
            <p className="eyebrow mt-8 text-jade-bright">Global delivery</p>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-muted">
              {OFFICES.map((o) => (
                <li key={o.city}>
                  <span className="text-white/85">{o.city}</span> — {o.country}
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <p className="eyebrow text-white/50">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Capabilities quick list */}
          <div>
            <p className="eyebrow text-white/50">Capabilities</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
              <li><a href="#capabilities" className="transition-colors hover:text-white">Custom Software</a></li>
              <li><a href="#capabilities" className="transition-colors hover:text-white">AI &amp; Automation</a></li>
              <li><a href="#capabilities" className="transition-colors hover:text-white">Data Engineering</a></li>
              <li><a href="#capabilities" className="transition-colors hover:text-white">Cloud &amp; DevOps</a></li>
              <li><a href="#capabilities" className="transition-colors hover:text-white">Enterprise Systems</a></li>
              <li><a href="#capabilities" className="transition-colors hover:text-white">Technology Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-white/50">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="mailto:hello@kaidron.com" className="text-white/85 link-underline">
                  hello@kaidron.com
                </a>
              </li>
              <li>
                <a href="mailto:careers@kaidron.com" className="text-white/85 link-underline">
                  careers@kaidron.com
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-jade-bright/60 hover:text-jade-bright"
            >
              Start a conversation
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kaidron Technologies. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-jade-bright" aria-hidden="true" />
            Engineering the systems behind ambitious businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
