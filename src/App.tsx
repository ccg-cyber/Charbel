import React, { useState, useRef } from 'react';
import { ActiveTab, FilterStyle } from './types';
import { generatePosterCanvas } from './utils/posterGenerator';
import { Header } from './components/Header';
import { VictoryRibbon } from './components/VictoryRibbon';
import { TabsNavigation } from './components/TabsNavigation';
import { ProfileView } from './components/ProfileView';
import { StatusPosterStudio } from './components/StatusPosterStudio';
import { MatchRecapView } from './components/MatchRecapView';

export default function App() {
  // Player state
  const [playerImage, setPlayerImage] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<FilterStyle>('arena');
  const [customQuote, setCustomQuote] = useState<string>("The game is won in the mind first.");
  const [proudNote] = useState<string>(
    "Charbel, your discipline, focus, and unselfish teamwork make us proud every single day. Keep leading with heart!"
  );
  const [cheersCount, setCheersCount] = useState<number>(22);
  const [hasCheered, setHasCheered] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>('profile');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportSuccess, setExportSuccess] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle image upload from user (Samsung gallery, iPhone camera roll, files)
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPlayerImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleCheer = () => {
    if (!hasCheered) {
      setCheersCount(prev => prev + 1);
      setHasCheered(true);
    }
  };

  // High-Resolution 1080x1920 9:16 WhatsApp Status Generator
  const handleGeneratePoster = async (): Promise<string> => {
    return await generatePosterCanvas(playerImage, selectedFilter, customQuote);
  };

  // Trigger export download
  const handleDownloadPoster = async () => {
    setIsExporting(true);
    setExportSuccess(false);
    try {
      const dataUrl = await handleGeneratePoster();
      const link = document.createElement('a');
      link.download = `Charbel_TheLegacy_Champs22_Victory_19Sep2026.png`;
      link.href = dataUrl;
      link.click();
      setExportSuccess(true);
      setTimeout(() => setExportSuccess(false), 4000);
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen-safe bg-neutral-950 text-neutral-100 flex flex-col selection:bg-red-600 selection:text-white font-sans-alt w-full max-w-full overflow-x-hidden">
      
      {/* Top Mobile-Responsive Navigation Header */}
      <Header
        onUploadClick={triggerFileUpload}
        onDownloadClick={handleDownloadPoster}
        isExporting={isExporting}
      />

      {/* Hidden file input for phone camera / gallery upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handlePhotoUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Victory Alert Ribbon (47-25 Champs Victory) */}
      <VictoryRibbon />

      {/* Main Responsive Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        
        {/* Responsive, horizontally scrollable tabs */}
        <TabsNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Tab Content Views */}
        {activeTab === 'profile' && (
          <ProfileView
            playerImage={playerImage}
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
            onUploadClick={triggerFileUpload}
            cheersCount={cheersCount}
            hasCheered={hasCheered}
            onCheer={handleCheer}
            proudNote={proudNote}
          />
        )}

        {activeTab === 'status_poster' && (
          <StatusPosterStudio
            playerImage={playerImage}
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
            customQuote={customQuote}
            onQuoteChange={setCustomQuote}
            onUploadClick={triggerFileUpload}
            onDownloadPoster={handleDownloadPoster}
            isExporting={isExporting}
            exportSuccess={exportSuccess}
            onGenerateImage={handleGeneratePoster}
          />
        )}

        {activeTab === 'match_recap' && (
          <MatchRecapView />
        )}

      </main>

      {/* Mobile-Safe Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950 py-6 px-4 text-center text-xs text-neutral-400 pb-safe">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="font-black text-white">CHARBEL “THE LEGACY” #22</span>
            <span>•</span>
            <span className="text-red-500 font-bold">CHAMPS BASKETBALL</span>
          </div>
          <div className="text-neutral-400 font-medium text-[11px] sm:text-xs">
            “The game is won in the mind first.” • Champs 47 – 25 A Team
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/charbel-the-legacy-app.zip"
              download="charbel-the-legacy-app.zip"
              className="text-amber-400 hover:text-amber-300 font-bold text-xs underline underline-offset-4 flex items-center gap-1"
            >
              📥 Download App (.ZIP)
            </a>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-500 text-[10px] sm:text-[11px]">
              Ci • Crispin Intelligence
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
