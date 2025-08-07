import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AISection from "./components/AISection";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <AISection />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default App;