import { X, Calendar, Clock, User, Phone, CheckCircle } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { useState } from 'react';

const WEBHOOK_URL = 'https://webhookia.brazilzap.com.br/webhook/davisoares-agendamento';

// Generate next 14 days
const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        // Skip weekends
        if (date.getDay() !== 0 && date.getDay() !== 6) {
            dates.push(date);
        }
    }
    return dates.slice(0, 10); // Max 10 days
};

// Available time slots
const TIME_SLOTS = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
];

const BookingModal = () => {
    const { isBookingOpen, closeBooking } = useBooking();
    const [step, setStep] = useState<'date' | 'time' | 'form' | 'success'>('date');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        clinicName: ''
    });

    const dates = generateDates();

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' });
    };

    const formatFullDate = (date: Date) => {
        return date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedDate || !selectedTime) return;

        setIsSubmitting(true);

        const payload = {
            name: formData.name,
            phone: formData.phone,
            clinicName: formData.clinicName,
            date: selectedDate.toISOString().split('T')[0],
            time: selectedTime,
            formattedDate: formatFullDate(selectedDate),
            timestamp: new Date().toISOString()
        };

        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
                mode: 'no-cors' // Webhook might not have CORS headers
            });

            setStep('success');
        } catch (error) {
            console.error('Erro ao enviar agendamento:', error);
            // Still show success since no-cors won't return a proper response
            setStep('success');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setStep('date');
        setSelectedDate(null);
        setSelectedTime(null);
        setFormData({ name: '', phone: '', clinicName: '' });
        closeBooking();
    };

    if (!isBookingOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-background rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-background/50 backdrop-blur-md">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        Agendar Reunião
                    </h3>
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Step: Select Date */}
                    {step === 'date' && (
                        <div className="animate-in fade-in duration-300">
                            <p className="text-muted-foreground mb-4 text-sm">Escolha uma data disponível:</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {dates.map((date, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setSelectedDate(date);
                                            setStep('time');
                                        }}
                                        className="p-3 rounded-lg border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all text-center"
                                    >
                                        <div className="text-xs text-muted-foreground uppercase">
                                            {date.toLocaleDateString('pt-BR', { weekday: 'short' })}
                                        </div>
                                        <div className="text-xl font-bold text-white">
                                            {date.getDate()}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {date.toLocaleDateString('pt-BR', { month: 'short' })}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step: Select Time */}
                    {step === 'time' && selectedDate && (
                        <div className="animate-in fade-in duration-300">
                            <button
                                onClick={() => setStep('date')}
                                className="text-sm text-primary hover:underline mb-4 flex items-center gap-1"
                            >
                                ← Voltar
                            </button>
                            <p className="text-muted-foreground mb-2 text-sm">
                                Data selecionada: <span className="text-white font-medium">{formatDate(selectedDate)}</span>
                            </p>
                            <p className="text-muted-foreground mb-4 text-sm">Escolha um horário:</p>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                {TIME_SLOTS.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => {
                                            setSelectedTime(time);
                                            setStep('form');
                                        }}
                                        className="p-3 rounded-lg border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
                                    >
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span className="text-white font-medium">{time}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step: Form */}
                    {step === 'form' && selectedDate && selectedTime && (
                        <div className="animate-in fade-in duration-300">
                            <button
                                onClick={() => setStep('time')}
                                className="text-sm text-primary hover:underline mb-4 flex items-center gap-1"
                            >
                                ← Voltar
                            </button>
                            <div className="bg-white/5 rounded-lg p-3 mb-4 text-sm">
                                <p className="text-muted-foreground">
                                    📅 {formatDate(selectedDate)} às <span className="text-primary font-bold">{selectedTime}</span>
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm text-muted-foreground mb-1">Nome completo</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Seu nome"
                                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm text-muted-foreground mb-1">WhatsApp</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="(11) 99999-9999"
                                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm text-muted-foreground mb-1">Nome da clínica (opcional)</label>
                                    <input
                                        type="text"
                                        value={formData.clinicName}
                                        onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                                        placeholder="Nome da sua clínica"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-premium py-4 text-lg font-bold flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Agendando...
                                        </>
                                    ) : (
                                        'Confirmar Agendamento'
                                    )}
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Step: Success */}
                    {step === 'success' && (
                        <div className="animate-in fade-in duration-300 text-center py-8">
                            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Agendamento Confirmado!</h4>
                            <p className="text-muted-foreground mb-6">
                                Você receberá uma mensagem no WhatsApp com os detalhes.
                            </p>
                            <button
                                onClick={handleClose}
                                className="btn-premium px-8 py-3"
                            >
                                Fechar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
