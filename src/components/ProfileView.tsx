import React from 'react';
import {
  Trophy,
  ShieldCheck,
  Flame,
  Camera,
  Heart,
  Sparkles,
  CheckCircle2,
  Sliders,
  Zap,
  Quote,
  Award
} from 'lucide-react';
import { FilterStyle } from '../types';

interface ProfileViewProps {
  playerImage: string | null;
  selectedFilter: FilterStyle;
  onFilterChange: (filter: FilterStyle) => void;
  onUploadClick: () => void;
  cheersCount: number;
  hasCheered: boolean;
  onCheer: () => void;
  proudNote: string;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  playerImage,
  selectedFilter,
  onFilterChange,
  onUploadClick,
  cheersCount,
  hasCheered,
  onCheer,
  proudNote,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8">
      {/* Left Column: Player Card & Family Pride */}
      <div className="lg:col-span-5 space-y-4 sm:space-y-6">
        
        {/* Main Athletic Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 relative overflow-hidden shadow-2xl">
          {/* Subtle Red Stadium Glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Photo Frame */}
          <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 flex items-center justify-center">
            {playerImage ? (
              <img
                src={playerImage}
                alt="Charbel Geagea #22"
                className={`w-full h-full object-cover transition duration-300 ${
                  selectedFilter === 'crimson'
                    ? 'contrast-125 saturate-150 hue-rotate-[-10deg]'
                    : selectedFilter === 'noir'
                    ? 'grayscale contrast-125'
                    : selectedFilter === 'gold'
                    ? 'sepia-[0.35] contrast-110 brightness-105'
                    : 'contrast-110'
                }`}
              />
            ) : (
              // Athletic Illustrated Jersey Presentation
              <div className="w-full h-full relative bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 p-1 mb-3 sm:mb-4 shadow-xl shadow-red-600/30">
                  <div className="w-full h-full rounded-full bg-neutral-950 flex flex-col items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-black text-white">#22</span>
                    <span className="text-[9px] sm:text-[10px] font-black tracking-widest text-red-500 uppercase">CHAMPS</span>
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white">Charbel Geagea</h2>
                <p className="text-red-400 font-extrabold text-xs sm:text-sm uppercase tracking-wider mt-0.5">
                  “The Legacy”
                </p>

                <div className="mt-3 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-[11px] sm:text-xs text-neutral-300">
                  Official Black & Red Champs Jersey #22
                </div>

                <div className="mt-4 flex flex-col items-center gap-1.5">
                  <button
                    onClick={onUploadClick}
                    className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 active:scale-95 text-white text-xs font-bold flex items-center gap-2 shadow-lg transition cursor-pointer min-h-[40px] touch-manipulation"
                  >
                    <Camera className="w-3.5 h-3.5" /> Upload Son's Photo
                  </button>
                  <span className="text-[10px] sm:text-[11px] text-neutral-400">
                    Use any phone camera photo of Charbel
                  </span>
                </div>
              </div>
            )}

