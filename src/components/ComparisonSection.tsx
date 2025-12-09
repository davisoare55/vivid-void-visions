import { Check, X, Lock } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';

const ComparisonSection = () => {
    const { openBooking } = useBooking();

    return (
        <section className="py-24 bg-background-secondary relative border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-display">
                        O QUE NOS DIFERENCIA?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* Agências Tradicionais */}
                    <div className="p-8 rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-transparent relative overflow-hidden group hover:border-red-900/50 transition-all duration-500">
                        <h3 className="text-2xl font-bold text-white mb-8">Agências Tradicionais</h3>
                        <ul className="space-y-4 mb-12">
                            <li className="flex items-start gap-3 text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                <span>Paga por Promessa</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                <span>Risco é 100% seu</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                <span>Anúncios com foto genérica (copia e cola)</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                                <span>ROI médio de 2x (se tiver sorte)</span>
                            </li>
                        </ul>

                        <div className="w-full py-4 rounded-xl border border-red-900/50 bg-red-950/30 text-center text-red-200 font-bold text-lg">
                            R$8.000,00 - R$12.000,00
                        </div>
                    </div>

                    {/* ClínicROI BASIC */}
                    <div className="p-8 rounded-3xl border border-white/10 bg-white/5 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                        <h3 className="text-2xl font-bold text-white mb-8">ClínicROI BASIC</h3>
                        <ul className="space-y-4 mb-12">
                            <li className="flex items-start gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                                <span>Paga por SÓ nos AGENDAMENTOS reais</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                                <span>Risco 100% nosso</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                                <span>Anúncios VFX premium + IA</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                                <span>ROI até 10X</span>
                            </li>
                        </ul>

                        <div className="w-full py-4 rounded-xl border border-white/20 bg-white/10 flex items-center justify-between px-6 group cursor-pointer hover:bg-white/15 transition-colors" onClick={openBooking}>
                            <span className="text-white font-bold text-sm uppercase tracking-wider">Só o Custo - Sem Margem</span>
                            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-300 text-black text-xs font-bold uppercase shadow-[0_0_15px_rgba(253,224,71,0.3)] hover:shadow-[0_0_25px_rgba(253,224,71,0.5)] hover:scale-105 transition-all cursor-pointer">
                                Desbloqueie
                            </div>
                        </div>
                    </div>

                </div>

                {/* ClínicROI PREMIUM (Full Width) */}
                <div className="mt-8 max-w-4xl mx-auto p-8 md:p-12 rounded-3xl border border-primary/30 bg-gradient-to-b from-primary/10 to-transparent relative overflow-hidden card-premium">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-6 font-display">ClínicROI PREMIUM</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-white/90">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Tudo do BASIC+</span>
                                </li>
                                <li className="flex items-start gap-3 text-white/90">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>SDR IA (humanizada de verdade)</span>
                                </li>
                                <li className="flex items-start gap-3 text-white/90">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Sistema Completo de controle</span>
                                </li>
                                <li className="flex items-start gap-3 text-white/90">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Relatório de KPIs</span>
                                </li>
                                <li className="flex items-start gap-3 text-white/90">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <span>Jornada do Cliente 100% capturada</span>
                                </li>
                            </ul>
                        </div>

                        <div className="relative">
                            {/* Placeholder for the golden brain/gears image */}
                            <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 flex items-center justify-center mb-6">
                                <Lock className="w-12 h-12 text-primary/50" />
                            </div>

                            <div className="w-full py-4 rounded-xl border border-white/10 bg-black/40 flex items-center justify-between px-6" onClick={openBooking}>
                                <div className="flex flex-col">
                                    <span className="text-xs text-muted-foreground uppercase">Investimento disponível</span>
                                    <span className="text-white font-bold text-sm uppercase">APENAS NA REUNIÃO</span>
                                </div>
                                <div className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-100 to-amber-300 text-black text-sm font-bold uppercase hover:scale-105 transition-all cursor-pointer shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)]">
                                    Desbloqueie
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ComparisonSection;
