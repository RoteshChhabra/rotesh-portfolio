// src/App.tsx

import { useState } from "react";

import useActiveSection from "./hooks/useActiveSection";
import useTheme from "./hooks/useTheme";
import useGreeting from "./hooks/useGreeting";

import NavMenu from "./components/layout/NavMenu";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectSection";
// import SkillsSection from "./components/sections/SkillsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { activeSection } = useActiveSection();
  const { theme, toggleTheme } = useTheme();
  const { greeting } = useGreeting();

  return (
    <div className="min-h-screen w-full bg-background text-foreground relative flex flex-col items-center justify-start">

      <NavMenu
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="px-8 pb-32 md:px-16 lg:px-24 xl:px-0 max-w-5xl mx-auto flex flex-col items-center w-full transition-all duration-300">
        <HeroSection greeting={greeting} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        {/*  <SkillsSection />*/}
        <ContactSection />

      </main>
      <Footer />

    </div>
  );
};

export default App;
