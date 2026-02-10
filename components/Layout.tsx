
import React, { useState, useEffect } from 'react';
import { MessageSquare, LayoutDashboard, History, PieChart } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: any) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const tabs = [
    { id: 'chat', label: 'Чат', icon: MessageSquare },
    { id: 'overview', label: 'Обзор', icon: LayoutDashboard },
    { id: 'history', label: 'История', icon: History },
    { id: 'analytics', label: 'Анализ', icon: PieChart },
  ];

  // Auto-hide after a short delay on mobile/touch if no interaction
  useEffect(() => {
    if (isNavVisible) {
      const timer = setTimeout(() => {
        // We only auto-hide if it's likely a touch device where hover isn't persistent
        if (window.matchMedia('(pointer: coarse)').matches) {
          setIsNavVisible(false);
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isNavVisible]);

  return (
    <div className="flex flex-col h-screen max-h-screen overflow-hidden bg-[#000B1E]">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-20 pt-4 px-4 scroll-smooth">
        {children}
      </main>

      {/* Invisible Trigger Zone at the bottom */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-12 z-40"
        onMouseEnter={() => setIsNavVisible(true)}
        onTouchStart={() => setIsNavVisible(true)}
      />

      {/* Navigation - Slidable Apple-style sticky tab bar */}
      <nav 
        onMouseLeave={() => setIsNavVisible(false)}
        className={`fixed bottom-0 left-0 right-0 glass-panel border-t border-white/10 px-4 py-2 flex justify-around items-center z-50 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          isNavVisible ? 'translate-y-0' : 'translate-y-[110%]'
        }`}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                onTabChange(tab.id);
                // Keep visible for a moment after clicking
              }}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                isActive ? 'text-sky-400 scale-110' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Icon size={24} className={isActive ? 'drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]' : ''} />
              <span className="text-[10px] mt-1 font-medium">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
