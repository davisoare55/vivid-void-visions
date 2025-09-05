import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Exclusividade = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="exclusividade" className="py-20 px-6 bg-background-secondary">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Exclusividade real
          </h2>
        </div>

        {/* Main Content */}
        <div className="p-12 border-2 border-white rounded-3xl bg-transparent interactive group hover:scale-105 transition-all duration-300" style={{boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'}}>
          <div className="mb-8">
            <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
              <img src="/portfolio/branco/exclusividade-diamante-branco.png" alt="Exclusividade" className="w-16 h-16" />
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              Para manter a qualidade artesanal, atendo apenas <span className="text-primary font-bold">4 projetos por mês</span>.<br/>
              As vagas são preenchidas por processo seletivo.
            </p>
          </div>

          {/* Exclusivity Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 text-center border-2 border-gray-300 rounded-lg interactive group hover:scale-105 transition-all duration-300" style={{background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 25%, #e5e5e5 50%, #d5d5d5 75%, #c5c5c5 100%)', boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)'}}>
              <div className="mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/portfolio/preto/PRAZO PADRÃO.png" alt="Prazo" className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Prazo padrão</h3>
              <p className="text-gray-800">1 a 3 semanas</p>
            </div>
            <div className="p-6 text-center border-2 border-gray-300 rounded-lg interactive group hover:scale-105 transition-all duration-300" style={{background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 25%, #e5e5e5 50%, #d5d5d5 75%, #c5c5c5 100%)', boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)'}}>
              <div className="mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/portfolio/preto/contrato-documento.png" alt="Contrato" className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">Contrato & NF</h3>
              <p className="text-gray-800">Processo transparente</p>
            </div>
            <div className="p-6 text-center border-2 border-gray-300 rounded-lg interactive group hover:scale-105 transition-all duration-300" style={{background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 25%, #e5e5e5 50%, #d5d5d5 75%, #c5c5c5 100%)', boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)'}}>
              <div className="mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/portfolio/preto/4 VAGAS.png" alt="4 Vagas" className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-black">4 vagas/mês</h3>
              <p className="text-gray-800">Exclusividade garantida</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfadJIhA1H410Cj_6Mxs8kEj6bupPDbivUqiWZPR0_pqt7wlQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero px-12 py-6 text-xl font-bold interactive rounded-2xl min-w-[300px] shadow-2xl inline-block text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Entrar no processo seletivo
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-12 flex flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center text-muted-foreground text-xs sm:text-sm">
          <span>Vagas abertas mensalmente</span>
          <span className="text-primary">•</span>
          <span>Retorno em 24h úteis</span>
          <span className="text-primary">•</span>
          <span>Processo confidencial</span>
        </div>
      </div>
    </section>
  );
};

export default Exclusividade;
