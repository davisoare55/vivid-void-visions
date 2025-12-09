import { useRef, useEffect } from 'react';

const NossosFeitos = () => {
    const videos = [
        {
            client: "CapiTech",
            stats: "130k Visualizações",
            file: "CAPITECH.webm",
            poster: "/portfolio/preto/capitech-thumb.png" // Assuming thumb exists or just video
        },
        {
            client: "Dra. Marcella",
            stats: "88k Visualizações",
            file: "DRA MARCELA.webm"
        },
        {
            client: "Clínica Letizio",
            stats: "1.3mi Visualizações",
            file: "letizio.webm"
        },
        {
            client: "Fanta",
            stats: "60mi Visualizações",
            file: "FANTA.webm"
        }
    ];

    return (
        <section id="nossos-feitos" className="py-24 bg-background relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-sm text-primary uppercase tracking-widest mb-4">Portfolio</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Nossos Feitos
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Resultados reais de quem aplica nossa metodologia.
                    </p>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[9/16]"
                        >
                            <video
                                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={`/portfolio/${video.file}`} type="video/webm" />
                                {/* Fallback for MP4 if needed, but assuming webm is primary based on file list */}
                            </video>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 w-full p-6">
                                <h3 className="text-xl font-bold text-white mb-1">{video.client}</h3>
                                <p className="text-primary font-medium text-sm">{video.stats}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Summary Bar Removed as per user request */}

            </div>
        </section>
    );
};

export default NossosFeitos;
