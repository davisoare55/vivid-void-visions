import { Card } from '@/components/ui/card';

const ProvaSocial = () => {
  const metrics = [
    {
      icon: <div className="w-8 h-1 bg-white rounded-full mx-auto"></div>,
      number: "+100M",
      label: "Views Geradas"
    },
    {
      icon: <div className="w-8 h-1 bg-white rounded-full mx-auto"></div>,
      number: "15-30x",
      label: "ROAS Médio"
    },
    {
      icon: <div className="w-8 h-1 bg-white rounded-full mx-auto"></div>,
      number: "12X-25X",
      label: "Views"
    }
  ];

  return (
    <section id="prova-social" className="py-20 px-6 bg-background-secondary relative z-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Prova Social
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados que falam por si só
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="card-3d p-2 sm:p-4 md:p-8 text-center interactive group hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2 md:mb-4">{metric.icon}</div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gradient mb-1 md:mb-2">
                {metric.number}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium">{metric.label}</p>
            </Card>
          ))}
        </div>

        {/* Brands */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground whitespace-nowrap">Confiado por marcas como</h3>
          <div className="flex justify-center">
            <div className="max-w-4xl">
              <img 
                src="/portfolio/LOGOS SEM FUNDO.png" 
                alt="Marcas que confiam: Nike, Marvel, Fanta, iFood e outras" 
                className="w-full h-auto"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvaSocial;
