import React from 'react';
import { Direction, Puzzle, WordItem } from '../data/types.ts';

interface CrosswordGridProps {
  puzzle: Puzzle;
  userGrid: string[][];
  selectedCell: { row: number; col: number } | null;
  selectedDirection: Direction;
  selectedWord: WordItem | null;
  onCellClick: (row: number, col: number) => void;
  showErrors: boolean;
  isComplete: boolean;
  userRole?: 'mahasiswa' | 'dosen';
  showLecturerKey?: boolean;
  theme?: 'ocean' | 'dark';
}

export const CrosswordGrid: React.FC<CrosswordGridProps> = ({
  puzzle,
  userGrid,
  selectedCell,
  selectedDirection,
  selectedWord,
  onCellClick,
  showErrors,
  isComplete,
  userRole = 'mahasiswa',
  showLecturerKey = false,
  theme = 'ocean',
}) => {
  const isOcean = theme === 'ocean';
  // Pre-calculate valid cells and numbers
  const validCells = React.useMemo(() => {
    const valid = new Set<string>();
    puzzle.words.forEach((w) => {
      const len = w.word.length;
      for (let i = 0; i < len; i++) {
        const r = w.direction === 'across' ? w.row : w.row + i;
        const c = w.direction === 'across' ? w.col + i : w.col;
        valid.add(`${r},${c}`);
      }
    });
    return valid;
  }, [puzzle]);

  const cellNumbers = React.useMemo(() => {
    const numbers = new Map<string, number>();
    puzzle.words.forEach((w) => {
      const key = `${w.row},${w.col}`;
      if (!numbers.has(key)) {
        numbers.set(key, w.number);
      }
    });
    return numbers;
  }, [puzzle]);

  const solutionMap = React.useMemo(() => {
    const map = new Map<string, string>();
    puzzle.words.forEach((w) => {
      for (let i = 0; i < w.word.length; i++) {
        const r = w.direction === 'across' ? w.row : w.row + i;
        const c = w.direction === 'across' ? w.col + i : w.col;
        map.set(`${r},${c}`, w.word[i]);
      }
    });
    return map;
  }, [puzzle]);

  const activeWordCells = React.useMemo(() => {
    const set = new Set<string>();
    if (!selectedWord) return set;
    for (let i = 0; i < selectedWord.word.length; i++) {
      const r = selectedWord.direction === 'across' ? selectedWord.row : selectedWord.row + i;
      const c = selectedWord.direction === 'across' ? selectedWord.col + i : selectedWord.col;
      set.add(`${r},${c}`);
    }
    return set;
  }, [selectedWord]);

  return (
    <div
      className={`w-full flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-2xl border shadow-xl transition-colors ${
        isOcean
          ? 'bg-[#061c3b]/90 backdrop-blur-md border-sky-400/35 shadow-xl shadow-sky-950/60'
          : 'bg-slate-900/90 border-slate-800 shadow-xl'
      }`}
    >
      {/* Grid container with optimized cell sizing so the entire grid fits without cutting off */}
      <div
        className={`grid gap-[3px] sm:gap-1 p-1.5 sm:p-2 rounded-xl border select-none transition-colors ${
          isOcean
            ? 'bg-[#030f20]/95 border-sky-500/40 shadow-2xl'
            : 'bg-slate-950 border-slate-800 shadow-2xl'
        }`}
        style={{
          gridTemplateColumns: `repeat(${puzzle.cols}, minmax(0, 1fr))`,
          width: 'max-content',
        }}
      >
        {Array.from({ length: puzzle.rows }).map((_, r) =>
          Array.from({ length: puzzle.cols }).map((_, c) => {
            const key = `${r},${c}`;
            const isValid = validCells.has(key);
            const num = cellNumbers.get(key);
            const expectedLetter = solutionMap.get(key);
            const userLetter = userGrid[r]?.[c] || '';
            const currentLetter = (showLecturerKey && expectedLetter) ? expectedLetter : userLetter;

            const isSelected = selectedCell?.row === r && selectedCell?.col === c;
            const isInActiveWord = activeWordCells.has(key);
            const isError = showErrors && userLetter !== '' && userLetter !== expectedLetter;
            const isCorrect = userLetter !== '' && userLetter === expectedLetter;

            if (!isValid) {
              return (
                <div
                  key={key}
                  className={`w-6 h-6 sm:w-7.5 sm:h-7.5 md:w-8 md:h-8 rounded ${
                    isOcean
                      ? 'bg-[#020b18]/90 border border-sky-950/60'
                      : 'bg-slate-950/90 border border-slate-900/60'
                  }`}
                  aria-hidden="true"
                />
              );
            }

            return (
              <button
                key={key}
                type="button"
                onClick={() => onCellClick(r, c)}
                className={`w-6 h-6 sm:w-7.5 sm:h-7.5 md:w-8 md:h-8 relative flex items-center justify-center rounded-md font-bold font-mono text-xs sm:text-sm md:text-base transition-all duration-100 cursor-pointer focus:outline-none ${
                  isSelected
                    ? isOcean
                      ? 'bg-sky-400 text-slate-950 ring-2 sm:ring-3 ring-sky-300 shadow-lg scale-105 z-20 font-black'
                      : 'bg-amber-400 text-slate-950 ring-2 sm:ring-3 ring-amber-400/60 shadow-lg scale-105 z-20 font-black'
                    : isInActiveWord
                    ? isOcean
                      ? 'bg-sky-200 text-sky-950 border border-sky-400 z-10 font-bold'
                      : 'bg-amber-500/25 text-amber-200 border border-amber-500/80 z-10'
                    : isComplete
                    ? 'bg-teal-50 text-teal-900 border border-teal-400'
                    : isError
                    ? 'bg-rose-100 text-rose-800 border border-rose-500 animate-pulse'
                    : showLecturerKey
                    ? 'bg-blue-100 text-blue-900 border border-blue-500 font-black'
                    : currentLetter
                    ? isOcean
                      ? 'bg-white text-slate-950 border border-sky-300 hover:border-sky-400 font-bold'
                      : 'bg-slate-800 text-white border border-slate-700 hover:border-slate-500'
                    : isOcean
                    ? 'bg-white text-slate-950 border border-sky-200 hover:border-sky-400 font-bold'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Clue Number Indicator */}
                {num !== undefined && (
                  <span
                    className={`absolute top-0.5 left-0.5 text-[7px] sm:text-[9px] font-mono leading-none font-bold ${
                      isSelected
                        ? isOcean ? 'text-slate-950 font-black' : 'text-slate-950'
                        : isOcean ? 'text-sky-700' : 'text-slate-400'
                    }`}
                  >
                    {num}
                  </span>
                )}

                {/* Displayed User / Lecturer Letter */}
                <span className="leading-none">{currentLetter}</span>

                {/* Dot indicator for correct letter */}
                {isCorrect && !isSelected && !isInActiveWord && !isComplete && !showLecturerKey && (
                  <span className="absolute bottom-0.5 right-0.5 w-1 h-1 rounded-full bg-emerald-500 shadow-sm" />
                )}
              </button>
            );
          })
        )}
      </div>

      {/* Grid Footnote Helper */}
      <div
        className={`w-full flex items-center justify-between text-[10px] mt-1.5 px-1 ${
          isOcean ? 'text-sky-300/80' : 'text-slate-400'
        }`}
      >
        <span className="truncate">
          Ketik langsung di keyboard atau klik kotak untuk membalik arah.
        </span>
        <span
          className={`font-mono font-bold shrink-0 ml-2 ${
            isOcean ? 'text-sky-300' : 'text-amber-400/90'
          }`}
        >
          {puzzle.rows}x{puzzle.cols}
        </span>
      </div>
    </div>
  );
};
