import React, { useState } from 'react';
import { Direction, WordItem } from '../data/types.ts';
import { ArrowRight, ArrowDown, CheckCircle2, BookOpen, Search, GraduationCap } from 'lucide-react';
import { sound } from '../utils/audio.ts';

interface ClueListProps {
  acrossWords: WordItem[];
  downWords: WordItem[];
  selectedWord: WordItem | null;
  onSelectWord: (word: WordItem) => void;
  completedWordIds: Set<string>;
  onInspectTheory: (word: WordItem) => void;
  theme?: 'ocean' | 'dark';
}

export const ClueList: React.FC<ClueListProps> = ({
  acrossWords,
  downWords,
  selectedWord,
  onSelectWord,
  completedWordIds,
  onInspectTheory,
  theme = 'ocean',
}) => {
  const isOcean = theme === 'ocean';
  const [filterMode, setFilterMode] = useState<'all' | 'unsolved' | 'solved'>('all');
  const [activeDirectionTab, setActiveDirectionTab] = useState<'all' | 'across' | 'down'>('all');
  const [clueSearch, setClueSearch] = useState('');

  const filterWord = (w: WordItem) => {
    const isDone = completedWordIds.has(w.id);
    if (filterMode === 'unsolved' && isDone) return false;
    if (filterMode === 'solved' && !isDone) return false;

    if (clueSearch.trim()) {
      const q = clueSearch.toLowerCase();
      const matchClue = w.clue.toLowerCase().includes(q);
      const matchRef = w.bookRef.toLowerCase().includes(q);
      const matchTax = (w.bloomTaxonomy || '').toLowerCase().includes(q);
      return matchClue || matchRef || matchTax;
    }
    return true;
  };

  const filteredAcross = acrossWords.filter(filterWord);
  const filteredDown = downWords.filter(filterWord);

  return (
    <div
      className={`flex flex-col h-full rounded-2xl border shadow-md p-3 space-y-2.5 transition-colors ${
        isOcean
          ? 'bg-[#061c3b]/90 backdrop-blur-md border-sky-400/35 text-white shadow-xl shadow-sky-950/60'
          : 'bg-slate-900/90 border-slate-800'
      }`}
    >
      {/* Search & Filter Toolbar */}
      <div
        className={`flex flex-wrap items-center justify-between gap-2 pb-2 border-b ${
          isOcean ? 'border-sky-500/30' : 'border-slate-800'
        }`}
      >
        {/* Search Input */}
        <div className="relative flex-1 min-w-[140px]">
          <Search
            className={`w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 ${
              isOcean ? 'text-sky-300' : 'text-slate-400'
            }`}
          />
          <input
            type="text"
            value={clueSearch}
            onChange={(e) => setClueSearch(e.target.value)}
            placeholder="Cari petunjuk/bab..."
            className={`w-full pl-8 pr-2.5 py-1 rounded-lg text-xs transition-colors focus:outline-none ${
              isOcean
                ? 'bg-[#041226]/80 border border-sky-400/40 text-white placeholder-sky-300/60 focus:bg-sky-950/90 focus:border-sky-300'
                : 'bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400'
            }`}
          />
        </div>

        {/* Direction Switcher */}
        <div
          className={`flex items-center gap-1 p-0.5 rounded-lg border text-[11px] ${
            isOcean ? 'bg-[#030f20]/90 border-sky-500/40' : 'bg-slate-950/60 border-slate-800'
          }`}
        >
          <button
            type="button"
            onClick={() => setActiveDirectionTab('all')}
            className={`px-2 py-0.5 rounded font-medium cursor-pointer transition-colors ${
              activeDirectionTab === 'all'
                ? isOcean
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-sm'
                  : 'bg-amber-400 text-slate-950 font-bold'
                : isOcean
                ? 'text-sky-300 hover:text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Semua
          </button>
          <button
            type="button"
            onClick={() => setActiveDirectionTab('across')}
            className={`px-2 py-0.5 rounded font-medium cursor-pointer transition-colors ${
              activeDirectionTab === 'across'
                ? isOcean
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-sm'
                  : 'bg-amber-400 text-slate-950 font-bold'
                : isOcean
                ? 'text-sky-300 hover:text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Mendatar ({filteredAcross.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveDirectionTab('down')}
            className={`px-2 py-0.5 rounded font-medium cursor-pointer transition-colors ${
              activeDirectionTab === 'down'
                ? isOcean
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-sm'
                  : 'bg-amber-400 text-slate-950 font-bold'
                : isOcean
                ? 'text-sky-300 hover:text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Menurun ({filteredDown.length})
          </button>
        </div>
      </div>

      {/* Scrollable Clues Area */}
      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-270px)] pr-1 space-y-3">
        {/* Mendatar Section */}
        {(activeDirectionTab === 'all' || activeDirectionTab === 'across') && (
          <div className="space-y-1.5">
            <div
              className={`flex items-center justify-between text-xs font-bold uppercase tracking-wider px-1 ${
                isOcean ? 'text-sky-300' : 'text-amber-400'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <ArrowRight className="w-3.5 h-3.5" />
                <span>Mendatar</span>
              </span>
              <span className={`font-mono text-[10px] font-normal ${isOcean ? 'text-sky-400/80' : 'text-slate-400'}`}>
                {filteredAcross.filter(w => completedWordIds.has(w.id)).length}/{filteredAcross.length} Terjawab
              </span>
            </div>

            {filteredAcross.map((item) => {
              const isSelected = selectedWord?.id === item.id;
              const isDone = completedWordIds.has(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectWord(item)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? isOcean
                        ? 'bg-sky-600/40 border-sky-300 shadow-lg shadow-sky-600/30 ring-1 ring-sky-300/60'
                        : 'bg-amber-500/20 border-amber-500/80 shadow-md ring-1 ring-amber-500/50'
                      : isDone
                      ? isOcean
                        ? 'bg-teal-950/60 border-teal-500/40 hover:border-teal-400'
                        : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                      : isOcean
                      ? 'bg-sky-900/40 border-sky-500/30 hover:bg-sky-850/60 hover:border-sky-400 text-slate-100 shadow-sm'
                      : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/70 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <span
                      className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[11px] font-black shrink-0 ${
                        isSelected
                          ? isOcean ? 'bg-gradient-to-br from-sky-400 to-blue-500 text-white shadow-sm' : 'bg-amber-400 text-slate-950'
                          : isDone
                          ? 'bg-teal-500/30 text-teal-300'
                          : isOcean ? 'bg-sky-800/80 text-sky-200' : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {item.number}
                    </span>

                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-xs leading-snug ${
                          isDone && !isSelected
                            ? isOcean ? 'text-teal-300/70 line-through' : 'text-slate-400'
                            : isSelected
                            ? isOcean ? 'text-white font-bold' : 'text-amber-200 font-semibold'
                            : isOcean ? 'text-slate-100 font-medium' : 'text-slate-200'
                        }`}
                      >
                        {item.clue}
                      </p>

                      <div className="flex items-center justify-between gap-1 mt-1 text-[10px]">
                        <span className={`font-mono font-bold ${isOcean ? 'text-sky-300/80' : 'text-slate-300'}`}>
                          {item.word.length} Huruf
                        </span>
                        <div className="flex items-center gap-1.5">
                          {isDone && (
                            <span className="text-teal-300 flex items-center gap-0.5 font-bold">
                              <CheckCircle2 className="w-3 h-3" />
                              Benar
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onInspectTheory(item);
                              sound.playTap();
                            }}
                            className={`px-1.5 py-0.5 rounded font-bold flex items-center gap-1 cursor-pointer transition-colors ${
                              isOcean
                                ? 'bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 border border-sky-400/40'
                                : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-400'
                            }`}
                          >
                            <GraduationCap className="w-3 h-3" />
                            <span>Teori</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Menurun Section */}
        {(activeDirectionTab === 'all' || activeDirectionTab === 'down') && (
          <div className="space-y-1.5 pt-2">
            <div
              className={`flex items-center justify-between text-xs font-bold uppercase tracking-wider px-1 ${
                isOcean ? 'text-sky-300' : 'text-amber-400'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <ArrowDown className="w-3.5 h-3.5" />
                <span>Menurun</span>
              </span>
              <span className={`font-mono text-[10px] font-normal ${isOcean ? 'text-sky-400/80' : 'text-slate-400'}`}>
                {filteredDown.filter(w => completedWordIds.has(w.id)).length}/{filteredDown.length} Terjawab
              </span>
            </div>

            {filteredDown.map((item) => {
              const isSelected = selectedWord?.id === item.id;
              const isDone = completedWordIds.has(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectWord(item)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? isOcean
                        ? 'bg-sky-600/40 border-sky-300 shadow-lg shadow-sky-600/30 ring-1 ring-sky-300/60'
                        : 'bg-amber-500/20 border-amber-500/80 shadow-md ring-1 ring-amber-500/50'
                      : isDone
                      ? isOcean
                        ? 'bg-teal-950/60 border-teal-500/40 hover:border-teal-400'
                        : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                      : isOcean
                      ? 'bg-sky-900/40 border-sky-500/30 hover:bg-sky-850/60 hover:border-sky-400 text-slate-100 shadow-sm'
                      : 'bg-slate-800/40 border-slate-800 hover:bg-slate-800/70 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <span
                      className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[11px] font-black shrink-0 ${
                        isSelected
                          ? isOcean ? 'bg-gradient-to-br from-sky-400 to-blue-500 text-white shadow-sm' : 'bg-amber-400 text-slate-950'
                          : isDone
                          ? 'bg-teal-500/30 text-teal-300'
                          : isOcean ? 'bg-sky-800/80 text-sky-200' : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {item.number}
                    </span>

                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-xs leading-snug ${
                          isDone && !isSelected
                            ? isOcean ? 'text-teal-300/70 line-through' : 'text-slate-400'
                            : isSelected
                            ? isOcean ? 'text-white font-bold' : 'text-amber-200 font-semibold'
                            : isOcean ? 'text-slate-100 font-medium' : 'text-slate-200'
                        }`}
                      >
                        {item.clue}
                      </p>

                      <div className="flex items-center justify-between gap-1 mt-1 text-[10px]">
                        <span className={`font-mono font-bold ${isOcean ? 'text-sky-300/80' : 'text-slate-300'}`}>
                          {item.word.length} Huruf
                        </span>
                        <div className="flex items-center gap-1.5">
                          {isDone && (
                            <span className="text-teal-300 flex items-center gap-0.5 font-bold">
                              <CheckCircle2 className="w-3 h-3" />
                              Benar
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onInspectTheory(item);
                              sound.playTap();
                            }}
                            className={`px-1.5 py-0.5 rounded font-bold flex items-center gap-1 cursor-pointer transition-colors ${
                              isOcean
                                ? 'bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 border border-sky-400/40'
                                : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-400'
                            }`}
                          >
                            <GraduationCap className="w-3 h-3" />
                            <span>Teori</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
