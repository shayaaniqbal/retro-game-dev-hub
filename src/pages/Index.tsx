import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechSkillsSection from "@/components/TechSkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";
import LoadingScreen from "@/components/LoadingScreen";
import PixelDecoration from "@/components/PixelDecoration";
import ScrollToTop from "@/components/ScrollToTop";
import RetroCursor from "@/components/RetroCursor";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Initial Loading Screen */}
      <LoadingScreen isLoading={isLoading} />
      
      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <PixelDecoration />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <TechSkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
        <EasterEgg />
        <ScrollToTop />
        <RetroCursor />
      </div>
    </>
  );
};

export default Index;
