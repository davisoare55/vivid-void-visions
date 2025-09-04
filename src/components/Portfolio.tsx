import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface PortfolioProps {
  showFullSite: boolean;
}

const Portfolio = ({ showFullSite }: PortfolioProps) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  const [showArrows, setShowArrows] = useState(true);

  useEffect(() => {
    // Inject the video script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://scripts.converteai.net/1207b016-5c31-47e2-ba8e-a8059d7a99ff/players/68b8aa58e2667294be3e13eb/v4/player.js';
    script.async = true;
    document.head.appendChild(script);

    // Mouse tracking for gradient effect - instant response
    const handleMouseMove = (e: MouseEvent) => {
      setGradientPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Hide arrows on scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowArrows(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const projects = [
    {
      client: "@fanta",
      views: "63 M views",
      videoFile: "FANTA.webm",
      fallback: "FANTA.mp4",
    },
    {
      client: "@dramarcellabirtche",
      views: "136 k views",
      videoFile: "DRA MARCELA.webm",
      fallback: "DRA MARCELA.mp4",
    },
    {
      client: "@capitechoficial",
      views: "1,3 M views",
      videoFile: "CAPITECH.webm",
      fallback: "CAPITECH.mp4",
    },
    {
      client: "@clinicanelsonletizio",
      views: "12 × views",
      videoFile: "letizio.webm",
      fallback: "letizio.mp4",
    },
    {
      client: "@memphisdepay",
      views: "5,5 M views",
      videoFile: "MEMPHIS.webm",
      fallback: "MEMPHIS.mp4",
    },
    {
      client: "@nike",
      views: "2,1 M views",
      videoFile: "NIKE.webm",
      fallback: "NIKE.mp4",
    },
  ];

  return (
    <section 
      id="portfolio" 
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle 400px at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(251, 146, 60, 0.25) 0%, transparent 50%)`
        }}
      />
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-gradient leading-tight drop-shadow-2xl text-center">
            Por que empresas nos EUA<br/>estão usando <span className="text-warm glow-text">FOOH CGI?</span>
          </h1>
        </div>

        {/* Featured Video */}
        <div className="mb-20">
            <div className="relative max-w-6xl mx-auto px-4">
              <div className="card-3d rounded-lg p-4 sm:p-6 md:p-8 mb-8">
                <div 
                  ref={videoContainerRef}
                  className="relative w-full rounded-lg overflow-hidden bg-background-tertiary border border-border/50"
                  style={{ 
                    aspectRatio: '16/9',
                    minHeight: '250px',
                    maxHeight: '600px'
                  }}
                  dangerouslySetInnerHTML={{
                    __html: '<vturb-smartplayer id="vid-68b8aa58e2667294be3e13eb" style="display: block; margin: 0 auto; width: 100%; height: 100%;"></vturb-smartplayer>'
                  }}
                />
              </div>
              {showFullSite && (
                <div className="flex justify-center mt-12">
                  <button className="btn-hero px-12 py-4 rounded-lg font-bold text-lg transition-colors duration-300 min-w-[250px]" style={{ fontFamily: 'var(--font-display)' }}>
                    Garantir minha vaga agora
                  </button>
                </div>
              )}
            </div>
        </div>

        {/* Projects Carousel - Only show when full site is visible */}
        {showFullSite && (
          <div className="relative overflow-hidden">
            <div className="relative">
              {/* Left fade gradient */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
              {/* Right fade gradient */}
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
              <div className="flex animate-scroll gap-6">
              {[...projects, ...projects].map((project, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 card-3d p-4 rounded-lg"
                >
                  <div className="relative aspect-[9/16] rounded-lg overflow-hidden mb-4 bg-background-tertiary border border-border/50">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      onEnded={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.currentTime = 0;
                        video.play();
                      }}
                    >
                      <source src={`/portfolio/${project.videoFile}`} type="video/webm" />
                      <source src={`/portfolio/${project.fallback}`} type="video/mp4" />
                    </video>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-lg mb-1 text-foreground tracking-wider">{project.client}</h4>
                    <p className="text-primary font-semibold">{project.views}</p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        )}

        {/* Floating Arrows */}
        {showArrows && showFullSite && (
          <>
            {/* Left Arrow */}
            <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 animate-bounce fade-in-up-delayed" style={{ animationDelay: '0.8s' }}>
              <div className="bg-orange-500 rounded-full p-4 shadow-lg">
                <ChevronDown className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Right Arrow */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 animate-bounce fade-in-up-delayed" style={{ animationDelay: '1.3s' }}>
              <div className="bg-orange-500 rounded-full p-4 shadow-lg">
                <ChevronDown className="w-8 h-8 text-white" />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Portfolio;