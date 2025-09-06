import { useState, useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import About from '@/components/About';
import ProvaSocial from '@/components/ProvaSocial';
import OQueRecebe from '@/components/OQueRecebe';
import ComoFunciona from '@/components/ComoFunciona';
import Exclusividade from '@/components/Exclusividade';
import ScrollRevealSection from '@/components/ScrollRevealSection';

const Index = () => {
  const [showFullSite, setShowFullSite] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const isMobile = window.innerWidth <= 768;
    // Mobile: 2 minutes (120 seconds), Desktop: 2 minutes 15 seconds (135 seconds)
    const delay = isMobile ? 120000 : 135000;
    
    const timer = setTimeout(() => {
      setShowFullSite(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
      <CustomCursor />
      {showFullSite && <Navigation />}
      <main className="w-full max-w-full overflow-x-hidden">
        <Portfolio showFullSite={showFullSite} />
        {showFullSite && (
          <div className="w-full max-w-full overflow-x-hidden">
            <ScrollRevealSection>
              <ProvaSocial />
            </ScrollRevealSection>
            <ScrollRevealSection staggerDelay={50}>
              <About />
            </ScrollRevealSection>
            <ScrollRevealSection staggerDelay={50}>
              <OQueRecebe />
            </ScrollRevealSection>
            <ScrollRevealSection staggerDelay={50}>
              <ComoFunciona />
            </ScrollRevealSection>
            <ScrollRevealSection staggerDelay={50}>
              <Exclusividade />
            </ScrollRevealSection>
            <ScrollRevealSection staggerDelay={50}>
              <Contact />
            </ScrollRevealSection>
            <ScrollRevealSection staggerDelay={50}>
              <Footer />
            </ScrollRevealSection>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
