import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [timeLeft, setTimeLeft] = useState(7 * 60); // 7 minutes in seconds
  const [spotsLeft] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="contato" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Vamos Trabalhar Juntos
          </h2>
        </div>

        {/* Urgency Timer */}
        <div className="p-8 mb-12 border-2 border-white rounded-lg interactive group hover:scale-105 transition-all duration-300" style={{background: 'linear-gradient(145deg, #000000 0%, #0a0a0a 30%, #1a1a1a 70%, #2a2a2a 100%)', boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'}}>
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">Oferta por Tempo Limitado</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Apenas <span className="text-primary font-bold">{spotsLeft} vagas restantes</span> para este mês
              </p>
            </div>
            
            <div className="mb-8">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {formatTime(timeLeft)}
              </div>
              <p className="text-sm text-muted-foreground">Tempo restante para garantir sua vaga</p>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfadJIhA1H410Cj_6Mxs8kEj6bupPDbivUqiWZPR0_pqt7wlQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero px-12 py-6 text-xl font-bold interactive rounded-2xl min-w-[300px] shadow-2xl inline-block text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Garantir minha vaga agora
            </a>
            
            <p className="text-sm text-muted-foreground mt-4">
              Processo seletivo • Retorno em 24h úteis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;