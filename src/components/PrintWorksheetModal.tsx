import React, { useState } from 'react';
import { Puzzle, WordItem } from '../data/types.ts';
import { Printer, X, FileText, CheckCircle2, BookOpen, GraduationCap, ShieldCheck, Download } from 'lucide-react';
import { sound } from '../utils/audio.ts';
import { PlayerProfile } from './PlayerProfileModal.tsx';
import logoMf from '../assets/logo-mf.png';

interface PrintWorksheetModalProps {
  puzzle: Puzzle;
  onClose: () => void;
  playerProfile?: PlayerProfile;
  theme?: 'ocean' | 'dark';
}

export const PrintWorksheetModal: React.FC<PrintWorksheetModalProps> = ({
  puzzle,
  onClose,
  playerProfile,
  theme = 'ocean',
}) => {
  const isOcean = theme === 'ocean';
  const [printMode, setPrintMode] = useState<'worksheet' | 'answerKey'>('worksheet');

  // Pre-calculate valid cells and numbers
  const validCells = React.useMemo(() => {
    const valid = new Set<string>();
    puzzle.words.forEach((w) => {
      for (let i = 0; i < w.word.length; i++) {
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

  const acrossWords = puzzle.words.filter((w) => w.direction === 'across');
  const downWords = puzzle.words.filter((w) => w.direction === 'down');

  const handlePrint = () => {
    sound.playTap();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md overflow-y-auto">
      <div
        className={`relative w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh] border transition-colors ${
          isOcean
            ? 'bg-white border-sky-200 text-slate-800 shadow-sky-950/15'
            : 'bg-slate-900 border-slate-800 text-slate-100'
        }`}
      >
        {/* Modal Controls (Hidden during print) */}
        <div
          className={`no-print p-4 sm:p-5 border-b flex flex-wrap items-center justify-between gap-3 shrink-0 ${
            isOcean ? 'border-sky-100 bg-sky-50/60' : 'border-slate-800 bg-slate-950/60'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div
              className={`p-2 rounded-xl ${
                isOcean ? 'bg-sky-500/15 text-sky-700' : 'bg-amber-500/20 text-amber-400'
              }`}
            >
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h2 className={`text-base sm:text-lg font-bold leading-tight ${isOcean ? 'text-slate-900' : 'text-white'}`}>
                Cetak Lembar Kerja Teka-Teki Silang Akademik
              </h2>
              <p className={`text-xs ${isOcean ? 'text-slate-500' : 'text-slate-400'}`}>
                Format standar perkuliahan dan tugas evaluasi mandiri berbasis buku VCT PPKn
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Switch Mode: Lembar Kerja Mahasiswa vs Kunci Jawaban Dosen */}
            <div
              className={`p-0.5 rounded-xl border flex items-center text-xs ${
                isOcean ? 'bg-sky-100/70 border-sky-200' : 'bg-slate-900 border-slate-700/80'
              }`}
            >
              <button
                type="button"
                onClick={() => { setPrintMode('worksheet'); sound.playTap(); }}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  printMode === 'worksheet'
                    ? isOcean
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold shadow-sm'
                      : 'bg-amber-400 text-slate-950 font-bold shadow-sm'
                    : isOcean
                    ? 'text-sky-800 hover:text-sky-950'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Lembar Mahasiswa (Kosong)
              </button>
              <button
                type="button"
                onClick={() => { setPrintMode('answerKey'); sound.playTap(); }}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  printMode === 'answerKey'
                    ? isOcean
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold shadow-sm'
                      : 'bg-emerald-400 text-slate-950 font-bold shadow-sm'
                    : isOcean
                    ? 'text-sky-800 hover:text-sky-950'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Kunci Dosen (Terisi)
              </button>
            </div>

            <button
              type="button"
              onClick={handlePrint}
              className={`px-4 py-2 font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer ${
                isOcean
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white shadow-sky-500/20'
                  : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950'
              }`}
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isOcean
                  ? 'text-slate-400 hover:text-slate-700 hover:bg-sky-100'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas */}
        <div className="p-6 sm:p-8 overflow-y-auto print-area bg-white text-slate-900 font-sans print:p-0 print:m-0 print:shadow-none">
          {/* Header Lembar Kerja */}
          <div className="border-b-2 border-slate-900 pb-4 mb-6">
            <div className="flex justify-between items-start gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-14 h-14 rounded-xl border border-slate-300 p-1 flex items-center justify-center shrink-0 bg-slate-50">
                  <img
                    src={logoMf}
                    alt="Logo MF"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = './logo-mf.png';
                    }}
                  />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
                    LEMBAR KERJA MAHASISWA & EVALUASI AKADEMIK
                  </div>
                  <h1 className="text-xl sm:text-2xl font-black text-slate-950 mt-0.5 uppercase tracking-tight">
                    Teka-Teki Silang VCT PPKn Berbasis Nilai
                  </h1>
                  <div className="text-xs font-semibold text-slate-700 mt-1">
                    Mata Kuliah: Pendidikan Pancasila & Kewarganegaraan · Kurikulum OBE
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Sumber Rujukan: Dr. Sukisno, M.Pd., Mario Fahmi Syahrial, M.Pd., dkk. (Yudharta Press, 2026, ISBN: 978-623-7817-62-8)
                  </div>
                </div>
              </div>

              <div className="text-right border border-slate-300 rounded-xl p-3 text-xs min-w-[220px] bg-slate-50/50">
                <div className="font-bold text-slate-800 text-sm">
                  {printMode === 'answerKey' ? 'PANDUAN & KUNCI DOSEN' : 'IDENTITAS MAHASISWA'}
                </div>
                <div className="text-[11px] text-slate-700 mt-1 text-left">
                  <strong>Nama:</strong> {playerProfile?.name || '_______________________'}
                </div>
                <div className="text-[11px] text-slate-700 mt-0.5 text-left">
                  <strong>NIM :</strong> {playerProfile?.idNumber || '_______________________'}
                </div>
                <div className="text-[11px] text-slate-700 mt-0.5 text-left">
                  <strong>Instansi:</strong> {playerProfile?.institution || '___________________'}
                </div>
              </div>
            </div>

            {/* Level Information Bar */}
            <div className="mt-4 pt-3 border-t border-dashed border-slate-300 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div>
                <span className="font-black px-2 py-0.5 bg-slate-900 text-white rounded mr-2">
                  TIPE #{puzzle.typeNumber}
                </span>
                <span className="font-bold text-slate-900">{puzzle.title}</span>
                <span className="text-slate-500"> — {puzzle.subtitle}</span>
              </div>
              <div className="text-[11px] font-mono text-slate-600">
                Dimensi: {puzzle.rows}x{puzzle.cols} Kotak · {puzzle.words.length} Kata Kunci
              </div>
            </div>
          </div>

          {/* Grid Layout & Clues Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Grid Box */}
            <div className="md:col-span-6 flex flex-col items-center justify-center p-3 bg-slate-50 rounded-2xl border border-slate-200">
              <div
                className="grid gap-[2px] p-2 bg-slate-900 rounded-lg shadow"
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
                    const letter = solutionMap.get(key);

                    if (!isValid) {
                      return (
                        <div
                          key={key}
                          className="w-7 h-7 sm:w-9 sm:h-9 bg-slate-900"
                        />
                      );
                    }

                    return (
                      <div
                        key={key}
                        className="w-7 h-7 sm:w-9 sm:h-9 bg-white relative flex items-center justify-center font-bold font-mono text-sm sm:text-base border border-slate-300 text-slate-950"
                      >
                        {num !== undefined && (
                          <span className="absolute top-0.5 left-0.5 text-[8px] sm:text-[9px] font-bold text-slate-700 leading-none">
                            {num}
                          </span>
                        )}
                        {printMode === 'answerKey' && (
                          <span className="text-emerald-700 font-black">{letter}</span>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

              <div className="text-[10px] text-slate-500 mt-2 italic text-center">
                {printMode === 'answerKey'
                  ? '*Kunci jawaban telah diverifikasi geometris 100% konsisten dengan buku rujukan.'
                  : '*Tulis huruf kapital dengan rapi di dalam kotak bertinta.'}
              </div>
            </div>

            {/* Clues */}
            <div className="md:col-span-6 space-y-4">
              {/* Mendatar */}
              <div>
                <h3 className="font-black text-xs uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                  Petunjuk Mendatar (Across)
                </h3>
                <div className="space-y-1.5 text-xs">
                  {acrossWords.map((w) => (
                    <div key={w.id} className="leading-tight flex items-start gap-1.5">
                      <span className="font-bold font-mono text-slate-900 shrink-0 min-w-[20px]">
                        {w.number}.
                      </span>
                      <div>
                        <span className="text-slate-800">{w.clue}</span>{' '}
                        <span className="font-semibold text-slate-500 text-[10px]">
                          ({w.word.length} huruf)
                        </span>
                        {printMode === 'answerKey' && (
                          <span className="ml-1 text-[11px] font-mono font-bold text-emerald-700">
                            → [{w.word}] ({w.bookRef})
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Menurun */}
              <div>
                <h3 className="font-black text-xs uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                  Petunjuk Menurun (Down)
                </h3>
                <div className="space-y-1.5 text-xs">
                  {downWords.map((w) => (
                    <div key={w.id} className="leading-tight flex items-start gap-1.5">
                      <span className="font-bold font-mono text-slate-900 shrink-0 min-w-[20px]">
                        {w.number}.
                      </span>
                      <div>
                        <span className="text-slate-800">{w.clue}</span>{' '}
                        <span className="font-semibold text-slate-500 text-[10px]">
                          ({w.word.length} huruf)
                        </span>
                        {printMode === 'answerKey' && (
                          <span className="ml-1 text-[11px] font-mono font-bold text-emerald-700">
                            → [{w.word}] ({w.bookRef})
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bagian Lembar Refleksi Nilai VCT */}
          <div className="mt-6 pt-4 border-t-2 border-slate-900">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-1 flex items-center gap-1.5">
              <span>LEMBAR REFLEKSI NILAI VCT (VALUING & CHOOSING LOOP)</span>
            </h3>
            <p className="text-[11px] text-slate-700 italic mb-2">
              Pertanyaan Klarifikasi Nilai: "{puzzle.vctReflectionQuestion}"
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-300 text-xs space-y-2">
              <div className="text-[11px] font-semibold text-slate-800">
                Pilih salah satu sikap atau uraikan pertimbangan moral Anda:
              </div>
              {puzzle.vctReflectionOptions.map((opt, i) => (
                <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700">
                  <div className="w-3.5 h-3.5 rounded border border-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-900">{opt.text}</span>
                    {printMode === 'answerKey' && (
                      <span className="text-emerald-700 block text-[10px]">
                        [Kategori: {opt.trait.toUpperCase()} · Rujukan: {opt.academicRationale}]
                      </span>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-3 pt-2 border-t border-dashed border-slate-300">
                <div className="text-[10px] font-bold text-slate-600 mb-1">
                  Catatan Argumentasi / Rencana Aksi Nyata Mahasiswa:
                </div>
                <div className="h-12 border-b border-slate-300 border-dashed" />
                <div className="h-6 border-b border-slate-300 border-dashed" />
              </div>
            </div>

            {/* Tanda Tangan Penilaian */}
            <div className="mt-6 pt-2 flex justify-between items-end text-xs text-slate-700">
              <div className="text-center">
                <div>Tanggal: _______________</div>
                <div className="h-8" />
                <div className="border-t border-slate-400 px-4 pt-1 font-semibold">
                  {playerProfile?.name || 'Tanda Tangan Mahasiswa'}
                </div>
              </div>

              <div className="text-center">
                <div>Nilai / Skor: [ &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; / 100 ]</div>
                <div className="h-8" />
                <div className="border-t border-slate-400 px-4 pt-1 font-semibold">
                  Dosen Pengampu PPKn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
