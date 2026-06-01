import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PullQuote from "@/components/PullQuote";
import Meaning from "@/components/Meaning";
import HowItWorks from "@/components/HowItWorks";
import OurStory from "@/components/OurStory";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import DonateCTA from "@/components/DonateCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PullQuote />
        <Meaning />
        <HowItWorks />
        <OurStory />
        <About />
        <Testimonials />
        <FinalCTA />
        <DonateCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      <RevealOnScroll />
    </>
  );
}
