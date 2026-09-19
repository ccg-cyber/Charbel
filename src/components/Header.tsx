import React from 'react';
import { Download, Camera, CheckCircle2, Archive } from 'lucide-react';

interface HeaderProps {
  onUploadClick: () => void;
  onDownloadClick: () => void;
  isExporting: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onUploadClick,
  onDownloadClick,
  isExporting,
}) => {
  return (
    <header className="border-b border-neutral-800/80 bg-neutral-900/95 backdrop-blur-md sticky top-0 z-50 pt-safe">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2">
        {/* Left: Player Identity */}
        <div className="flex items-center space-x-2.5 sm:space-x-3.5 min-w-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center font-black text-white text-lg sm:text-2xl shadow-lg shadow-red-950/60 border border-red-400/30">
            #22
          </div>
          <div className="min-w-0">
            <div className="flex items-center space-x-1.5 flex-wrap">
              <span className="text-[10px] sm:text-xs uppercase tracking-wider font-extrabold text-red-400 bg-red-950/70 px-1.5 py-0.5 rounded border border-red-800/40">
                CHAMPS
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-emerald-400 hidden xs:inline-flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> 47-25 WIN
              </span>
            </div>
            <h1 className="text-sm sm:text-xl font-black tracking-tight text-white truncate mt-0.5">
              Charbel <span className="text-red-500 font-extrabold">“The Legacy”</span>
            </h1>
          </div>
        </div>

        {/* Right: Touch-Optimized Quick Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <a
            href="/charbel-the-legacy-app.zip"
            download="charbel-the-legacy-app.zip"
            id="download-zip-btn"
            className="hidden xs:inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-700 text-neutral-300 text-xs sm:text-sm font-bold border border-neutral-700 transition cursor-pointer min-h-[40px] touch-manipulation"
            title="Download full app codebase as ZIP"
          >
            <Archive className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="hidden md:inline">Download ZIP</span>
            <span className="md:hidden inline text-amber-400 font-extrabold">ZIP</span>
          </a>

          <button
            id="mobile-upload-btn"
            onClick={onUploadClick}
            className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 text-neutral-200 text-xs sm:text-sm font-bold border border-neutral-700 transition cursor-pointer min-h-[40px] touch-manipulation"
            title="Upload Charbel's real photo"
          >
            <Camera className="w-4 h-4 text-red-400 shrink-0" />
            <span className="hidden xs:inline">Photo</span>
          </button>

          <button
            id="mobile-download-btn"
            onClick={onDownloadClick}
            disabled={isExporting}
            className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 active:scale-95 text-white text-xs sm:text-sm font-black shadow-md shadow-red-600/30 transition cursor-pointer disabled:opacity-50 min-h-[40px] touch-manipulation"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span className="hidden xs:inline">{isExporting ? 'Saving...' : 'Get Status'}</span>
            <span className="xs:hidden">{isExporting ? 'Saving' : 'Status'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
