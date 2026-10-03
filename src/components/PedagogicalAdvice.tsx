import React from 'react';
import { Lightbulb, Users, CheckSquare, Target, BookOpen, Layers, Award } from 'lucide-react';

export const PedagogicalAdvice: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 text-slate-200">
      {/* Hero Banner */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-slate-700/80 shadow-xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
          <Lightbulb className="w-4 h-4" />
          <span>Rekomendasi Ahli & Praktisi Pendidikan</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Saran & Panduan Guru: Implementasi Game TTS VCT di Kelas
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          Berikut adalah rekomendasi strategi integrasi game Teka-Teki Silang ini ke dalam Rencana Pelaksanaan Pembelajaran (RPP) atau Modul Ajar PPKn berbasis Kurikulum Merdeka, disarikan langsung dari Bab 8, 9, 10, dan 15 buku rujukan.
        </p>
      </div>

      {/* Sintaks 3 Tahap Implementasi di Kelas */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <Layers className="w-5 h-5 text-amber-400" />
          <h3 className="text-xl font-bold text-white">1. Sintaks 3 Langkah Pembelajaran Menggunakan TTS VCT</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
              Langkah 1 (15–20 Menit)
            </span>
            <h4 className="font-bold text-white text-base">Aktivasi Kognitif (Orientasi)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Gunakan game TTS sebagai <strong>pemantik awal (ice-breaking diagnostik)</strong>. Siswa bermain dalam mode kelompok berpasangan (<em>Dyads</em>) untuk menyelesaikan teka-teki silang sesuai tema bab.
            </p>
            <div className="text-[11px] text-blue-400">
              Tujuan: Membangun kosa kata konsep & merangsang minat tanpa tekanan hafalan kering.
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
              Langkah 2 (25–35 Menit)
            </span>
            <h4 className="font-bold text-white text-base">Klarifikasi & Debat Nilai (Prizing)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Setelah TTS terisi, ambil 2–3 kata kunci utama (misal: <em>DILEMA</em>, <em>TOLERANSI</em>, <em>PENGEMUDI</em>). Lakukan diskusi dengan teknik <strong>Fishbowl</strong> atau <strong>Whip Around</strong> dipandu pertanyaan klarifikasi P7.
            </p>
            <div className="text-[11px] text-amber-400">
              Tujuan: Menguji alasan etis siswa dan menumbuhkan rasa aman psikologis (psychological safety).
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
              Langkah 3 (20–30 Menit)
            </span>
            <h4 className="font-bold text-white text-base">Komitmen Aksi Nyata (Acting)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Siswa mengisi <strong>Kartu Refleksi Nilai</strong> dan menuliskan 1 komitmen perilaku harian di Jurnal Refleksi, atau merancang proyek mini (seperti kampanye netiket di media sosial sekolah).
            </p>
            <div className="text-[11px] text-emerald-400">
              Tujuan: Mentransformasikan pemahaman di kepala menjadi kebiasaan hidup berkarakter.
            </div>
          </div>
        </div>
      </section>

      {/* Saran Manajemen Dinamika Siswa */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <Users className="w-5 h-5 text-amber-400" />
          <h3 className="text-xl font-bold text-white">2. Saran Manajemen Dinamika Siswa & Locus of Control</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Menghadapi Siswa yang Pasif atau Pemalu
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Terapkan teknik <em>Think-Pair-Share</em> atau <em>Whip Around</em> (jawaban cepat satu kalimat). Jangan meminta jawaban benar/salah, melainkan tanyakan: <em>"Dari kata-kata di TTS tadi, kata mana yang paling menarik perhatianmu dan mengapa?"</em>. Ini menghilangkan rasa takut salah.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Mengelola Siswa yang Terlalu Dominan
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Apresiasi antusiasmenya, lalu beri peran struktural spesifik sebagai <em>Notulis</em> atau <em>Observer Fishbowl</em>. Ini melatihnya untuk lebih banyak mendengar aktif dan mencatat argumen rekan sekelas tanpa memonopoli percakapan.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Menggeser Siswa dari 'Bidak Catur' ke 'Pengemudi' (Internal LoC)
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Berikan penguatan berbasis usaha (<em>effort-based praise</em>): puji proses berpikir dan kerja keras siswa, bukan semata kepintaran bawaan. Berikan otonomi pilihan topik agar siswa menyadari bahwa usahanya menentukan hasil.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Mencegah Jebakan Relativisme Moral
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Gunakan <strong>Pagar Pengaman Etika Pancasila</strong> (Buku Gambar 2, Hal. 174). Kebebasan memilih alternatif nilai tidak berarti bebas memilih tindakan yang merusak atau diskriminatif. Bingkai diskusi dalam koridor konstitusi dan HAM.
            </p>
          </div>
        </div>
      </section>

      {/* Saran Asesmen Autentik */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <CheckSquare className="w-5 h-5 text-amber-400" />
          <h3 className="text-xl font-bold text-white">3. Saran Evaluasi & Asesmen Autentik (Tiga Ranah)</h3>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs leading-relaxed">
          <p className="text-slate-300">
            Sesuai rekomendasi Tabel 14 buku (Halaman 315), hindari menilai keberhasilan pembelajaran PPKn hanya dengan angka tes pilihan ganda. Terapkan triangulasi asesmen:
          </p>
          <ul className="space-y-2 text-slate-300 pl-4 list-disc marker:text-amber-400">
            <li>
              <strong className="text-white">Asesmen Kognitif:</strong> Nilai kecepatan dan akurasi penyelesaian TTS, serta kualitas argumen tertulis saat menganalisis studi kasus.
            </li>
            <li>
              <strong className="text-white">Asesmen Afektif:</strong> Nilai kedalaman Jurnal Refleksi Nilai yang ditulis siswa dan pergeseran sikap pada Skala Likert toleransi sebelum vs sesudah pembelajaran.
            </li>
            <li>
              <strong className="text-white">Asesmen Psikomotorik:</strong> Nilai portofolio bukti tindakan nyata (kerja bakti, mediasi konflik antarteman, kampanye santun bermedia sosial).
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
