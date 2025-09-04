const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold text-gradient mb-4">
            EDITOR.VFX
          </div>
          <p className="text-muted-foreground mb-6">
            Transformando ideias em experiências visuais extraordinárias
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors interactive">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors interactive">
              YouTube
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors interactive">
              Vimeo
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors interactive">
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Editor VFX. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;