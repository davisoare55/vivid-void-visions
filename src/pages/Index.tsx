import { useState, useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import About from '@/components/About';
import ProvaSocial from '@/components/ProvaSocial';
import PorQueFooh from '@/components/PorQueFooh';
import OQueRecebe from '@/components/OQueRecebe';
import ComoFunciona from '@/components/ComoFunciona';
import Exclusividade from '@/components/Exclusividade';
import ScrollRevealSection from '@/components/ScrollRevealSection';

const Index = () => {
  const [showFullSite, setShowFullSite] = useState(false);

  useEffect(() => {
    // Show full site after 2 minutes and 15 seconds (135 seconds)
    const timer = setTimeout(() => {
      setShowFullSite(true);
    }, 135000); // 2 minutes and 15 seconds (135 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      {showFullSite && <Navigation />}
      <main>
        <Portfolio showFullSite={showFullSite} />
        {showFullSite && (
          <div>
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
