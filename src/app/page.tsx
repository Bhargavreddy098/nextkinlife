import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Hero } from "@/components/site/sections/hero";
import { Capabilities } from "@/components/site/sections/capabilities";
import { Work } from "@/components/site/sections/work";
import { Innovation } from "@/components/site/sections/innovation";
import { Careers } from "@/components/site/sections/careers";
import { ContactCta } from "@/components/site/sections/contact-cta";
import { SectionHeader } from "@/components/site/section-header";
import { TechTabs } from "@/components/site/tech-tabs";
import { ProcessExplorer } from "@/components/site/process-explorer";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.legalName,
      alternateName: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/icon.svg`,
      description: SITE.description,
      email: SITE.email,
      foundingDate: SITE.founded,
      sameAs: [SITE.socials.linkedin, SITE.socials.github, SITE.socials.x],
      areaServed: ["United States", "India", "South Africa"],
      knowsAbout: [
        "Custom software development",
        "Artificial intelligence",
        "Data engineering",
        "Cloud computing",
        "Enterprise software",
        "Technology consulting",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Capabilities />
        <Work />

        {/* Technology */}
        <section id="technology" className="scroll-mt-20 bg-background py-24 sm:py-32">
          <div className="container-site">
            <SectionHeader
              eyebrow="Technology"
              title="A stack chosen for outcomes, not fashion."
              description="Tools earn their place by how they perform in production. Here's what we build with — and more importantly, where each one earns its keep."
            />
            <TechTabs />
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-20 bg-paper-2 py-24 sm:py-32">
          <div className="container-site">
            <SectionHeader
              eyebrow="Process"
              title="From first call to production — without the mystery."
              description="Six deliberate stages with named deliverables at every step. You always know what's happening, what's next, and what it costs."
            />
            <ProcessExplorer />
          </div>
        </section>

        <Innovation />
        <Careers />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
