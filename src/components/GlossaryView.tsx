import React, { useState } from 'react';
import { glossaryEntries } from '../data/glossary.ts';
import { Search, BookMarked, Tag } from 'lucide-react';
import { sound } from '../utils/audio.ts';

export const GlossaryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Konsep Inti', 'Model & Teknik', 'Psikologi', 'Asesmen & Yuridis'];

  const filteredEntries = glossaryEntries.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.chapter.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 text-slate-200">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-slate-700/80 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
          <BookMarked className="w-4 h-4" />
          <span>Kamus Referensi Buku (Halaman 344–363)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Glosarium VCT & Pendidikan Karakter PPKn
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Kumpulan definisi istilah kunci, model operasional, landasan filosofis, yuridis, dan psikologis yang disarikan dari buku rujukan.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari istilah atau konsep..."
            className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50 transition-colors"
          />
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                sound.playTap();
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Entries Counter */}
      <div className="text-xs text-slate-400 flex items-center justify-between">
        <span>Menampilkan {filteredEntries.length} dari {glossaryEntries.length} istilah</span>
      </div>

      {/* Entries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEntries.map((entry, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-white text-base tracking-tight">
                  {entry.term}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700/60 shrink-0">
                  {entry.category}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {entry.definition}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
              <Tag className="w-3 h-3 text-amber-500/80" />
              <span>{entry.chapter}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredEntries.length === 0 && (
        <div className="text-center py-12 p-6 bg-slate-900/40 rounded-2xl border border-slate-800 text-slate-400 text-xs">
          Tidak ditemukan istilah yang cocok dengan kata pencarian "{searchTerm}".
        </div>
      )}
    </div>
  );
};
