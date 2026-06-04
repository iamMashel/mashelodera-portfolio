import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { WritingTeaser } from "@/components/sections/WritingTeaser";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <WritingTeaser />
      <Contact />
    </>
  );
}
