// New Components to Add:
// - CaseStudiesSection
// - HowIWorkTimeline
// - FloatingChatButton

import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
// import { ExperienceSection } from "../components/ExperienceSection";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { FAQAccordion } from "../components/FAQAccordion";

import { FloatingWhatsappChat } from "../components/FloatingWhatsappChat";
import { ScheduleCall } from "../components/ScheduleCall";
import { ServiceSection } from "../components/ServiceSection";
import { HowIWork } from "../components/HowIWork";
import { UIUXShowcase } from "../components/UIUXShowcase";
//import { DigitalGardenSection } from "../components/DigitalGardenSection.jsx";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <UIUXShowcase />
        <SkillsSection />
        {/* <ExperienceSection /> */}
        <ProjectsSection />
        <HowIWork />
        {/* <DigitalGardenSection /> */}
        <TestimonialCarousel />
        <FAQAccordion />
        <ContactSection />
        <ScheduleCall />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <FloatingWhatsappChat />
    </div>
  );
};
