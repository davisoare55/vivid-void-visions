import { useState, useEffect } from 'react';
import { Calendar, Clock, Save, Lock, ArrowLeft, Check, X } from 'lucide-react';

// Password for admin access
const ADMIN_PASSWORD = 'soares2024';

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

export type CalendarSettings = typeof DEFAULT_SETTINGS;

// Storage key
const STORAGE_KEY = 'soares_calendar_settings';

// Export function to get settings
export const getCalendarSettings = (): CalendarSettings => {
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

const GestaoPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [settings, setSettings] = useState<CalendarSettings>(DEFAULT_SETTINGS);
    const [saved, setSaved] = useState(false);

    // Load settings on mount
    useEffect(() => {
        setSettings(getCalendarSettings());
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setPasswordError(false);
        } else {
            setPasswordError(true);
        }
    };

    const handleSave = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const toggleDia = (dia: keyof typeof settings.diasSemana) => {
        setSettings({
            ...settings,
            diasSemana: {
                ...settings.diasSemana,
                [dia]: !settings.diasSemana[dia]
            }
        });
    };

    const togglePeriodo = (periodo: 'manha' | 'tarde') => {
        setSettings({
            ...settings,
            horariosAtivos: {
                ...settings.horariosAtivos,
                [periodo]: !settings.horariosAtivos[periodo]
            }
        });
    };

    // Login screen
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-4">
                <div className="w-full max-w-sm">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Área Restrita</h1>
                        <p className="text-muted-foreground text-sm">Gestão do Calendário</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                placeholder="Senha de acesso"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 ${passwordError ? 'border-red-500' : 'border-white/10'
                                    }`}
                            />
                            {passwordError && (
                                <p className="text-red-500 text-sm mt-2">Senha incorreta</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full btn-premium py-3 font-bold"
                        >
                            Entrar
                        </button>
                    </form>

                    <a
                        href="/"
                        className="flex items-center justify-center gap-2 text-muted-foreground hover:text-white mt-6 text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar ao site
                    </a>
                </div>
            </div>
        );
    }

    const diasSemanaLabels = {
        domingo: 'Domingo',
        segunda: 'Segunda',
        terca: 'Terça',
        quarta: 'Quarta',
        quinta: 'Quinta',
        sexta: 'Sexta',
        sabado: 'Sábado'
    };

    return (
        <div className="min-h-screen bg-background p-4 md:p-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                            <Calendar className="w-6 h-6 text-primary" />
                            Gestão do Calendário
                        </h1>
                        <p className="text-muted-foreground text-sm mt-1">
                            Configure a disponibilidade do agendamento
                        </p>
                    </div>
                    <a
                        href="/"
                        className="text-muted-foreground hover:text-white flex items-center gap-2 text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Voltar
                    </a>
                </div>

                {/* Settings Form */}
                <div className="space-y-6">
                    {/* Dias úteis disponíveis */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-primary" />
                            Dias Disponíveis
                        </h2>

                        <div className="mb-4">
                            <label className="text-sm text-muted-foreground mb-2 block">
                                Quantos dias úteis mostrar como disponíveis:
                            </label>
                            <select
                                value={settings.diasUteis}
                                onChange={(e) => setSettings({ ...settings, diasUteis: Number(e.target.value) })}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary/50"
                            >
                                {[1, 2, 3, 4, 5, 7, 10, 14].map((n) => (
                                    <option key={n} value={n} className="bg-gray-900">
                                        {n} {n === 1 ? 'dia útil' : 'dias úteis'}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="text-sm text-muted-foreground mb-3 block">
                                Dias da semana que você atende:
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {Object.entries(diasSemanaLabels).map(([key, label]) => (
                                    <button
                                        key={key}
                                        onClick={() => toggleDia(key as keyof typeof settings.diasSemana)}
                                        className={`p-3 rounded-lg border transition-all flex items-center justify-center gap-2 ${settings.diasSemana[key as keyof typeof settings.diasSemana]
                                                ? 'border-primary bg-primary/20 text-white'
                                                : 'border-white/10 text-muted-foreground hover:border-white/30'
                                            }`}
                                    >
                                        {settings.diasSemana[key as keyof typeof settings.diasSemana] ? (
                                            <Check className="w-4 h-4 text-primary" />
                                        ) : (
                                            <X className="w-4 h-4" />
                                        )}
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Horários */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            Horários de Atendimento
                        </h2>

                        <div className="space-y-4">
                            {/* Manhã */}
                            <div>
                                <button
                                    onClick={() => togglePeriodo('manha')}
                                    className={`w-full p-4 rounded-lg border transition-all flex items-center justify-between ${settings.horariosAtivos.manha
                                            ? 'border-primary bg-primary/10'
                                            : 'border-white/10 opacity-50'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-4 h-4 rounded border ${settings.horariosAtivos.manha
                                                ? 'bg-primary border-primary'
                                                : 'border-white/30'
                                            }`}>
                                            {settings.horariosAtivos.manha && <Check className="w-3 h-3 text-black" />}
                                        </div>
                                        <span className="text-white font-medium">Manhã</span>
                                    </div>
                                    <span className="text-muted-foreground text-sm">
                                        {settings.horarios.manha.join(', ')}
                                    </span>
                                </button>
                            </div>

                            {/* Tarde */}
                            <div>
                                <button
                                    onClick={() => togglePeriodo('tarde')}
                                    className={`w-full p-4 rounded-lg border transition-all flex items-center justify-between ${settings.horariosAtivos.tarde
                                            ? 'border-primary bg-primary/10'
                                            : 'border-white/10 opacity-50'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-4 h-4 rounded border ${settings.horariosAtivos.tarde
                                                ? 'bg-primary border-primary'
                                                : 'border-white/30'
                                            }`}>
                                            {settings.horariosAtivos.tarde && <Check className="w-3 h-3 text-black" />}
                                        </div>
                                        <span className="text-white font-medium">Tarde</span>
                                    </div>
                                    <span className="text-muted-foreground text-sm">
                                        {settings.horarios.tarde.join(', ')}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Save Button */}
                    <button
                        onClick={handleSave}
                        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${saved
                                ? 'bg-green-500 text-white'
                                : 'btn-premium'
                            }`}
                    >
                        {saved ? (
                            <>
                                <Check className="w-5 h-5" />
                                Salvo com sucesso!
                            </>
                        ) : (
                            <>
                                <Save className="w-5 h-5" />
                                Salvar Configurações
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GestaoPage;
