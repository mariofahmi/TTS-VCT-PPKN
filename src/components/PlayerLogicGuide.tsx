import React from 'react';
import { Brain, Heart, Hand, Shield, Compass, BookOpen, HelpCircle, CheckCircle, Lightbulb, Sparkles } from 'lucide-react';

export const PlayerLogicGuide: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 text-slate-200">
      {/* Hero Intro */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-slate-700/80 shadow-xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400">
          <Brain className="w-4 h-4" />
          <span>Arsitektur Pedagogis Game</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Logika Pemain, Cara Bermain & 10 Tipe Sumber Buku
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
          Game Teka-Teki Silang ini bukan sekadar permainan tebak kata biasa. Game ini dirancang secara sistematis merefleksikan model instruksional dari buku <em>"Value Clarification Technique (VCT) dalam Pembelajaran PPKn Berbasis Nilai"</em> (Yudharta Press, 2026), mengintegrasikan dimensi kognitif, afektif, dan psikomotorik.
        </p>
      </div>

      {/* Bagian 1: Logika Pemain */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <Compass className="w-5 h-5 text-amber-400" />
          <h3 className="text-xl font-bold text-white">1. Logika Pemain (Player Psychological & Cognitive Loop)</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Kognitif */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
              <Brain className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Ranah Kognitif (Kepala)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Pemain menelaah petunjuk berbasis kasus dilema etis, undang-undang, serta konsep filosofis. Pemain menganalisis persilangan huruf dan menguji pemahaman konseptual tingkat tinggi (HOTS) sesuai taksonomi Bloom.
            </p>
            <div className="text-[11px] text-blue-300/80 font-mono">
              Proses: Analisis · Evaluasi · Sintesis
            </div>
          </div>

          {/* Afektif */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Ranah Afektif (Hati)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Di akhir setiap teka-teki, pemain diajak masuk ke <strong>Fase Klarifikasi Nilai</strong> (Prizing & Choosing). Pemain menjawab kartu refleksi moral pribadi untuk menguji komitmen empati dan integritas batin tanpa rasa takut dihakimi.
            </p>
            <div className="text-[11px] text-rose-300/80 font-mono">
              Proses: Valuing · Organizing · Characterization
            </div>
          </div>

          {/* Behavioral */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
              <Hand className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Ranah Behavioral (Tangan)</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fase <strong>Acting</strong> melatih pemain menjadi <em>Internal Locus of Control</em> (Pengemudi Kehidupan). Pemain merumuskan aksi nyata yang dapat diterapkan di sekolah dan lingkungan masyarakat.
            </p>
            <div className="text-[11px] text-amber-300/80 font-mono">
              Proses: Proyek Aksi · Kebiasaan Konsisten
            </div>
          </div>
        </div>

        {/* Metakognisi & Locus of Control callout */}
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-amber-500/30 flex items-start gap-3 text-xs leading-relaxed text-slate-300">
          <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-300 block mb-1">Dinamika Locus of Control (Julian Rotter & Buku Hal. 234-276):</strong>
            Game ini secara konsisten membimbing siswa bergeser dari pola pikir <em>External LoC</em> (menyalahkan nasib, situasi, atau guru seperti 'bidak catur') menuju <em>Internal LoC</em> (merasa diri sebagai 'pengemudi mobil' yang memegang kendali atas pilihan dan konsekuensinya).
          </div>
        </div>
      </section>

      {/* Bagian 2: Cara Bermain */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <HelpCircle className="w-5 h-5 text-amber-400" />
          <h3 className="text-xl font-bold text-white">2. Cara Bermain (Gameplay Mechanics)</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="font-bold text-amber-400 flex items-center gap-1.5 text-sm">
              <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs">1</span>
              Navigasi Kotak & Orientasi
            </div>
            <p className="text-slate-300 leading-relaxed">
              Klik kotak pada kisi teka-teki silang untuk memilih sel aktif. Klik dua kali pada sel yang sama atau tekan tombol <strong>Mendatar/Menurun</strong> untuk beralih arah pengetikan.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="font-bold text-amber-400 flex items-center gap-1.5 text-sm">
              <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs">2</span>
              Memasukkan Jawaban
            </div>
            <p className="text-slate-300 leading-relaxed">
              Gunakan keyboard fisik komputer Anda atau ketuk huruf pada keyboard virtual di layar. Kursor akan otomatis maju ke kotak berikutnya setelah huruf diisi.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="font-bold text-amber-400 flex items-center gap-1.5 text-sm">
              <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs">3</span>
              Memilih Lewat Daftar Petunjuk
            </div>
            <p className="text-slate-300 leading-relaxed">
              Anda juga bisa langsung mengklik salah satu baris petunjuk pada kolom Mendatar atau Menurun. Kotak awal kata tersebut akan otomatis disorot dan difokuskan.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
            <div className="font-bold text-amber-400 flex items-center gap-1.5 text-sm">
              <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center text-xs">4</span>
              Sistem Bantuan & Refleksi Nilai
            </div>
            <p className="text-slate-300 leading-relaxed">
              Gunakan tombol <strong>Petunjuk</strong> untuk membuka 1 huruf jika menemui kebuntuan (-15 poin). Selesaikan seluruh kisi untuk membuka dialog refleksi nilai dan meraih 3 bintang!
            </p>
          </div>
        </div>
      </section>

      {/* Bagian 3: 10 Tipe Bentuk Sumber Buku */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <BookOpen className="w-5 h-5 text-amber-400" />
          <h3 className="text-xl font-bold text-white">3. Sepuluh (10) Tipe Bentuk Sumber dari Buku</h3>
        </div>

        <div className="space-y-3">
          {[
            {
              num: 1,
              title: 'Tipe 1: Hakikat PPKn & Tiga Kaki Karakter',
              book: 'Bab 1 (Halaman 1–21 & Gambar 1)',
              desc: 'Membahas posisi sentral PPKn sebagai nation and character building, analogi SIM kehidupan berbangsa, dan tiga pilar penopang: Kognitif (kepala), Afektif (hati), dan Behavioral (tangan).'
            },
            {
              num: 2,
              title: 'Tipe 2: Landasan Filosofis & Humanisme',
              book: 'Bab 2 (Halaman 22–26 & 41)',
              desc: 'Membedah Pancasila sebagai philosophische grondslag, progresivisme John Dewey (laboratorium demokrasi), dan psikologi humanistik Carl Rogers (unconditional positive regard).'
            },
            {
              num: 3,
              title: 'Tipe 3: Landasan Yuridis & Konstitusional',
              book: 'Bab 2 (Halaman 26–33 & Tabel 2)',
              desc: 'Mengkaji kerangka hukum dasar (UUD 1945 Pasal 27 & 31), Undang-Undang Sisdiknas No. 20 Tahun 2003, hingga aturan pelaksana Permendikbudristek dan Profil Pelajar Pancasila.'
            },
            {
              num: 4,
              title: 'Tipe 4: Taksonomi Tujuan & Tipe Warga Negara',
              book: 'Bab 3 (Halaman 43–62 & Tabel 3)',
              desc: 'Menelaah tipologi Westheimer & Kahne: Personally Responsible Citizen, Participatory Citizen, dan Justice-Oriented Citizen, serta visi Smart and Good Citizen.'
            },
            {
              num: 5,
              title: 'Tipe 5: Trilogi Model Inti VCT',
              book: 'Bab 4 & 5 (Halaman 63–116)',
              desc: 'Mendalami model proses tiga serangkai Louis Raths, Merrill Harmin, dan Sidney Simon: Choosing (memilih bebas berkonsekuensi), Prizing (menghargai & afirmasi), dan Acting (tindakan konsisten).'
            },
            {
              num: 6,
              title: 'Tipe 6: Teknik Praktis & Dilema Moral',
              book: 'Bab 5 (Halaman 117–128 & Tabel 5)',
              desc: 'Latihan Skala Nilai (Value Continuum) untuk mengatasi pemikiran hitam-putih dan Analisis Kasus Dilema Moral Kohlberg (studi kasus klasik Heinz).'
            },
            {
              num: 7,
              title: 'Tipe 7: Fasilitator & Dinamika Kelompok',
              book: 'Bab 6 & 10 (Halaman 140–155 & 213–233)',
              desc: 'Seni fasilitasi guru non-judgmental, penciptaan psychological safety, teknik Whip Around, Fishbowl, serta strategi merangkul siswa pasif dan dominan.'
            },
            {
              num: 8,
              title: 'Tipe 8: Teori & Dimensi Locus of Control',
              book: 'Bab 11 & 12 (Halaman 234–276 & Gambar 3)',
              desc: 'Konsep Julian B. Rotter mengenai kontinum kendali internal (pengemudi aktif) versus eksternal (bidak catur pasrah), serta mitigasi learned helplessness.'
            },
            {
              num: 9,
              title: 'Tipe 9: VCT Digital & Ekosistem E-Learning',
              book: 'Bab 13 (Halaman 277–297 & Tabel 13)',
              desc: 'Adaptasi VCT di platform daring: polling online anonim, forum asinkronus dengan jeda reflektif, netiket, dan proyek kampanye aksi sosial digital.'
            },
            {
              num: 10,
              title: 'Tipe 10: Hasil Belajar & Asesmen Autentik',
              book: 'Bab 14 & 15 (Halaman 298–337, Tabel 14 & 15)',
              desc: 'Outcome-Based Education (OBE), asesmen autentik tiga ranah (jurnal refleksi, skala Likert, rubrik unjuk kerja), serta bukti riset empiris keberhasilan VCT di Indonesia.'
            }
          ].map((t) => (
            <div key={t.num} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-bold font-mono text-sm flex items-center justify-center shrink-0">
                {t.num}
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-bold text-white text-sm">{t.title}</h4>
                  <span className="text-slate-500">·</span>
                  <span className="text-[11px] text-amber-400/90 font-mono">{t.book}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
