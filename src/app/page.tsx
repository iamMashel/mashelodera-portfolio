import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Pillars } from "@/components/sections/Pillars";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Engagement } from "@/components/sections/Engagement";
import { Testimonials } from "@/components/sections/Testimonials";
import { WritingTeaser } from "@/components/sections/WritingTeaser";
import { PersonalTeaser } from "@/components/sections/PersonalTeaser";
import { Newsletter } from "@/components/Newsletter";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Pillars />
      <Work />
      <Services />
      <About />
      <Journey />
      <Engagement />
      <Testimonials />
      <WritingTeaser />
      <PersonalTeaser />
      <Newsletter />
      <Contact />
    </>
  );
}
