import { useEffect, useState } from 'react';

const InteractiveBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none hidden md:block">
            {/* Base Background */}
            <div className="absolute inset-0 bg-background" />

            {/* Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Dynamic Gold Glow following mouse */}
            <div
                className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-[100px] transition-transform duration-200 ease-out will-change-transform"
                style={{
                    background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(0,0,0,0) 70%)',
                    left: -400,
                    top: -400,
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                }}
            />

            {/* Secondary Ambient Glows (Static) */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
    );
};

export default InteractiveBackground;
