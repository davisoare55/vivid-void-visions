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
  const [showFullSiteState, setShowFullSiteState] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Remove any existing VTurb scripts to prevent caching conflicts
    const existingScripts = document.querySelectorAll('script[src*="converteai.net"]');
    existingScripts.forEach(s => s.remove());

    // Inject the new video script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://scripts.converteai.net/1207b016-5c31-47e2-ba8e-a8059d7a99ff/players/692f0460f8c552246af703ec/v4/player.js';
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
      // Cleanup all VTurb scripts when component unmounts
      const allScripts = document.querySelectorAll('script[src*="converteai.net"]');
      allScripts.forEach(s => s.remove());
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Separate useEffect for carousel autoplay
  useEffect(() => {
    let autoplayInterval: NodeJS.Timeout;

    if (showFullSite && carouselRef.current) {
      // Initialize carousel position
      carouselRef.current.style.transform = `translateX(-${currentSlide * 50}%)`;

      // Start autoplay
      autoplayInterval = setInterval(() => {
        setCurrentSlide(prevSlide => {
          const nextSlide = (prevSlide + 1) % projects.length; // Updated to 5 projects
          if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(-${nextSlide * 50}%)`;
          }
          return nextSlide;
        });
      }, 3000);

      return () => {
        if (autoplayInterval) {
          clearInterval(autoplayInterval);
        }
      };
    }
  }, [showFullSite]);
  
  const projects = [
    { client: '@capitechoficial', views: '1,3M visualizações', videoFile: 'CAPITECH.webm', fallback: 'CAPITECH.webm' },
    { client: '@dramarcellabirtche', views: '136K visualizações', videoFile: 'DRA MARCELA.webm', fallback: 'DRA MARCELA.webm' },
    { client: '@clinicanelsonletizio', views: '80k visualizações', videoFile: 'letizio.webm', fallback: 'letizio.webm' },
    { client: '@fanta', views: '63M visualizações', videoFile: 'FANTA.webm', fallback: 'FANTA.webm' }
  ];

  const nextSlide = () => {
    const newSlide = (currentSlide + 1) % projects.length;
    setCurrentSlide(newSlide);
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${newSlide * 50}%)`;
    }
  };

  const prevSlide = () => {
    const newSlide = currentSlide === 0 ? projects.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${newSlide * 50}%)`;
    }
  };

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
        {/* Featured Video */}
        <div 
          ref={videoContainerRef}
          className="mx-auto max-w-[420px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[720px] xl:max-w-[800px]"
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<vturb-smartplayer id="vid-692f0460f8c552246af703ec" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/1207b016-5c31-47e2-ba8e-a8059d7a99ff/players/692f0460f8c552246af703ec/v4/player.js", s.async=!0,document.head.appendChild(s); </script>'
            }}
          />
        </div>

        {/* Single-line Title below video */}
        <div className="text-center mt-6 md:mt-8">
          <h1
            className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient leading-tight drop-shadow-2xl tracking-tight"
          >
            meu lucro é só no seu resultado
          </h1>
        </div>
        {showFullSite && (
          <div className="flex justify-center px-4 mt-6">
            <a 
              href="/reuniao/"
              className="btn-hero px-8 py-3 rounded-lg font-bold text-base md:text-lg transition-colors duration-300 w-full max-w-xs text-center whitespace-nowrap flex items-center justify-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Garantir minha vaga agora
            </a>
          </div>
        )}

        {/* Projects Carousel - Only show when full site is visible */}
        {showFullSite && (
          <div className="relative py-12">
            <div className="overflow-hidden px-4 md:px-16">
              <div ref={carouselRef} className="flex transition-transform duration-500 ease-in-out">
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="carousel-item flex-shrink-0 flex justify-center px-2 md:px-4"
                    style={{ width: '50%' }}
                  >
                    <div className="w-[85vw] sm:w-[30rem] md:w-[37.5rem] lg:w-[45rem] xl:w-[52.5rem] max-w-full">
                      <div className="card-3d p-6 sm:p-4 rounded-lg h-full">
                        {/* Mobile video container */}
                        <div className="relative rounded-lg overflow-hidden mb-4 bg-background-tertiary border border-border/50 block sm:hidden" style={{ height: '45vh', width: '150%', marginLeft: '-25%' }}>
                          <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            controls={false}
                            onLoadedData={(e) => {
                              const video = e.target as HTMLVideoElement;
                              video.play().catch(() => {
                                setTimeout(() => video.play(), 100);
                              });
                            }}
                            onCanPlay={(e) => {
                              const video = e.target as HTMLVideoElement;
                              video.play().catch(() => {});
                            }}
                            ref={(video) => {
                              if (video) {
                                video.play().catch(() => {
                                  setTimeout(() => video.play(), 50);
                                });
                              }
                            }}
                            onEnded={(e) => {
                              const video = e.target as HTMLVideoElement;
                              video.currentTime = 0;
                              video.play().catch(() => {});
                            }}
                          >
                            <source src={`/portfolio/${project.videoFile}`} type="video/webm" />
                            <source src={`/portfolio/${project.fallback}`} type="video/mp4" />
                          </video>
                        </div>
                        
                        {/* Desktop video container */}
                        <div className="relative aspect-[9/16] rounded-lg overflow-hidden mb-4 bg-background-tertiary border border-border/50 hidden sm:block">
                          <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            controls={false}
                            onLoadedData={(e) => {
                              const video = e.target as HTMLVideoElement;
                              video.play().catch(() => {
                                // Fallback for mobile autoplay restrictions
                                setTimeout(() => video.play(), 100);
                              });
                            }}
                            ref={(video) => {
                              if (video) {
                                video.play().catch(() => {
                                  setTimeout(() => video.play(), 50);
                                });
                              }
                            }}
                            onCanPlay={(e) => {
                              const video = e.target as HTMLVideoElement;
                              video.play().catch(() => {});
                            }}
                            onEnded={(e) => {
                              const video = e.target as HTMLVideoElement;
                              video.currentTime = 0;
                              video.play().catch(() => {});
                            }}
                          >
                            <source src={`/portfolio/${project.videoFile}`} type="video/webm" />
                            <source src={`/portfolio/${project.fallback}`} type="video/mp4" />
                          </video>
                        </div>
                        
                        <div className="text-center px-2 sm:px-0">
                          <h4 className="font-bold text-xs sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-3 text-foreground tracking-wider break-words">{project.client}</h4>
                          <p className="text-primary font-semibold text-sm sm:text-lg md:text-xl lg:text-2xl break-words">{project.views}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 transition-all duration-200 z-20"
              style={{ 
                boxShadow: '0 0 20px rgba(251, 146, 60, 0.6), 0 0 40px rgba(251, 146, 60, 0.4), 0 0 60px rgba(251, 146, 60, 0.2)',
                filter: 'drop-shadow(0 0 10px rgba(251, 146, 60, 0.8))'
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 transition-all duration-200 z-20"
              style={{ 
                boxShadow: '0 0 20px rgba(251, 146, 60, 0.6), 0 0 40px rgba(251, 146, 60, 0.4), 0 0 60px rgba(251, 146, 60, 0.2)',
                filter: 'drop-shadow(0 0 10px rgba(251, 146, 60, 0.8))'
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-primary' : 'bg-gray-300 hover:bg-primary/50'
                  }`}
                  onClick={() => {
                    setCurrentSlide(index);
                    if (carouselRef.current) {
                      carouselRef.current.style.transform = `translateX(-${index * 50}%)`;
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