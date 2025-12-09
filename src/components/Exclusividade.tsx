import { Diamond, FileText, Users } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

const Exclusividade = () => {
  const { openBooking } = useBooking();

  return (
    <section id="exclusividade" className="py-24 bg-background-secondary relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-gold">
            Exclusividade Real
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Não somos uma agência de massa. Somos um atelier de marketing médico.
          </p>
        </div>

        {/* Main Content */}
        <div className="card-premium p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />

          <div className="mb-10">
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-full bg-primary/10 animate-pulse">
                <Diamond className="w-12 h-12 text-primary" />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto font-display">
              Para manter a qualidade artesanal, atendo apenas <br className="hidden md:block" />
              <span className="text-primary font-bold">10 projetos por mês</span>.
            </p>
            <p className="text-muted-foreground mt-4">
              As vagas são preenchidas através de um processo seletivo criterioso.
            </p>
          </div>

          {/* Exclusivity Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
              <div className="mb-4 flex justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">Contrato & NF</h3>
              <p className="text-sm text-muted-foreground">Processo 100% transparente e legalizado.</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
              <div className="mb-4 flex justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">10 Vagas/Mês</h3>
              <p className="text-sm text-muted-foreground">Foco total no seu projeto.</p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={openBooking}
            className="btn-premium px-10 py-4 text-lg inline-flex items-center justify-center"
          >
            Aplicar para Vaga
          </button>

          {/* Additional Info */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
            <span>Vagas Mensais</span>
            <span className="text-primary">•</span>
            <span>Retorno em 24h</span>
            <span className="text-primary">•</span>
            <span>Confidencial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exclusividade;
