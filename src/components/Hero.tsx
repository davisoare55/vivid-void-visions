import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useBooking } from '@/context/BookingContext';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openBooking } = useBooking();

  useEffect(() => {
    // Inject the VTurb script if it doesn't exist
    const scriptId = 'vturb-script-692f0460f8c552246af703ec';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'text/javascript';
      script.src = 'https://scripts.converteai.net/1207b016-5c31-47e2-ba8e-a8059d7a99ff/players/692f0460f8c552246af703ec/v4/player.js';
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      // document.head.removeChild(script);
    };
  }, []);

  const testimonials = [
    { src: "/depoimentos/Camada 2.webp" },
    { src: "/depoimentos/Camada 3.webp" },
    { src: "/depoimentos/Camada 4.webp" },
    { src: "/depoimentos/Camada 5.webp" },
    { src: "/depoimentos/Camada 6.webp" },
    { src: "/depoimentos/Captura de tela 2025-12-05 114436.webp" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-20 pb-40 md:pb-60">
      {/* Abstract Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[30%] h-[30%] bg-secondary/20 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.03 }} />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center flex flex-col items-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-white/5 backdrop-blur-md mb-12 section-fade visible">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-muted-foreground">Especialistas em Marketing Médico</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-32 md:mb-60 section-fade visible" style={{ animationDelay: '0.1s' }}>
          CLÍNICA: PAGUE APENAS POR <br className="hidden md:block" />
          <span className="text-gradient-gold relative">
            AGENDAMENTOS QUALIFICADOS
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Content Container */}
        <div className="relative w-full max-w-[1200px] mx-auto mb-12 flex flex-col items-center justify-center">

          {/* Desktop: Circular Testimonials Orbiting VSL */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
            {testimonials.map((item, index) => {
              // Calculate elliptical position to match vertical video aspect ratio
              const angle = (index / testimonials.length) * 2 * Math.PI;
              const radiusX = 400; // Wider than video width (200px half-width)
              const radiusY = 450; // Taller than video height (~355px half-height)
              const x = Math.cos(angle) * radiusX;
              const y = Math.sin(angle) * radiusY;

              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-in-out pointer-events-none`}
                  style={{
                    transform: `translate(${x}px, ${y}px) scale(${isActive ? 2.2 : 1.6})`,
                    zIndex: isActive ? 50 : 0, // Active in front (50), inactive behind VSL (0)
                    opacity: isActive ? 1 : 0.6,
                    filter: isActive ? 'none' : 'blur(1px) grayscale(40%)',
                  }}
                >
                  <div className="w-40">
                    <img
                      src={item.src}
                      alt="Depoimento"
                      width="160"
                      height="213"
                      loading="lazy"
                      className={`w-full h-auto transition-all duration-500 ${isActive ? 'drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]' : 'drop-shadow-none'}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* VSL Player Container - Vertical Aspect Ratio */}
          <div className="relative z-10 w-full max-w-[400px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] border border-white/10 bg-black aspect-[9/16] section-fade visible" style={{ animationDelay: '0.3s' }}>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<vturb-smartplayer id="vid-692f0460f8c552246af703ec" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>'
              }}
            />
          </div>

          {/* Mobile: Vertical Stack Below Video */}
          <div className="flex md:hidden flex-col gap-4 w-full max-w-[400px] mt-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="w-full"
              >
                <img
                  src={item.src}
                  alt="Depoimento"
                  width="400"
                  height="533"
                  loading="lazy"
                  className="w-full h-auto drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                />
              </div>
            ))}
          </div>

        </div>

        {/* CTA Button */}
        <div className="section-fade visible relative z-20" style={{ animationDelay: '0.4s' }}>
          <button onClick={openBooking} className="btn-premium w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 text-lg">
            Garantir Minha Vaga
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;