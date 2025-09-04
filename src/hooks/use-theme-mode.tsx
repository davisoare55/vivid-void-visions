import { useState, useEffect } from 'react';

export const useThemeMode = () => {
  const [isBlackWhiteMode, setIsBlackWhiteMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('blackWhiteMode');
    if (saved) {
      setIsBlackWhiteMode(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blackWhiteMode', JSON.stringify(isBlackWhiteMode));
    
    if (isBlackWhiteMode) {
      document.documentElement.classList.add('black-white-mode');
    } else {
      document.documentElement.classList.remove('black-white-mode');
    }
  }, [isBlackWhiteMode]);

  const toggleMode = () => {
    setIsBlackWhiteMode(!isBlackWhiteMode);
  };

  return { isBlackWhiteMode, toggleMode };
};
