import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Portfolio } from "@/components/site/portfolio";
import { ServiceArea } from "@/components/site/service-area";
import { Testimonials } from "@/components/site/testimonials";
import { SocialProof } from "@/components/site/social-proof";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-on-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ServiceArea />
        <Testimonials />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
