import React from 'react';
import { Puzzle } from '../data/types.ts';
import { BookOpen, Star, Play, CheckCircle2, Award } from 'lucide-react';
import { sound } from '../utils/audio.ts';

interface PuzzleSelectorProps {
  puzzles: Puzzle[];
  currentPuzzleId: string;
  onSelectPuzzle: (id: string) => void;
  completedStats: Record<string, { completed: boolean; stars: number; score: number }>;
}

export const PuzzleSelector: React.FC<PuzzleSelectorProps> = ({
  puzzles,
  currentPuzzleId,
  onSelectPuzzle,
  completedStats,
}) => {
  const totalCompleted = Object.values(completedStats).filter(s => s.completed).length;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Overview Banner */}
      <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-slate-700/80 shadow-xl relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
              <BookOpen className="w-4 h-4" />
              <span>Sumber Buku: Value Clarification Technique (VCT) dalam Pembelajaran PPKn</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              10 Tipe Bentuk Teka-Teki Silang
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Dirancang berdasarkan 15 Bab dan tabel taksonomi buku karya Dr. Sukisno, M.Pd., Mario Fahmi Syahrial, M.Pd., dkk. Setiap tipe menguji penguasaan konsep, penalaran moral, serta komitmen afektif.
            </p>
          </div>

          {/* Progress Pill / Stat Card */}
          <div className="p-4 bg-slate-950/70 rounded-2xl border border-slate-800 flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Progres Penguasaan Buku</div>
              <div className="text-xl font-bold text-white font-mono">
                {totalCompleted} / 10 <span className="text-xs text-slate-400 font-normal">Tipe Selesai</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of 10 Puzzle Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {puzzles.map((p) => {
          const stats = completedStats[p.id] || { completed: false, stars: 0, score: 0 };
          const isCurrent = p.id === currentPuzzleId;

          return (
            <div
              key={p.id}
              className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between relative overflow-hidden ${
                isCurrent
                  ? 'bg-slate-900 border-amber-500/80 shadow-lg ring-1 ring-amber-500/30'
                  : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs">
                      Tipe #{p.typeNumber}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-400 font-medium truncate">{p.category}</span>
                  </div>

                  {/* Stars / Completion Status */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((starIdx) => (
                      <Star
                        key={starIdx}
                        className={`w-4 h-4 ${
                          stats.stars >= starIdx
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-700'
                        }`}
                      />
                    ))}
                    {stats.completed && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 ml-1.5" />
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-base font-bold text-white mb-1 leading-snug">
                  {p.title}
                </h3>
                <div className="text-xs text-amber-400/90 font-medium mb-2.5">
                  {p.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {p.description}
                </p>

                {/* Book Quote */}
                <blockquote className="p-2.5 rounded-xl bg-slate-950/60 border-l-2 border-amber-500 text-[11px] text-slate-300 italic mb-4">
                  {p.quote}
                </blockquote>
              </div>

              {/* Action Button & Metadata */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400">
                  {p.words.length} Kata Kunci Terverifikasi
                </span>

                <button
                  type="button"
                  onClick={() => {
                    onSelectPuzzle(p.id);
                    sound.playTap();
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isCurrent ? 'Sedang Dimainkan' : 'Mainkan Tipe Ini'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
