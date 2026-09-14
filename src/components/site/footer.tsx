import { NAV_LINKS, SITE } from "@/lib/site";
import { OFFICES, CAPABILITIES } from "@/lib/data";
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
              A global IT services &amp; consulting company delivering end-to-end software,
              data, AI and cloud solutions across the USA, India and South Africa.
            </p>
            <p className="eyebrow mt-8 text-jade-bright">Global reach</p>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-muted">
              {OFFICES.map((o) => (
                <li key={o.city}>
                  <span className="text-white/85">{o.city}</span>
                  {o.city !== o.country ? ` — ${o.country}` : ""}
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <p className="eyebrow text-white/50">Company</p>
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
              <li>
                <a href="#contact" className="text-sm text-ink-muted transition-colors hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Services quick list */}
          <div>
            <p className="eyebrow text-white/50">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
              {CAPABILITIES.map((c) => (
                <li key={c.id}>
                  <a href="#capabilities" className="transition-colors hover:text-white">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-white/50">Get in touch</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${SITE.email}`} className="text-white/85 link-underline">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="text-white/85 link-underline">
                  {SITE.phone}
                </a>
              </li>
              <li className="text-ink-muted">8795 Stonehouse Dr, Ellicott City, MD 21043</li>
              <li className="text-ink-muted">403 Kyalami Hills, Maple Drive, Midrand, Gauteng 1684</li>
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
          <p>© {new Date().getFullYear()} NextKinLife. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-jade-bright" aria-hidden="true" />
            Where innovation meets purpose
          </p>
        </div>
      </div>
    </footer>
  );
}
