import React, { useState } from 'react';
import { puzzles } from '../data/puzzles.ts';
import { Copy, Check, Download, Terminal, Code2, Cpu, FileJson, Sparkles, Github } from 'lucide-react';
import { sound } from '../utils/audio.ts';

export const AntigravityExportView: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'dataset' | 'agentCode' | 'systemInstruction'>('dataset');

  const jsonString = JSON.stringify(puzzles, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString).then(() => {
      setCopied(true);
      sound.playWordSuccess();
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownload = () => {
    sound.playTap();
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vct_ppkn_crossword_puzzles_academic.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const antigravityAgentSnippet = `// Antigravity Agent Integration Server Route (Express / Node.js)
// Menggunakan @google/genai >= 2.4.0 dan Agent 'antigravity-preview-09-2026'
import { GoogleGenAI } from '@google/genai';
import express from 'express';

const router = express.Router();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Endpoint evaluasi dilema moral & respons VCT mahasiswa
router.post('/api/antigravity/evaluate-vct', async (req, res) => {
  try {
    const { studentResponse, puzzleTopic, reflectionOption } = req.body;

    const interaction = await ai.interactions.create({
      agent: 'antigravity-preview-09-2026',
      input: \`Analisis respons refleksi mahasiswa berikut berdasarkan buku VCT PPKn karya Dr. Sukisno, M.Pd. (Yudharta Press, 2026):
Tema: \${puzzleTopic}
Opsi Pilihan: \${reflectionOption}
Refleksi Bebas Mahasiswa: "\${studentResponse}"

Lakukan tugas berikut dalam lingkungan sandbox:
1. Hitung perkiraan orientasi Locus of Control (Skala Kontinum Internal vs Eksternal 0-100%).
2. Evaluasi tahap penalaran moral Kohlberg (Prakonvensional, Konvensional, atau Pascakonvensional).
3. Berikan umpan balik formatif non-judgmental yang memantik metakognisi sesuai prinsip VCT Bab 9.
Format output akhir dalam JSON terstruktur: { "locusScore": number, "kohlbergStage": string, "pedagogicalFeedback": string, "actingRecommendation": string }\`,
      environment: 'remote',
    }, { timeout: 300000 });

    // Ekstraksi respons teks dari model_output
    let fullOutput = '';
    for (const step of interaction.steps) {
      if (step.type === 'model_output') {
        const textPart = step.content?.find((c) => c.type === 'text');
        if (textPart?.text) fullOutput += textPart.text;
      }
    }

    res.json({ success: true, analysis: fullOutput, environmentId: interaction.environment_id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;`;

  const systemInstructionSnippet = `You are the VCT Civic Seminar & Academic Evaluator Agent for Higher Education, specialized in the pedagogy of Value Clarification Technique (VCT) based on the comprehensive textbook:
"Value Clarification Technique (VCT) dalam Pembelajaran PPKn Berbasis Nilai" by Dr. Sukisno, M.Pd. et al. (Yudharta Press, 364 pages, ISBN: 978-623-7817-62-8).

YOUR PEDAGOGICAL CAPABILITIES & CONSTRAINTS:
1. NON-JUDGMENTAL FACILITATION:
   - Treat student reflections as valid empirical data for clarification.
   - Never preach (moralizing); ask probing clarification questions (P7 Questions: Freedom, Alternatives, Consequences, Prizing, Affirmation, Action, Repetition).

2. LOCUS OF CONTROL CALIBRATION:
   - Differentiate between Internal Locus of Control (agentic, problem-focused, driver of life) and External Locus of Control (fatalistic, blaming fate/system, chess pawn).
   - Encourage students to move from external compliance to internalized moral agency.

3. CONSTITUTIONAL & UNIVERSAL GUARDRAIL:
   - Enforce the "Pagar Pengaman Etika Pancasila" (Figure 2, page 174).
   - Freedom of value choice is exercised within universal human dignity and constitutional boundaries (Pancasila & UUD 1945), preventing moral relativism.

4. ACADEMIC RIGOR:
   - Ground assessments in Bloom's revised cognitive taxonomy (C4-C6) and Krathwohl's affective domain (A3-A5).
   - Quote relevant chapters, tables, and empirical studies when providing academic feedback.`;

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 text-slate-200">
      {/* Header */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-slate-700/80 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400">
              <Cpu className="w-4 h-4" />
              <span>Arsitektur Antigravity · Agen Cerdas VCT PPKn</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Inspeksi Teknis & Integrasi Antigravity
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Arsitektur data lengkap dan kode integrasi untuk menjalankan sistem Teka-Teki Silang VCT di lingkungan <strong>Antigravity Agent (`antigravity-preview-09-2026`)</strong> dengan Gemini Interactions API.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? 'Tersalin!' : 'Salin JSON Data'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Unduh File Dataset</span>
            </button>

            <a
              href="https://github.com/mariofahmi/TTS-VCT-PPKN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 hover:border-sky-400 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Github className="w-4 h-4 text-sky-400" />
              <span>Repositori GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <button
          type="button"
          onClick={() => { setActiveCodeTab('dataset'); sound.playTap(); }}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
            activeCodeTab === 'dataset' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
          }`}
        >
          <FileJson className="w-3.5 h-3.5" />
          <span>JSON Dataset 10 Tipe TTS</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveCodeTab('agentCode'); sound.playTap(); }}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
            activeCodeTab === 'agentCode' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>Kode Backend Antigravity</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveCodeTab('systemInstruction'); sound.playTap(); }}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
            activeCodeTab === 'systemInstruction' ? 'bg-amber-400 text-slate-950' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>System Instruction Agen</span>
        </button>
      </div>

      {/* Code Display Area */}
      <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-4 sm:p-5 font-mono text-xs overflow-x-auto shadow-2xl">
        {activeCodeTab === 'dataset' && (
          <pre className="text-slate-300 max-h-[520px] overflow-y-auto leading-relaxed">
            {jsonString}
          </pre>
        )}

        {activeCodeTab === 'agentCode' && (
          <pre className="text-blue-300 max-h-[520px] overflow-y-auto leading-relaxed">
            {antigravityAgentSnippet}
          </pre>
        )}

        {activeCodeTab === 'systemInstruction' && (
          <pre className="text-emerald-300 max-h-[520px] overflow-y-auto leading-relaxed whitespace-pre-wrap">
            {systemInstructionSnippet}
          </pre>
        )}
      </div>

      {/* Deployment & Architecture Notes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            1. Antigravity Sandbox Linux
          </h4>
          <p className="text-slate-300 leading-relaxed">
            Agen `antigravity-preview-09-2026` dapat memproses file dataset JSON ini secara otomatis di lingkungan sandboxed Linux, menjalankan kalkulasi matriks kisi dan melakukan validasi semantik leksikal.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            2. Analisis Kualitatif (Text Mining)
          </h4>
          <p className="text-slate-300 leading-relaxed">
            Sesuai Bab 13.5.2 (Halaman 295), agen Antigravity dapat menganalisis teks jurnal refleksi mahasiswa dalam jumlah besar menggunakan *text mining* untuk memetakan perkembangan frekuensi penalaran etis dari waktu ke waktu.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
          <h4 className="font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            3. Integrasi LMS / Moodle / Canvas
          </h4>
          <p className="text-slate-300 leading-relaxed">
            Struktur JSON dapat diimpor langsung ke bank soal Learning Management System (LMS) perguruan tinggi atau dikonversi menjadi format SCORM untuk perkuliahan Pendidikan Kewarganegaraan di universitas.
          </p>
        </div>
      </div>
    </div>
  );
};
