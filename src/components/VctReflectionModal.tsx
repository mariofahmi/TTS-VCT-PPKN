import React, { useState } from 'react';
import { Puzzle, VctReflectionOption } from '../data/types.ts';
import { Trophy, Star, ArrowRight, BookOpen, CheckCircle, Sparkles, Copy, Check, GraduationCap, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio.ts';
import { PlayerProfile } from './PlayerProfileModal.tsx';

interface VctReflectionModalProps {
  puzzle: Puzzle;
  score: number;
  timeSpent: number; // in seconds
  hintsUsed: number;
  onNextPuzzle: () => void;
  onClose: () => void;
  onSaveReflection: (selectedOption: VctReflectionOption) => void;
  playerProfile?: PlayerProfile;
  theme?: 'ocean' | 'dark';
}

export const VctReflectionModal: React.FC<VctReflectionModalProps> = ({
  puzzle,
  score,
  timeSpent,
  hintsUsed,
  onNextPuzzle,
  onClose,
  onSaveReflection,
  playerProfile,
  theme = 'ocean',
}) => {
  const isOcean = theme === 'ocean';
  const [selectedOption, setSelectedOption] = useState<VctReflectionOption | null>(null);
  const [hasReflected, setHasReflected] = useState(false);
  const [copied, setCopied] = useState(false);

  React.useEffect(() => {
    sound.playVictory();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {}
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const stars = hintsUsed === 0 ? 3 : hintsUsed <= 2 ? 2 : 1;

  const handleSelectOption = (opt: VctReflectionOption) => {
    setSelectedOption(opt);
    sound.playTap();
  };

  const handleConfirmReflection = () => {
    if (selectedOption) {
      setHasReflected(true);
      onSaveReflection(selectedOption);
      sound.playWordSuccess();
    }
  };

  const handleCopyReport = () => {
    if (!selectedOption) return;
    const reportText = `[LEMBAR REFLEKSI NILAI VCT PPKN - AKADEMIK]
Nama Mahasiswa/Pemain: ${playerProfile?.name || 'Mahasiswa'}
NIM / Identitas      : ${playerProfile?.idNumber || '-'}
Peran Civitas        : ${playerProfile?.role ? playerProfile.role.toUpperCase() : 'MAHASISWA'}
Instansi/Kampus      : ${playerProfile?.institution || 'Universitas PGRI Ronggolawe Tuban'}
--------------------------------------------------
Topik Materi         : Tipe #${puzzle.typeNumber} - ${puzzle.title} (${puzzle.subtitle})
Waktu Selesai        : ${formatTime(timeSpent)} | Skor: ${score} | Bintang: ${stars}/3
--------------------------------------------------
Pertanyaan Klarifikasi Nilai:
"${puzzle.vctReflectionQuestion}"

Pilihan Sikap Moral:
"${selectedOption.text}"

Kategori Trait       : ${selectedOption.trait.toUpperCase()} (Locus of Control)
Ulasan Teoretis      : ${selectedOption.academicRationale || selectedOption.feedback}
Rujukan Buku         : ${puzzle.sourceChapter} (Yudharta Press, 2026, ISBN: 978-623-7817-62-8)`;

    navigator.clipboard.writeText(reportText).then(() => {
      setCopied(true);
      sound.playTap();
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md overflow-y-auto">
      <div
        className={`w-full max-w-xl my-8 rounded-3xl p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 transition-colors ${
          isOcean
            ? 'bg-white border border-sky-200 text-slate-800 shadow-sky-950/10'
            : 'bg-slate-900 border border-slate-700/80 text-slate-100'
        }`}
      >
        {/* Victory Header */}
        <div className="text-center space-y-2 mb-6">
          <div
            className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-lg ${
              isOcean
                ? 'bg-gradient-to-br from-amber-400 to-amber-500 text-white ring-4 ring-amber-300/40 shadow-amber-500/20'
                : 'bg-amber-500/20 text-amber-400 ring-2 ring-amber-400/40'
            }`}
          >
            <Trophy className="w-8 h-8" />
          </div>

          <div className="flex justify-center gap-1.5 pt-2">
            {[1, 2, 3].map((starIdx) => (
              <Star
                key={starIdx}
                className={`w-6 h-6 ${
                  stars >= starIdx ? 'text-amber-400 fill-amber-400 animate-bounce' : isOcean ? 'text-slate-200' : 'text-slate-700'
                }`}
              />
            ))}
          </div>

          <h2 className={`text-2xl font-bold tracking-tight ${isOcean ? 'text-slate-900' : 'text-white'}`}>
            Selamat, {playerProfile?.name || 'Pemain'}!
          </h2>
          <p className={`text-xs font-semibold ${isOcean ? 'text-sky-700' : 'text-amber-400/90'}`}>
            Tipe #{puzzle.typeNumber}: {puzzle.title} Berhasil Diselesaikan
          </p>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-3 gap-3 p-3.5 rounded-2xl border text-center mb-6 ${
            isOcean ? 'bg-sky-50/70 border-sky-200' : 'bg-slate-950/60 border-slate-800'
          }`}
        >
          <div>
            <div className={`text-[11px] ${isOcean ? 'text-slate-500' : 'text-slate-400'}`}>Total Skor</div>
            <div className="text-lg font-bold text-amber-500 font-mono">{score}</div>
          </div>
          <div>
            <div className={`text-[11px] ${isOcean ? 'text-slate-500' : 'text-slate-400'}`}>Waktu</div>
            <div className={`text-lg font-bold font-mono ${isOcean ? 'text-slate-900' : 'text-white'}`}>
              {formatTime(timeSpent)}
            </div>
          </div>
          <div>
            <div className={`text-[11px] ${isOcean ? 'text-slate-500' : 'text-slate-400'}`}>Bantuan Dipakai</div>
            <div className={`text-lg font-bold font-mono ${isOcean ? 'text-sky-800' : 'text-slate-300'}`}>
              {hintsUsed}x
            </div>
          </div>
        </div>

        {/* VCT Reflection Section */}
        <div className="space-y-4 mb-6">
          <div
            className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${
              isOcean ? 'text-sky-700' : 'text-amber-400'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Fase Klarifikasi Nilai (VCT Reflection)</span>
          </div>

          <div
            className={`p-4 rounded-2xl border ${
              isOcean ? 'bg-sky-50/40 border-sky-200' : 'bg-slate-800/60 border-slate-700/60'
            }`}
          >
            <p className={`text-sm font-semibold leading-relaxed mb-3 ${isOcean ? 'text-slate-900' : 'text-white'}`}>
              {puzzle.vctReflectionQuestion}
            </p>

            <div className="space-y-2">
              {puzzle.vctReflectionOptions.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={hasReflected}
                    onClick={() => handleSelectOption(opt)}
                    className={`w-full text-left p-3 rounded-xl border text-xs leading-relaxed transition-all cursor-pointer ${
                      isSelected
                        ? isOcean
                          ? 'bg-sky-500/15 border-sky-400 text-sky-950 font-bold ring-1 ring-sky-400/50'
                          : 'bg-amber-500/20 border-amber-500 text-amber-200 font-medium ring-1 ring-amber-500/40'
                        : isOcean
                        ? 'bg-white border-sky-100 text-slate-800 hover:bg-sky-50 hover:border-sky-300'
                        : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        className={`w-4 h-4 mt-0.5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected
                            ? isOcean
                              ? 'border-sky-500 bg-sky-500 text-white'
                              : 'border-amber-400 bg-amber-400 text-slate-950'
                            : 'border-slate-400'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </span>
                      <span>{opt.text}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Reflection feedback response */}
            {selectedOption && (
              <div
                className={`mt-3.5 p-3.5 rounded-xl border text-xs leading-relaxed space-y-1.5 animate-in fade-in ${
                  isOcean
                    ? 'bg-teal-50 border-teal-200 text-teal-900'
                    : 'bg-amber-500/10 border-amber-500/30 text-amber-200/90'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-bold flex items-center gap-1 ${isOcean ? 'text-teal-800' : 'text-amber-300'}`}>
                    <GraduationCap className="w-4 h-4" />
                    <span>Ulasan Nilai Berdasarkan Buku:</span>
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold ${
                      isOcean ? 'bg-teal-200 text-teal-800' : 'bg-amber-500/20 text-amber-300'
                    }`}
                  >
                    Trait: {selectedOption.trait}
                  </span>
                </div>
                <p>{selectedOption.feedback}</p>
                {selectedOption.academicRationale && (
                  <p
                    className={`text-[11px] italic pt-1 border-t ${
                      isOcean ? 'text-slate-600 border-teal-200' : 'text-slate-400 border-amber-500/20'
                    }`}
                  >
                    Konstruk Teori: {selectedOption.academicRationale}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          {hasReflected ? (
            <button
              type="button"
              onClick={handleCopyReport}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl border transition-colors flex items-center gap-1.5 cursor-pointer ${
                isOcean
                  ? 'bg-sky-50 hover:bg-sky-100 text-sky-800 border-sky-300'
                  : 'text-amber-300 bg-amber-500/15 hover:bg-amber-500/25 border-amber-500/40'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-teal-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Laporan Tersalin!' : 'Salin Laporan Refleksi'}</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className={`px-4 py-2.5 text-xs font-semibold transition-colors cursor-pointer ${
                isOcean ? 'text-slate-500 hover:text-slate-800' : 'text-slate-400 hover:text-white'
              }`}
            >
              Tutup
            </button>

            {!hasReflected ? (
              <button
                type="button"
                disabled={!selectedOption}
                onClick={handleConfirmReflection}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  selectedOption
                    ? isOcean
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white shadow-md shadow-sky-500/25 font-bold'
                      : 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-200'
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                <span>Konfirmasi Refleksi</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onNextPuzzle}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 transition-all cursor-pointer ${
                  isOcean
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-teal-500/20'
                    : 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                }`}
              >
                <span>Lanjut ke Tipe Berikutnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
