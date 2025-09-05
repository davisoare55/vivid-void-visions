import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {

  return (
    <section id="sobre" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-6 text-gradient">
            Sobre Mim
          </h2>
        </div>

        <div className="relative mb-20">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-stretch">
            {/* Profile Text */}
            <div className="flex-1 order-2 md:order-1">
              <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-center border-2 border-white rounded-2xl bg-transparent interactive group hover:scale-105 transition-all duration-300" style={{boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'}}>
                <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-4 md:mb-6 text-warm">Davi Soares</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 md:mb-8 text-base sm:text-lg md:text-lg">
                  13 anos criando o que nenhuma IA ou editor genérico consegue. Especialista em FOOH CGI com técnicas de cinema, transformando marcas através de efeitos visuais impossíveis de ignorar.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4 md:mb-8 text-base sm:text-lg md:text-lg">
                  Trabalho com gigantes como Nike, Marvel, Fanta e iFood, entregando campanhas que geram +100M de views e ROAS entre 15-30x.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg md:text-lg">
                  Cada projeto é uma obra artesanal, combinando estratégia viral com execução cinematográfica para criar conteúdo que marca época.
                </p>
              </div>
            </div>

            {/* Personal Image */}
            <div className="flex-1 order-1 md:order-2">
              <div className="h-full flex items-center justify-center relative">
                <img 
                  src="/perfil.png" 
                  alt="Davi Soares - FOOH CGI Specialist" 
                  className="w-full h-full object-cover object-top rounded-2xl shadow-2xl"
                  style={{ 
                    backgroundColor: 'transparent',
                    minHeight: '200px',
                    maxHeight: '400px'
                  }}
                  onError={(e) => {
                    console.log('Image failed to load:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                  onLoad={() => console.log('Image loaded successfully')}
                />
                {/* Bottom fade gradient */}
                <div 
                  className="absolute bottom-0 left-0 right-0 rounded-b-2xl pointer-events-none"
                  style={{
                    height: '33.33%',
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;