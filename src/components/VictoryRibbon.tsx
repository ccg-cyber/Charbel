import React from 'react';
import { Clock, MapPin, Trophy } from 'lucide-react';

export const VictoryRibbon: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-950 via-neutral-900 to-neutral-950 border-b border-red-900/40 py-2 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col xs:flex-row items-start xs:items-center justify-between gap-1.5 sm:gap-3 text-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shadow flex items-center gap-1">
            <Trophy className="w-3 h-3 text-amber-300" /> WINNER
          </span>
          <span className="text-neutral-300 font-semibold text-xs">
            Sep 19, 2026: <strong className="text-white font-black">CHAMPS 47</strong> — <span className="text-sky-400 font-bold">25 A TEAM</span>
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] sm:text-xs text-neutral-400 font-medium">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-red-400 shrink-0" /> 12:00 – 13:30
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-red-400 shrink-0" /> Champs Arena
          </span>
        </div>
      </div>
    </div>
  );
};
