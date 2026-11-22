import React, { useState, useEffect } from 'react';
import { CinematicLoader } from './components/loader/CinematicLoader';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { AmbientCanvas } from './components/canvas/AmbientCanvas';
import { HeroSection } from './components/sections/HeroSection/HeroSection';
import { HopeSection } from './components/sections/HopeSection/HopeSection';
import { DawnSection } from './components/sections/DawnSection/DawnSection';
import { BeliefsSection } from './components/sections/BeliefsSection/BeliefsSection';
import { CommunitySection } from './components/sections/CommunitySection/CommunitySection';
import { VisitSection } from './components/sections/VisitSection/VisitSection';
import { ThemeProvider } from './context/ThemeContext';
import { useScrollTheme } from './hooks/useScrollTheme';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import styles from './App.module.css';

export const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme, depth, backgroundGradient } = useScrollTheme();

  // Initialize GSAP scroll triggers once loader completes
  useScrollAnimation(isLoaded);

  useEffect(() => {
    // Lock scroll while loader is active
    if (!isLoaded) {
      document.body.classList.add('locked');
    } else {
      document.body.classList.remove('locked');
    }
    return () => {
      document.body.classList.remove('locked');
    };
  }, [isLoaded]);

  return (
    <ThemeProvider theme={theme} depth={depth}>
      <div className={styles.appContainer}>
        {/* Cinematic Animated Loader */}
        <CinematicLoader onComplete={() => setIsLoaded(true)} />

        {/* Dynamic Global Header */}
        <Header theme={theme} />

        {/* Ambient Dynamic Background & Particle Canvas */}
        <div
          className={styles.dynamicBg}
          style={{ background: backgroundGradient }}
          aria-hidden="true"
        />
        <AmbientCanvas depth={depth} />

        {/* Main Sections */}
        <main>
          <HeroSection />
          <HopeSection />
          <DawnSection />
          <BeliefsSection />
          <CommunitySection />
          <VisitSection />
        </main>

        {/* Collapsible Interactive Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
