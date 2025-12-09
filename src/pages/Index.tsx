import { useState, Suspense, lazy } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';

// Lazy load non-critical components
const CustomCursor = lazy(() => import('@/components/CustomCursor'));
const InteractiveBackground = lazy(() => import('@/components/InteractiveBackground'));

// Lazy load below-fold components
const ProvaSocial = lazy(() => import('@/components/ProvaSocial'));
const About = lazy(() => import('@/components/About'));
const OQueRecebe = lazy(() => import('@/components/OQueRecebe'));
const ComoFunciona = lazy(() => import('@/components/ComoFunciona'));
const Exclusividade = lazy(() => import('@/components/Exclusividade'));
const NossosFeitos = lazy(() => import('@/components/NossosFeitos'));
const ComparisonSection = lazy(() => import('@/components/ComparisonSection'));
const ClientLogos = lazy(() => import('@/components/ClientLogos'));
const ScrollRevealSection = lazy(() => import('@/components/ScrollRevealSection'));

const LoadingFallback = () => <div className="w-full h-32 animate-pulse bg-white/5" />;

const Index = () => {
  const [showFullSite, setShowFullSite] = useState(true);

  return (
    <div className="min-h-screen bg-background w-full max-w-full overflow-x-hidden">
      <Suspense fallback={null}>
        <InteractiveBackground />
        <CustomCursor />
      </Suspense>
      {showFullSite && <Navigation />}
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        {showFullSite && (
          <div className="w-full max-w-full overflow-x-hidden">
            <Suspense fallback={<LoadingFallback />}>
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
            </Suspense>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
