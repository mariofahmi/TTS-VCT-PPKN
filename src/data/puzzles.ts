/**
 * Data Teka-Teki Silang (TTS) VCT PPKn
 * Sumber: Buku "Value Clarification Technique (VCT) dalam Pembelajaran PPKn Berbasis Nilai"
 * Penulis: Dr. Sukisno, M.Pd., Mario Fahmi Syahrial, M.Pd., Dr. Mardi Widodo, M.Pd., dkk.
 * Penerbit: Yudharta Press (364 Halaman, September 2026, ISBN: 978-623-7817-62-8)
 */

import { Puzzle } from './types.ts';

export const puzzles: Puzzle[] = [
  {
    "id": "tipe-1-hakikat-ppkn",
    "typeNumber": 1,
    "title": "Hakikat PPKn & Tiga Kaki Karakter",
    "subtitle": "Bab 1 · Karakteristik dan Hakikat Pembelajaran PPKn",
    "category": "Hakikat & Karakter",
    "targetAudience": "Mahasiswa, Dosen, Peneliti Pendidikan Karakter",
    "theoreticalFramework": "Trias Karakter Kewarganegaraan (Civic Knowledge, Disposition, & Skills)",
    "sourceChapter": "Bab 1: Karakteristik dan Hakikat Pembelajaran PPKn (Halaman 1–21 & Gambar 1)",
    "description": "Menjelajahi konsep esensial PPKn sebagai wahana nation and character building, analogi SIM kehidupan berbangsa, dan tiga kaki penopang karakter warga negara.",
    "quote": "\"Jika kurikulum adalah tubuh, maka PPKn adalah jantungnya yang memompa darah nilai ke seluruh organ.\" (Buku VCT PPKn, Hal. 5)",
    "rows": 10,
    "cols": 10,
    "words": [
      {
        "word": "KARAKTER",
        "clue": "Puncak lempeng emas pada kursi berkaki tiga VCT (Civic Character)",
        "explanation": "Karakter warga negara yang kokoh bertumpu seimbang pada tiga kaki: kognitif, afektif, dan behavioral.",
        "bookRef": "Bab 1, Halaman 2 (Gambar 1) & Halaman 5",
        "bloomTaxonomy": "C5 - Evaluasi Karakter",
        "krathwohlTaxonomy": "A5 - Karakterisasi Nilai",
        "constructValidity": "Konstruk Karakter Bangsa (Winataputra, 2012)",
        "row": 0,
        "col": 0,
        "direction": "across",
        "number": 1,
        "id": "p1-w1-across"
      },
      {
        "word": "KOGNITIF",
        "clue": "Kaki kursi VCT yang berfokus pada ranah pemikiran dan pengetahuan kewarganegaraan",
        "explanation": "Ranah kognitif dalam PPKn membekali pemahaman sistem ketatanegaraan, hukum, serta hak dan kewajiban.",
        "bookRef": "Bab 1, Halaman 2 & 3",
        "bloomTaxonomy": "C4 - Analisis Konseptual",
        "krathwohlTaxonomy": "A2 - Responding",
        "constructValidity": "Dimensi Civic Knowledge (Somantri, 2001)",
        "row": 0,
        "col": 0,
        "direction": "down",
        "number": 1,
        "id": "p1-w1-down"
      },
      {
        "word": "AFEKTIF",
        "clue": "Kaki kursi VCT yang berfokus pada ranah hati, perasaan, dan penghayatan nilai",
        "explanation": "Ranah afektif menumbuhkan komitmen moral, empati, dan sikap batin yang tulus.",
        "bookRef": "Bab 1, Halaman 2 & 10",
        "bloomTaxonomy": "C4 - Analisis Afeksi",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Dimensi Civic Disposition & Empathy (Goleman, 1995)",
        "row": 0,
        "col": 1,
        "direction": "down",
        "number": 2,
        "id": "p1-w2-down"
      },
      {
        "word": "TINDAK",
        "clue": "Manifestasi behavioral atau perbuatan nyata dalam kehidupan bermasyarakat",
        "explanation": "Kaki behavioral VCT adalah pembiasaan tindakan bernilai secara konsisten, bukan sekadar teori wacana.",
        "bookRef": "Bab 1, Halaman 2 & 11",
        "bloomTaxonomy": "C6 - Kreasi Aksi Nyata",
        "krathwohlTaxonomy": "A4 - Pengorganisasian Nilai",
        "constructValidity": "Dimensi Civic Skills & Action (Branson, 1998)",
        "row": 4,
        "col": 1,
        "direction": "across",
        "number": 3,
        "id": "p1-w3-across"
      },
      {
        "word": "NORMA",
        "clue": "Kaidah atau pedoman sosial yang berlaku di tengah masyarakat",
        "explanation": "Materi PPKn bersifat multidimensi yang membedah keterkaitan norma, nilai, dan hukum tertulis.",
        "bookRef": "Bab 1, Halaman 8",
        "bloomTaxonomy": "C4 - Analisis Norma Sosial",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Landasan Sosiologis Masyarakat (Geertz, 1973)",
        "row": 4,
        "col": 3,
        "direction": "down",
        "number": 4,
        "id": "p1-w4-down"
      }
    ],
    "vctReflectionQuestion": "Dalam kursi berkaki tiga karakter (Kognitif, Afektif, Behavioral), manakah yang saat ini paling perlu Anda perkuat dalam kehidupan berbangsa?",
    "vctReflectionOptions": [
      {
        "text": "Kognitif: Memperdalam literasi hukum, konstitusi, dan analisis kritis kebijakan publik.",
        "trait": "internal",
        "feedback": "Pilihan bijak! Memahami hak dan aturan menghindarkan Anda dari manipulasi informasi dan keputusan impulsif.",
        "academicRationale": "Penguasaan Civic Knowledge sebagai prasyarat nalar kritis deliberatif."
      },
      {
        "text": "Afektif: Memupuk empati mendalam dan kepekaan nurani terhadap sesama yang kesulitan.",
        "trait": "reflektif",
        "feedback": "Sangat bermakna! Ranah afektif menyalakan kepedulian batin agar ilmu tidak berubah menjadi kesombongan dingin.",
        "academicRationale": "Pengembangan Civic Disposition dan moral sensitivity."
      },
      {
        "text": "Behavioral: Berani mengambil aksi nyata dalam komunitas sekolah dan lingkungan sosial.",
        "trait": "aksi",
        "feedback": "Luar biasa! Karakter sejati teruji saat nilai diwujudkan dalam konsistensi tindakan sehari-hari.",
        "academicRationale": "Perwujudan Civic Skills dan partisipasi kewarganegaraan transformatif."
      }
    ]
  },
  {
    "id": "tipe-2-landasan-filosofis",
    "typeNumber": 2,
    "title": "Landasan Filosofis & Humanisme",
    "subtitle": "Bab 2 · Landasan Filosofis dan Yuridis Pembelajaran PPKn",
    "category": "Filsafat Pendidikan",
    "targetAudience": "Mahasiswa, Dosen Filsafat Pendidikan & PPKn",
    "theoreticalFramework": "Filsafat Pancasila, Progresivisme Dewey, Humanisme Rogers",
    "sourceChapter": "Bab 2: Landasan Filosofis dan Yuridis Pembelajaran PPKn (Halaman 22–26 & 41)",
    "description": "Menelusuri Pancasila sebagai philosophische grondslag, aliran progresivisme John Dewey, serta psikologi humanisme Carl Rogers.",
    "quote": "\"Landasan filosofis bagi PPKn dapat diibaratkan seperti DNA bagi seorang makhluk hidup yang mengatur setiap pertumbuhan.\" (Buku VCT PPKn, Hal. 23)",
    "rows": 10,
    "cols": 10,
    "words": [
      {
        "word": "NILAI",
        "clue": "Keyakinan normatif mendalam tentang apa yang patut dan bermakna bagi kehidupan",
        "explanation": "Nilai bukan sekadar informasi yang dihafalkan, melainkan rujukan internal yang memandu pilihan hidup.",
        "bookRef": "Bab 2, Halaman 22–24",
        "bloomTaxonomy": "C4 - Analisis Aksiologis",
        "krathwohlTaxonomy": "A4 - Pengorganisasian Nilai",
        "constructValidity": "Aksiologi Pendidikan Karakter",
        "row": 0,
        "col": 6,
        "direction": "down",
        "number": 1,
        "id": "p2-w1-down"
      },
      {
        "word": "PANCASILA",
        "clue": "Dasar filosofis bangsa (philosophische grondslag) dan sumber dari segala sumber nilai di Indonesia",
        "explanation": "Pancasila berfungsi sebagai kompas moral dan weltanschauung bangsa Indonesia yang melandasi PPKn.",
        "bookRef": "Bab 2, Halaman 24 & 41",
        "bloomTaxonomy": "C5 - Evaluasi Filosofis",
        "krathwohlTaxonomy": "A5 - Karakterisasi Nilai",
        "constructValidity": "Filsafat Pancasila (Kaelan, 2013)",
        "row": 1,
        "col": 0,
        "direction": "across",
        "number": 2,
        "id": "p2-w2-across"
      },
      {
        "word": "PROGRES",
        "clue": "Inti aliran filsafat pendidikan Dewey yang menuntut kemajuan belajar melalui pengalaman nyata",
        "explanation": "Progresivisme memandang sekolah sebagai laboratorium demokrasi di mana siswa belajar dengan mengalami langsung.",
        "bookRef": "Bab 2, Halaman 25",
        "bloomTaxonomy": "C4 - Analisis Teoretis",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Progresivisme Pendidikan (Dewey, 1916)",
        "row": 1,
        "col": 0,
        "direction": "down",
        "number": 2,
        "id": "p2-w2-down"
      },
      {
        "word": "ROGERS",
        "clue": "Tokoh psikologi humanistik penggagas prinsip penerimaan positif tanpa syarat",
        "explanation": "Carl Rogers memberikan landasan humanistik bagi VCT, memandang siswa memiliki kapasitas bawaan untuk bertumbuh.",
        "bookRef": "Bab 2, Halaman 26",
        "bloomTaxonomy": "C4 - Analisis Psikologis",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Humanistic Psychology (Rogers, 1969)",
        "row": 2,
        "col": 0,
        "direction": "across",
        "number": 3,
        "id": "p2-w3-across"
      },
      {
        "word": "MORAL",
        "clue": "Ajaran tentang baik dan buruk mengenai perbuatan, sikap, dan kewajiban manusia",
        "explanation": "PPKn memfasilitasi penalaran moral siswa agar berkembang menuju prinsip etis universal.",
        "bookRef": "Bab 2, Halaman 39",
        "bloomTaxonomy": "C5 - Evaluasi Moral",
        "krathwohlTaxonomy": "A5 - Karakterisasi Nilai",
        "constructValidity": "Tahapan Perkembangan Moral (Kohlberg, 1981)",
        "row": 3,
        "col": 3,
        "direction": "across",
        "number": 4,
        "id": "p2-w4-across"
      }
    ],
    "vctReflectionQuestion": "Menurut Carl Rogers dan John Dewey, pembelajaran sejati menghargai martabat unik setiap individu. Sikap apa yang Anda utamakan saat teman sekelas berbeda keyakinan politik/sosial?",
    "vctReflectionOptions": [
      {
        "text": "Mendengarkan dengan tulus tanpa langsung menghakimi (Non-judgmental).",
        "trait": "reflektif",
        "feedback": "Inilah inti humanisme Rogers! Memberikan rasa aman emosional memungkinkan dialog otentik terjalin.",
        "academicRationale": "Humanistic unconditional positive regard dalam dialog nilai."
      },
      {
        "text": "Mengajak berdiskusi sehat berbasis data dan argumentasi rasional.",
        "trait": "internal",
        "feedback": "Semangat progresivisme Dewey yang tangguh! Mempertemukan gagasan di laboratorium kelas mematangkan nalar kritis.",
        "academicRationale": "Inkuiri sosial deliberatif dalam laboratorium demokrasi."
      },
      {
        "text": "Mencari titik temu untuk aksi kolaboratif yang bermanfaat bagi kelas.",
        "trait": "aksi",
        "feedback": "Hebat! Menjembatani teori filosofis ke dalam kerjasama nyata merekatkan tenun kebinekaan.",
        "academicRationale": "Praksis nilai Pancasila melalui kolaborasi kooperatif."
      }
    ]
  },
  {
    "id": "tipe-3-landasan-yuridis",
    "typeNumber": 3,
    "title": "Landasan Yuridis & Konstitusional",
    "subtitle": "Bab 2 · Struktur Hukum & Regulasi Pembelajaran PPKn",
    "category": "Hukum & Konstitusi",
    "targetAudience": "Mahasiswa Hukum Tata Negara, Dosen, Guru PPKn",
    "theoreticalFramework": "Hierarki Perundang-Undangan & Kurikulum Wajib Pendidikan Nasional",
    "sourceChapter": "Bab 2: Landasan Yuridis Pembelajaran PPKn (Halaman 26–33 & Tabel 2)",
    "description": "Menganalisis hukum dasar UUD 1945, amanat UU Sisdiknas Nomor 20 Tahun 2003, hingga aturan pelaksana Permendikbudristek.",
    "quote": "\"Jika filsafat adalah jiwa, maka landasan yuridis adalah kerangka tulangnya yang memberikan legitimasi formal.\" (Buku VCT PPKn, Hal. 26)",
    "rows": 10,
    "cols": 10,
    "words": [
      {
        "word": "PASAL",
        "clue": "Satuan aturan tertulis dalam UUD 1945, seperti ketentuan pendidikan di nomor 31",
        "explanation": "Pasal 31 UUD 1945 mengamanatkan sistem pendidikan nasional untuk mencerdaskan kehidupan bangsa.",
        "bookRef": "Bab 2, Halaman 28 & 41",
        "bloomTaxonomy": "C4 - Analisis Pasal Konstitusi",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Mandat Konstitusional Pembukaan UUD 1945",
        "row": 0,
        "col": 6,
        "direction": "down",
        "number": 1,
        "id": "p3-w1-down"
      },
      {
        "word": "HUKUM",
        "clue": "Sistem peraturan yang dibuat dan ditegakkan melalui institusi sosial atau pemerintah",
        "explanation": "Kepatuhan pada hukum merupakan salah satu pilar kompetensi warga negara beradab.",
        "bookRef": "Bab 2, Halaman 28",
        "bloomTaxonomy": "C4 - Analisis Tata Hukum",
        "krathwohlTaxonomy": "A4 - Pengorganisasian Nilai",
        "constructValidity": "Prinsip Negara Hukum (Rechsstaat)",
        "row": 1,
        "col": 1,
        "direction": "down",
        "number": 2,
        "id": "p3-w2-down"
      },
      {
        "word": "DASAR",
        "clue": "Fondasi pokok tata negara yang bersifat fundamental dalam konstitusi",
        "explanation": "UUD 1945 berkedudukan sebagai hukum dasar tertinggi di Negara Kesatuan Republik Indonesia.",
        "bookRef": "Bab 2, Halaman 27",
        "bloomTaxonomy": "C5 - Evaluasi Hierarki Hukum",
        "krathwohlTaxonomy": "A5 - Karakterisasi",
        "constructValidity": "Grundnorm & Staatsfundamentalnorm",
        "row": 1,
        "col": 3,
        "direction": "across",
        "number": 3,
        "id": "p3-w3-across"
      },
      {
        "word": "YURIDIS",
        "clue": "Landasan hukum formal yang menjamin eksistensi wajib PPKn di semua jenjang pendidikan",
        "explanation": "Landasan yuridis memastikan bahwa PPKn adalah mandat konstitusi negara, bukan inisiatif sporadis semata.",
        "bookRef": "Bab 2, Halaman 26–27",
        "bloomTaxonomy": "C4 - Analisis Yuridis",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Landasan Konstitusional Pendidikan Nasional",
        "row": 2,
        "col": 0,
        "direction": "across",
        "number": 4,
        "id": "p3-w4-across"
      },
      {
        "word": "NEGARA",
        "clue": "Organisasi kekuasaan berdaulat yang menaungi rakyat dalam suatu wilayah teritorial",
        "explanation": "PPKn bertujuan membina rasa cinta tanah air dan komitmen kebangsaan membela negara.",
        "bookRef": "Bab 2, Halaman 28–29",
        "bloomTaxonomy": "C4 - Analisis Kedaulatan",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Teori Kedaulatan dan Warga Negara",
        "row": 3,
        "col": 3,
        "direction": "across",
        "number": 5,
        "id": "p3-w5-across"
      }
    ],
    "vctReflectionQuestion": "Mengapa mematuhi aturan dan hukum harus didasari oleh kesadaran batin, bukan sekadar rasa takut ditilang atau dihukum polisi?",
    "vctReflectionOptions": [
      {
        "text": "Karena kepatuhan sejati lahir dari tanggung jawab atas keselamatan dan keadilan bersama.",
        "trait": "internal",
        "feedback": "Tepat sekali! Buku menegaskan kaum internalis patuh karena kesadaran nilai moral, bukan rasa takut instrumental.",
        "academicRationale": "Internal Locus of Control dan moralitas pascakonvensional Kohlberg."
      },
      {
        "text": "Agar kita terhindar dari sanksi sosial dan denda materi.",
        "trait": "reflektif",
        "feedback": "Ini mencerminkan motivasi eksternal tahap awal; mari melangkah menuju internalisasi nilai yang lebih luhur.",
        "academicRationale": "Orientasi prakonvensional kepatuhan-hukuman."
      },
      {
        "text": "Mengajak lingkungan sekitar ikut menaati aturan sebagai budaya hidup tertib.",
        "trait": "aksi",
        "feedback": "Sikap proaktif luar biasa! Anda telah menjadi role model keteladanan hukum di lingkungan Anda.",
        "academicRationale": "Keteladanan kepatuhan hukum berbasis agensi personal."
      }
    ]
  },
  {
    "id": "tipe-4-tujuan-warga-negara",
    "typeNumber": 4,
    "title": "Taksonomi Tujuan & Tipe Warga Negara",
    "subtitle": "Bab 3 · Tujuan dan Fungsi Pembelajaran PPKn",
    "category": "Kewarganegaraan & Karakter",
    "targetAudience": "Mahasiswa Pascasarjana, Dosen Ilmu Kewarganegaraan",
    "theoreticalFramework": "Tipologi Joel Westheimer & Joseph Kahne (2004)",
    "sourceChapter": "Bab 3: Tujuan dan Fungsi Pembelajaran PPKn (Halaman 43–62 & Tabel 3)",
    "description": "Mendalami tipologi Westheimer & Kahne (Personally Responsible, Participatory, Justice-Oriented) serta visi Smart and Good Citizen.",
    "quote": "\"Warga negara yang cerdas tanpa karakter baik bisa menjadi manipulator berbahaya; warga negara baik tanpa kecerdasan mudah dimanipulasi.\" (Buku VCT PPKn, Hal. 13)",
    "rows": 10,
    "cols": 10,
    "words": [
      {
        "word": "DEMOKRASI",
        "clue": "Sistem kehidupan bernegara yang menjunjung kedaulatan rakyat dan musyawarah",
        "explanation": "Demokrasi Pancasila menekankan musyawarah mufakat dijiwai hikmat kebijaksanaan.",
        "bookRef": "Bab 3, Halaman 54–56",
        "bloomTaxonomy": "C5 - Evaluasi Demokrasi Deliberatif",
        "krathwohlTaxonomy": "A4 - Pengorganisasian Nilai",
        "constructValidity": "Teori Demokrasi Konstitusional",
        "row": 0,
        "col": 1,
        "direction": "down",
        "number": 1,
        "id": "p4-w1-down"
      },
      {
        "word": "WARGA",
        "clue": "Anggota sah suatu komunitas atau negara yang memiliki hak dan kewajiban penuh",
        "explanation": "Tujuan utama PPKn adalah membentuk good citizen (warga negara yang baik dan bertanggung jawab).",
        "bookRef": "Bab 3, Halaman 45",
        "bloomTaxonomy": "C4 - Analisis Kewarganegaraan",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Konsep Warga Negara Demokratis",
        "row": 0,
        "col": 2,
        "direction": "across",
        "number": 2,
        "id": "p4-w2-across"
      },
      {
        "word": "ADIL",
        "clue": "Prinsip moral memberikan hak secara proporsional sesuai martabat kemanusiaan",
        "explanation": "Justice-oriented citizen berani mengkritisi ketidakadilan sistemik dan memperjuangkan hak sesama.",
        "bookRef": "Bab 3, Halaman 46",
        "bloomTaxonomy": "C5 - Evaluasi Keadilan Sosial",
        "krathwohlTaxonomy": "A5 - Karakterisasi",
        "constructValidity": "Teori Keadilan (John Rawls / Sila ke-5)",
        "row": 0,
        "col": 3,
        "direction": "down",
        "number": 3,
        "id": "p4-w3-down"
      },
      {
        "word": "CERDAS",
        "clue": "Kemampuan berpikir kritis, analitis, dan melek informasi publik (Smart Citizen)",
        "explanation": "Kecerdasan kewarganegaraan membentengi siswa dari hoaks dan pembodohan opini publik.",
        "bookRef": "Bab 3, Halaman 44",
        "bloomTaxonomy": "C4 - Analisis Kritis Informasi",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Visi Smart Citizen (Branson, 1998)",
        "row": 1,
        "col": 0,
        "direction": "across",
        "number": 4,
        "id": "p4-w4-across"
      },
      {
        "word": "SIKAP",
        "clue": "Kecenderungan batin untuk merespons positif atau negatif terhadap objek nilai",
        "explanation": "Pengembangan ranah afektif berfokus pada penanaman sikap toleransi dan anti-korupsi.",
        "bookRef": "Bab 3, Halaman 50–52",
        "bloomTaxonomy": "C4 - Analisis Sikap Afektif",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Taksonomi Ranah Afektif (Krathwohl et al., 1964)",
        "row": 1,
        "col": 5,
        "direction": "across",
        "number": 5,
        "id": "p4-w5-across"
      }
    ],
    "vctReflectionQuestion": "Buku mengidentifikasi 3 tipe warga negara: Personally Responsible (taat aturan), Participatory (aktif berorganisasi), dan Justice-Oriented (kritis terhadap akar ketidakadilan). Tipe mana yang paling mencerminkan diri Anda saat ini?",
    "vctReflectionOptions": [
      {
        "text": "Personally Responsible: Saya disiplin menjaga kejujuran diri dan mematuhi tata tertib.",
        "trait": "internal",
        "feedback": "Fondasi penting! Integritas pribadi adalah akar dari segala kebaikan sosial.",
        "academicRationale": "Tipe Personally Responsible Citizen (Westheimer & Kahne, 2004)."
      },
      {
        "text": "Participatory: Saya senang terlibat dalam kepanitiaan, OSIS, dan kegiatan gotong royong.",
        "trait": "aksi",
        "feedback": "Luar biasa! Keterlibatan sosial Anda menyalakan energi positif bagi komunitas sekolah.",
        "academicRationale": "Tipe Participatory Citizen (Westheimer & Kahne, 2004)."
      },
      {
        "text": "Justice-Oriented: Saya suka menganalisis mengapa ketimpangan terjadi dan mencari solusi adil.",
        "trait": "reflektif",
        "feedback": "Cemerlang! Visi kritis dan keberpihakan etis ini adalah puncak kematangan civic engagement.",
        "academicRationale": "Tipe Justice-Oriented Citizen (Westheimer & Kahne, 2004)."
      }
    ]
  },
  {
    "id": "tipe-5-trilogi-inti-vct",
    "typeNumber": 5,
    "title": "Trilogi Model Inti VCT",
    "subtitle": "Bab 4 & 5 · Strategi & Model Operasional VCT",
    "category": "Model Pembelajaran VCT",
    "targetAudience": "Dosen Pembelajaran, Peneliti Model Pedagogis, Guru PPKn",
    "theoreticalFramework": "Teori Klarifikasi Nilai Louis Raths, Merrill Harmin, & Sidney Simon (1978)",
    "sourceChapter": "Bab 4: Strategi Pembelajaran VCT & Bab 5: Model-Model Pembelajaran VCT (Halaman 63–128)",
    "description": "Menguasai tiga tahapan utama klarifikasi nilai menurut Louis Raths, Merrill Harmin, dan Sidney Simon: Memilih, Menghargai, dan Bertindak.",
    "quote": "\"VCT bukanlah metode untuk menanamkan nilai dari luar, melainkan proses memandu siswa menggali dan menegaskan nilai otentik dari dalam diri.\" (Buku VCT PPKn, Hal. 64)",
    "rows": 10,
    "cols": 10,
    "words": [
      {
        "word": "PRIZING",
        "clue": "Fase kedua VCT: menghargai pilihan, merasa bangga, dan bersedia menegaskannya di depan umum",
        "explanation": "Prizing menjembatani kognisi ke afeksi, membuat nilai terasa berharga dan menjadi bagian konsep diri.",
        "bookRef": "Bab 5, Halaman 107–111",
        "bloomTaxonomy": "C4 - Analisis Emosional Nilai",
        "krathwohlTaxonomy": "A4 - Pengorganisasian Nilai",
        "constructValidity": "Fase 2 VCT (Raths, Harmin, & Simon, 1978)",
        "row": 0,
        "col": 5,
        "direction": "down",
        "number": 1,
        "id": "p5-w1-down"
      },
      {
        "word": "RATHS",
        "clue": "Nama belakang Louis Raths, pionir penggagas Value Clarification Technique (1978)",
        "explanation": "Louis Raths bersama Harmin dan Simon merumuskan 7 kriteria klarifikasi nilai sejati.",
        "bookRef": "Bab 4, Halaman 66",
        "bloomTaxonomy": "C4 - Analisis Rujukan Ahli",
        "krathwohlTaxonomy": "A2 - Responding",
        "constructValidity": "Pionir Teori Pendidikan Nilai",
        "row": 1,
        "col": 5,
        "direction": "across",
        "number": 2,
        "id": "p5-w2-across"
      },
      {
        "word": "CHOOSING",
        "clue": "Fase pertama VCT: memilih nilai secara bebas dari berbagai alternatif setelah menimbang konsekuensi",
        "explanation": "Fase Choosing menekankan otonomi intelektual siswa untuk membuat pilihan sadar tanpa paksaan.",
        "bookRef": "Bab 5, Halaman 102–106",
        "bloomTaxonomy": "C5 - Evaluasi Konsekuensi Pilihan",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Fase 1 VCT (Raths, Harmin, & Simon, 1978)",
        "row": 2,
        "col": 0,
        "direction": "across",
        "number": 3,
        "id": "p5-w3-across"
      },
      {
        "word": "ACTING",
        "clue": "Fase ketiga VCT: mengintegrasikan nilai ke dalam tindakan nyata yang konsisten dan berulang",
        "explanation": "Sebuah nilai baru mencapai kesempurnaannya manakala ia termanifestasi dalam kebiasaan hidup sehari-hari.",
        "bookRef": "Bab 5, Halaman 112–116",
        "bloomTaxonomy": "C6 - Penerapan Kebiasaan Etis",
        "krathwohlTaxonomy": "A5 - Karakterisasi Nilai",
        "constructValidity": "Fase 3 VCT (Raths, Harmin, & Simon, 1978)",
        "row": 4,
        "col": 2,
        "direction": "across",
        "number": 4,
        "id": "p5-w4-across"
      },
      {
        "word": "OTONOMI",
        "clue": "Kemandirian moral individu dalam menentukan jalan kebaikan tanpa didikte pihak luar",
        "explanation": "VCT mendudukkan siswa sebagai subjek penentu nilai yang otonom dan berdaulat.",
        "bookRef": "Bab 4, Halaman 83",
        "bloomTaxonomy": "C5 - Evaluasi Kemandirian Etis",
        "krathwohlTaxonomy": "A5 - Karakterisasi",
        "constructValidity": "Otonomi Moral & Self-Determination Theory",
        "row": 5,
        "col": 2,
        "direction": "across",
        "number": 5,
        "id": "p5-w5-across"
      }
    ],
    "vctReflectionQuestion": "Dalam tahapan VCT (Choosing -> Prizing -> Acting), bagian mana yang paling menantang ketika Anda harus mempertahankan nilai kebaikan?",
    "vctReflectionOptions": [
      {
        "text": "Choosing: Menimbang konsekuensi saat banyak alternatif pilihan tampak menggoda.",
        "trait": "reflektif",
        "feedback": "Sangat realistis! Mengukur dampak jangka pendek vs jangka panjang butuh kejernihan nalar.",
        "academicRationale": "Fase Choosing: Pemilihan mandiri berlandaskan rasionalitas kausal."
      },
      {
        "text": "Prizing: Berani menyatakan keyakinan di depan umum saat teman-teman berpikiran sebaliknya.",
        "trait": "internal",
        "feedback": "Keberanian moral yang luar biasa! Afirmasi publik memperkuat integritas kepribadian Anda.",
        "academicRationale": "Fase Prizing: Afirmasi publik dan kebanggaan batin."
      },
      {
        "text": "Acting: Bertindak konsisten setiap hari bahkan ketika tidak ada guru atau orang lain yang mengawasi.",
        "trait": "aksi",
        "feedback": "Inilah intisari karakter sejati! Nilai hidup dalam perbuatan nyata, bukan sekadar kata-kata.",
        "academicRationale": "Fase Acting: Repetisi tindakan menjadi karakter yang terinternalisasi."
      }
    ]
  },
  {
    "id": "tipe-6-teknik-dilema-moral",
    "typeNumber": 6,
    "title": "Teknik Praktis & Dilema Moral",
    "subtitle": "Bab 5 · Value Continuum & Analisis Dilema Etis",
    "category": "Metodologi VCT",
    "targetAudience": "Mahasiswa, Dosen Psikologi Moral & Etika Terapan",
    "theoreticalFramework": "Teori Penalaran Moral Lawrence Kohlberg & Skala Kontinum Simon",
    "sourceChapter": "Bab 5: Model-Model Pembelajaran VCT (Halaman 117–128 & Tabel 5)",
    "description": "Menerapkan model Skala Nilai (Value Continuum) untuk memetakan spektrum pandangan dan studi kasus dilema moral Lawrence Kohlberg.",
    "quote": "\"Dilema moral menempatkan siswa dalam situasi terjepit di mana dua nilai yang sama-sama baik saling berbenturan.\" (Buku VCT PPKn, Hal. 122)",
    "rows": 10,
    "cols": 10,
    "words": [
      {
        "word": "HEINZ",
        "clue": "Nama tokoh dalam dilema moral klasik Kohlberg: mencuri obat demi menyelamatkan nyawa istri",
        "explanation": "Kasus Heinz membenturkan nilai hak hidup melawan ketaatan pada hukum kepemilikan obat.",
        "bookRef": "Bab 5, Halaman 123–125",
        "bloomTaxonomy": "C5 - Evaluasi Studi Kasus",
        "krathwohlTaxonomy": "A4 - Pengorganisasian Nilai",
        "constructValidity": "Kohlberg Classic Dilemma Paradigm",
        "row": 0,
        "col": 1,
        "direction": "down",
        "number": 1,
        "id": "p6-w1-down"
      },
      {
        "word": "ALASAN",
        "clue": "Justifikasi logis di balik posisi nilai yang diambil seseorang (pertanyaan \"Mengapa?\")",
        "explanation": "Fokus VCT bukan hanya pada ya/tidak, melainkan pada kedalaman alasan yang mendasari keputusan.",
        "bookRef": "Bab 5, Halaman 126",
        "bloomTaxonomy": "C4 - Analisis Argumentasi Logis",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Moral Reasoning Architecture",
        "row": 0,
        "col": 2,
        "direction": "across",
        "number": 2,
        "id": "p6-w2-across"
      },
      {
        "word": "SKALA",
        "clue": "Garis kontinum tempat siswa menempatkan posisinya dalam rentang pendapat",
        "explanation": "Model Skala Nilai memetakan spektrum pandangan kelas secara visual dari titik ekstrem kiri ke kanan.",
        "bookRef": "Bab 5, Halaman 117–119",
        "bloomTaxonomy": "C4 - Analisis Posisi Spektrum",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Value Continuum Method (Simon et al., 1972)",
        "row": 0,
        "col": 5,
        "direction": "down",
        "number": 3,
        "id": "p6-w3-down"
      },
      {
        "word": "DEBAT",
        "clue": "Pertukaran argumen etis yang sehat antar siswa dalam menguji sudut pandang",
        "explanation": "Debat nilai yang terfasilitasi baik memperluas perspektif dan mencegah fanatisme sempit.",
        "bookRef": "Bab 5, Halaman 121",
        "bloomTaxonomy": "C5 - Evaluasi Dialektika Nilai",
        "krathwohlTaxonomy": "A4 - Pengorganisasian Nilai",
        "constructValidity": "Deliberative Democratic Pedagogy (Hess, 2009)",
        "row": 1,
        "col": 0,
        "direction": "across",
        "number": 4,
        "id": "p6-w4-across"
      },
      {
        "word": "DILEMA",
        "clue": "Situasi konflik pertentangan dua nilai kebaikan yang sama-sama berbobot",
        "explanation": "Dilema moral tidak memiliki jawaban tunggal yang mudah, sehingga merangsang pertumbuhan penalaran etis.",
        "bookRef": "Bab 5, Halaman 122",
        "bloomTaxonomy": "C5 - Evaluasi Konflik Nilai",
        "krathwohlTaxonomy": "A4 - Pengorganisasian Nilai",
        "constructValidity": "Moral Dilemma Discussion (Kohlberg, 1981)",
        "row": 2,
        "col": 0,
        "direction": "across",
        "number": 5,
        "id": "p6-w5-across"
      }
    ],
    "vctReflectionQuestion": "Saat Anda berhadapan dengan situasi dilema (misalnya: melindungi rahasia sahabat vs kejujuran akademik), pertimbangan apa yang menjadi kompas Anda?",
    "vctReflectionOptions": [
      {
        "text": "Mengutamakan prinsip keadilan dan kejujuran jangka panjang bagi semua orang.",
        "trait": "internal",
        "feedback": "Kedewasaan etis tingkat tinggi! Prinsip universal menempatkan kebenaran melampaui kenyamanan sesaat.",
        "academicRationale": "Penalaran pascakonvensional (Stage 5/6 Kohlberg)."
      },
      {
        "text": "Mencari jalan tengah yang meminimalkan luka hati tanpa merusak integritas.",
        "trait": "reflektif",
        "feedback": "Pendekatan empatik yang bijaksana, khas resolusi dilema moral dalam VCT.",
        "academicRationale": "Etika kepedulian (Ethics of Care) dan sintesis afektif."
      },
      {
        "text": "Menegur sahabat secara empatik dan membantunya belajar agar tidak mengulang kesalahan.",
        "trait": "aksi",
        "feedback": "Tindakan transformatif! Anda tidak hanya diam, tetapi aktif memperbaiki keadaan secara konstruktif.",
        "academicRationale": "Civic action restoratif berbasis bimbingan sebaya."
      }
    ]
  },
  {
    "id": "tipe-7-fasilitator-kelompok",
    "typeNumber": 7,
    "title": "Fasilitator & Dinamika Kelompok",
    "subtitle": "Bab 6 & 10 · Seni Fasilitasi & Ruang Aman Berdialog",
    "category": "Pedagogi & Manajemen Kelas",
    "targetAudience": "Dosen Pembimbing, Peneliti Manajemen Kelas, Fasilitator",
    "theoreticalFramework": "Psychological Safety (Amy Edmondson, 2018) & Teori Belajar Kooperatif",
    "sourceChapter": "Bab 6: Syarat Mutlak Keberhasilan VCT & Bab 10: Kelompok Diskusi VCT (Halaman 140–155, 213–233, Tabel 10)",
    "description": "Menyelami peran guru sebagai dirigen dialog, teknik Fishbowl, Whip Around, serta penciptaan psychological safety.",
    "quote": "\"Jika dalam kelas konvensional guru adalah orator di panggung, maka dalam VCT guru adalah dirigen orkestra dan siswa adalah para musisinya.\" (Buku VCT PPKn, Hal. 92)",
    "rows": 10,
    "cols": 10,
    "words": [
      {
        "word": "EMPATI",
        "clue": "Kemampuan merasakan dan memahami dunia batin dari sudut pandang orang lain",
        "explanation": "Empati meruntuhkan prasangka di kelas heterogen dan memungkinkan siswa tidak setuju secara terhormat.",
        "bookRef": "Bab 6 Hal. 142, Bab 7 Hal. 163",
        "bloomTaxonomy": "C4 - Analisis Perspektif Sosial",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Kompetensi Emosional Fasilitator",
        "row": 0,
        "col": 0,
        "direction": "across",
        "number": 1,
        "id": "p7-w1-across"
      },
      {
        "word": "AMAN",
        "clue": "Kondisi iklim psikologis kelas (psychological safety) bebas cemoohan dan celaan",
        "explanation": "Tanpa rasa aman emosional, siswa akan memasang \"topeng\" dan hanya menjawab hal-hal yang normatif semata.",
        "bookRef": "Bab 4 Hal. 97, Bab 6 Hal. 144",
        "bloomTaxonomy": "C5 - Evaluasi Iklim Belajar",
        "krathwohlTaxonomy": "A4 - Pengorganisasian",
        "constructValidity": "Konstruk Psychological Safety (Edmondson, 2018)",
        "row": 0,
        "col": 3,
        "direction": "down",
        "number": 2,
        "id": "p7-w2-down"
      },
      {
        "word": "TIM",
        "clue": "Kelompok kerja kecil tempat siswa belajar berkolaborasi memecahkan masalah",
        "explanation": "Ukuran kelompok ideal 3–5 orang memastikan setiap anggota memiliki ruang untuk bersuara aktif.",
        "bookRef": "Bab 10, Halaman 220–221",
        "bloomTaxonomy": "C4 - Analisis Dinamika Tim",
        "krathwohlTaxonomy": "A2 - Responding",
        "constructValidity": "Cooperative Learning Structure (Johnson & Johnson, 2017)",
        "row": 0,
        "col": 4,
        "direction": "across",
        "number": 3,
        "id": "p7-w3-across"
      },
      {
        "word": "DIALOG",
        "clue": "Percakapan bermakna dua arah untuk saling memahami tanpa saling mendominasi",
        "explanation": "Dialog otentik adalah sarana klarifikasi nilai kolektif yang menumbuhkan toleransi kebangsaan.",
        "bookRef": "Bab 10, Halaman 214–215",
        "bloomTaxonomy": "C5 - Evaluasi Kualitas Interaksi",
        "krathwohlTaxonomy": "A4 - Pengorganisasian Nilai",
        "constructValidity": "Klarifikasi Nilai Kolektif Interpersonal",
        "row": 2,
        "col": 1,
        "direction": "across",
        "number": 4,
        "id": "p7-w4-across"
      },
      {
        "word": "NOTULIS",
        "clue": "Peran anggota kelompok yang bertugas mencatat poin-poin penting dalam diskusi",
        "explanation": "Pembagian peran bergilir (moderator, notulis, penjaga waktu) meningkatkan ketertiban dan keterlibatan tim.",
        "bookRef": "Bab 10, Halaman 220",
        "bloomTaxonomy": "C4 - Pengorganisasian Data",
        "krathwohlTaxonomy": "A2 - Responding",
        "constructValidity": "Diferensiasi Peran Kolaboratif",
        "row": 3,
        "col": 3,
        "direction": "across",
        "number": 5,
        "id": "p7-w5-across"
      }
    ],
    "vctReflectionQuestion": "Ketika terjadi perdebatan panas di kelompok Anda, tindakan apa yang paling ampuh menjaga agar diskusi tetap produktif?",
    "vctReflectionOptions": [
      {
        "text": "Mengingatkan aturan main kelas: serang idenya, hormati martabat orangnya.",
        "trait": "internal",
        "feedback": "Prinsip emas VCT! Aturan main yang tegas menjaga rasa aman emosional seluruh peserta.",
        "academicRationale": "Norma prosedural psychological safety (Edmondson, 2018)."
      },
      {
        "text": "Menggunakan teknik parafrase untuk memperjelas inti kepedulian di balik kemarahan teman.",
        "trait": "reflektif",
        "feedback": "Keterampilan fasilitator mahir! Memvalidasi emosi meredakan tensi dan membuka dialog rasional.",
        "academicRationale": "Keterampilan parafrase & active listening fasilitator."
      },
      {
        "text": "Mengusulkan jeda hening sejenak agar semua orang bisa menenangkan pikiran.",
        "trait": "aksi",
        "feedback": "Solusi taktis yang menyejukkan suasana sebelum melangkah ke pencarian titik temu.",
        "academicRationale": "Manajemen stres kelompok dan de-eskalasi konflik."
      }
    ]
  },
  {
    "id": "tipe-8-locus-of-control",
    "typeNumber": 8,
    "title": "Teori & Dimensi Locus of Control",
    "subtitle": "Bab 11 & 12 · Dinamika Psikologis Pengemudi vs Bidak Catur",
    "category": "Psikologi Perkembangan",
    "targetAudience": "Peneliti Psikologi Pendidikan, Dosen, Mahasiswa Bimbingan Konseling",
    "theoreticalFramework": "Social Learning Theory & Internal-External Locus of Control (Julian Rotter, 1966)",
    "sourceChapter": "Bab 11 & 12: Konsep Dasar & Karakteristik Locus of Control (Halaman 234–276, Gambar 3, Tabel 11 & 12)",
    "description": "Menganalisis teori Julian B. Rotter: kontinum Internal Locus of Control (pengemudi mobil) versus External Locus of Control (bidak catur).",
    "quote": "\"Internalis melihat dirinya sebagai pengemudi yang memegang setir takdirnya; eksternalis merasa seperti bidak catur yang digerakkan kekuatan tak terlihat.\" (Buku VCT PPKn, Hal. 239–240 & Gambar 3)",
    "rows": 10,
    "cols": 10,
    "words": [
      {
        "word": "ROTTER",
        "clue": "Psikolog perumus teori Locus of Control (1966) dalam kerangka teori belajar sosial",
        "explanation": "Julian B. Rotter mengkaji ekspektasi umum individu atas sumber penguat (kendali internal vs eksternal).",
        "bookRef": "Bab 11, Halaman 235–236",
        "bloomTaxonomy": "C4 - Analisis Teoretisi",
        "krathwohlTaxonomy": "A2 - Responding",
        "constructValidity": "Julian B. Rotter Social Learning Theory",
        "row": 0,
        "col": 2,
        "direction": "down",
        "number": 1,
        "id": "p8-w1-down"
      },
      {
        "word": "USAHA",
        "clue": "Kerja keras dan ikhtiar nyata yang dipercaya internalis sebagai penentu utama hasil",
        "explanation": "Pemberian penguatan berbasis usaha (effort-based praise) terbukti menggeser lokus kendali ke arah internal.",
        "bookRef": "Bab 12, Halaman 273",
        "bloomTaxonomy": "C4 - Analisis Peran Ikhtiar",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Effort Attribution & Growth Mindset (Dweck, 2006)",
        "row": 0,
        "col": 6,
        "direction": "down",
        "number": 2,
        "id": "p8-w2-down"
      },
      {
        "word": "NASIB",
        "clue": "Faktor luar yang sering dijadikan dalih oleh individu dengan Locus of Control eksternal",
        "explanation": "Eksternalis kerap menyerahkan hidup pada nasib atau keberuntungan semata, memicu sikap pasif.",
        "bookRef": "Bab 11 Hal. 241, Bab 12 Hal. 261",
        "bloomTaxonomy": "C4 - Analisis Atribusi Pasif",
        "krathwohlTaxonomy": "A2 - Responding",
        "constructValidity": "External Fatalism & Learned Helplessness (Seligman, 1975)",
        "row": 1,
        "col": 4,
        "direction": "across",
        "number": 3,
        "id": "p8-w3-across"
      },
      {
        "word": "INTERNAL",
        "clue": "Pusat kendali diri: keyakinan bahwa hasil hidup ditentukan oleh ikhtiar dan pilihan sendiri",
        "explanation": "Internal Locus of Control mendorong kegigihan akademik, ketahanan mental, dan keberanian nilai mandiri.",
        "bookRef": "Bab 11 Hal. 240, Bab 12 Hal. 256",
        "bloomTaxonomy": "C5 - Evaluasi Atribusi Kausalitas",
        "krathwohlTaxonomy": "A5 - Karakterisasi",
        "constructValidity": "Internal Locus of Control Dimension (Rotter, 1966)",
        "row": 2,
        "col": 0,
        "direction": "across",
        "number": 4,
        "id": "p8-w4-across"
      },
      {
        "word": "AGENSI",
        "clue": "Kapasitas dan kesadaran diri seseorang untuk bertindak mandiri membuat perubahan",
        "explanation": "Rasa agensi personal (sense of agency) adalah buah manis dari latihan VCT yang memberdayakan siswa.",
        "bookRef": "Bab 4 Hal. 78, Bab 11 Hal. 239",
        "bloomTaxonomy": "C5 - Evaluasi Agensi Pribadi",
        "krathwohlTaxonomy": "A5 - Karakterisasi",
        "constructValidity": "Personal Agency Construct (Bandura, 1997)",
        "row": 4,
        "col": 0,
        "direction": "across",
        "number": 5,
        "id": "p8-w5-across"
      }
    ],
    "vctReflectionQuestion": "Buku mengibaratkan hidup kita: apakah Anda memegang peran sebagai \"Pengemudi Mobil\" yang mengendalikan setir, atau \"Bidak Catur\" yang pasrah digerakkan?",
    "vctReflectionOptions": [
      {
        "text": "Pengemudi: Saya bertanggung jawab penuh atas masa depan dan pilihan moral saya.",
        "trait": "internal",
        "feedback": "Inilah profil Internalis sejati! Anda melihat rintangan sebagai teka-teki yang bisa dipecahkan, bukan takdir buta.",
        "academicRationale": "Profil Internal Locus of Control & problem-focused coping."
      },
      {
        "text": "Terkadang Bidak Catur: Masih sering merasa tertekan oleh ekspektasi teman sebaya dan sistem.",
        "trait": "reflektif",
        "feedback": "Kejujuran reflektif yang hebat! Kesadaran ini adalah langkah awal melatih \"otot\" kendali internal Anda.",
        "academicRationale": "Kesadaran metakognitif atas bias atribusi eksternal."
      },
      {
        "text": "Bertekad mengambil alih kemudi: Memulai kebiasaan membuat pilihan mandiri setiap hari.",
        "trait": "aksi",
        "feedback": "Langkah nyata yang mengagumkan! Pergeseran dari eksternal ke internal lahir dari latihan pilihan-pilihan kecil.",
        "academicRationale": "Intervensi pedagogis penguatan agensi personal bertahap."
      }
    ]
  },
  {
    "id": "tipe-9-vct-digital",
    "typeNumber": 9,
    "title": "VCT Digital & Ekosistem E-Learning",
    "subtitle": "Bab 13 · Inovasi Klarifikasi Nilai di Ruang Virtual",
    "category": "Teknologi Pendidikan",
    "targetAudience": "Dosen Pembelajaran Digital, Peneliti EdTech, Mahasiswa",
    "theoreticalFramework": "SAMR Model (Puentedura, 2006) & Digital Civic Engagement",
    "sourceChapter": "Bab 13: Pembelajaran E-Learning dengan Strategi Pembelajaran VCT (Halaman 277–297 & Tabel 13)",
    "description": "Mentransformasikan tahapan VCT ke lingkungan digital: polling anonim, forum asinkronus dengan jeda reflektif, netiket, dan kampanye aksi digital.",
    "quote": "\"Mengadaptasi VCT ke lingkungan digital ibarat mengaransemen ulang lagu akustik menjadi versi elektronik: nuansanya berbeda tetapi membawa jiwa yang sama.\" (Buku VCT PPKn, Hal. 282)",
    "rows": 10,
    "cols": 10,
    "words": [
      {
        "word": "POLLING",
        "clue": "Fitur survei instan anonim untuk memetakan spektrum pilihan nilai awal siswa di fase Choosing",
        "explanation": "Polling online memberikan rasa aman anonim yang mendorong siswa menyatakan pandangan jujur.",
        "bookRef": "Bab 13, Halaman 283–284",
        "bloomTaxonomy": "C4 - Analisis Jajak Pendapat",
        "krathwohlTaxonomy": "A2 - Responding",
        "constructValidity": "Anonymous Digital Choosing Phase",
        "row": 0,
        "col": 0,
        "direction": "across",
        "number": 1,
        "id": "p9-w1-across"
      },
      {
        "word": "ONLINE",
        "clue": "Kondisi terhubung ke jaringan internet yang menjadi media pembelajaran e-learning",
        "explanation": "E-learning membuka batas geografis dan memperkaya ragam sumber studi kasus kewarganegaraan.",
        "bookRef": "Bab 13, Halaman 278–280",
        "bloomTaxonomy": "C4 - Analisis Ekosistem Digital",
        "krathwohlTaxonomy": "A1 - Receiving",
        "constructValidity": "E-Learning Modality (Moore et al., 2011)",
        "row": 0,
        "col": 1,
        "direction": "down",
        "number": 2,
        "id": "p9-w2-down"
      },
      {
        "word": "NETIKET",
        "clue": "Etika dan sopan santun berinteraksi di ruang virtual internet",
        "explanation": "Netiket menjaga agar forum diskusi online tetap saling menghormati dan terhindar dari perundungan siber.",
        "bookRef": "Bab 13, Halaman 291–292",
        "bloomTaxonomy": "C5 - Evaluasi Etika Bermedia",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Etika Kewarganegaraan Digital",
        "row": 1,
        "col": 1,
        "direction": "across",
        "number": 3,
        "id": "p9-w3-across"
      },
      {
        "word": "IKLIM",
        "clue": "Suasana psikologis dan atmosfer saling percaya (trust) yang dibangun guru di kelas virtual",
        "explanation": "Kehadiran pengajar (teacher presence) yang hangat menumbuhkan digital trust di ruang siber.",
        "bookRef": "Bab 13, Halaman 290–291",
        "bloomTaxonomy": "C5 - Evaluasi Lingkungan Daring",
        "krathwohlTaxonomy": "A4 - Pengorganisasian",
        "constructValidity": "Community of Inquiry (Teacher & Social Presence)",
        "row": 3,
        "col": 1,
        "direction": "across",
        "number": 4,
        "id": "p9-w4-across"
      },
      {
        "word": "MEDIA",
        "clue": "Saluran publik seperti platform sosial yang digunakan untuk mengkampanyekan nilai kebajikan",
        "explanation": "Fase Acting digital memanfaatkan media sosial untuk memperluas jangkauan aksi kebajikan siswa.",
        "bookRef": "Bab 13, Halaman 288",
        "bloomTaxonomy": "C6 - Kreasi Kampanye Publik",
        "krathwohlTaxonomy": "A5 - Karakterisasi",
        "constructValidity": "Digital Civic Activism & Advocacy",
        "row": 3,
        "col": 5,
        "direction": "across",
        "number": 5,
        "id": "p9-w5-across"
      }
    ],
    "vctReflectionQuestion": "Bagaimana Anda memanfaatkan ruang digital dan media sosial untuk menyebarkan nilai-nilai luhur Pancasila?",
    "vctReflectionOptions": [
      {
        "text": "Menjaga jempol dan ketikan: Mempraktikkan netiket serta menolak menyebarkan hoaks atau ujaran kebencian.",
        "trait": "internal",
        "feedback": "Integritas digital yang luar biasa! Warga negara digital cerdas selalu memfilter sebelum membagikan.",
        "academicRationale": "Literasi etika digital dan kewarganegaraan siber."
      },
      {
        "text": "Berpartisipasi aktif dalam diskusi online dengan argumen berbobot dan menyejukkan.",
        "trait": "reflektif",
        "feedback": "Hebat! Anda membawa nilai musyawarah Pancasila ke tengah hiruk pikuk ruang siber.",
        "academicRationale": "Deliberasi publik di ruang publik siber (Habermas & Moore)."
      },
      {
        "text": "Membuat konten kreatif edukatif (infografis/video/podcast) yang mengajak persatuan dan toleransi.",
        "trait": "aksi",
        "feedback": "Aksi nyata yang inspiratif! VCT mendorong kaum muda menjadi kreator kebajikan publik.",
        "academicRationale": "Digital civic action & content creation transformatif."
      }
    ]
  },
  {
    "id": "tipe-10-asesmen-autentik",
    "typeNumber": 10,
    "title": "Hasil Belajar & Asesmen Autentik",
    "subtitle": "Bab 14 & 15 · Evaluasi Tiga Ranah & Pembuktian Empiris",
    "category": "Evaluasi & Riset Pendidikan",
    "targetAudience": "Peneliti Asesmen, Dosen Evaluasi Pembelajaran, Mahasiswa Pascasarjana",
    "theoreticalFramework": "Outcome-Based Education (Spady, 1994) & Triangulasi Asesmen Autentik",
    "sourceChapter": "Bab 14: Hasil Pembelajaran PPKn & Bab 15: Pengaruh Strategi VCT (Halaman 298–337, Tabel 14 & 15)",
    "description": "Membedah Outcome-Based Education, instrumen asesmen autentik (jurnal refleksi, skala Likert, rubrik unjuk kerja), dan metakognisi.",
    "quote": "\"Evaluasi VCT ibarat koki mencicipi sup yang sedang dimasak (formatif) dan album foto yang merekam perjalanan sang penjelajah gunung (sumatif).\" (Buku VCT PPKn, Hal. 208 & 210)",
    "rows": 10,
    "cols": 10,
    "words": [
      {
        "word": "REFLEKSI",
        "clue": "Proses merenung kembali pengalaman batin untuk menarik makna dan pembelajaran karakter",
        "explanation": "Jurnal refleksi mengkristalkan pengalaman belajar menjadi komitmen kepribadian yang permanen.",
        "bookRef": "Bab 14 Hal. 307, Bab 15 Hal. 326",
        "bloomTaxonomy": "C5 - Evaluasi Diri Metakognitif",
        "krathwohlTaxonomy": "A4 - Pengorganisasian Nilai",
        "constructValidity": "Reflective Learning Journal (Moon, 2004)",
        "row": 0,
        "col": 0,
        "direction": "across",
        "number": 1,
        "id": "p10-w1-across"
      },
      {
        "word": "RUBRIK",
        "clue": "Panduan penilaian berkriteria jelas untuk menilai performa unjuk kerja secara objektif",
        "explanation": "Rubrik kinerja tindakan nilai memastikan proses evaluasi afektif transparan dan berkeadilan.",
        "bookRef": "Bab 8 Hal. 195",
        "bloomTaxonomy": "C5 - Evaluasi Standar Kinerja",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Authentic Performance Rubric",
        "row": 0,
        "col": 0,
        "direction": "down",
        "number": 1,
        "id": "p10-w1-down"
      },
      {
        "word": "LIKERT",
        "clue": "Nama skala psikometrik yang umum digunakan untuk mengukur pergeseran sikap nilai sebelum dan sesudah VCT",
        "explanation": "Skala Likert memotret data kuantitatif perubahan afektif siswa dari waktu ke waktu.",
        "bookRef": "Bab 14, Halaman 314",
        "bloomTaxonomy": "C4 - Analisis Pengukuran Sikap",
        "krathwohlTaxonomy": "A3 - Valuing",
        "constructValidity": "Psychometric Attitude Scale (Likert)",
        "row": 0,
        "col": 3,
        "direction": "down",
        "number": 2,
        "id": "p10-w2-down"
      },
      {
        "word": "KOGNITIF",
        "clue": "Ranah hasil belajar yang mencakup penalaran etis tingkat tinggi dan pemecahan dilema",
        "explanation": "Evaluasi kognitif dalam PPKn menguji kemampuan analisis kebijakan publik dan argumentasi logis.",
        "bookRef": "Bab 14, Halaman 302–304",
        "bloomTaxonomy": "C4 - Analisis Kebijakan Publik",
        "krathwohlTaxonomy": "A2 - Responding",
        "constructValidity": "Cognitive Taxonomy (Anderson & Krathwohl, 2001)",
        "row": 0,
        "col": 5,
        "direction": "down",
        "number": 3,
        "id": "p10-w3-down"
      },
      {
        "word": "AKSI",
        "clue": "Unjuk kerja nyata dalam masyarakat sebagai bukti puncak hasil belajar kewarganegaraan",
        "explanation": "Civic action membuktikan bahwa nilai tidak berhenti di kepala, melainkan menggerakkan tangan untuk berkontribusi.",
        "bookRef": "Bab 14, Halaman 308–311",
        "bloomTaxonomy": "C6 - Kreasi Aksi Nyata",
        "krathwohlTaxonomy": "A5 - Karakterisasi Nilai",
        "constructValidity": "Authentic Civic Performance (Wiggins & McTighe, 2005)",
        "row": 6,
        "col": 2,
        "direction": "across",
        "number": 4,
        "id": "p10-w4-across"
      }
    ],
    "vctReflectionQuestion": "Hasil belajar tertinggi dari PPKn adalah transformasi karakter yang meresap ke hati dan tampak dalam perbuatan. Apa bukti nyata perubahan yang paling Anda rasakan?",
    "vctReflectionOptions": [
      {
        "text": "Nalar Kritis (Kognitif): Makin jeli menganalisis isu sosial dan tidak mudah terprovokasi.",
        "trait": "internal",
        "feedback": "Intelektualitas yang matang! Anda menjadi penjaga akal sehat dalam kehidupan berdemokrasi.",
        "academicRationale": "Learning outcomes kognitif tingkat tinggi (HOTS)."
      },
      {
        "text": "Komitmen Nurani (Afektif): Memiliki rasa empati tulus dan kesadaran batin untuk menghargai sesama.",
        "trait": "reflektif",
        "feedback": "Sentuhan nurani yang murni! Nilai Pancasila telah menjadi kompas batin dalam diri Anda.",
        "academicRationale": "Internalized civic disposition (Krathwohl A5)."
      },
      {
        "text": "Aksi Nyata (Psikomotorik): Aktif berkontribusi menolong sesama dan menjaga kerukunan.",
        "trait": "aksi",
        "feedback": "Inilah buah manis pembelajaran nilai! Karakter terbukti melalui tapak tilas amal kebajikan.",
        "academicRationale": "Civic action & participatory competence nyata."
      }
    ]
  }
];
