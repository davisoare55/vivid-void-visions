import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-3xl floating" style={{ animationDelay: '-3s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient leading-tight">
            EDITOR
            <br />
            <span className="text-neon">VISUAL</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Especialista em edição de vídeos, VFX e CGI. Transformando ideias em experiências visuais únicas e impactantes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            onClick={scrollToPortfolio}
            className="btn-hero px-8 py-4 text-lg interactive"
          >
            Ver Portfolio
          </Button>
          <Button
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 interactive px-8 py-4 text-lg"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Entrar em Contato
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary pulse-glow" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-32 bg-gradient-primary rounded-full opacity-60"></div>
      <div className="absolute bottom-1/4 right-10 w-2 h-24 bg-gradient-primary rounded-full opacity-40"></div>
    </section>
  );
};

export default Hero;