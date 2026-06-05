import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Pillars } from "@/components/sections/Pillars";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { ServiceTiers } from "@/components/sections/ServiceTiers";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { WritingTeaser } from "@/components/sections/WritingTeaser";
import { PersonalTeaser } from "@/components/sections/PersonalTeaser";
import { Newsletter } from "@/components/Newsletter";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CTABand } from "@/components/CTABand";

// Distilled flow: spike (hero + pillars) -> proof (work) -> offer (services +
// tiers) -> who (about) -> trust (testimonials) -> more (writing/personal) ->
// one path (contact). Journey lives on /timeline; the old Engagement section and
// the second CTA band were cut as redundant.
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Pillars />
      <Work />
      <CTABand className="pb-8 md:pb-12" />
      <Services />
      <ServiceTiers />
      <About />
      <Testimonials />
      <WritingTeaser />
      <PersonalTeaser />
      <Newsletter />
      <FAQ />
      <Contact />
    </>
  );
}
