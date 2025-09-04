import React from 'react';
import { useThemeMode } from '@/hooks/use-theme-mode';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';

const ThemeModeToggle: React.FC = () => {
  const { isBlackWhiteMode, toggleMode } = useThemeMode();

  return (
    <Button
      onClick={toggleMode}
      variant="outline"
      size="sm"
      className={`fixed top-6 right-6 z-50 transition-all duration-300 ${
        isBlackWhiteMode 
          ? 'border-white bg-black text-white hover:bg-white hover:text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
          : 'border-orange-500 bg-black text-orange-500 hover:bg-orange-500 hover:text-black shadow-[0_0_20px_rgba(255,140,0,0.3)]'
      }`}
      title={isBlackWhiteMode ? 'Modo Colorido' : 'Modo Preto e Branco'}
    >
      <Palette className="w-4 h-4 mr-2" />
      {isBlackWhiteMode ? 'COLOR' : 'B&W'}
    </Button>
  );
};

export default ThemeModeToggle;
