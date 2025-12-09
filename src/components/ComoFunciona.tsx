import { MessageSquare, Target, Film, Rocket } from 'lucide-react';

const ComoFunciona = () => {
  const steps = [
    {
      number: "01",
      title: "Briefing Ágil",
      description: "Você envia áudios e arquivos via formulário simples. Sem reuniões desnecessárias.",
      icon: <MessageSquare className="w-8 h-8 text-primary" />
    },
    {
      number: "02",
      title: "Estratégia & Mídia",
      description: "Definimos ângulos virais e alinhamos a campanha com tráfego pago de elite.",
      icon: <Target className="w-8 h-8 text-primary" />
    },
    {
      number: "03",
      title: "Produção Artesanal",
      description: "IA + VFX + Color Grading com estética cinematográfica de grandes marcas.",
      icon: <Film className="w-8 h-8 text-primary" />
    },
    {
      number: "04",
      title: "Publicação & Escala",
      description: "Aprovação, campanha de 30 dias e plano de uso para orgânico e pago.",
      icon: <Rocket className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-gold">
            Processo Simplificado
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Eliminamos a burocracia para focar no que importa: seu resultado.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card-premium p-8 relative group hover:-translate-y-2 transition-transform duration-500"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg shadow-primary/20">
                {step.number}
              </div>

              <div className="mb-6 p-3 rounded-full bg-white/5 w-fit group-hover:bg-primary/10 transition-colors">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-white font-display">
                {step.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComoFunciona;
