import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const WhatsAppButton = () => {
    // Always visible
    const isVisible = true;

    const phoneNumber = '5511982603777';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o serviço de FOOH.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:bg-[#20b858] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
            )}
            aria-label="Contato via WhatsApp"
        >
            <MessageCircle className="w-8 h-8" />
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
        </a>
    );
};

export default WhatsAppButton;
