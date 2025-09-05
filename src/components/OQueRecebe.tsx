import { Card } from '@/components/ui/card';

const OQueRecebe = () => {
  const deliverables = [
    {
      title: "Estratégia viral",
      description: "Planejada para maximizar alcance e engajamento orgânico",
      icon: <img src="/portfolio/preto/estrategia-target.png" alt="Estratégia" className="w-12 h-12" />
    },
    {
      title: "Tráfego pago de elite",
      description: "30 dias de campanha otimizada alinhada ao criativo",
      icon: <img src="/portfolio/preto/publicacao-foguete.png" alt="Tráfego" className="w-12 h-12" />
    },
    {
      title: "Peça FOOH CGI exclusiva",
      description: "Criada especificamente para sua marca, impossível de copiar",
      icon: <img src="/portfolio/preto/exclusividade-diamante.png" alt="FOOH CGI" className="w-12 h-12" />
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 md:px-6 bg-background relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-6 md:mb-8 text-gradient">
            Entregáveis
          </h2>
        </div>

        {/* Deliverables List */}
        <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
          {deliverables.map((item, index) => (
            <Card
              key={index}
              className="p-2 md:p-6 w-full interactive group border-0 relative overflow-hidden rounded-3xl"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 25%, #e5e5e5 50%, #d5d5d5 75%, #c5c5c5 100%)',
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)'
              }}
            >
              <div className="flex flex-col items-center text-center space-y-6 px-4 py-2">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                  {item.icon}
                </div>
                <div className="max-w-full">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">{item.title}</h3>
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed px-2">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OQueRecebe;
