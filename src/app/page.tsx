import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Pillars } from "@/components/sections/Pillars";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { ServiceTiers } from "@/components/sections/ServiceTiers";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Engagement } from "@/components/sections/Engagement";
import { Testimonials } from "@/components/sections/Testimonials";
import { WritingTeaser } from "@/components/sections/WritingTeaser";
import { PersonalTeaser } from "@/components/sections/PersonalTeaser";
import { Newsletter } from "@/components/Newsletter";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CTABand } from "@/components/CTABand";

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
      <Journey />
      <Engagement />
      <Testimonials />
      <CTABand
        className="pb-8 md:pb-12"
        title="Ready to make something real?"
        subtitle="The fastest way to know if we're a fit is a quick message. I'll be honest about whether I'm the right person."
      />
      <WritingTeaser />
      <PersonalTeaser />
      <Newsletter />
      <FAQ />
      <Contact />
    </>
  );
}
