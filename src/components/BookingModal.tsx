import { X, Loader2, Diamond } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { useEffect, useState } from 'react';

const BookingModal = () => {
    const { isBookingOpen, closeBooking } = useBooking();
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    // Prevent scrolling when modal is open and handle simulated progress
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isBookingOpen) {
            document.body.style.overflow = 'hidden';
            setIsLoading(true);
            setProgress(0);

            // Simulate progress up to 90%
            interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 90) return 90;
                    const diff = Math.random() * 10;
                    return Math.min(prev + diff, 90);
                });
            }, 100);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            clearInterval(interval);
        };
    }, [isBookingOpen]);

    const handleIframeLoad = () => {
        setProgress(100);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Extended delay to show 100%
    };

    if (!isBookingOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={closeBooking}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl h-[80vh] bg-background rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-background/50 backdrop-blur-md">
                    <h3 className="text-lg font-bold text-white">Agendar Reunião</h3>
                    <button
                        onClick={closeBooking}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Calendly Iframe */}
                <div className="flex-1 w-full bg-background relative">
                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md z-20 transition-opacity duration-500">
                            <div className="w-64 flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
                                {/* Percentage */}
                                <div className="text-4xl font-bold text-gradient-gold font-display">
                                    {Math.round(progress)}%
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-gold transition-all duration-300 ease-out"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>

                                {/* Text */}
                                <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] animate-pulse text-center">
                                    Carregando Calendário Exclusivo...
                                </span>
                            </div>
                        </div>
                    )}
                    <iframe
                        src="https://calendly.com/davisoaresvfx/30min?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=d4af37"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Agendar Reunião com Davi Soares"
                        onLoad={handleIframeLoad}
                        className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
