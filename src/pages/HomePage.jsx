import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import AISection from "../components/AISection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CallToAction from "../components/CallToAction";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <AISection />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </main>
  );
};

export default HomePage;
