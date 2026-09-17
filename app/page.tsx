import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import MenuSection from "@/components/MenuSection";
import Process from "@/components/Process";
import DateChecker from "@/components/DateChecker";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import QuickActionBar from "@/components/QuickActionBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <About />
        <Services />
        <MenuSection />
        <Process />
        <DateChecker />
        <Testimonials />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
      <QuickActionBar />
    </>
  );
}
