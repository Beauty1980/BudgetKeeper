
import React from 'react';
import { Sparkles, ShieldCheck, Zap, BarChart3, ChevronRight, Play } from 'lucide-react';

interface LandingProps {
  onStartApp: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStartApp }) => {
  return (
    <div className="min-h-screen bg-[#000B1E] text-slate-100 selection:bg-sky-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
            <Sparkles size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight electric-glow">Finance Agent</span>
        </div>
        <button 
          onClick={onStartApp}
          className="text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
        >
          Войти
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <Zap size={14} />
          <span>Будущее личного учета уже здесь</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
          Твой личный <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">ИИ-контролер</span> финансов
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Перестань сливать бюджет впустую. Агент проследит за каждой тратой, поймет тебя с полуслова и даст честную обратную связь в реальном времени.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <button 
            onClick={() => alert('Перенаправление на страницу оплаты...')}
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#000B1E] font-bold rounded-2xl hover:bg-slate-200 transition-all flex items-center justify-center group shadow-xl shadow-white/5"
          >
            Зарегистрироваться и оплатить
            <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={onStartApp}
            className="w-full sm:w-auto px-8 py-4 bg-sky-500/10 border border-sky-500/30 text-sky-400 font-bold rounded-2xl hover:bg-sky-500/20 transition-all flex items-center justify-center"
          >
            Попробовать бесплатно
          </button>
        </div>
      </section>

      {/* Interface Preview */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto glass-panel p-2 rounded-[2.5rem] border-white/10 shadow-2xl shadow-sky-500/10 animate-in fade-in zoom-in-95 duration-1000">
          <div className="bg-[#000B1E] rounded-[2rem] overflow-hidden border border-white/5 aspect-video relative group">
             <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent pointer-events-none" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-sky-500/40 group-hover:scale-110 transition-transform cursor-pointer">
                   <Play size={24} fill="currentColor" />
                </div>
             </div>
             {/* Mock UI Elements */}
             <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-2xl border-white/10 opacity-60">
                <div className="flex items-center space-x-3">
                   <div className="w-8 h-8 rounded-full bg-sky-500" />
                   <div className="space-y-1 flex-1">
                      <div className="h-2 w-24 bg-white/20 rounded" />
                      <div className="h-2 w-full bg-white/10 rounded" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-3xl border-white/5 space-y-4">
            <div className="w-12 h-12 bg-sky-500/20 rounded-2xl flex items-center justify-center text-sky-400">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold">Ввод естественным языком</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Забудь о кнопках и формах. Просто напиши «такси 500» или «купил кофе за 200 вчера». ИИ сам распределит всё по категориям.
            </p>
          </div>
          
          <div className="glass-panel p-8 rounded-3xl border-white/5 space-y-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold">ИИ-контроль лимитов</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Агент знает твои цели. Если ты приближаешься к «красной зоне», он предупредит тебя заранее, исходя из темпа твоих трат.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border-white/5 space-y-4">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-bold">Характер под тебя</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Выбирай тон общения: от мягких советов до жесткой дисциплины. Твой Агент может быть другом или суровым наставником.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto glass-panel p-12 rounded-[3rem] border-sky-500/20 relative overflow-hidden">
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/10 blur-[100px]" />
           <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 blur-[100px]" />
           
           <h2 className="text-3xl md:text-4xl font-bold mb-6">Готов взять финансы под контроль?</h2>
           <p className="text-slate-400 mb-10">Присоединяйся к тысячам пользователей, которые доверили свой бюджет ИИ.</p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button 
                onClick={() => alert('Перенаправление на страницу оплаты...')}
                className="w-full sm:w-auto px-10 py-5 bg-sky-500 text-white font-bold rounded-2xl hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
             >
                Начать сейчас за 499₽ / мес
             </button>
             <button 
               onClick={onStartApp}
               className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
             >
               Перейти к приложению
             </button>
           </div>
           <p className="mt-6 text-xs text-slate-500">7 дней бесплатного пробного периода. Отмена в любое время.</p>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 px-6 text-center text-slate-500 text-sm">
        <div className="mb-4 flex items-center justify-center space-x-2">
          <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center">
            <Sparkles size={12} className="text-slate-400" />
          </div>
          <span className="font-bold text-slate-300">Finance Agent AI</span>
        </div>
        <p>&copy; 2025 Все права защищены. Сделано для твоего финансового спокойствия.</p>
      </footer>
    </div>
  );
};
