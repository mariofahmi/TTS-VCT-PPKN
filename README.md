# Teka-Teki Silang (TTS) Interaktif PPKn Perguruan Tinggi
### Berbasis Pendekatan *Value Clarification Technique* (VCT)

[![GitHub Repo](https://img.shields.io/badge/GitHub-mariofahmi%2FTTS--VCT--PPKN-0284c7?style=for-the-badge&logo=github)](https://github.com/mariofahmi/TTS-VCT-PPKN)
[![Perancang](https://img.shields.io/badge/PERANCANG-MARIO%20FAHMI%20SYAHRIAL-0ea5e9?style=for-the-badge)](https://github.com/mariofahmi)
[![Framework](https://img.shields.io/badge/React%2019-Vite%208-38bdf8?style=for-the-badge&logo=react)](https://vitejs.dev/)
[![Tema](https://img.shields.io/badge/Tema-Biru%20Muda%20Laut%20%26%20Malam-06b6d4?style=for-the-badge)](https://github.com/mariofahmi/TTS-VCT-PPKN)

Aplikasi media pembelajaran interaktif berbasis web (*Single Viewport Web Application*) yang mengintegrasikan permainan Teka-Teki Silang (TTS) dengan model pembelajaran klarifikasi nilai (*Value Clarification Technique* / VCT) untuk mata kuliah Pendidikan Pancasila dan Kewarganegaraan (PPKn) di Perguruan Tinggi.

---

## 🏛️ Identitas & Hak Cipta

- **Perancang & Pengembang:** Mario Fahmi Syahrial, M.Pd.
- **Repositori Resmi GitHub:** [https://github.com/mariofahmi/TTS-VCT-PPKN](https://github.com/mariofahmi/TTS-VCT-PPKN)
- **Buku Sumber Rujukan Utama:**
  > *Value Clarification Technique (VCT) dalam Pembelajaran PPKn Berbasis Nilai*  
  > Penulis: **Dr. Sukisno, M.Pd., Mario Fahmi Syahrial, M.Pd., dkk.**  
  > Penerbit: **Yudharta Press** (Tahun Terbit: 2026)  
  > **ISBN: 978-623-7817-62-8**

---

## ✨ Fitur-Fitur Utama

1. **Desain 1 Halaman Responsif (*Single Viewport*)**:
   - Seluruh instrumen permainan, kisi TTS, petunjuk mendatar/menurun, papan ketik virtual, dan kontrol profil berada dalam satu tampilan tanpa scrollbar vertikal.
2. **Tema Visual "Biru Muda Kayak Laut" (*Ocean Theme*) & Mode Malam**:
   - Estetika gradasi air laut segar (*cyan, sky-blue, aqua shimmer*) dengan switch instan ke mode *Samudera Malam*.
3. **10 Level Progresif (50 Soal Analitik Berstandar OBE)**:
   - Level 1: Pengantar & Urgensi VCT PPKn
   - Level 2: Taksonomi Nilai (Bloom & Krathwohl)
   - Level 3: Sintaks 7 Tahap Pendekatan VCT
   - Level 4: VCT Percontohan (Modeling)
   - Level 5: VCT Analisis Nilai (Value Analysis)
   - Level 6: VCT Klarifikasi Nilai Terbuka (Clarification)
   - Level 7: Dilema Moral & Etika Konstitusi
   - Level 8: Validasi Instrumen & Asesmen Autentik
   - Level 9: Hasil Belajar & Efektivitas Empiris
   - Level 10: Master Klarifikasi Nilai PPKn
4. **Dua Mode Pengguna (Dual-Role)**:
   - **Mode Mahasiswa**: Menyelesaikan teka-teki, pengingat petunjuk (*hint*), pelacakan streak jawaban berturut-turut, refleksi VCT, dan pencatatan skor.
   - **Mode Dosen**: Dilengkapi tombol *Kunci Dosen* untuk memunculkan seluruh jawaban kisi secara transparan demi memfasilitasi diskusi dan telaah kelas.
5. **Cetak Lembar Kerja Mahasiswa & Kunci Dosen (PDF Ready)**:
   - Format cetak A4 berstandar akademik lengkap dengan Kop Lembaga, Identitas Pemain (Nama & NIM/NIDN), Rubrik Penilaian Analitik VCT (Pilihan Bebas, Penghargaan, dan Tindakan Konsisten), serta kisi siap tulis.
6. **Profil Pemain**:
   - Input nama pemain, nomor identitas (NIM/NIDN), dan peran yang tersimpan otomatis pada *Local Storage* peramban.
7. **Arsitektur Antigravity AI & Dataset JSON**:
   - Ekspor dataset 10 level ke file JSON dan integrasi agen penalaran moral *Antigravity AI*.

---

## 🚀 Menjalankan Aplikasi Secara Lokal

### Prasyarat:
- [Node.js](https://nodejs.org/) versi 18 atau lebih baru.
- Package manager `npm`.

### Langkah-langkah Instalasi:

1. **Clone repositori dari GitHub:**
   ```bash
   git clone https://github.com/mariofahmi/TTS-VCT-PPKN.git
   cd TTS-VCT-PPKN
   ```

2. **Instal seluruh dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (Dev Server):**
   ```bash
   npm run dev
   ```
   Aplikasi akan aktif di peramban pada alamat:
   👉 **http://localhost:3000**

4. **Kompilasi produksi (Build):**
   ```bash
   npm run build
   ```

---

## 📂 Struktur Proyek

```
TTS-VCT-PPKN/
├── public/
│   ├── favicon.png               # Ikon aplikasi
│   └── logo-mf.png               # Logo monogram resmi Mario Fahmi (MF)
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Bilah atas, logo MF, profil, tema, & GitHub link
│   │   ├── CrosswordGrid.tsx     # Kisi TTS responsif dan interaktif
│   │   ├── ClueList.tsx          # Daftar petunjuk mendatar & menurun
│   │   ├── VirtualKeyboard.tsx   # Papan ketik virtual ramah sentuhan
│   │   ├── PlayerProfileModal.tsx# Modal identitas pemain (Nama & NIM/NIDN)
│   │   ├── PrintWorksheetModal.tsx # Generator cetak PDF LKM & Kunci Dosen
│   │   ├── VctReflectionModal.tsx# Refleksi nilai VCT pasca-penyelesaian level
│   │   ├── TheoryInsightModal.tsx# Rujukan kutipan buku & taksonomi per kata
│   │   ├── PedagogicalAdvice.tsx # Panduan pedagogis implementasi VCT
│   │   └── AcademicVerificationView.tsx # Verifikasi 50 butir soal VCT
│   ├── data/
│   │   ├── puzzles.ts            # Dataset lengkap 10 level TTS VCT (50 soal)
│   │   └── types.ts              # Definisi tipe TypeScript
│   ├── utils/
│   │   └── audio.ts              # Sintesis Web Audio FX tanpa aset eksternal
│   ├── App.tsx                   # Komponen utama 1 halaman & footer perancang
│   ├── index.css                 # Desain sistem tema Biru Laut & Samudera Malam
│   └── main.tsx                  # Titik masuk React 19
├── package.json
└── README.md
```

---

## 👨‍🏫 Dibuat dan Dirancang Oleh:
**Mario Fahmi Syahrial**  
Repositori: [https://github.com/mariofahmi/TTS-VCT-PPKN](https://github.com/mariofahmi/TTS-VCT-PPKN)
