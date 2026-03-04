import React, { useState, useEffect } from "react";
// Component Imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Products from "./components/ProductsSection";
import Services from "./components/ServicesSection";
import Leadership from "./components/Leadership";
import Testimonials from "./components/TestimonialsSection"; // Import the new component
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certications from "./components/CertificationsSection";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#F9F7F2] min-h-screen selection:bg-[#C5A059] selection:text-white overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-20">
          <AboutUs />
        </section>

        <section id="products" className="scroll-mt-20">
          <Products />
        </section>

        <section id="services" className="scroll-mt-20">
          <Services />
        </section>

        <section id="team" className="scroll-mt-20">
          <Leadership />
        </section>

        <section id="testimonials" className="scroll-mt-20">
          <Testimonials />
        </section>

        <section id="certifications" className="scroll-mt-20">
          <Certications />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
