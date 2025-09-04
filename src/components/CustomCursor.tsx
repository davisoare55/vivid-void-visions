import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
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