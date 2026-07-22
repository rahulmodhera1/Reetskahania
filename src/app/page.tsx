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
      <Nav />
      <main>
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
