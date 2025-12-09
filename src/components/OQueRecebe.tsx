import { Video, MousePointerClick, TrendingUp } from 'lucide-react';

const OQueRecebe = () => {
  return (
    <section id="como-ajudamos" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-primary uppercase tracking-widest mb-4">Nossos Serviços</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Como Ajudamos Sua Clínica?
          </h2>
        </div>

        {/* Services Grid - Based on Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Service 1: VFX+IA */}
          <div className="card-premium p-8 md:p-12 group hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Video className="w-32 h-32 text-white" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Video className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-display">
                Vídeos de Alta Atenção <span className="text-gradient-gold">VFX+IA</span>
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Não fazemos posts estáticos. Criamos experiências visuais cinematográficas que prendem a atenção do paciente em 3 segundos. Usamos Inteligência Artificial e Efeitos Visuais para tornar sua clínica impossível de ser ignorada.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Roteiros de retenção máxima</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Edição de nível cinematográfico</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Ativos visuais proprietários</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 2: Tráfego Pago */}
          <div className="card-premium p-8 md:p-12 group hover:border-primary/50 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <MousePointerClick className="w-32 h-32 text-white" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-display">
                Tráfego Pago <span className="text-gradient-gold">Estratégico</span>
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Não buscamos likes. Buscamos agendamentos. Nossa gestão de tráfego é focada 100% em conversão, levando o paciente qualificado do anúncio direto para o WhatsApp da sua secretária.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Segmentação de alto ticket</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Otimização diária de campanhas</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Relatórios de ROI em tempo real</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}


      </div>
    </section>
  );
};

export default OQueRecebe;
