import React from 'react';
import { User, Smartphone, Trophy } from 'lucide-react';
import { ActiveTab } from '../types';

interface TabsNavigationProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const TabsNavigation: React.FC<TabsNavigationProps> = ({
  activeTab,
  onTabChange,
}) => {
  const tabs = [
    {
      id: 'profile' as const,
      label: 'Player Bio & Stats',
      mobileLabel: 'Profile',
      icon: User,
    },
    {
      id: 'status_poster' as const,
      label: '9:16 WhatsApp Status',
      mobileLabel: 'WhatsApp Status',
      icon: Smartphone,
      badge: '9:16',
    },
    {
      id: 'match_recap' as const,
      label: 'Match Highlights (47-25)',
      mobileLabel: 'Match (47-25)',
      icon: Trophy,
    },
  ];

  return (
    <div className="relative mb-6 border-b border-neutral-800/80">
      <nav 
        className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth pb-3 px-1 -mx-1"
        aria-label="App Tabs"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}-btn`}
              onClick={() => onTabChange(tab.id)}
              className={`shrink-0 flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer min-h-[44px] touch-manipulation select-none ${
                isActive
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-neutral-900/70 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-neutral-400'}`} />
              <span className="sm:inline hidden">{tab.label}</span>
              <span className="sm:hidden inline">{tab.mobileLabel}</span>
              {tab.badge && (
                <span className={`text-[10px] font-black px-1.5 py-0.5 rounded uppercase ${
                  isActive ? 'bg-black/40 text-amber-300' : 'bg-red-950 text-red-400 border border-red-800/50'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
