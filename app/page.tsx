import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyItMatters from "@/components/WhyItMatters";
import Stat from "@/components/Stat";
import HowItWorks from "@/components/HowItWorks";
import MeetTheSofer from "@/components/MeetTheSofer";
import WhatWeCheck from "@/components/WhatWeCheck";
import IfNeedsReplacement from "@/components/IfNeedsReplacement";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import OurMezuzot from "@/components/OurMezuzot";
import ProjectModel from "@/components/ProjectModel";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyItMatters />
        <Stat />
        <HowItWorks />
        <MeetTheSofer />
        <WhatWeCheck />
        <IfNeedsReplacement />
        <Gallery />
        <Testimonials />
        <OurMezuzot />
        <ProjectModel />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      <RevealOnScroll />
    </>
  );
}
