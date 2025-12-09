import { X, Calendar, Clock, User, Phone, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { useState, useEffect } from 'react';

const WEBHOOK_URL = 'https://webhookia.brazilzap.com.br/webhook/davisoares-agendamento';

// Storage key (same as GestaoPage)
const STORAGE_KEY = 'soares_calendar_settings';

// Default settings
const DEFAULT_SETTINGS = {
    diasUteis: 2,
    diasSemana: {
        domingo: false,
        segunda: true,
        terca: true,
        quarta: true,
        quinta: true,
        sexta: true,
        sabado: true
    },
    horarios: {
        manha: ['09:00', '09:30', '10:00', '10:30', '11:00'],
        tarde: ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00']
    },
    horariosAtivos: {
        manha: true,
        tarde: true
    }
};

type CalendarSettings = typeof DEFAULT_SETTINGS;

// Get stored settings
const getCalendarSettings = (): CalendarSettings => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (e) {
        console.error('Error reading calendar settings:', e);
    }
    return DEFAULT_SETTINGS;
};

// Map day of week (0-6) to settings key
const dayIndexToKey = (dayIndex: number): keyof typeof DEFAULT_SETTINGS.diasSemana => {
    const map: { [key: number]: keyof typeof DEFAULT_SETTINGS.diasSemana } = {
        0: 'domingo',
        1: 'segunda',
        2: 'terca',
        3: 'quarta',
        4: 'quinta',
        5: 'sexta',
        6: 'sabado'
    };
    return map[dayIndex];
};

const BookingModal = () => {
    const { isBookingOpen, closeBooking } = useBooking();
    const [step, setStep] = useState<'date' | 'time' | 'form' | 'success'>('date');
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [settings, setSettings] = useState<CalendarSettings>(DEFAULT_SETTINGS);
    const [availableDates, setAvailableDates] = useState<Date[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        clinicName: ''
    });

    // Load settings and calculate available dates
    useEffect(() => {
        const loadedSettings = getCalendarSettings();
        setSettings(loadedSettings);

        // Calculate available dates based on settings
        const available: Date[] = [];
        const today = new Date();
        let daysChecked = 0;
        const currentDate = new Date(today);

        while (available.length < loadedSettings.diasUteis && daysChecked < 60) {
            currentDate.setDate(currentDate.getDate() + 1);
            daysChecked++;
            const dayOfWeek = currentDate.getDay();
            const dayKey = dayIndexToKey(dayOfWeek);

            if (loadedSettings.diasSemana[dayKey]) {
                available.push(new Date(currentDate));
            }
        }

        setAvailableDates(available);
    }, [isBookingOpen]);

    const isDateAvailable = (date: Date) => {
        return availableDates.some(
            (availableDate) =>
                availableDate.getDate() === date.getDate() &&
                availableDate.getMonth() === date.getMonth() &&
                availableDate.getFullYear() === date.getFullYear()
        );
    };

    const getTimeSlots = () => {
        const slots: string[] = [];
        if (settings.horariosAtivos.manha) {
            slots.push(...settings.horarios.manha);
        }
        if (settings.horariosAtivos.tarde) {
            slots.push(...settings.horarios.tarde);
        }
        return slots;
    };

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days: (Date | null)[] = [];

        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            days.push(new Date(year, month, day));
        }

        return days;
    };

    const formatMonthYear = (date: Date) => {
        return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' });
    };

    const formatFullDate = (date: Date) => {
        return date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    };

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const handleDateSelect = (date: Date) => {
        if (isDateAvailable(date)) {
            setSelectedDate(date);
            setStep('time');
        }
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
                mode: 'no-cors'
            });

            setStep('success');
        } catch (error) {
            console.error('Erro ao enviar agendamento:', error);
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

    const days = getDaysInMonth(currentMonth);
    const weekDays = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
    const timeSlots = getTimeSlots();

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            <div className="relative w-full max-w-md bg-background rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300 max-h-[90vh]">

                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-background/50 backdrop-blur-md">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        Escolha uma data e horário
                    </h3>
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-4 overflow-y-auto">
                    {step === 'date' && (
                        <div className="animate-in fade-in duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <button
                                    onClick={prevMonth}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <span className="text-white font-medium capitalize">{formatMonthYear(currentMonth)}</span>
                                <button
                                    onClick={nextMonth}
                                    className="p-2 rounded-lg hover:bg-white/10 transition-colors text-muted-foreground hover:text-white"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="grid grid-cols-7 gap-1 mb-2">
                                {weekDays.map((day) => (
                                    <div key={day} className="text-center text-xs text-muted-foreground py-2">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-7 gap-1">
                                {days.map((day, index) => {
                                    if (!day) {
                                        return <div key={index} className="aspect-square" />;
                                    }

                                    const isAvailable = isDateAvailable(day);
                                    const isToday =
                                        day.getDate() === new Date().getDate() &&
                                        day.getMonth() === new Date().getMonth() &&
                                        day.getFullYear() === new Date().getFullYear();

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleDateSelect(day)}
                                            disabled={!isAvailable}
                                            className={`aspect-square rounded-full flex items-center justify-center text-sm transition-all
                        ${isAvailable
                                                    ? 'bg-primary text-black font-bold hover:bg-primary/80 cursor-pointer'
                                                    : 'text-muted-foreground/50 cursor-not-allowed'
                                                }
                        ${isToday && !isAvailable ? 'ring-1 ring-white/30' : ''}
                      `}
                                        >
                                            {day.getDate()}
                                        </button>
                                    );
                                })}
                            </div>

                            <p className="text-xs text-muted-foreground mt-4 text-center">
                                Horário de Brasília (GMT-3)
                            </p>
                        </div>
                    )}

                    {step === 'time' && selectedDate && (
                        <div className="animate-in fade-in duration-300">
                            <button
                                onClick={() => setStep('date')}
                                className="text-sm text-primary hover:underline mb-4 flex items-center gap-1"
                            >
                                <ChevronLeft className="w-4 h-4" /> Voltar
                            </button>
                            <p className="text-muted-foreground mb-2 text-sm">
                                Data: <span className="text-white font-medium">{formatDate(selectedDate)}</span>
                            </p>
                            <p className="text-muted-foreground mb-4 text-sm">Escolha um horário:</p>

                            <div className="grid grid-cols-3 gap-2 max-h-[40vh] overflow-y-auto">
                                {timeSlots.map((time) => (
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

                    {step === 'form' && selectedDate && selectedTime && (
                        <div className="animate-in fade-in duration-300">
                            <button
                                onClick={() => setStep('time')}
                                className="text-sm text-primary hover:underline mb-4 flex items-center gap-1"
                            >
                                <ChevronLeft className="w-4 h-4" /> Voltar
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
