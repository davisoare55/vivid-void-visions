import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updatePosition = (e: MouseEvent) => {
      if (!isMobile) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (!isMobile) {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('interactive')) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      }
    };

    if (!isMobile) {
      document.addEventListener('mousemove', updatePosition);
      document.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  // Don't render anything on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      <div
        className="fixed w-6 h-6 pointer-events-none transition-all duration-200 ease-out"
        style={{
          left: `${position.x - 12}px`,
          top: `${position.y - 12}px`,
          background: 'radial-gradient(circle, #FF8C00 0%, rgba(255, 140, 0, 0.8) 40%, transparent 70%)',
          zIndex: 99999
        }}
      />
      <div
        className="cursor-dot"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
};

export default CustomCursor;