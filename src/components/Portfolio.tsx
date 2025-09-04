import { Card } from '@/components/ui/card';

const Portfolio = () => {
  const projects = [
    {
      title: "VFX Cinematográfico",
      description: "Efeitos visuais avançados para cinema e publicidade",
      tech: ["After Effects", "Cinema 4D", "Nuke"],
    },
    {
      title: "Motion Graphics",
      description: "Animações 2D/3D para campanhas digitais",
      tech: ["After Effects", "Illustrator", "Blender"],
    },
    {
      title: "CGI Realista",
      description: "Criação de elementos 3D fotorrealistas",
      tech: ["Maya", "Arnold", "Substance"],
    },
    {
      title: "Color Grading",
      description: "Correção e gradação de cor profissional",
      tech: ["DaVinci Resolve", "Premiere Pro"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore alguns dos meus trabalhos mais recentes em edição de vídeo, VFX e CGI
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            <div className="card-3d rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-center text-neon">
                Vídeo Destaque
              </h3>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-background-tertiary">
                <div className="flex items-center justify-center h-full">
                  <div 
                    dangerouslySetInnerHTML={{
                      __html: `
                        <vturb-smartplayer id="vid-68b8aa58e2667294be3e13eb" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>
                        <script type="text/javascript">
                          var s=document.createElement("script");
                          s.src="https://scripts.converteai.net/1207b016-5c31-47e2-ba8e-a8059d7a99ff/players/68b8aa58e2667294be3e13eb/v4/player.js";
                          s.async=!0;
                          document.head.appendChild(s);
                        </script>
                      `
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-3d p-6 h-full interactive group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-6 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                <div className="text-4xl text-primary opacity-60">
                  {index === 0 && "🎬"}
                  {index === 1 && "✨"}
                  {index === 2 && "🎯"}
                  {index === 3 && "🎨"}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;