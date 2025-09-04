import { Card } from '@/components/ui/card';

const ComoFunciona = () => {
  const steps = [
    {
      number: "01",
      title: "Briefing ágil",
      description: "você envia áudios, textos e arquivos no nosso formulário.",
      icon: <img src="/portfolio/branco/briefing-agil-branco.png" alt="Briefing" className="w-12 h-12" />
    },
    {
      number: "02", 
      title: "Estratégia & Mídia",
      description: "defino ângulos virais e alinho a campanha com tráfego pago de elite.",
      icon: <img src="/portfolio/branco/estrategia-target-branco.png" alt="Estratégia" className="w-12 h-12" />
    },
    {
      number: "03",
      title: "Produção artesanal",
      description: "CGI + VFX + cor + som com estética de grandes campanhas.",
      icon: <img src="/portfolio/branco/producao-cinema-brancoo.png" alt="Produção" className="w-12 h-12" />
    },
    {
      number: "04",
      title: "Publicação & Escala",
      description: "aprovação, campanha de 30 dias e plano de uso para orgânico e pago.",
      icon: <img src="/portfolio/branco/publicacao-foguete-branco.png" alt="Publicação" className="w-12 h-12" />
    }
  ];

  return (
    <section id="como-funciona" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient text-center whitespace-nowrap">
            Processo simples, sem reuniões demoradas
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="card-3d p-4 sm:p-6 md:p-8 text-center h-full interactive group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base md:text-lg">
                {step.number}
              </div>
              
              <div className="mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <img src={step.icon.props.src} alt={step.icon.props.alt} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-sm">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComoFunciona;
