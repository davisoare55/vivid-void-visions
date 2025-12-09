import { useState } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import ProvaSocial from '@/components/ProvaSocial';
import About from '@/components/About';
import OQueRecebe from '@/components/OQueRecebe';
import ComoFunciona from '@/components/ComoFunciona';
import Exclusividade from '@/components/Exclusividade';
import NossosFeitos from '@/components/NossosFeitos';
import ComparisonSection from '@/components/ComparisonSection';
import ClientLogos from '@/components/ClientLogos';
import ScrollRevealSection from '@/components/ScrollRevealSection';

import InteractiveBackground from '@/components/InteractiveBackground';

const Index = () => {
  const [showFullSite, setShowFullSite] = useState(true);

  return (
    <div className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
      <InteractiveBackground />
      <CustomCursor />
      {showFullSite && <Navigation />}
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        {showFullSite && (
          <div className="w-full max-w-full overflow-x-hidden">
            {/* 1. Authority Transfer (Logos) */}
            <ScrollRevealSection>
              <ClientLogos />
            </ScrollRevealSection>

            {/* 2. Problem/Agitation (Comparison) */}
            <ScrollRevealSection staggerDelay={50}>
              <ComparisonSection />
            </ScrollRevealSection>

            {/* 3. Methodology (Services) */}
            <ScrollRevealSection staggerDelay={50}>
              <OQueRecebe />
            </ScrollRevealSection>

            {/* 4. Proof (Video Cases) */}
            <ScrollRevealSection staggerDelay={50}>
              <NossosFeitos />
            </ScrollRevealSection>

            {/* 5. Scale (Stats) */}
            <ScrollRevealSection staggerDelay={50}>
              <ProvaSocial />
            </ScrollRevealSection>

            {/* 6. Authority (Davi) */}
            <ScrollRevealSection staggerDelay={50}>
              <About />
            </ScrollRevealSection>

            {/* 7. Scarcity (CTA) */}
            <ScrollRevealSection staggerDelay={50}>
              <Exclusividade />
            </ScrollRevealSection>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
