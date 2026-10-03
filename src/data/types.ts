export type Direction = 'across' | 'down';

export interface WordItem {
  id: string;
  number: number;
  direction: Direction;
  word: string; // Uppercase A-Z only
  clue: string;
  row: number; // 0-indexed start row
  col: number; // 0-indexed start col
  explanation: string; // Knowledge insight from book
  bookRef: string; // e.g. "Bab 1, Halaman 2 - Gambar 1"
  bloomTaxonomy?: string; // e.g. "C4 - Analisis Kritis"
  krathwohlTaxonomy?: string; // e.g. "A3 - Valuing"
  constructValidity?: string; // e.g. "Trilogi Nilai Raths (Choosing-Prizing-Acting)"
}

export interface VctReflectionOption {
  text: string;
  trait: 'internal' | 'reflektif' | 'aksi';
  feedback: string;
  academicRationale?: string;
}

export interface Puzzle {
  id: string;
  typeNumber: number;
  title: string;
  subtitle: string;
  category: string;
  sourceChapter: string;
  description: string;
  quote: string;
  rows: number;
  cols: number;
  words: WordItem[];
  vctReflectionQuestion: string;
  vctReflectionOptions: VctReflectionOption[];
  targetAudience?: string;
  theoreticalFramework?: string;
}

export interface GlossaryEntry {
  term: string;
  definition: string;
  chapter: string;
  category: 'Konsep Inti' | 'Model & Teknik' | 'Psikologi' | 'Asesmen & Yuridis';
  theoreticalReference?: string;
}
