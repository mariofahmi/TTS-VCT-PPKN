import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { puzzles } from './data/puzzles.ts';
import { Direction, Puzzle, WordItem, VctReflectionOption } from './data/types.ts';
import { Header } from './components/Header.tsx';
import { CrosswordGrid } from './components/CrosswordGrid.tsx';
import { ClueList } from './components/ClueList.tsx';
import { VirtualKeyboard } from './components/VirtualKeyboard.tsx';
import { VctReflectionModal } from './components/VctReflectionModal.tsx';
import { PlayerLogicGuide } from './components/PlayerLogicGuide.tsx';
import { PedagogicalAdvice } from './components/PedagogicalAdvice.tsx';
import { GlossaryView } from './components/GlossaryView.tsx';
import { AcademicVerificationView } from './components/AcademicVerificationView.tsx';
import { AntigravityExportView } from './components/AntigravityExportView.tsx';
import { PrintWorksheetModal } from './components/PrintWorksheetModal.tsx';
import { TheoryInsightModal } from './components/TheoryInsightModal.tsx';
import { PlayerProfileModal, PlayerProfile } from './components/PlayerProfileModal.tsx';
import { sound } from './utils/audio.ts';
import { 
  CheckCircle, 
  Lightbulb, 
  Timer as TimerIcon, 
  Trophy, 
  Eye, 
  BookOpen, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Flame,
  Info,
  Printer,
  GraduationCap,
  Presentation,
  KeyRound,
  X,
  Layers,
  ShieldCheck,
  Cpu,
  User,
  Github
} from 'lucide-react';

const STORAGE_KEY = 'vct_crossword_stats_v1';
const PROFILE_KEY = 'vct_player_profile_v1';

