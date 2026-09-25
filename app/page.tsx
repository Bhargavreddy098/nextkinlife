import { DashboardShowcase } from "@/components/landing/DashboardShowcase";
import { DataIsolation } from "@/components/landing/DataIsolation";
import { ExperienceSplit } from "@/components/landing/ExperienceSplit";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { FinalCta } from "@/components/landing/FinalCta";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ProductFragmentation } from "@/components/landing/ProductFragmentation";
import { TrustSecurity } from "@/components/landing/TrustSecurity";
import { WorkAuthorization } from "@/components/landing/WorkAuthorization";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductFragmentation />
      <FeatureGrid />
      <DashboardShowcase />
      <WorkAuthorization />
      <DataIsolation />
      <ExperienceSplit />
      <HowItWorks />
      <TrustSecurity />
      <FinalCta />
    </>
  );
}
