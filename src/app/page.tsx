import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { Hero } from "@/components/site/sections/hero";
import { Capabilities } from "@/components/site/sections/capabilities";
import { Approach } from "@/components/site/sections/approach";
import { Innovation } from "@/components/site/sections/innovation";
import { Careers } from "@/components/site/sections/careers";
import { ContactCta } from "@/components/site/sections/contact-cta";
import { SectionHeader } from "@/components/site/section-header";
import { TechTabs } from "@/components/site/tech-tabs";
import { ProcessExplorer } from "@/components/site/process-explorer";
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
      telephone: SITE.phone,
      foundingDate: SITE.founded,
      sameAs: [SITE.socials.instagram],
      address: {
        "@type": "PostalAddress",
        streetAddress: "8795 Stonehouse Dr",
        addressLocality: "Ellicott City",
        addressRegion: "MD",
        postalCode: "21043",
        addressCountry: "US",
      },
      areaServed: ["United States", "India", "South Africa"],
      knowsAbout: [
        "Custom web applications",
        "Data engineering and analytics",
        "AI integration",
        "Cloud services",
        "Enterprise software development",
        "IT consulting",
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
        <Approach />

        {/* Technology */}
        <section id="technology" className="scroll-mt-20 bg-background py-24 sm:py-32">
          <div className="container-site">
            <SectionHeader
              eyebrow="Technology"
              title="A stack chosen for outcomes, not fashion."
              description="Tools earn their place by how they perform in production. Here's what we build with — and where each one earns its keep in your product."
            />
            <TechTabs />
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-20 bg-paper-2 py-24 sm:py-32">
          <div className="container-site">
            <SectionHeader
              eyebrow="Our Process"
              title="The 6-D process, without the mystery."
              description="Discover, Define, Design, Develop, Deploy, Deliver — six deliberate stages that take your project from first conversation to long-term success, and keep you informed at every step."
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
