import React, { useState } from 'react';
import { Delete, ArrowRight, ArrowDown, Lightbulb, Keyboard as KeyboardIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { sound } from '../utils/audio.ts';
import { Direction } from '../data/types.ts';

interface VirtualKeyboardProps {
  onKeyPress: (char: string) => void;
  onBackspace: () => void;
  onToggleDirection: () => void;
  onHint: () => void;
  currentDirection: Direction;
  canHint: boolean;
  theme?: 'ocean' | 'dark';
}

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

export const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  onKeyPress,
  onBackspace,
  onToggleDirection,
  onHint,
  currentDirection,
  canHint,
  theme = 'ocean',
}) => {
  const isOcean = theme === 'ocean';
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`w-full rounded-2xl border shadow-md overflow-hidden select-none transition-all ${
        isOcean
          ? 'bg-white/90 backdrop-blur-md border-sky-200/90 shadow-sky-900/5'
          : 'bg-slate-900/80 border-slate-800'
      }`}
    >
      {/* Toggle Bar */}
      <div
        className={`px-3 py-2 flex items-center justify-between gap-2 border-b text-xs ${
          isOcean
            ? 'bg-sky-50/80 border-sky-200/80 text-slate-800'
            : 'bg-slate-950/60 border-slate-800/80 text-slate-300'
        }`}
      >
        <button
          type="button"
          onClick={() => {
            setIsExpanded((prev) => !prev);
            sound.playTap();
          }}
          className={`flex items-center gap-2 font-semibold cursor-pointer transition-colors ${
            isOcean ? 'text-slate-800 hover:text-sky-700' : 'text-slate-300 hover:text-amber-400'
          }`}
        >
          <KeyboardIcon className={`w-4 h-4 ${isOcean ? 'text-sky-600' : 'text-amber-400'}`} />
          <span>Keyboard Layar (Sentuh / Virtual)</span>
          {isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          )}
        </button>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => {
              onToggleDirection();
              sound.playTap();
            }}
            title="Ganti arah (Mendatar / Menurun)"
            className={`px-2 py-1 rounded-lg font-medium text-[11px] border transition-colors cursor-pointer flex items-center gap-1 ${
              isOcean
                ? 'bg-white hover:bg-sky-100 text-sky-800 border-sky-200'
                : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700'
            }`}
          >
            {currentDirection === 'across' ? (
              <>
                <ArrowRight className="w-3 h-3" />
                <span>Mendatar</span>
              </>
            ) : (
              <>
                <ArrowDown className="w-3 h-3" />
                <span>Menurun</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onBackspace}
            title="Hapus Huruf"
            className={`px-2 py-1 rounded-lg border transition-colors cursor-pointer flex items-center gap-1 text-[11px] ${
              isOcean
                ? 'bg-white hover:bg-rose-50 hover:text-rose-600 text-slate-700 border-sky-200'
                : 'bg-slate-800 hover:bg-rose-950/50 hover:text-rose-300 text-slate-300 border-slate-700'
            }`}
          >
            <Delete className="w-3 h-3" />
            <span>Hapus</span>
          </button>
        </div>
      </div>

      {/* Expanded Keypad */}
      {isExpanded && (
        <div className="p-2 sm:p-3 space-y-1.5 animate-fadeIn">
          {/* Row 1 */}
          <div className="flex justify-center gap-1 sm:gap-1.5">
            {KEYBOARD_ROWS[0].map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => {
                  onKeyPress(k);
                  sound.playTap();
                }}
                className={`h-8 sm:h-9 flex-1 max-w-[38px] rounded-lg font-mono font-bold text-xs sm:text-sm border shadow-sm transition-colors cursor-pointer flex items-center justify-center ${
                  isOcean
                    ? 'bg-white hover:bg-sky-100 active:bg-sky-500 active:text-white text-slate-800 border-sky-200'
                    : 'bg-slate-800 hover:bg-slate-700 active:bg-amber-500 active:text-slate-950 text-white border-slate-700'
                }`}
              >
                {k}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-1 sm:gap-1.5 px-2">
            {KEYBOARD_ROWS[1].map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => {
                  onKeyPress(k);
                  sound.playTap();
                }}
                className={`h-8 sm:h-9 flex-1 max-w-[38px] rounded-lg font-mono font-bold text-xs sm:text-sm border shadow-sm transition-colors cursor-pointer flex items-center justify-center ${
                  isOcean
                    ? 'bg-white hover:bg-sky-100 active:bg-sky-500 active:text-white text-slate-800 border-sky-200'
                    : 'bg-slate-800 hover:bg-slate-700 active:bg-amber-500 active:text-slate-950 text-white border-slate-700'
                }`}
              >
                {k}
              </button>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex justify-center gap-1 sm:gap-1.5">
            {KEYBOARD_ROWS[2].map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => {
                  onKeyPress(k);
                  sound.playTap();
                }}
                className={`h-8 sm:h-9 flex-1 max-w-[38px] rounded-lg font-mono font-bold text-xs sm:text-sm border shadow-sm transition-colors cursor-pointer flex items-center justify-center ${
                  isOcean
                    ? 'bg-white hover:bg-sky-100 active:bg-sky-500 active:text-white text-slate-800 border-sky-200'
                    : 'bg-slate-800 hover:bg-slate-700 active:bg-amber-500 active:text-slate-950 text-white border-slate-700'
                }`}
              >
                {k}
              </button>
            ))}

            <button
              type="button"
              disabled={!canHint}
              onClick={onHint}
              title="Buka 1 Huruf (-15 poin)"
              className={`h-8 sm:h-9 px-2 rounded-lg border text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-colors ${
                canHint
                  ? isOcean
                    ? 'bg-sky-500/15 hover:bg-sky-500/25 text-sky-800 border-sky-300 font-bold'
                    : 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border-amber-500/50'
                  : isOcean
                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                  : 'bg-slate-800/40 text-slate-600 border-slate-800 cursor-not-allowed'
              }`}
            >
              <Lightbulb className="w-3 h-3" />
              <span>Hint</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
