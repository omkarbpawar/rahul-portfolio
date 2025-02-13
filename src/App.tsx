import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import ServiceApplications from "./components/ServiceApplications";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FBF9F4]">
      <Navbar />
      <Hero />
      <ServicesSection />
      <ServiceApplications />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
