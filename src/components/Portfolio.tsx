import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface PortfolioProps {
  showFullSite: boolean;
}

const Portfolio = ({ showFullSite }: PortfolioProps) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    // Inject the video script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://scripts.converteai.net/1207b016-5c31-47e2-ba8e-a8059d7a99ff/players/68b8aa58e2667294be3e13eb/v4/player.js';
    script.async = true;
    document.head.appendChild(script);

    // Initialize custom carousel functionality
    let currentSlide = 0;
    let autoplayInterval: NodeJS.Timeout;

    if (showFullSite && carouselRef.current) {
      const startAutoplay = () => {
        autoplayInterval = setInterval(() => {
          if (carouselRef.current) {
            const totalSlides = projects.length;
            
            // Move to next slide
            currentSlide = (currentSlide + 1) % totalSlides;
            
            // Apply transform to show next slide
            carouselRef.current.style.transform = `translateX(-${currentSlide * (100 / projects.length)}%)`;
          }
        }, 3000);
      };

      // Initialize carousel position
      carouselRef.current.style.transform = 'translateX(0%)';

      startAutoplay();

      return () => {
        if (autoplayInterval) {
          clearInterval(autoplayInterval);
        }
      };
    }

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
      className="py-20 px-4 md:px-6 relative overflow-hidden"
    >
      {/* Background gradient overlay - only on desktop */}
      <div 
        className="hidden md:block fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle 400px at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(251, 146, 60, 0.25) 0%, transparent 50%)`
        }}
      />
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          {/* Custom PNG headline for all devices */}
          <div className="mb-4 md:mb-8 px-3 md:px-6">
            <img 
              src="/headline-mobile.png" 
              alt="Por que empresas nos EUA estão usando FOOH 3D?" 
              className="w-full h-auto max-w-sm md:max-w-4xl mx-auto drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)) drop-shadow(0 0 20px rgba(251, 146, 60, 0.3)) drop-shadow(0 0 40px rgba(251, 146, 60, 0.1))'
              }}
            />
          </div>
        </div>

        {/* Featured Video */}
        <div className="mb-0 md:mb-8">
            <div className="relative w-full md:max-w-6xl md:mx-auto px-0 md:px-4">
              <div className="rounded-lg p-0">
                <div 
                  ref={videoContainerRef}
                  className="relative w-full rounded-none md:rounded-lg overflow-hidden bg-background-tertiary border-0 md:border border-border/50 video-container"
                  style={{ 
                    aspectRatio: '16/9',
                    minHeight: '75vh',
                    maxHeight: '95vh'
                  }}
                  dangerouslySetInnerHTML={{
                    __html: '<vturb-smartplayer id="vid-68b8aa58e2667294be3e13eb" style="display: block; margin: 0 auto; width: 100%; height: 100%;"></vturb-smartplayer>'
                  }}
                />
              </div>
            </div>
            {showFullSite && (
              <div className="flex justify-center px-4 -mt-1">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfadJIhA1H410Cj_6Mxs8kEj6bupPDbivUqiWZPR0_pqt7wlQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero px-8 py-3 rounded-lg font-bold text-base md:text-lg transition-colors duration-300 w-full max-w-xs text-center whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Garantir minha vaga agora
                </a>
              </div>
            )}
        </div>

        {/* Projects Carousel - Only show when full site is visible */}
        {showFullSite && (
          <div className="relative py-8">
            <div className="overflow-hidden">
              <div ref={carouselRef} className="flex transition-transform duration-500 ease-in-out" style={{ width: `${projects.length * 100}%` }}>
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="carousel-item flex-shrink-0 flex justify-center"
                    style={{ width: `${100 / projects.length}%` }}
                  >
                    <div className="w-48 sm:w-64 md:w-80 lg:w-96 max-w-full mx-4">
                      <div className="card-3d p-3 sm:p-4 rounded-lg h-full">
                        <div className="relative aspect-[9/16] rounded-lg overflow-hidden mb-3 sm:mb-4 bg-background-tertiary border border-border/50">
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
                          <h4 className="font-bold text-sm sm:text-base md:text-lg mb-1 text-foreground tracking-wider">{project.client}</h4>
                          <p className="text-primary font-semibold text-xs sm:text-sm md:text-base">{project.views}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className="w-3 h-3 rounded-full bg-gray-300 hover:bg-primary transition-colors duration-200"
                  onClick={() => {
                    if (carouselRef.current) {
                      carouselRef.current.style.transform = `translateX(-${index * (100 / projects.length)}%)`;
                    }
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Floating Arrows - only on desktop */}
        {showArrows && showFullSite && (
          <>
            {/* Left Arrow */}
            <div className="hidden md:block fixed left-8 top-1/2 transform -translate-y-1/2 z-50 animate-bounce fade-in-up-delayed" style={{ animationDelay: '0.8s' }}>
              <div className="bg-orange-500 rounded-full p-4 shadow-lg">
                <ChevronDown className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Right Arrow */}
            <div className="hidden md:block fixed right-8 top-1/2 transform -translate-y-1/2 z-50 animate-bounce fade-in-up-delayed" style={{ animationDelay: '1.3s' }}>
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