export default function App() {
  const [activeOverlayTab, setActiveOverlayTab] = useState<'none' | 'howToPlay' | 'pedagogy' | 'glossary' | 'verify' | 'antigravity'>('none');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [userRole, setUserRole] = useState<'mahasiswa' | 'dosen'>('mahasiswa');
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [inspectingWord, setInspectingWord] = useState<WordItem | null>(null);
  const [showLecturerKey, setShowLecturerKey] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  // Player Profile State
  const [playerProfile, setPlayerProfile] = useState<PlayerProfile>(() => {
    try {
      const saved = localStorage.getItem(PROFILE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      name: 'Mario Fahmi',
      idNumber: '',
      institution: 'Universitas PGRI Ronggolawe (UNIROW) Tuban',
      role: 'mahasiswa',
    };
  });

  // Theme state: defaults to 'ocean' (Biru Muda Kayak Laut)
  const [theme, setTheme] = useState<'ocean' | 'dark'>(() => {
    try {
      return (localStorage.getItem('vct_theme') as 'ocean' | 'dark') || 'ocean';
    } catch {
      return 'ocean';
    }
  });

  const handleToggleTheme = () => {
    const nextTheme = theme === 'ocean' ? 'dark' : 'ocean';
    setTheme(nextTheme);
    try {
      localStorage.setItem('vct_theme', nextTheme);
    } catch {}
  };

  const handleSaveProfile = (profile: PlayerProfile) => {
    setPlayerProfile(profile);
    setUserRole(profile.role === 'dosen' ? 'dosen' : 'mahasiswa');
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    } catch {}
  };

  // Active puzzle state
  const [currentPuzzleId, setCurrentPuzzleId] = useState<string>(puzzles[0].id);
  const currentPuzzle = useMemo(
    () => puzzles.find((p) => p.id === currentPuzzleId) || puzzles[0],
    [currentPuzzleId]
  );

  // Grid letters state
  const [userGrid, setUserGrid] = useState<string[][]>(() =>
    Array.from({ length: currentPuzzle.rows }, () => Array(currentPuzzle.cols).fill(''))
  );

  // Navigation & selection state
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [selectedDirection, setSelectedDirection] = useState<Direction>('across');
  const [showErrors, setShowErrors] = useState(false);
  const [showVictoryModal, setShowVictoryModal] = useState(false);

  // Metrics
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [score, setScore] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [streak, setStreak] = useState(0);

  // Stats storage
  const [completedStats, setCompletedStats] = useState<Record<string, { completed: boolean; stars: number; score: number }>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Reset grid when puzzle changes
  useEffect(() => {
    setUserGrid(Array.from({ length: currentPuzzle.rows }, () => Array(currentPuzzle.cols).fill('')));
    const firstWord = currentPuzzle.words[0];
    if (firstWord) {
      setSelectedCell({ row: firstWord.row, col: firstWord.col });
      setSelectedDirection(firstWord.direction);
    }
    setTimerSeconds(0);
    setIsTimerRunning(true);
    setScore(0);
    setHintsUsed(0);
    setStreak(0);
    setShowErrors(false);
    setShowVictoryModal(false);
    setShowLecturerKey(false);
  }, [currentPuzzleId, currentPuzzle]);

  // Timer loop
  useEffect(() => {
    if (!isTimerRunning || showVictoryModal) return;
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimerRunning, showVictoryModal]);

  // Filter across & down words
  const acrossWords = useMemo(
    () => currentPuzzle.words.filter((w) => w.direction === 'across'),
    [currentPuzzle]
  );
  const downWords = useMemo(
    () => currentPuzzle.words.filter((w) => w.direction === 'down'),
    [currentPuzzle]
  );

  // Compute selected word based on selected cell & direction
  const selectedWord = useMemo<WordItem | null>(() => {
    if (!selectedCell) return null;
    const { row, col } = selectedCell;

    const match = currentPuzzle.words.find((w) => {
      if (w.direction !== selectedDirection) return false;
      if (w.direction === 'across') {
        return w.row === row && col >= w.col && col < w.col + w.word.length;
      } else {
        return w.col === col && row >= w.row && row < w.row + w.word.length;
      }
    });

    if (match) return match;

    return (
      currentPuzzle.words.find((w) => {
        if (w.direction === 'across') {
          return w.row === row && col >= w.col && col < w.col + w.word.length;
        } else {
          return w.col === col && row >= w.row && row < w.row + w.word.length;
        }
      }) || null
    );
  }, [currentPuzzle, selectedCell, selectedDirection]);

  // Keep selectedDirection aligned with active word
  useEffect(() => {
    if (selectedWord && selectedWord.direction !== selectedDirection) {
      setSelectedDirection(selectedWord.direction);
    }
  }, [selectedWord, selectedDirection]);

  // Check which words are completely and correctly filled
  const completedWordIds = useMemo(() => {
    const completed = new Set<string>();
    currentPuzzle.words.forEach((w) => {
      let isWordComplete = true;
      for (let i = 0; i < w.word.length; i++) {
        const r = w.direction === 'across' ? w.row : w.row + i;
        const c = w.direction === 'across' ? w.col + i : w.col;
        if (userGrid[r]?.[c] !== w.word[i]) {
          isWordComplete = false;
          break;
        }
      }
      if (isWordComplete) completed.add(w.id);
    });
    return completed;
  }, [currentPuzzle, userGrid]);

  const isEntirePuzzleComplete = useMemo(() => {
    return (
      completedWordIds.size === currentPuzzle.words.length &&
      currentPuzzle.words.length > 0
    );
  }, [completedWordIds, currentPuzzle]);

  // Trigger victory modal when complete
  useEffect(() => {
    if (isEntirePuzzleComplete && !showVictoryModal) {
      setIsTimerRunning(false);
      setShowVictoryModal(true);

      const starsEarned = hintsUsed === 0 ? 3 : hintsUsed <= 2 ? 2 : 1;
      const finalScore = Math.max(100, score + 200 - hintsUsed * 20);
      setScore(finalScore);

      setCompletedStats((prev) => {
        const updated = {
          ...prev,
          [currentPuzzle.id]: {
            completed: true,
            stars: Math.max(prev[currentPuzzle.id]?.stars || 0, starsEarned),
            score: Math.max(prev[currentPuzzle.id]?.score || 0, finalScore),
          },
        };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch {}
        return updated;
      });
    }
  }, [isEntirePuzzleComplete, showVictoryModal, hintsUsed, score, currentPuzzle]);

  // Cell Click Handler
  const handleCellClick = useCallback(
    (row: number, col: number) => {
      sound.playTap();
      if (selectedCell?.row === row && selectedCell?.col === col) {
        const hasAcross = currentPuzzle.words.some(
          (w) => w.direction === 'across' && w.row === row && col >= w.col && col < w.col + w.word.length
        );
        const hasDown = currentPuzzle.words.some(
          (w) => w.direction === 'down' && w.col === col && row >= w.row && row < w.row + w.word.length
        );
        if (hasAcross && hasDown) {
          setSelectedDirection((prev) => (prev === 'across' ? 'down' : 'across'));
        }
      } else {
        setSelectedCell({ row, col });
        const fitsCurrentDir = currentPuzzle.words.some((w) => {
          if (w.direction !== selectedDirection) return false;
          if (w.direction === 'across') {
            return w.row === row && col >= w.col && col < w.col + w.word.length;
          } else {
            return w.col === col && row >= w.row && row < w.row + w.word.length;
          }
        });
        if (!fitsCurrentDir) {
          setSelectedDirection((prev) => (prev === 'across' ? 'down' : 'across'));
        }
      }
    },
    [selectedCell, selectedDirection, currentPuzzle]
  );

  // Move cursor forward in current word
  const advanceCursor = useCallback(
    (startRow: number, startCol: number, dir: Direction) => {
      if (!selectedWord) return;
      const len = selectedWord.word.length;
      const currentIdx = dir === 'across' ? startCol - selectedWord.col : startRow - selectedWord.row;
      if (currentIdx + 1 < len) {
        const nextR = dir === 'across' ? selectedWord.row : selectedWord.row + currentIdx + 1;
        const nextC = dir === 'across' ? selectedWord.col + currentIdx + 1 : selectedWord.col;
        setSelectedCell({ row: nextR, col: nextC });
      }
    },
    [selectedWord]
  );

  // Move cursor backward
  const retreatCursor = useCallback(
    (startRow: number, startCol: number, dir: Direction) => {
      if (!selectedWord) return;
      const currentIdx = dir === 'across' ? startCol - selectedWord.col : startRow - selectedWord.row;
      if (currentIdx > 0) {
        const prevR = dir === 'across' ? selectedWord.row : selectedWord.row + currentIdx - 1;
        const prevC = dir === 'across' ? selectedWord.col + currentIdx - 1 : selectedWord.col;
        setSelectedCell({ row: prevR, col: prevC });
      }
    },
    [selectedWord]
  );

  // Character Input Handler
  const handleInputChar = useCallback(
    (char: string) => {
      if (!selectedCell || !selectedWord) return;
      const letter = char.toUpperCase();
      if (!/^[A-Z]$/.test(letter)) return;

      const { row, col } = selectedCell;
      const prevChar = userGrid[row]?.[col] || '';

      setUserGrid((prev) => {
        const next = prev.map((r) => [...r]);
        next[row][col] = letter;
        return next;
      });

      setScore((s) => s + (prevChar === '' ? 15 : 5));
      setStreak((st) => st + 1);

      const expectedChar = selectedWord.word[
        selectedDirection === 'across' ? col - selectedWord.col : row - selectedWord.row
      ];
      if (letter === expectedChar) {
        sound.playTap();
      }

      advanceCursor(row, col, selectedDirection);
    },
    [selectedCell, selectedWord, userGrid, selectedDirection, advanceCursor]
  );

  // Backspace Handler
  const handleBackspace = useCallback(() => {
    if (!selectedCell || !selectedWord) return;
    const { row, col } = selectedCell;
    const currentVal = userGrid[row]?.[col] || '';

    if (currentVal !== '') {
      setUserGrid((prev) => {
        const next = prev.map((r) => [...r]);
        next[row][col] = '';
        return next;
      });
    } else {
      retreatCursor(row, col, selectedDirection);
      const idx = selectedDirection === 'across' ? col - selectedWord.col - 1 : row - selectedWord.row - 1;
      if (idx >= 0) {
        const targetR = selectedDirection === 'across' ? selectedWord.row : selectedWord.row + idx;
        const targetC = selectedDirection === 'across' ? selectedWord.col + idx : selectedWord.col;
        setUserGrid((prev) => {
          const next = prev.map((r) => [...r]);
          next[targetR][targetC] = '';
          return next;
        });
      }
    }
  }, [selectedCell, selectedWord, userGrid, selectedDirection, retreatCursor]);

  // Physical Keyboard Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key === 'Backspace') {
        e.preventDefault();
        handleBackspace();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (selectedCell && selectedCell.col + 1 < currentPuzzle.cols) {
          handleCellClick(selectedCell.row, selectedCell.col + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (selectedCell && selectedCell.col - 1 >= 0) {
          handleCellClick(selectedCell.row, selectedCell.col - 1);
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (selectedCell && selectedCell.row + 1 < currentPuzzle.rows) {
          handleCellClick(selectedCell.row + 1, selectedCell.col);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (selectedCell && selectedCell.row - 1 >= 0) {
          handleCellClick(selectedCell.row - 1, selectedCell.col);
        }
      } else if (e.key === ' ' || e.key === 'Tab') {
        e.preventDefault();
        setSelectedDirection((d) => (d === 'across' ? 'down' : 'across'));
        sound.playTap();
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
        handleInputChar(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCell, currentPuzzle, handleBackspace, handleCellClick, handleInputChar]);

  // Select Word from Clue List
  const handleSelectWord = useCallback((w: WordItem) => {
    sound.playTap();
    setSelectedDirection(w.direction);
    setSelectedCell({ row: w.row, col: w.col });
  }, []);

  // Hint: Reveal Current Cell
  const handleHint = useCallback(() => {
    if (!selectedCell || !selectedWord) return;
    const { row, col } = selectedCell;
    const idx = selectedDirection === 'across' ? col - selectedWord.col : row - selectedWord.row;
    const correctLetter = selectedWord.word[idx];

    if (correctLetter) {
      setUserGrid((prev) => {
        const next = prev.map((r) => [...r]);
        next[row][col] = correctLetter;
        return next;
      });
      setHintsUsed((h) => h + 1);
      setScore((s) => Math.max(0, s - 15));
      sound.playHint();
      advanceCursor(row, col, selectedDirection);
    }
  }, [selectedCell, selectedWord, selectedDirection, advanceCursor]);

  // Check Errors Button
  const handleCheckErrors = useCallback(() => {
    setShowErrors(true);
    sound.playTap();
    setTimeout(() => {
      setShowErrors(false);
    }, 2500);
  }, []);

  // Reset current puzzle
  const handleResetPuzzle = useCallback(() => {
    setUserGrid(Array.from({ length: currentPuzzle.rows }, () => Array(currentPuzzle.cols).fill('')));
    setScore(0);
    setHintsUsed(0);
    setStreak(0);
    setShowErrors(false);
    const firstWord = currentPuzzle.words[0];
    if (firstWord) {
      setSelectedCell({ row: firstWord.row, col: firstWord.col });
      setSelectedDirection(firstWord.direction);
    }
  }, [currentPuzzle]);

  const handleNextPuzzle = useCallback(() => {
    const currentIndex = puzzles.findIndex((p) => p.id === currentPuzzleId);
    const nextIndex = (currentIndex + 1) % puzzles.length;
    setCurrentPuzzleId(puzzles[nextIndex].id);
    setShowVictoryModal(false);
    sound.playTap();
  }, [currentPuzzleId]);

  const handlePrevPuzzle = useCallback(() => {
    const currentIndex = puzzles.findIndex((p) => p.id === currentPuzzleId);
    const prevIndex = (currentIndex - 1 + puzzles.length) % puzzles.length;
    setCurrentPuzzleId(puzzles[prevIndex].id);
    sound.playTap();
  }, [currentPuzzleId]);

  const formatTimer = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const isOcean = theme === 'ocean';

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors ${
        isOcean
          ? 'bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100 text-slate-800 selection:bg-sky-500 selection:text-white'
          : 'bg-slate-950 text-slate-100 selection:bg-amber-500/30 selection:text-amber-200'
      }`}
    >
      {/* 1. Slim Academic Header with Player Profile Card */}
      <Header
        activeTab="game"
        setActiveTab={() => {}}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onResetPuzzle={handleResetPuzzle}
        currentPuzzleNumber={currentPuzzle.typeNumber}
        onOpenPrintModal={() => setShowPrintModal(true)}
        userRole={userRole}
        setUserRole={setUserRole}
        playerProfile={playerProfile}
        onOpenProfileModal={() => setShowProfileModal(true)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* 2. Unified 1-Page Control Strip: 10 Level Quick Navigator & Tab Triggers */}
      <div
        className={`border-b px-3 sm:px-6 py-2 shrink-0 transition-colors ${
          isOcean
            ? 'bg-white/75 backdrop-blur-md border-sky-200/80 shadow-sm'
            : 'bg-slate-900/95 border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          {/* 10 Level Quick Switcher Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto py-0.5 max-w-full">
            <span
              className={`text-[11px] font-bold mr-1 shrink-0 flex items-center gap-1 ${
                isOcean ? 'text-sky-800' : 'text-slate-400'
              }`}
            >
              <Layers className={`w-3.5 h-3.5 ${isOcean ? 'text-sky-600' : 'text-amber-400'}`} />
              <span>Tipe:</span>
            </span>

            {puzzles.map((p) => {
              const isSelected = p.id === currentPuzzleId;
              const stats = completedStats[p.id];
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setCurrentPuzzleId(p.id);
                    sound.playTap();
                  }}
                  title={`Tipe #${p.typeNumber}: ${p.title}`}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1 border ${
                    isSelected
                      ? isOcean
                        ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white border-sky-400 shadow-md shadow-sky-500/25 scale-105'
                        : 'bg-amber-400 text-slate-950 border-amber-400 shadow-sm scale-105'
                      : stats?.completed
                      ? isOcean
                        ? 'bg-teal-50 text-teal-800 border-teal-300 hover:bg-teal-100'
                        : 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40 hover:bg-slate-800'
                      : isOcean
                      ? 'bg-white/90 text-sky-950 border-sky-200 hover:bg-sky-50 hover:text-sky-700'
                      : 'bg-slate-800/70 text-slate-300 border-slate-700/80 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span>#{p.typeNumber}</span>
                  {stats?.completed && (
                    <CheckCircle className={`w-3 h-3 ${isOcean ? 'text-teal-600' : 'text-emerald-400'}`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Academic Modals Toggle */}
          <div className="flex items-center gap-1.5 shrink-0 text-xs">
            <button
              type="button"
              onClick={() => { setActiveOverlayTab('verify'); sound.playTap(); }}
              className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer transition-colors flex items-center gap-1 border ${
                isOcean
                  ? 'bg-teal-500/15 hover:bg-teal-500/25 text-teal-800 border-teal-300'
                  : 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border-emerald-500/30'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Audit 50 Soal</span>
            </button>

            <button
              type="button"
              onClick={() => { setActiveOverlayTab('pedagogy'); sound.playTap(); }}
              className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer transition-colors flex items-center gap-1 border ${
                isOcean
                  ? 'bg-sky-500/15 hover:bg-sky-500/25 text-sky-800 border-sky-300'
                  : 'bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border-blue-500/30'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Panduan Dosen</span>
            </button>

            <button
              type="button"
              onClick={() => { setActiveOverlayTab('glossary'); sound.playTap(); }}
              className={`px-2.5 py-1 rounded-lg font-semibold cursor-pointer transition-colors flex items-center gap-1 border ${
                isOcean
                  ? 'bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-800 border-cyan-300'
                  : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/30'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Glosarium</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Stage: Exact 1-Page Layout with Side-by-Side Grid & Clues on MD+ screens */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-4 flex flex-col">
        {/* Compact HUD Line */}
        <div
          className={`rounded-2xl border px-3.5 py-2 shadow-sm flex flex-wrap items-center justify-between gap-2.5 mb-2.5 shrink-0 transition-colors ${
            isOcean
              ? 'bg-white/90 backdrop-blur-md border-sky-200 text-slate-800 shadow-sky-900/5'
              : 'bg-slate-900/90 border-slate-800 text-slate-100'
          }`}
        >
          {/* Level Info & Navigation */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrevPuzzle}
              title="Level Sebelumnya"
              className={`p-1 rounded-md transition-colors cursor-pointer ${
                isOcean
                  ? 'bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <div>
              <span
                className={`text-xs font-black tracking-tight mr-1.5 ${
                  isOcean ? 'text-slate-950' : 'text-white'
                }`}
              >
                Tipe #{currentPuzzle.typeNumber}: {currentPuzzle.title}
              </span>
              <span
                className={`text-[10px] font-medium hidden md:inline ${
                  isOcean ? 'text-sky-600' : 'text-amber-400/90'
                }`}
              >
                ({currentPuzzle.subtitle})
              </span>
            </div>

            <button
              type="button"
              onClick={handleNextPuzzle}
              title="Level Selanjutnya"
              className={`p-1 rounded-md transition-colors cursor-pointer ${
                isOcean
                  ? 'bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-2.5 text-xs">
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-lg border ${
                isOcean
                  ? 'bg-sky-50/90 border-sky-200 text-sky-900'
                  : 'bg-slate-950/70 border-slate-800'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span className={`font-mono font-bold ${isOcean ? 'text-sky-700' : 'text-amber-300'}`}>
                {score}
              </span>
            </div>

            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-lg border ${
                isOcean
                  ? 'bg-sky-50/90 border-sky-200 text-slate-700'
                  : 'bg-slate-950/70 border-slate-800 text-white'
              }`}
            >
              <TimerIcon className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-mono font-bold">{formatTimer(timerSeconds)}</span>
            </div>

            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-lg border ${
                isOcean
                  ? 'bg-teal-50/90 border-teal-200 text-teal-800'
                  : 'bg-slate-950/70 border-slate-800 text-emerald-300'
              }`}
            >
              <CheckCircle className={`w-3.5 h-3.5 ${isOcean ? 'text-teal-600' : 'text-emerald-400'}`} />
              <span className="font-mono font-bold">
                {completedWordIds.size} / {currentPuzzle.words.length}
              </span>
            </div>

            {streak > 3 && (
              <div
                className={`hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-bold ${
                  isOcean
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-amber-500/20 text-amber-300'
                }`}
              >
                <Flame className="w-3 h-3 text-amber-500" />
                <span>{streak}x</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5">
            {userRole === 'dosen' && (
              <button
                type="button"
                onClick={() => {
                  setShowLecturerKey((v) => !v);
                  sound.playTap();
                }}
                title="Kunci Dosen (Tampilkan Seluruh Jawaban untuk Pembahasan Kelas)"
                className={`px-2.5 py-1 text-xs font-bold rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
                  showLecturerKey
                    ? 'bg-blue-600 text-white border-blue-500 shadow'
                    : isOcean
                    ? 'bg-sky-50 hover:bg-sky-100 text-blue-700 border-blue-200'
                    : 'bg-slate-800 hover:bg-slate-700 text-blue-300 border-blue-500/40'
                }`}
              >
                <KeyRound className="w-3 h-3" />
                <span>{showLecturerKey ? 'Tutup Kunci' : 'Kunci Dosen'}</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleCheckErrors}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors cursor-pointer flex items-center gap-1 ${
                isOcean
                  ? 'bg-sky-50 hover:bg-sky-100 text-slate-700 border-sky-200'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              <Eye className={`w-3 h-3 ${isOcean ? 'text-sky-600' : 'text-slate-400'}`} />
              <span>Cek</span>
            </button>

            <button
              type="button"
              onClick={handleHint}
              disabled={!selectedCell}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-colors cursor-pointer flex items-center gap-1 ${
                selectedCell
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

            <button
              type="button"
              onClick={() => setShowPrintModal(true)}
              title="Cetak Lembar Kerja Mahasiswa / Dosen (PDF)"
              className={`px-2.5 py-1 text-xs font-bold rounded-lg border transition-colors cursor-pointer flex items-center gap-1 ${
                isOcean
                  ? 'bg-teal-500/20 hover:bg-teal-500/30 text-teal-800 border-teal-300'
                  : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border-emerald-500/40'
              }`}
            >
              <Printer className="w-3 h-3" />
              <span>Cetak PDF</span>
            </button>
          </div>
        </div>

        {/* Active Clue Callout Banner */}
        {selectedWord && (
          <div
            className={`p-2 rounded-xl border shadow-sm flex items-center justify-between gap-2.5 mb-2.5 shrink-0 transition-colors ${
              isOcean
                ? 'bg-gradient-to-r from-sky-500/15 via-cyan-500/10 to-teal-500/15 border-sky-300 shadow-sky-900/5'
                : 'bg-gradient-to-r from-amber-950/30 via-slate-900 to-slate-900 border-amber-500/40'
            }`}
          >
            <div className="flex items-center gap-2.5 flex-1 min-w-0">
              <div
                className={`w-6 h-6 rounded-md font-black font-mono text-xs flex items-center justify-center shrink-0 shadow-sm ${
                  isOcean
                    ? 'bg-gradient-to-br from-sky-500 to-cyan-600 text-white'
                    : 'bg-amber-400 text-slate-950'
                }`}
              >
                {selectedWord.number}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-[10px]">
                  <span
                    className={`font-bold uppercase tracking-wider ${
                      isOcean ? 'text-sky-700' : 'text-amber-400'
                    }`}
                  >
                    {selectedWord.direction === 'across' ? 'Mendatar' : 'Menurun'} ({selectedWord.word.length} Huruf)
                  </span>
                  <span className={isOcean ? 'text-slate-300' : 'text-slate-600'}>·</span>
                  <span className={`text-[10px] truncate flex items-center gap-1 ${isOcean ? 'text-slate-500' : 'text-slate-400'}`}>
                    <BookOpen className={`w-3 h-3 shrink-0 ${isOcean ? 'text-sky-600' : 'text-amber-400/80'}`} />
                    {selectedWord.bookRef}
                  </span>
                </div>
                <p
                  className={`text-xs font-semibold truncate mt-0.5 ${
                    isOcean ? 'text-slate-900' : 'text-slate-100'
                  }`}
                >
                  {selectedWord.clue}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setInspectingWord(selectedWord);
                sound.playTap();
              }}
              title="Lihat Rujukan Teori Buku & Taksonomi"
              className={`px-2 py-1 rounded-lg border text-[10px] font-bold flex items-center gap-1 cursor-pointer shrink-0 transition-colors ${
                isOcean
                  ? 'bg-sky-500/15 hover:bg-sky-500/25 border-sky-300 text-sky-800'
                  : 'bg-amber-500/15 hover:bg-amber-500/25 border-amber-500/40 text-amber-300'
              }`}
            >
              <GraduationCap className={`w-3.5 h-3.5 ${isOcean ? 'text-sky-600' : 'text-amber-400'}`} />
              <span>Kajian Teori</span>
            </button>
          </div>
        )}

        {/* Main Stage Grid & Clues: Side-by-Side on all screens >= md (768px) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
          {/* Left Column: Grid, Quote, Collapsible Keyboard (5 cols on md/lg) */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col space-y-2">
            <CrosswordGrid
              puzzle={currentPuzzle}
              userGrid={userGrid}
              selectedCell={selectedCell}
              selectedDirection={selectedDirection}
              selectedWord={selectedWord}
              onCellClick={handleCellClick}
              showErrors={showErrors}
              isComplete={isEntirePuzzleComplete}
              userRole={userRole}
              showLecturerKey={showLecturerKey}
              theme={theme}
            />

            {/* Book Quote Card */}
            <div
              className={`p-2 rounded-xl border text-[11px] italic flex items-start gap-2 shadow-inner transition-colors ${
                isOcean
                  ? 'bg-white/80 border-sky-200 text-slate-700'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300'
              }`}
            >
              <Info className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isOcean ? 'text-sky-600' : 'text-amber-400'}`} />
              <div className="line-clamp-2">
                <span className={`font-semibold not-italic mr-1 ${isOcean ? 'text-slate-900' : 'text-slate-200'}`}>
                  Rujukan Buku:
                </span>
                {currentPuzzle.quote}
              </div>
            </div>

            {/* Collapsible Virtual Keyboard */}
            <div>
              <VirtualKeyboard
                onKeyPress={handleInputChar}
                onBackspace={handleBackspace}
                onToggleDirection={() => {
                  setSelectedDirection((d) => (d === 'across' ? 'down' : 'across'));
                }}
                onHint={handleHint}
                currentDirection={selectedDirection}
                canHint={Boolean(selectedCell)}
                theme={theme}
              />
            </div>
          </div>

          {/* Right Column: Clues List (7 cols on md/lg, visible side-by-side) */}
          <div className="md:col-span-6 lg:col-span-7">
            <ClueList
              acrossWords={acrossWords}
              downWords={downWords}
              selectedWord={selectedWord}
              onSelectWord={handleSelectWord}
              completedWordIds={completedWordIds}
              onInspectTheory={(item) => setInspectingWord(item)}
              theme={theme}
            />
          </div>
        </div>
      </main>

      {/* Footer Perancang */}
      <footer
        className={`mt-auto border-t py-2.5 px-4 text-center transition-colors ${
          isOcean
            ? 'border-sky-200/80 bg-white/85 backdrop-blur-md text-slate-700'
            : 'border-slate-800/80 bg-slate-950/95 text-slate-400'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shrink-0 border transition-all ${
                isOcean
                  ? 'bg-white border-sky-300 shadow-sm ring-1 ring-sky-400/40'
                  : 'bg-white/10 border-amber-500/40 shadow-sm ring-1 ring-amber-400/30'
              }`}
            >
              <img
                src="/logo-mf.png"
                alt="Logo MF"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <span
              className={`px-3 py-1 rounded-lg font-black tracking-wider text-xs border shadow-sm ${
                isOcean
                  ? 'bg-gradient-to-r from-sky-500/20 to-cyan-500/20 text-sky-800 border-sky-300'
                  : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
              }`}
            >
              PERANCANG: MARIO FAHMI SYAHRIAL
            </span>
            <a
              href="https://github.com/mariofahmi/TTS-VCT-PPKN"
              target="_blank"
              rel="noopener noreferrer"
              title="Repositori GitHub Resmi TTS-VCT-PPKN"
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all flex items-center gap-1.5 shadow-sm group ${
                isOcean
                  ? 'bg-sky-50 hover:bg-sky-100 text-sky-900 border-sky-300 hover:border-sky-500'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-700 hover:border-amber-500/50'
              }`}
            >
              <Github className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-[11px]">mariofahmi/TTS-VCT-PPKN</span>
            </a>
          </div>
          <div className={`text-[11px] ${isOcean ? 'text-slate-500' : 'text-slate-400'}`}>
            Sumber Rujukan: <em>Value Clarification Technique (VCT) dalam Pembelajaran PPKn Berbasis Nilai</em> · Yudharta Press (2026, ISBN: 978-623-7817-62-8)
          </div>
        </div>
      </footer>

      {/* 4. Unified Overlay Panel */}
      {activeOverlayTab !== 'none' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div
            className={`relative w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border transition-colors ${
              isOcean
                ? 'bg-slate-900 border-sky-400/30 text-slate-100 shadow-2xl shadow-sky-950/40'
                : 'bg-slate-900 border-slate-800 text-slate-100'
            }`}
          >
            <div
              className={`p-4 border-b flex items-center justify-between shrink-0 ${
                isOcean ? 'border-sky-400/20 bg-slate-950/90' : 'border-slate-800 bg-slate-950/70'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`font-bold text-sm ${isOcean ? 'text-sky-300' : 'text-white'}`}>
                  {activeOverlayTab === 'verify' && 'Panel Audit & Verifikasi 50 Soal Akademik'}
                  {activeOverlayTab === 'pedagogy' && 'Saran & Panduan Dosen (Implementasi RPP VCT)'}
                  {activeOverlayTab === 'glossary' && 'Glosarium Interaktif Nilai VCT & PPKn'}
                  {activeOverlayTab === 'howToPlay' && 'Panduan Logika Pemain (Kognitif, Afektif, Behavioral)'}
                  {activeOverlayTab === 'antigravity' && 'Integrasi Antigravity AI & Dataset JSON'}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveOverlayTab('none');
                  sound.playTap();
                }}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isOcean
                    ? 'text-slate-400 hover:text-sky-300 hover:bg-slate-800'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-6 overflow-y-auto flex-1">
              {activeOverlayTab === 'verify' && <AcademicVerificationView />}
              {activeOverlayTab === 'pedagogy' && <PedagogicalAdvice />}
              {activeOverlayTab === 'glossary' && <GlossaryView />}
              {activeOverlayTab === 'howToPlay' && <PlayerLogicGuide />}
              {activeOverlayTab === 'antigravity' && <AntigravityExportView />}
            </div>
          </div>
        </div>
      )}

      {/* Victory and VCT Reflection Dialog */}
      {showVictoryModal && (
        <VctReflectionModal
          puzzle={currentPuzzle}
          score={score}
          timeSpent={timerSeconds}
          hintsUsed={hintsUsed}
          onNextPuzzle={handleNextPuzzle}
          onClose={() => setShowVictoryModal(false)}
          onSaveReflection={(selectedOption: VctReflectionOption) => {
            console.log('User completed VCT reflection:', selectedOption);
          }}
          playerProfile={playerProfile}
        />
      )}

      {/* Printable Academic Worksheet Modal */}
      {showPrintModal && (
        <PrintWorksheetModal
          puzzle={currentPuzzle}
          onClose={() => setShowPrintModal(false)}
          playerProfile={playerProfile}
        />
      )}

      {/* Theory & Book Citation Insight Modal */}
      {inspectingWord && (
        <TheoryInsightModal
          wordItem={inspectingWord}
          puzzle={currentPuzzle}
          onClose={() => setInspectingWord(null)}
        />
      )}

      {/* Player Profile & Identity Modal */}
      {showProfileModal && (
        <PlayerProfileModal
          initialProfile={playerProfile}
          onSave={handleSaveProfile}
          onClose={() => setShowProfileModal(false)}
        />
      )}
    </div>
  );
}
