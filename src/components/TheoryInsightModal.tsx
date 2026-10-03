import React from 'react';
import { WordItem, Puzzle } from '../data/types.ts';
import { BookOpen, X, Sparkles, Brain, Heart, GraduationCap, ShieldCheck, ExternalLink, Lightbulb } from 'lucide-react';
import { sound } from '../utils/audio.ts';

interface TheoryInsightModalProps {
  wordItem: WordItem;
  puzzle: Puzzle;
  onClose: () => void;
  theme?: 'ocean' | 'dark';
}

export const TheoryInsightModal: React.FC<TheoryInsightModalProps> = ({
  wordItem,
  puzzle,
  onClose,
  theme = 'ocean',
}) => {
  const isOcean = theme === 'ocean';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div
        className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto transition-colors ${
          isOcean
            ? 'bg-white border border-sky-200 text-slate-800 shadow-sky-950/10'
            : 'bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/50 text-slate-100'
        }`}
      >
        {/* Top Header */}
        <div
          className={`flex items-start justify-between gap-4 border-b pb-4 ${
            isOcean ? 'border-sky-100' : 'border-slate-800'
          }`}
        >
          <div className="space-y-1">
            <div
              className={`inline-flex items-center gap-2 text-xs font-semibold ${
                isOcean ? 'text-sky-700' : 'text-amber-400'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Rujukan Akademik Buku VCT PPKn 2026</span>
            </div>
            <div className="flex items-center gap-3">
              <h2
                className={`text-2xl font-black tracking-wide font-mono ${
                  isOcean ? 'text-sky-950' : 'text-white'
                }`}
              >
                {wordItem.word}
              </h2>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${
                  isOcean
                    ? 'bg-sky-100 text-sky-800 border-sky-300'
                    : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                }`}
              >
                {wordItem.direction === 'across' ? 'Mendatar' : 'Menurun'} #{wordItem.number}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              sound.playTap();
            }}
            className={`p-2 rounded-xl transition-colors cursor-pointer ${
              isOcean
                ? 'text-slate-400 hover:text-slate-700 hover:bg-sky-50'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clue and Explanation Box */}
        <div className="space-y-3">
          <div
            className={`p-3.5 rounded-2xl border space-y-1 ${
              isOcean
                ? 'bg-sky-50/70 border-sky-200'
                : 'bg-slate-950/70 border-slate-800'
            }`}
          >
            <div className={`text-[11px] font-semibold uppercase tracking-wider ${isOcean ? 'text-sky-800' : 'text-slate-400'}`}>
              Petunjuk Soal (Clue)
            </div>
            <p className={`text-sm font-medium leading-relaxed ${isOcean ? 'text-slate-800' : 'text-slate-200'}`}>
              {wordItem.clue}
            </p>
          </div>

          <div
            className={`p-4 rounded-2xl border space-y-1.5 ${
              isOcean
                ? 'bg-gradient-to-r from-sky-50 to-cyan-50 border-sky-200 text-slate-800'
                : 'bg-amber-950/20 border-amber-500/30'
            }`}
          >
            <div
              className={`text-xs font-bold flex items-center gap-1.5 ${
                isOcean ? 'text-sky-800' : 'text-amber-300'
              }`}
            >
              <Lightbulb className={`w-4 h-4 ${isOcean ? 'text-sky-600' : 'text-amber-400'}`} />
              <span>Sintesis Konseptual & Pembahasan Ilmiah</span>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed ${isOcean ? 'text-slate-700' : 'text-slate-200'}`}>
              {wordItem.explanation}
            </p>
          </div>
        </div>

        {/* Academic Mapping Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {/* Rujukan Halaman & Bab */}
          <div
            className={`p-3.5 rounded-xl border space-y-1 ${
              isOcean ? 'bg-sky-50/50 border-sky-200' : 'bg-slate-900 border-slate-800'
            }`}
          >
            <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
              <span>Lokasi dalam Buku Cetak</span>
            </div>
            <div className={`font-semibold font-mono text-xs ${isOcean ? 'text-slate-900' : 'text-slate-100'}`}>
              {wordItem.bookRef}
            </div>
            <div className={`text-[10px] ${isOcean ? 'text-slate-500' : 'text-slate-500'}`}>
              Karya Dr. Sukisno, M.Pd., Mario Fahmi Syahrial, M.Pd., dkk.
            </div>
          </div>

          {/* Validitas Konstruk */}
          <div
            className={`p-3.5 rounded-xl border space-y-1 ${
              isOcean ? 'bg-sky-50/50 border-sky-200' : 'bg-slate-900 border-slate-800'
            }`}
          >
            <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Landasan Teoretis & Validitas</span>
            </div>
            <div className={`font-semibold font-mono text-xs ${isOcean ? 'text-teal-700' : 'text-emerald-300'}`}>
              {wordItem.constructValidity || 'Pendidikan Nilai & Karakter'}
            </div>
            <div className="text-[10px] text-slate-500">
              Terkonfirmasi melalui riset literatur pendidikan
            </div>
          </div>

          {/* Taksonomi Bloom */}
          <div
            className={`p-3.5 rounded-xl border space-y-1 ${
              isOcean ? 'bg-sky-50/50 border-sky-200' : 'bg-slate-900 border-slate-800'
            }`}
          >
            <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
              <Brain className="w-3.5 h-3.5 text-indigo-500" />
              <span>Taksonomi Kognitif (Bloom Revisi)</span>
            </div>
            <div className={`font-semibold font-mono text-xs ${isOcean ? 'text-indigo-700' : 'text-indigo-300'}`}>
              {wordItem.bloomTaxonomy || 'C4 - Analisis Kritis'}
            </div>
            <div className="text-[10px] text-slate-500">
              Higher-Order Thinking Skills (HOTS)
            </div>
          </div>

          {/* Taksonomi Krathwohl */}
          <div
            className={`p-3.5 rounded-xl border space-y-1 ${
              isOcean ? 'bg-sky-50/50 border-sky-200' : 'bg-slate-900 border-slate-800'
            }`}
          >
            <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              <span>Taksonomi Afektif (Krathwohl)</span>
            </div>
            <div className={`font-semibold font-mono text-xs ${isOcean ? 'text-rose-700' : 'text-rose-300'}`}>
              {wordItem.krathwohlTaxonomy || 'A3 - Valuing'}
            </div>
            <div className="text-[10px] text-slate-500">
              Internalisasi komitmen batin & karakter
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={() => {
              onClose();
              sound.playTap();
            }}
            className={`px-5 py-2 rounded-xl font-bold text-xs shadow-md transition-colors cursor-pointer ${
              isOcean
                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white shadow-sky-500/20'
                : 'bg-amber-400 hover:bg-amber-300 text-slate-950'
            }`}
          >
            Tutup & Lanjutkan Game
          </button>
        </div>
      </div>
    </div>
  );
};
