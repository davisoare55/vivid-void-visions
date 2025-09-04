import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Cinema 4D",
    "Blender",
    "DaVinci Resolve",
    "Nuke",
    "Maya",
    "Substance Painter",
    "Arnold Renderer",
    "Unreal Engine",
    "Houdini",
    "Photoshop"
  ];

  const services = [
    {
      title: "Edição de Vídeo",
      description: "Edição profissional para comerciais, filmes e conteúdo digital",
      icon: "🎬"
    },
    {
      title: "VFX & Compositing",
      description: "Efeitos visuais avançados e compositing para cinema e TV",
      icon: "⚡"
    },
    {
      title: "CGI & 3D",
      description: "Criação de elementos 3D fotorrealistas e animações",
      icon: "🎯"
    },
    {
      title: "Motion Graphics",
      description: "Animações gráficas dinâmicas para marcas e eventos",
      icon: "✨"
    }
  ];

  return (
    <section id="sobre" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Editor de vídeo especializado em VFX, CGI e motion graphics, com paixão por criar experiências visuais que impressionam e engajam audiências.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Profile */}
          <div className="space-y-8">
            <Card className="card-3d p-8">
              <h3 className="text-2xl font-bold mb-4 text-neon">Minha Expertise</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Com anos de experiência na indústria audiovisual, especializo-me em transformar conceitos criativos em realidade através de técnicas avançadas de edição, VFX e CGI. Cada projeto é uma oportunidade de superar limites técnicos e artísticos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabalho com as mais modernas ferramentas do mercado, sempre mantendo-me atualizado com as últimas tendências e tecnologias para entregar resultados excepcionais.
              </p>
            </Card>

            {/* Skills */}
            <Card className="card-3d p-8">
              <h3 className="text-2xl font-bold mb-6 text-neon">Ferramentas & Software</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-center text-neon">Serviços</h3>
            {services.map((service, index) => (
              <Card
                key={index}
                className="card-3d p-6 interactive group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-foreground">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;