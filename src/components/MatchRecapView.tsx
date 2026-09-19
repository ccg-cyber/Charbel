import React from 'react';
import { ShieldCheck, Zap, Trophy, Clock, MapPin } from 'lucide-react';

export const MatchRecapView: React.FC = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      
      {/* Main Scoreboard Display */}
      <div className="bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Header line */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-neutral-800 pb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-red-600 text-white text-[10px] sm:text-xs font-black px-2 py-0.5 rounded">
                OFFICIAL MATCH SCORE
              </span>
              <span className="text-[10px] sm:text-xs text-neutral-400 font-bold uppercase tracking-wider">
                Youth League Championship
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white mt-1">Champs vs. A Team</h2>
          </div>
          <div className="text-left sm:text-right text-[11px] sm:text-xs text-neutral-400">
            <div className="font-bold text-neutral-200">Saturday, 19 September 2026</div>
            <div className="flex items-center sm:justify-end gap-1.5 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-red-400" /> 12:00 – 13:30 • <MapPin className="w-3.5 h-3.5 text-red-400" /> Champs Arena
            </div>
          </div>
        </div>

        {/* Dynamic Head-to-Head Scores (Responsive: Mobile Side-by-Side, Desktop 3-column) */}
        <div className="py-6 sm:py-10">
          
          {/* Mobile view: Side-by-Side Dual Card (<640px) */}
          <div className="sm:hidden space-y-3">
            <div className="grid grid-cols-2 gap-2.5 items-stretch">
              
              {/* Champs Winner Card */}
              <div className="p-3.5 rounded-2xl bg-neutral-950 border-2 border-red-600/70 shadow-lg relative flex flex-col justify-between text-center">
                <span className="bg-red-600 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full mx-auto shadow mb-2">
                  WINNER
                </span>
                <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 border border-red-500/40 flex items-center justify-center font-black text-base mx-auto mb-1">
                  CH
                </div>
                <h3 className="text-base font-black text-white">CHAMPS</h3>
                <div className="text-[10px] text-neutral-400">Charbel #22</div>
                <div className="text-4xl font-black text-red-500 mt-2 tracking-tight">
                  47
                </div>
              </div>

              {/* A Team Card */}
              <div className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 opacity-90 flex flex-col justify-between text-center">
                <span className="text-neutral-500 text-[9px] font-bold uppercase px-2 py-0.5 rounded-full mx-auto mb-2">
                  RUNNER-UP
                </span>
                <div className="w-10 h-10 rounded-xl bg-sky-950/40 text-sky-400 border border-sky-500/30 flex items-center justify-center font-black text-base mx-auto mb-1">
                  AT
                </div>
                <h3 className="text-base font-black text-white">A TEAM</h3>
                <div className="text-[10px] text-neutral-400">Visitor</div>
                <div className="text-4xl font-black text-sky-400 mt-2 tracking-tight">
                  25
                </div>
              </div>

            </div>

            {/* Mobile Margin Banner */}
            <div className="text-center p-2 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold flex items-center justify-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-300" />
              <span>Champs won by +22 Points (47 - 25)</span>
            </div>
          </div>

          {/* Desktop / Tablet View (>=640px) */}
          <div className="hidden sm:grid sm:grid-cols-3 items-center gap-6 text-center">
            
            {/* Champs Box */}
            <div className="p-6 rounded-3xl bg-neutral-950 border-2 border-red-600/60 shadow-xl shadow-red-950/50 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[11px] font-black uppercase px-3 py-0.5 rounded-full shadow">
                WINNERS
              </span>
              <div className="w-14 h-14 rounded-2xl bg-red-600/20 text-red-500 border border-red-500/40 flex items-center justify-center font-black text-xl mx-auto mb-2">
                CH
              </div>
              <h3 className="text-xl font-black text-white">CHAMPS</h3>
              <div className="text-xs text-neutral-400 mt-0.5">Charbel Geagea #22</div>
              <div className="text-5xl sm:text-6xl font-black text-red-500 mt-3 tracking-tighter">
                47
              </div>
            </div>

            {/* VS Center Pillar */}
            <div className="space-y-3">
              <div className="text-2xl sm:text-3xl font-black text-neutral-600">VS</div>
              <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold">
                +22 Point Advantage
              </div>
              <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                A clinic in unselfish passing, defensive rotation, and poised leadership by Champs.
              </p>
            </div>

            {/* A Team Box */}
            <div className="p-6 rounded-3xl bg-neutral-950 border border-neutral-800 opacity-80">
              <div className="w-14 h-14 rounded-2xl bg-sky-950/40 text-sky-400 border border-sky-500/30 flex items-center justify-center font-black text-xl mx-auto mb-2">
                AT
              </div>
              <h3 className="text-xl font-black text-white">A TEAM</h3>
              <div className="text-xs text-neutral-400 mt-0.5">Visiting Squad</div>
              <div className="text-5xl sm:text-6xl font-black text-sky-400 mt-3 tracking-tighter">
                25
              </div>
            </div>

          </div>

        </div>

        {/* Quarter breakdown table with responsive touch scrolling */}
        <div className="bg-neutral-950 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-neutral-800 overflow-x-auto">
          <table className="w-full text-center text-xs min-w-[240px]">
            <thead>
              <tr className="text-neutral-400 font-bold border-b border-neutral-800">
                <th className="py-2 px-1 sm:px-3 text-left">Team</th>
                <th className="py-2 px-1 sm:px-2.5">Q1</th>
                <th className="py-2 px-1 sm:px-2.5">Q2</th>
                <th className="py-2 px-1 sm:px-2.5">Q3</th>
                <th className="py-2 px-1 sm:px-2.5">Q4</th>
                <th className="py-2 px-1 sm:px-3 font-black text-white">Final</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 font-semibold">
              <tr>
                <td className="py-2.5 px-1 sm:px-3 text-left font-black text-white">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0"></span> CHAMPS
                  </span>
                </td>
                <td className="py-2.5 px-1 sm:px-2.5 text-neutral-300">12</td>
                <td className="py-2.5 px-1 sm:px-2.5 text-neutral-300">11</td>
                <td className="py-2.5 px-1 sm:px-2.5 text-red-400 font-bold">14</td>
                <td className="py-2.5 px-1 sm:px-2.5 text-neutral-300">10</td>
                <td className="py-2.5 px-1 sm:px-3 font-black text-red-500 text-sm">47</td>
              </tr>
              <tr>
                <td className="py-2.5 px-1 sm:px-3 text-left font-bold text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0"></span> A TEAM
                  </span>
                </td>
                <td className="py-2.5 px-1 sm:px-2.5 text-neutral-400">6</td>
                <td className="py-2.5 px-1 sm:px-2.5 text-neutral-400">8</td>
                <td className="py-2.5 px-1 sm:px-2.5 text-neutral-400">5</td>
                <td className="py-2.5 px-1 sm:px-2.5 text-neutral-400">6</td>
                <td className="py-2.5 px-1 sm:px-3 font-black text-sky-400 text-sm">25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Highlights for Charbel #22 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-2 sm:space-y-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center font-black shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="text-sm sm:text-base font-black text-white">Lockdown Perimeter Defense</h4>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Charbel's defensive intensity disrupted A Team's primary ball handlers, forcing turnovers that fueled fast-break points for Champs.
          </p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-2 sm:space-y-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-600/20 text-amber-500 flex items-center justify-center font-black shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <h4 className="text-sm sm:text-base font-black text-white">Unselfish Playmaking</h4>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Consistently found cutting teammates with pinpoint passes, embodying his philosophy that teamwork always conquers individual play.
          </p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-4 sm:p-6 space-y-2 sm:space-y-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-600/20 text-emerald-500 flex items-center justify-center font-black shrink-0">
            <Trophy className="w-5 h-5" />
          </div>
          <h4 className="text-sm sm:text-base font-black text-white">Third Quarter Decider</h4>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Pushed the team through a decisive 14-5 scoring surge in the 3rd quarter, sealing the victory with unwavering mental focus.
          </p>
        </div>
      </div>

    </div>
  );
};
