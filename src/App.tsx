import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import ServiceApplications from "./components/ServiceApplications";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Contact from "./components/Contact";
import MissionSection from "./components/DiscoverMissionVision";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FBF9F4]">
      <Navbar />
      <Hero id="hero" />
      <MissionSection id="mission" />
      <ServicesSection id="services" />
      <ServiceApplications id="applications" />
      <Team id="team" />
      <Contact id="contact" />
      <Footer id="footer" />
    </div>
  );
};

export default App;
