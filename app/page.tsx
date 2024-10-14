import { Cta } from "./components/Cta";
import { Faq } from "./components/Faq";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/contact"; 

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <div id="features">
          <Features />
        </div>
        <div id="faq">
          <Faq />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <Cta />
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
