const ClientLogos = () => {
    return (
        <section className="py-12 bg-background border-b border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-8">
                    Estratégias validadas por grandes players
                </p>

                <div className="relative w-full flex justify-center items-center">
                    {/* Gradient Masks for smooth fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                    {/* Logo Image */}
                    <div className="opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <img
                            src="/portfolio/LOGOS SEM FUNDO.png"
                            alt="Clientes: Nike, Marvel, Fanta, iFood"
                            width="800"
                            height="200"
                            loading="lazy"
                            className="h-16 md:h-24 w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
