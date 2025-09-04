import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Contato', id: 'contato' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-gradient cursor-pointer interactive"
            onClick={() => scrollToSection('hero')}
          >
            EDITOR.VFX
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium interactive"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contato')}
              className="btn-hero px-6 py-2 interactive"
            >
              Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground interactive"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium interactive py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contato')}
                className="btn-hero w-full py-2 mt-4 interactive"
              >
                Orçamento
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;