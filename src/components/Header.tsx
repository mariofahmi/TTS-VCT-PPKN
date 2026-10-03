import React from 'react';
import { Volume2, VolumeX, RotateCcw, Printer, GraduationCap, Presentation, User, Edit3, Waves, Moon, Github } from 'lucide-react';
import { sound } from '../utils/audio.ts';
import { PlayerProfile } from './PlayerProfileModal.tsx';

interface HeaderProps {
  activeTab: 'game' | 'levels' | 'howToPlay' | 'pedagogy' | 'glossary' | 'verify' | 'antigravity';
  setActiveTab: (tab: 'game' | 'levels' | 'howToPlay' | 'pedagogy' | 'glossary' | 'verify' | 'antigravity') => void;
  soundEnabled: boolean;
  setSoundEnabled: (v: boolean) => void;
  onResetPuzzle: () => void;
  currentPuzzleNumber: number;
  onOpenPrintModal: () => void;
  userRole: 'mahasiswa' | 'dosen';
  setUserRole: (role: 'mahasiswa' | 'dosen') => void;
  playerProfile: PlayerProfile;
  onOpenProfileModal: () => void;
  theme?: 'ocean' | 'dark';
  onToggleTheme?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  soundEnabled,
  setSoundEnabled,
  onResetPuzzle,
  currentPuzzleNumber,
  onOpenPrintModal,
  userRole,
  setUserRole,
  playerProfile,
  onOpenProfileModal,
  theme = 'ocean',
  onToggleTheme,
}) => {
  const isOcean = theme === 'ocean';

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.enabled = next;
    if (next) sound.playTap();
  };

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors shadow-sm ${
        isOcean
          ? 'bg-white/90 border-sky-200/90 text-slate-800'
          : 'bg-slate-900/95 border-slate-800 text-slate-100 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between gap-3">
        {/* Brand / Title */}
        <button
          onClick={() => {
            setActiveTab('game');
            sound.playTap();
          }}
          className="text-left group cursor-pointer focus:outline-none shrink-0"
        >
          <div className="flex items-center gap-2.5">
            <div
              className={`relative w-9 h-9 rounded-xl overflow-hidden shadow-md flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105 ${
                isOcean
                  ? 'bg-white border-sky-300 ring-2 ring-sky-400/40'
                  : 'bg-white/10 border-amber-500/40 ring-2 ring-amber-400/30'
              }`}
            >
              <img
                src="/logo-mf.png"
                alt="Logo MF"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`text-sm sm:text-base font-black tracking-tight block leading-tight transition-colors ${
                    isOcean
                      ? 'text-slate-900 group-hover:text-sky-600'
                      : 'text-white group-hover:text-amber-400'
                  }`}
                >
                  Teka-Teki Silang PPKn
                </span>
                <span
                  className={`hidden sm:inline-block px-1.5 py-0.2 rounded text-[9px] font-bold border ${
                    isOcean
                      ? 'bg-sky-100 text-sky-800 border-sky-300'
                      : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                  }`}
                >
                  Perguruan Tinggi
                </span>
              </div>
              <span
                className={`text-[10px] font-normal hidden sm:block ${
                  isOcean ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                Dr. Sukisno, M.Pd., Mario Fahmi Syahrial, M.Pd., dkk.
              </span>
            </div>
          </div>
        </button>

        {/* Center: Player Name Card (Clickable to Edit) */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => {
              onOpenProfileModal();
              sound.playTap();
            }}
            title="Klik untuk mengubah nama atau profil pemain"
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all cursor-pointer group shadow-sm ${
              isOcean
                ? 'bg-sky-50/80 hover:bg-sky-100 border-sky-200 hover:border-sky-400 text-slate-800'
                : 'bg-slate-950/80 hover:bg-slate-800/80 border-slate-800 hover:border-amber-500/50 text-slate-100'
            }`}
          >
            <div
              className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs transition-colors ${
                isOcean
                  ? 'bg-sky-500/20 text-sky-700 group-hover:bg-sky-500 group-hover:text-white'
                  : 'bg-amber-500/20 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950'
              }`}
            >
              <User className="w-3.5 h-3.5" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span
                  className={`text-xs font-bold transition-colors max-w-[120px] sm:max-w-[180px] truncate ${
                    isOcean
                      ? 'text-slate-900 group-hover:text-sky-700'
                      : 'text-slate-100 group-hover:text-amber-300'
                  }`}
                >
                  {playerProfile.name || 'Masukkan Nama'}
                </span>
                <Edit3
                  className={`w-3 h-3 transition-colors ${
                    isOcean
                      ? 'text-sky-500 group-hover:text-sky-600'
                      : 'text-slate-500 group-hover:text-amber-400'
                  }`}
                />
              </div>
              <span
                className={`text-[10px] capitalize block leading-none ${
                  isOcean ? 'text-sky-700 font-medium' : 'text-slate-400'
                }`}
              >
                {playerProfile.role} {playerProfile.idNumber ? `(${playerProfile.idNumber})` : ''}
              </span>
            </div>
          </button>
        </div>

        {/* Right Action Tools: Role Switcher, Print Button, Audio, Theme Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Theme Toggle Button (Biru Laut Muda vs Samudera Malam) */}
          {onToggleTheme && (
            <button
              type="button"
              onClick={() => {
                onToggleTheme();
                sound.playTap();
              }}
              title={isOcean ? 'Ganti ke Mode Samudera Malam' : 'Ganti ke Mode Biru Muda Laut'}
              className={`px-2 py-1 rounded-xl text-xs font-bold flex items-center gap-1 border transition-all cursor-pointer shadow-sm ${
                isOcean
                  ? 'bg-sky-100 hover:bg-sky-200 text-sky-900 border-sky-300'
                  : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700'
              }`}
            >
              {isOcean ? (
                <>
                  <Waves className="w-3.5 h-3.5 text-sky-600 animate-wave" />
                  <span className="hidden lg:inline text-[11px]">Biru Laut</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden lg:inline text-[11px]">Malam</span>
                </>
              )}
            </button>
          )}

          {/* Role Mode Switcher (Mahasiswa vs Dosen) */}
          <div
            className={`p-0.5 rounded-xl border flex items-center text-xs ${
              isOcean ? 'bg-sky-100/70 border-sky-200' : 'bg-slate-950/80 border-slate-800'
            }`}
          >
            <button
              type="button"
              onClick={() => {
                setUserRole('mahasiswa');
                sound.playTap();
              }}
              title="Mode Mahasiswa"
              className={`px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                userRole === 'mahasiswa'
                  ? isOcean
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-sm font-bold'
                    : 'bg-amber-400 text-slate-950 shadow-sm font-bold'
                  : isOcean
                  ? 'text-sky-800 hover:text-sky-950'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Mahasiswa</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setUserRole('dosen');
                sound.playTap();
              }}
              title="Mode Dosen"
              className={`px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                userRole === 'dosen'
                  ? 'bg-blue-600 text-white shadow-sm font-bold'
                  : isOcean
                  ? 'text-sky-800 hover:text-sky-950'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Dosen</span>
            </button>
          </div>

          {/* Cetak Lembar Kerja Button */}
          <button
            type="button"
            onClick={onOpenPrintModal}
            title="Cetak Lembar Kerja Mahasiswa / Kunci Dosen (PDF)"
            className={`px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-xl border transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm ${
              isOcean
                ? 'bg-sky-50 hover:bg-sky-100 text-sky-800 border-sky-200'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
            }`}
          >
            <Printer className={`w-3.5 h-3.5 ${isOcean ? 'text-sky-600' : 'text-amber-400'}`} />
            <span className="hidden sm:inline">Cetak PDF</span>
          </button>

          {/* Reset Puzzle */}
          {activeTab === 'game' && (
            <button
              onClick={() => {
                if (window.confirm('Kosongkan semua huruf pada teka-teki silang ini?')) {
                  onResetPuzzle();
                  sound.playTap();
                }
              }}
              title="Kosongkan Kotak Jawaban"
              className={`p-1.5 text-xs font-medium rounded-xl transition-colors ${
                isOcean
                  ? 'text-slate-500 hover:text-rose-600 hover:bg-sky-100 border border-transparent hover:border-sky-200'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {/* GitHub Repository Link */}
          <a
            href="https://github.com/mariofahmi/TTS-VCT-PPKN"
            target="_blank"
            rel="noopener noreferrer"
            title="Lihat Repositori GitHub: mariofahmi/TTS-VCT-PPKN"
            className={`p-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1 border shadow-sm ${
              isOcean
                ? 'bg-sky-50 hover:bg-sky-100 text-sky-800 hover:text-slate-950 border-sky-200 hover:border-sky-400'
                : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border-slate-700'
            }`}
          >
            <Github className="w-4 h-4" />
            <span className="hidden xl:inline text-[11px] font-semibold">GitHub</span>
          </a>

          {/* Audio Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Matikan Suara Efek' : 'Nyalakan Suara Efek'}
            className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
              isOcean
                ? 'text-sky-700 hover:text-sky-950 hover:bg-sky-100 border border-transparent hover:border-sky-200'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? (
              <Volume2 className={`w-4 h-4 ${isOcean ? 'text-sky-600' : 'text-amber-400'}`} />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
