import { Award, Users, Eye } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Image/Profile */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative">
              {/* Placeholder for Davi's image if available, otherwise using a generic premium placeholder or gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <img
                src="/portfolio/PERFIL RETRATO.webp"
                alt="Davi Soares"
                width="600"
                height="750"
                loading="lazy"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-background-secondary border border-white/10 p-6 rounded-xl shadow-2xl">
              <p className="text-primary font-bold text-4xl mb-1">12+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Anos de XP</p>
            </div>
          </div>

          {/* Right Column: Content */}
          <div>
            <p className="text-sm text-primary uppercase tracking-widest mb-4">Quem é</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white font-display">
              DAVI SOARES
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <p className="text-2xl font-bold text-white mb-1">12+</p>
                <p className="text-[10px] text-muted-foreground uppercase">Anos de Experiência</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <p className="text-2xl font-bold text-white mb-1">450+</p>
                <p className="text-[10px] text-muted-foreground uppercase">Projetos de Sucesso</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                <p className="text-2xl font-bold text-white mb-1">100mi</p>
                <p className="text-[10px] text-muted-foreground uppercase">Views em Projetos</p>
              </div>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p>
                <span className="text-white font-medium">100M+ visualizações</span> para Nike, NFL, iFood...
              </p>
              <p>
                Mas por que larguei marcas gigantes pra trabalhar só com clínicas de estética?
              </p>
              <p>
                Porque descobri que <span className="text-white font-medium">viralização sem conversão é vaidade.</span>
              </p>
              <p>
                E clínica que não gera paciente não precisa de views — <span className="text-primary font-bold">precisa de CONSULTAS.</span>
              </p>
              <p className="text-white font-medium text-lg border-l-2 border-primary pl-4 mt-6">
                Por isso criei o único modelo do Brasil onde:<br />
                <span className="text-muted-foreground">❌ Você NÃO paga por vídeo</span><br />
                <span className="text-primary">✅ Você paga POR RESULTADO</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;