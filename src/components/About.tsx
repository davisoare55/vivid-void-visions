import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {

  return (
    <section id="sobre" className="py-20 px-4 md:px-6 relative w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full max-w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-6 text-gradient">
            Sobre Mim
          </h2>
        </div>

        <div className="relative mb-20">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl w-full">
              {/* Profile Text */}
              <div className="order-2 md:order-1 flex justify-center md:justify-end">
                <div className="p-6 md:p-8 border-2 border-white rounded-2xl bg-transparent interactive group hover:scale-105 transition-all duration-300 max-w-2xl w-full" style={{boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'}}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-warm">Davi Soares</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
                      13 anos criando o que nenhuma IA ou editor genérico consegue. Especialista em FOOH CGI com técnicas de cinema, transformando marcas através de efeitos visuais impossíveis de ignorar.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
                      Trabalho com gigantes como Nike, Marvel, Fanta e iFood, entregando campanhas que geram +100M de views e ROAS entre 15-30x.
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
                      Cada projeto é uma obra artesanal, combinando estratégia viral com execução cinematográfica para criar conteúdo que marca época.
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal Image */}
              <div className="order-1 md:order-2 flex justify-center md:justify-start">
                <div className="relative max-w-sm md:max-w-md">
                  <img 
                    src="/perfil.png" 
                    alt="Davi Soares - FOOH CGI Specialist" 
                    className="w-full h-auto object-cover object-center rounded-2xl shadow-2xl"
                    style={{ 
                      backgroundColor: 'transparent',
                      maxHeight: '600px',
                      aspectRatio: '3/4'
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
      </div>
    </section>
  );
};

export default About;