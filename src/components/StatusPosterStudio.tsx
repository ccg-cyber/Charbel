import React, { useState } from 'react';
import {
  Smartphone,
  Camera,
  Download,
  Share2,
  CheckCircle2,
  Maximize2,
  X,
  Sparkles
} from 'lucide-react';
import { FilterStyle } from '../types';

interface StatusPosterStudioProps {
  playerImage: string | null;
  selectedFilter: FilterStyle;
  onFilterChange: (filter: FilterStyle) => void;
  customQuote: string;
  onQuoteChange: (quote: string) => void;
  onUploadClick: () => void;
  onDownloadPoster: () => void;
  isExporting: boolean;
  exportSuccess: boolean;
  onGenerateImage: () => Promise<string>;
}

export const StatusPosterStudio: React.FC<StatusPosterStudioProps> = ({
  playerImage,
  selectedFilter,
  onFilterChange,
  customQuote,
  onQuoteChange,
  onUploadClick,
  onDownloadPoster,
  isExporting,
  exportSuccess,
  onGenerateImage,
}) => {
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [posterPreviewUrl, setPosterPreviewUrl] = useState<string | null>(null);
  const [shareLoading, setShareLoading] = useState(false);

  const quotePresets = [
    "The game is won in the mind first.",
    "Focus, Discipline, Confidence.",
    "Teamwork makes the legacy.",
    "Heart over height every single day."
  ];

  // Open Fullscreen Mobile View
  const handleOpenFullscreen = async () => {
    try {
      const url = await onGenerateImage();
      setPosterPreviewUrl(url);
      setFullscreenOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  // Mobile Web Share (Native WhatsApp Share on iOS / Android)
  const handleMobileShare = async () => {
    setShareLoading(true);
    try {
      const dataUrl = await onGenerateImage();
      // Convert dataUrl to blob for Web Share
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      const file = new File([blob], 'Charbel_TheLegacy_Champs22.png', { type: 'image/png' });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "Charbel Geagea #22 - Champs Victory",
          text: `Proud of Charbel #22! Champs 47 - 25 A Team. “${customQuote}”`,
        });
      } else {
        // Fallback to normal download
        onDownloadPoster();
      }
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        onDownloadPoster();
      }
    } finally {
      setShareLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
      
      {/* LEFT COLUMN: 9:16 Mobile-Fit Poster Preview */}
      <div className="lg:col-span-6 flex flex-col items-center w-full">
        
        {/* Device Wrapper for realistic phone appearance */}
        <div className="w-full max-w-[340px] xs:max-w-[360px] sm:max-w-[390px] mx-auto">
          
          <div className="relative rounded-[32px] sm:rounded-[40px] bg-black p-2 sm:p-2.5 shadow-2xl border-4 border-neutral-800 shadow-red-950/30">
            {/* Phone Speaker/Dynamic island top notch indicator */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-neutral-900 rounded-full z-30 border border-neutral-800/80 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-950 border border-neutral-800" />
            </div>

            {/* Poster Inner Surface */}
            <div className="relative aspect-[9/16] w-full rounded-[24px] sm:rounded-[32px] bg-neutral-950 border border-neutral-800 p-3 sm:p-4 flex flex-col justify-between text-center overflow-hidden select-none">
              
              {/* Dynamic arena gradient background */}
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-red-950/30 to-neutral-950 pointer-events-none" />
              <div className="absolute top-0 inset-x-0 h-32 bg-radial from-red-600/20 to-transparent pointer-events-none" />

              {/* TOP: Scoreboard Header */}
              <div className="relative z-10 space-y-1.5 pt-3">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-widest font-black text-red-500">
                  CHAMPS BASKETBALL CLUB • YOUTH LEAGUE
                </div>

                <div className="bg-neutral-900/90 border border-red-800/40 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-md">
                  <div className="text-[8px] sm:text-[9px] uppercase font-bold text-neutral-400 tracking-wider">
                    FINAL SCORE • 19 SEP 2026
                  </div>
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mt-0.5">
                    <div className="text-left">
                      <div className="text-[10px] sm:text-xs font-black text-neutral-300">CHAMPS</div>
                      <div className="text-2xl sm:text-3xl font-black text-red-500 leading-none mt-0.5">47</div>
                    </div>
                    <div className="text-[10px] font-bold text-neutral-600">VS</div>
                    <div className="text-right">
                      <div className="text-[10px] sm:text-xs font-black text-neutral-400">A TEAM</div>
                      <div className="text-2xl sm:text-3xl font-black text-sky-400 leading-none mt-0.5">25</div>
                    </div>
                  </div>
                  <div className="mt-1 text-[8px] sm:text-[9px] font-black text-red-400 bg-red-950/70 py-0.5 rounded-full border border-red-800/30">
                    ★ OFFICIAL MATCHDAY VICTORY ★
                  </div>
                </div>
              </div>

              {/* CENTER: Real Photo / Athletic Portrait */}
              <div className="relative z-10 my-auto flex flex-col items-center">
                <div className="relative w-36 h-48 xs:w-40 xs:h-52 sm:w-48 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-red-500/80 shadow-2xl bg-neutral-900 flex items-center justify-center">
                  {playerImage ? (
                    <img
                      src={playerImage}
                      alt="Charbel"
                      className={`w-full h-full object-cover ${
                        selectedFilter === 'crimson'
                          ? 'contrast-125 saturate-150'
                          : selectedFilter === 'noir'
                          ? 'grayscale contrast-125'
                          : selectedFilter === 'gold'
                          ? 'sepia-[0.35] brightness-105'
                          : 'contrast-110'
                      }`}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-3 text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-600 flex items-center justify-center text-xl sm:text-2xl font-black text-white shadow-lg mb-1.5">
                        #22
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-neutral-200">CHARBEL</span>
                      <span className="text-[9px] sm:text-[10px] text-red-400">CHAMPS #22</span>
                    </div>
                  )}

                  {/* Corner Badge */}
                  <div className="absolute top-2 right-2 bg-red-600 text-white font-black text-xs px-1.5 py-0.5 rounded-md border border-white/20 shadow">
                    #22
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white tracking-wide mt-2">CHARBEL GEAGEA</h3>
                <div className="text-xs font-black text-red-500 tracking-widest uppercase">“THE LEGACY”</div>
              </div>

              {/* BOTTOM: Motto & Attribution */}
              <div className="relative z-10 space-y-1.5 pb-1">
                <div className="bg-neutral-900/90 border border-neutral-800 rounded-xl p-2">
                  <p className="text-[10px] sm:text-xs italic font-bold text-red-400 line-clamp-2">
                    “{customQuote}”
                  </p>
                  <p className="text-[8px] sm:text-[9px] text-neutral-400 mt-0.5 uppercase font-semibold tracking-wider">
                    FOCUS • DISCIPLINE • CONFIDENCE • TEAMWORK
                  </p>
                </div>

                <div className="text-[9px] font-bold text-neutral-400">
                  SAT 19 SEP 2026 • 12:00 – 13:30 • CHAMPS ARENA
                </div>
                <div className="text-[9px] font-black text-red-600 tracking-wider">
                  Ci • CRISPIN INTELLIGENCE
                </div>
              </div>

            </div>
          </div>

          {/* Quick Preview Action Bar underneath poster */}
          <div className="flex items-center justify-center gap-2 mt-3 w-full">
            <button
              onClick={handleOpenFullscreen}
              className="flex-1 py-2 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 active:scale-95 text-neutral-200 text-xs font-bold flex items-center justify-center gap-1.5 border border-neutral-700 transition cursor-pointer min-h-[40px] touch-manipulation"
            >
              <Maximize2 className="w-3.5 h-3.5 text-red-400" /> Fullscreen View
            </button>
            <button
              onClick={handleMobileShare}
              disabled={shareLoading}
              className="flex-1 py-2 px-3 rounded-xl bg-red-600/90 hover:bg-red-600 active:scale-95 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer min-h-[40px] touch-manipulation"
            >
              <Share2 className="w-3.5 h-3.5" /> Share to WhatsApp
            </button>
          </div>

          <p className="text-[11px] text-neutral-400 mt-2 text-center">
            Formats to 1080×1920 (9:16) for WhatsApp Status & Instagram Stories
          </p>

        </div>
      </div>

      {/* RIGHT COLUMN: Customizer Controls */}
      <div className="lg:col-span-6 space-y-4 sm:space-y-6 w-full">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-5 shadow-xl">
          
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 sm:pb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white">Poster Customizer & Exporter</h3>
              <p className="text-xs text-neutral-400 mt-0.5">Crafted for Samsung, iPhone & all mobile devices</p>
            </div>
            <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 text-red-500 shrink-0" />
          </div>

          {/* 1. Photo Uploader Dropzone */}
          <div>
            <label className="block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-neutral-400 mb-2">
              1. Charbel's Match Photo (100% Realism)
            </label>
            <div
              onClick={onUploadClick}
              className="border-2 border-dashed border-neutral-700 hover:border-red-500 rounded-2xl p-4 sm:p-6 text-center bg-neutral-950/60 cursor-pointer transition flex flex-col items-center justify-center gap-2.5 touch-manipulation"
            >
              <div className="w-11 h-11 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {playerImage ? 'Photo Loaded! Click to Change' : 'Click to Upload Charbel’s Photo'}
                </div>
                <div className="text-[10px] sm:text-xs text-neutral-400 mt-0.5">
                  Select any photo from your phone camera or gallery
                </div>
              </div>
            </div>
          </div>

          {/* 2. Motto on the Poster */}
          <div>
            <label className="block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-neutral-400 mb-2">
              2. Creed / Motto on Poster
            </label>
            <input
              type="text"
              value={customQuote}
              onChange={(e) => onQuoteChange(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-red-500 transition min-h-[44px]"
              placeholder="Enter motto..."
            />
            <div className="flex flex-wrap gap-1.5 mt-2">
              {quotePresets.map((preset) => (
                <button
                  key={preset}
                  onClick={() => onQuoteChange(preset)}
                  className="text-[10px] sm:text-[11px] bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 text-neutral-300 px-2.5 py-1 rounded-lg transition cursor-pointer touch-manipulation"
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Visual Filter */}
          <div>
            <label className="block text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-neutral-400 mb-2">
              3. Visual Atmosphere Filter
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'arena', label: 'Arena Prime', desc: 'Stadium Beam' },
                { id: 'crimson', label: 'Champs Red', desc: 'Vibrant' },
                { id: 'gold', label: 'Trophy Gold', desc: 'Champion' },
                { id: 'noir', label: 'Pro Noir', desc: 'Contrast' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => onFilterChange(f.id as FilterStyle)}
                  className={`p-2.5 sm:p-3 rounded-xl text-left border transition cursor-pointer touch-manipulation ${
                    selectedFilter === f.id
                      ? 'bg-red-600/20 border-red-500 text-white'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-bold text-white">{f.label}</div>
                  <div className="text-[10px] text-neutral-400 mt-0.5">{f.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Action Buttons */}
          <div className="pt-3 border-t border-neutral-800 space-y-3">
            <button
              id="export-high-res-btn"
              onClick={onDownloadPoster}
              disabled={isExporting}
              className="w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 active:scale-98 text-white font-black text-sm sm:text-base shadow-xl shadow-red-600/40 flex items-center justify-center gap-2.5 transition cursor-pointer disabled:opacity-50 min-h-[48px] touch-manipulation"
            >
              <Download className="w-5 h-5 shrink-0" />
              <span>{isExporting ? 'Generating High-Res File...' : 'Download 1080×1920 Status PNG'}</span>
            </button>

            {exportSuccess && (
              <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-xs text-center font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                Downloaded! Ready to set as your WhatsApp Status.
              </div>
            )}

            <div className="text-xs text-neutral-400 flex items-start gap-2 bg-neutral-950 p-3 rounded-xl border border-neutral-800">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed text-[11px] sm:text-xs">
                <strong>WhatsApp Status Ready:</strong> Open WhatsApp &gt; <em>Updates / Status</em> &gt; <em>Add Status</em> &gt; Select this image to celebrate Charbel's win with family and friends!
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* FULLSCREEN PHONE PREVIEW MODAL */}
      {fullscreenOpen && posterPreviewUrl && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between px-4 sm:px-6 inset-safe overlay-fade-in">
          <div className="w-full max-w-md flex items-center justify-between py-2 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="text-sm font-black text-white">9:16 WhatsApp Status View</span>
            </div>
            <button
              onClick={() => setFullscreenOpen(false)}
              className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative my-auto max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl border border-neutral-800">
            <img
              src={posterPreviewUrl}
              alt="Charbel Poster Fullscreen"
              className="max-h-[75vh] w-auto object-contain rounded-2xl"
            />
          </div>

          <div className="w-full max-w-md flex gap-3 pt-2">
            <button
              onClick={handleMobileShare}
              className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-500 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <Share2 className="w-4 h-4" /> Share / WhatsApp
            </button>
            <button
              onClick={onDownloadPoster}
              className="flex-1 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 active:scale-95 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-neutral-700 cursor-pointer"
            >
              <Download className="w-4 h-4" /> Save PNG
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
