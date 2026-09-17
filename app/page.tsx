import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import VenueTransformation from "@/components/VenueTransformation";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import EventStories from "@/components/EventStories";
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
        <VenueTransformation />
        <Process />
        <Gallery />
        <EventStories />
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
