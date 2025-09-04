import { Card } from '@/components/ui/card';

const PorQueFooh = () => {
  return (
    <section id="por-que-fooh" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            O atalho para marcas de alto padrão
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Além da execução no nível das gigantes, cada peça é criada para extrair e mostrar a essência da sua marca ou produto.<br/>
            Nada de template: é artesanal, autoral e impossível de copiar.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Traditional World */}
          <div className="p-4 sm:p-6 md:p-10 border-2 border-white rounded-3xl bg-transparent interactive group hover:scale-105 transition-all duration-300" style={{boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'}}>
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <div className="mb-3 sm:mb-4 md:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/portfolio/branco/mundo-fisico-construcao-branco.png" alt="Mundo físico" className="w-8 h-8 sm:w-10 h-10 md:w-12 h-12" />
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white bg-red-500 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-xl md:rounded-2xl inline-block">Mundo físico</h3>
            </div>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <span className="text-red-500 text-sm sm:text-lg md:text-xl">❌</span>
                <span className="text-white text-xs sm:text-base md:text-lg">Instalação gigante</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <span className="text-red-500 text-sm sm:text-lg md:text-xl">❌</span>
                <span className="text-white text-xs sm:text-base md:text-lg">Outdoor + licenças</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <span className="text-red-500 text-sm sm:text-lg md:text-xl">❌</span>
                <span className="text-white text-xs sm:text-base md:text-lg">Logística complexa</span>
              </div>
              <div className="border-t border-red-500/30 pt-4 sm:pt-5 md:pt-6 mt-4 sm:mt-6 md:mt-8">
                <p className="text-center text-red-500 font-bold text-sm sm:text-lg md:text-2xl">
                  = milhões investidos
                </p>
              </div>
            </div>
          </div>

          {/* FOOH CGI */}
          <div className="p-4 sm:p-6 md:p-10 border-2 border-white rounded-3xl bg-transparent interactive group hover:scale-105 transition-all duration-300" style={{boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'}}>
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <div className="mb-3 sm:mb-4 md:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/portfolio/branco/producao-cinema-brancoo.png" alt="FOOH CGI" className="w-8 h-8 sm:w-10 h-10 md:w-12 h-12" />
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white bg-green-500 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-xl md:rounded-2xl inline-block">FOOH CGI autoral</h3>
            </div>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <span className="text-green-500 text-sm sm:text-lg md:text-xl">✅</span>
                <span className="text-white text-xs sm:text-base md:text-lg">Mesmo impacto visual</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <span className="text-green-500 text-sm sm:text-lg md:text-xl">✅</span>
                <span className="text-white text-xs sm:text-base md:text-lg">Execução de cinema</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <span className="text-green-500 text-sm sm:text-lg md:text-xl">✅</span>
                <span className="text-white text-xs sm:text-base md:text-lg">Estratégia viral integrada</span>
              </div>
              <div className="border-t border-green-500/30 pt-4 sm:pt-5 md:pt-6 mt-4 sm:mt-6 md:mt-8">
                <p className="text-center text-green-500 font-bold text-sm sm:text-lg md:text-2xl">
                  = fração justa do investimento
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorQueFooh;
