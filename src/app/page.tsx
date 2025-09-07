import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageGrid from "@/components/ImageGrid";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";
import FloatingAlert from "@/components/FloatingAlert";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ImageGrid />
      <About />
      <Services />
      <Contact />
      <SocialLinks />
      <FloatingAlert />
      <Footer />
    </main>
  );
}
