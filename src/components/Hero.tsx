import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-gradient-warm opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/8 to-primary/8 rounded-full blur-3xl floating" style={{ animationDelay: '-3s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 text-gradient leading-tight">
            EDITOR
            <br />
            <span className="text-warm">VISUAL</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Especialista em edição de vídeos, VFX e CGI. Transformando ideias em experiências visuais únicas e impactantes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={scrollToPortfolio}
            className="btn-hero px-8 py-4 text-lg interactive"
          >
            Ver Portfolio
          </button>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfadJIhA1H410Cj_6Mxs8kEj6bupPDbivUqiWZPR0_pqt7wlQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="border-primary/50 text-primary hover:bg-primary/10 interactive px-8 py-4 text-lg border rounded-md inline-block text-center"
          >
            Entrar em Contato
          </a>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary/60" />
        </div>
      </div>

      {/* Minimal Decorative Elements */}
      <div className="absolute top-1/3 left-8 w-1 h-20 bg-gradient-primary rounded-full opacity-40"></div>
      <div className="absolute bottom-1/3 right-8 w-1 h-16 bg-gradient-primary rounded-full opacity-30"></div>
    </section>
  );
};

export default Hero;