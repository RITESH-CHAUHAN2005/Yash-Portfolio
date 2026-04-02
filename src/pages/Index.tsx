import CursorGlow from "@/components/CursorGlow";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import FeaturedWork from "@/components/FeaturedWork";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <CursorGlow />
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="skills">
        <SkillsSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
      <section id="featured-work">
        <FeaturedWork />
      </section>
      <section id="video">
        <VideoShowcaseSection />
      </section>
      <section id="process">
        <ProcessSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
