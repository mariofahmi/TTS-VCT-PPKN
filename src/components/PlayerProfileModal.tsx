import React, { useState } from 'react';
import { User, X, Check, GraduationCap, School, IdCard, Award } from 'lucide-react';
import { sound } from '../utils/audio.ts';

export interface PlayerProfile {
  name: string;
  idNumber: string; // NIM or NIDN
  institution: string;
  role: 'mahasiswa' | 'dosen' | 'peneliti';
}

interface PlayerProfileModalProps {
  initialProfile: PlayerProfile;
  onSave: (profile: PlayerProfile) => void;
  onClose: () => void;
  isFirstTime?: boolean;
  theme?: 'ocean' | 'dark';
}

export const PlayerProfileModal: React.FC<PlayerProfileModalProps> = ({
  initialProfile,
  onSave,
  onClose,
  isFirstTime = false,
  theme = 'ocean',
}) => {
  const isOcean = theme === 'ocean';
  const [name, setName] = useState(initialProfile.name || '');
  const [idNumber, setIdNumber] = useState(initialProfile.idNumber || '');
  const [institution, setInstitution] = useState(
    initialProfile.institution || 'Universitas PGRI Ronggolawe (UNIROW) Tuban'
  );
  const [role, setRole] = useState<'mahasiswa' | 'dosen' | 'peneliti'>(
    initialProfile.role || 'mahasiswa'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    sound.playWordSuccess();
    onSave({
      name: name.trim(),
      idNumber: idNumber.trim(),
      institution: institution.trim(),
      role,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
      <div
        className={`relative w-full max-w-md rounded-3xl p-6 shadow-2xl space-y-5 transition-colors ${
          isOcean
            ? 'bg-white border border-sky-200 text-slate-800 shadow-sky-950/10'
            : 'bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700/80 text-slate-100'
        }`}
      >
        {/* Header */}
        <div
          className={`flex items-start justify-between gap-3 border-b pb-3 ${
            isOcean ? 'border-sky-100' : 'border-slate-800'
          }`}
        >
          <div className="space-y-1">
            <div
              className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                isOcean ? 'text-sky-700' : 'text-amber-400'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>{isFirstTime ? 'Selamat Datang di TTS VCT PPKn' : 'Profil & Identitas Pemain'}</span>
            </div>
            <h2 className={`text-lg font-bold tracking-tight ${isOcean ? 'text-slate-900' : 'text-white'}`}>
              {isFirstTime ? 'Masukkan Nama Pemain' : 'Ubah Data Identitas'}
            </h2>
          </div>

          {!isFirstTime && (
            <button
              type="button"
              onClick={onClose}
              className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
                isOcean
                  ? 'text-slate-400 hover:text-slate-700 hover:bg-sky-50'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          {/* Nama Lengkap */}
          <div className="space-y-1.5">
            <label
              className={`font-semibold flex items-center gap-1.5 ${
                isOcean ? 'text-slate-700' : 'text-slate-300'
              }`}
            >
              <User className={`w-3.5 h-3.5 ${isOcean ? 'text-sky-600' : 'text-amber-400'}`} />
              <span>Nama Lengkap Pemain / Mahasiswa <span className="text-rose-500">*</span></span>
            </label>
            <input
              type="text"
              required
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Mario Fahmi Syahrial"
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs transition-colors focus:outline-none ${
                isOcean
                  ? 'bg-sky-50/60 border border-sky-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-400/50'
                  : 'bg-slate-950/90 border border-slate-700/80 text-white placeholder-slate-500 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50'
              }`}
            />
          </div>

          {/* NIM / NIDN */}
          <div className="space-y-1.5">
            <label
              className={`font-semibold flex items-center gap-1.5 ${
                isOcean ? 'text-slate-700' : 'text-slate-300'
              }`}
            >
              <IdCard className={`w-3.5 h-3.5 ${isOcean ? 'text-sky-600' : 'text-blue-400'}`} />
              <span>NIM / NIDN (Opsional)</span>
            </label>
            <input
              type="text"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              placeholder="Contoh: 2026101001"
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-mono transition-colors focus:outline-none ${
                isOcean
                  ? 'bg-sky-50/60 border border-sky-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-sky-500'
                  : 'bg-slate-950/90 border border-slate-700/80 text-white placeholder-slate-500 focus:border-amber-400'
              }`}
            />
          </div>

          {/* Peran / Role */}
          <div className="space-y-1.5">
            <label
              className={`font-semibold flex items-center gap-1.5 ${
                isOcean ? 'text-slate-700' : 'text-slate-300'
              }`}
            >
              <GraduationCap className={`w-3.5 h-3.5 ${isOcean ? 'text-teal-600' : 'text-emerald-400'}`} />
              <span>Peran Civitas Akademika</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['mahasiswa', 'dosen', 'peneliti'] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => { setRole(r); sound.playTap(); }}
                  className={`py-2 rounded-xl text-xs font-semibold capitalize border transition-all cursor-pointer ${
                    role === r
                      ? isOcean
                        ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white border-sky-400 shadow-sm font-bold'
                        : 'bg-amber-400 text-slate-950 border-amber-400 shadow-sm font-bold'
                      : isOcean
                      ? 'bg-sky-50/80 border-sky-200 text-sky-800 hover:bg-sky-100'
                      : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Universitas / Instansi */}
          <div className="space-y-1.5">
            <label
              className={`font-semibold flex items-center gap-1.5 ${
                isOcean ? 'text-slate-700' : 'text-slate-300'
              }`}
            >
              <School className={`w-3.5 h-3.5 ${isOcean ? 'text-sky-600' : 'text-amber-400'}`} />
              <span>Perguruan Tinggi / Instansi</span>
            </label>
            <input
              type="text"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              placeholder="Nama Kampus atau Sekolah"
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs transition-colors focus:outline-none ${
                isOcean
                  ? 'bg-sky-50/60 border border-sky-200 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-sky-500'
                  : 'bg-slate-950/90 border border-slate-700/80 text-white placeholder-slate-500 focus:border-amber-400'
              }`}
            />
          </div>

          <div
            className={`p-2.5 rounded-xl border text-[11px] leading-relaxed ${
              isOcean
                ? 'bg-sky-50/80 border-sky-200 text-sky-900'
                : 'bg-slate-950/60 border-slate-800 text-slate-400'
            }`}
          >
            💡 <em>Nama ini akan otomatis tercantum pada Lembar Kerja Cetak PDF, Sertifikat Skor, dan Laporan Refleksi Nilai VCT yang Anda salin.</em>
          </div>

          {/* Action Button */}
          <div className="pt-2 flex items-center justify-end gap-2">
            {!isFirstTime && (
              <button
                type="button"
                onClick={onClose}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  isOcean ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
                }`}
              >
                Batal
              </button>
            )}

            <button
              type="submit"
              disabled={!name.trim()}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md ${
                name.trim()
                  ? isOcean
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white shadow-sky-500/20'
                    : 'bg-amber-400 hover:bg-amber-300 text-slate-950'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-200'
              }`}
            >
              <Check className="w-4 h-4" />
              <span>Simpan Identitas Pemain</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
