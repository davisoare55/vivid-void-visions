import { Card } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

const ProvaSocial = () => {
  // Stats removed as per user request

  return (
    <section id="prova-social" className="py-24 bg-background relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Chat Cloud Simulation */}
        <div className="mb-24 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Sua Agenda <span className="text-gradient-gold">Lotada</span>
            </h2>
            <p className="text-muted-foreground max-w-4xl mx-auto md:whitespace-nowrap">
              O resultado de uma estratégia bem executada é o WhatsApp da sua clínica não parar de tocar.
            </p>
          </div>

          {/* Abstract representation of "Chat Cloud" since we don't have the image yet */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-80">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-[#0a1a10] border border-[#1a2a20] p-4 rounded-xl rounded-tl-none relative animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs text-green-400 font-bold mb-1">+55 11 99999-****</p>
                    <p className="text-sm text-white/90">Olá, vi o vídeo no Instagram e gostaria de agendar uma avaliação.</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="hidden md:block col-span-3 text-center mt-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest animate-pulse">
                + de 50 mensagens chegando agora...
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid Removed as per user request */}

      </div>
    </section>
  );
};

export default ProvaSocial;
