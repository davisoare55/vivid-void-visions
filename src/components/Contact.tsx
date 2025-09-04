import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para dar vida ao seu projeto? Entre em contato e vamos discutir como posso ajudar a tornar sua visão realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="card-3d p-8">
              <h3 className="text-2xl font-bold mb-6 text-warm">Entre em Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 interactive">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">contato@editor.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 interactive">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telefone</p>
                    <p className="text-muted-foreground">+55 (11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 interactive">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">+55 (11) 99999-9999</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="card-3d p-8">
              <h3 className="text-xl font-bold mb-4 text-warm">Orçamento Gratuito</h3>
              <p className="text-muted-foreground leading-relaxed">
                Solicite um orçamento sem compromisso. Analisarei seu projeto e retornarei com uma proposta personalizada em até 24 horas.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-3d p-8">
            <h3 className="text-2xl font-bold mb-6 text-warm">Envie sua Mensagem</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Nome</label>
                  <Input 
                    placeholder="Seu nome completo"
                    className="bg-background-secondary border-border focus:border-primary interactive"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input 
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-background-secondary border-border focus:border-primary interactive"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Assunto</label>
                <Input 
                  placeholder="Assunto do seu projeto"
                  className="bg-background-secondary border-border focus:border-primary interactive"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Mensagem</label>
                <Textarea 
                  placeholder="Descreva seu projeto em detalhes..."
                  rows={6}
                  className="bg-background-secondary border-border focus:border-primary interactive resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="btn-hero w-full py-3 interactive"
              >
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;