            {/* Jersey Number Tag */}
            <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-red-600/40 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px] font-black text-white tracking-wider">CHAMPS #22</span>
            </div>

            {/* Victory Badge Overlay */}
            <div className="absolute bottom-3 inset-x-3 bg-gradient-to-r from-red-600/95 to-red-700/95 backdrop-blur-md px-3 py-2 rounded-xl border border-white/20 text-white shadow-xl flex items-center justify-between">
              <div>
                <div className="text-[9px] uppercase tracking-wider font-extrabold text-red-200">
                  MATCHDAY WINNER
                </div>
                <div className="text-xs sm:text-sm font-black">CHAMPS 47 - 25 A TEAM</div>
              </div>
              <Trophy className="w-5 h-5 text-amber-300 drop-shadow shrink-0" />
            </div>
          </div>

          {/* Quick Details Grid */}
          <div className="mt-4 sm:mt-5 grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
            <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-950/70 border border-neutral-800">
              <div className="text-[10px] sm:text-xs text-neutral-400 font-bold uppercase">Team</div>
              <div className="font-extrabold text-white flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span> Champs
              </div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-950/70 border border-neutral-800">
              <div className="text-[10px] sm:text-xs text-neutral-400 font-bold uppercase">Jersey Number</div>
              <div className="font-extrabold text-red-400 mt-0.5">#22</div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-950/70 border border-neutral-800">
              <div className="text-[10px] sm:text-xs text-neutral-400 font-bold uppercase">Nickname</div>
              <div className="font-extrabold text-white mt-0.5 truncate">The Legacy</div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-950/70 border border-neutral-800">
              <div className="text-[10px] sm:text-xs text-neutral-400 font-bold uppercase">Colors</div>
              <div className="font-extrabold text-white mt-0.5 truncate">Black & Red</div>
            </div>
          </div>

          {/* Filter Selector */}
          <div className="mt-4 pt-3.5 border-t border-neutral-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] sm:text-xs text-neutral-400 font-semibold flex items-center gap-1">
                <Sliders className="w-3.5 h-3.5" /> Photo Filter Style:
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {(['arena', 'crimson', 'gold', 'noir'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => onFilterChange(filter)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold capitalize transition cursor-pointer text-center touch-manipulation ${
                    selectedFilter === filter
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                      : 'bg-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Father & Team High-Five Cheer Box */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-red-600/20 text-red-500 border border-red-500/30 shrink-0">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-red-500" />
              </div>
              <div>
                <h3 className="font-black text-white text-sm sm:text-base">Father & Team Pride</h3>
                <p className="text-[10px] sm:text-xs text-neutral-400">Celebrating Charbel's heart</p>
              </div>
            </div>
            <span className="text-base sm:text-lg font-black text-red-400">{cheersCount} Cheers</span>
          </div>

          <p className="text-xs text-neutral-300 italic mb-3 sm:mb-4 border-l-2 border-red-600 pl-3 py-1 leading-relaxed">
            "{proudNote}"
          </p>

          <button
            id="cheer-button"
            onClick={onCheer}
            disabled={hasCheered}
            className={`w-full py-3 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer min-h-[44px] touch-manipulation ${
              hasCheered
                ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 cursor-default'
                : 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30 active:scale-95'
            }`}
          >
            {hasCheered ? (
              <>
                <CheckCircle2 className="w-4 h-4" /> Cheered! You Made #22 Proud!
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" /> Send High-Five to Charbel #22!
              </>
            )}
          </button>
        </div>
      </div>

      {/* Right Column: Inspiring Biography, Creed & Attributes */}
      <div className="lg:col-span-7 space-y-4 sm:space-y-6">
        {/* Core Creed Card */}
        <div className="bg-gradient-to-r from-red-950/70 via-neutral-900 to-neutral-900 border border-red-800/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none hidden sm:block">
            <Quote className="w-28 h-28 text-red-400" />
          </div>

          <div className="flex items-center gap-1.5 text-red-500 text-xs font-black uppercase tracking-widest mb-2 sm:mb-3">
            <Zap className="w-4 h-4" /> Player Mentality & Creed
          </div>

          <blockquote className="text-xl sm:text-3xl font-black text-white tracking-tight leading-snug">
            “Winning the game in the mind first.”
          </blockquote>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-300 leading-relaxed">
            Before stepping foot onto the hardwood, Charbel visualizes every play, every stop, and every defensive rotation. For him, basketball isn’t merely about physical talent—it is an art of composure, focus, and unwavering belief. When you conquer doubts in your thoughts, victory on the scoreboard naturally follows.
          </p>

          <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2.5">
            {['Mental Toughness', 'Calm Under Pressure', 'Court Vision', 'Selfless Passing'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 sm:px-3 py-1 rounded-full bg-red-950/70 border border-red-700/40 text-red-300 text-[11px] sm:text-xs font-bold"
              >
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Inspiring Biography Section */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 shadow-xl">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 sm:pb-4">
            <div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-red-500">
                Official Biography
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-white mt-0.5">The Spirit of a Champion</h3>
            </div>
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 shrink-0" />
          </div>

          <div className="space-y-3 sm:space-y-4 text-neutral-300 text-xs sm:text-base leading-relaxed">
            <p>
              Known to his teammates and coaches as <strong className="text-white">“The Legacy”</strong>, Charbel Geagea wears <strong className="text-red-400">#22</strong> with unmistakable honor for the <strong className="text-white">Champs</strong>. What sets Charbel apart isn’t just his quick first step or defensive agility, but his extraordinary dedication to his craft and his teammates.
            </p>
            <p>
              Charbel approaches every practice session with an athlete’s hunger to learn. Whether executing fundamental box-outs, refining his jumper, or communicating defensive switches, he treats every minute on court as an opportunity to grow. He understands that individual greatness means nothing without the collective harmony of his team.
            </p>
            <p>
              During the triumphant <strong className="text-emerald-400">47 - 25 victory over A Team on September 19, 2026</strong>, Charbel exemplified selfless basketball. He orchestrated fast breaks, created open lanes for his teammates, and brought the vocal energy that anchored Champs' airtight defense from the opening tip to the final buzzer.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 sm:pt-4 border-t border-neutral-800">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
              <ShieldCheck className="w-5 h-5 text-red-500 mx-auto mb-1.5" />
              <h4 className="font-extrabold text-white text-xs sm:text-sm">Unbroken Dedication</h4>
              <p className="text-[11px] text-neutral-400 mt-1">First to practice, last to leave. Respecting the game through daily sweat.</p>
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
              <Flame className="w-5 h-5 text-amber-500 mx-auto mb-1.5" />
              <h4 className="font-extrabold text-white text-xs sm:text-sm">Team-First Heart</h4>
              <p className="text-[11px] text-neutral-400 mt-1">Celebrating a teammate’s bucket just as passionately as his own.</p>
            </div>
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
              <Trophy className="w-5 h-5 text-red-400 mx-auto mb-1.5" />
              <h4 className="font-extrabold text-white text-xs sm:text-sm">Winning Mindset</h4>
              <p className="text-[11px] text-neutral-400 mt-1">Belief in the game plan, execution under pressure, and gracious humility.</p>
            </div>
          </div>
        </div>

        {/* Court Attributes & Impact Metrics */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-4 sm:space-y-6 shadow-xl">
          <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" /> Court Attributes & Impact Metrics
          </h3>

          <div className="space-y-3.5 sm:space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-neutral-300">Mental Toughness & Composure</span>
                <span className="text-red-400">98 / 100</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full rounded-full transition-all duration-700" style={{ width: '98%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-neutral-300">Teamwork & Unselfish Passing</span>
                <span className="text-red-400">96 / 100</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full rounded-full transition-all duration-700" style={{ width: '96%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-neutral-300">Defensive Hustle & Ball Recovery</span>
                <span className="text-red-400">95 / 100</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full rounded-full transition-all duration-700" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-neutral-300">Court Vision & Fast Break Execution</span>
                <span className="text-red-400">92 / 100</span>
              </div>
              <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full rounded-full transition-all duration-700" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
