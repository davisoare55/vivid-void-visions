import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();

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
    { id: 'home', label: 'Início' },
    { id: 'prova-social', label: 'Resultados' },
    { id: 'como-funciona', label: 'Metodologia' },
    { id: 'exclusividade', label: 'Diferenciais' },
    { id: 'sobre', label: 'Sobre' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div
            className="text-2xl font-bold tracking-tighter cursor-pointer interactive"
            onClick={() => scrollToSection('home')}
          >
            <span className="text-white">SOARES</span>
            <span className="text-primary">.FOOH</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors font-medium interactive"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={openBooking}
              className="btn-premium px-6 py-2 interactive inline-block text-center whitespace-nowrap flex items-center justify-center text-xs"
            >
              Agendar Consultoria
            </button>
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
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openBooking();
                  }}
                  className="btn-premium px-6 py-2 interactive inline-block text-center whitespace-nowrap flex items-center justify-center"
                >
                  Agendar Consultoria
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;