import { execSync } from 'child_process';

console.log('🚀 Memulai proses build produksi...');
execSync('npm run build', { stdio: 'inherit' });

console.log('📦 Menyiapkan cabang gh-pages dari direktori dist...');
execSync('git add dist -f', { stdio: 'inherit' });

const tree = execSync('git write-tree --prefix=dist').toString().trim();
const commit = execSync(`git commit-tree ${tree} -m "deploy: GitHub Pages update"`).toString().trim();

execSync('git reset HEAD dist', { stdio: 'inherit' });

console.log(`📤 Mendorong build ke GitHub Pages (origin gh-pages)...`);
execSync(`git push origin ${commit}:refs/heads/gh-pages --force`, { stdio: 'inherit' });

console.log('✅ Deploy berhasil dipublikasikan ke branch gh-pages!');
console.log('🌐 Kunjungi: https://mariofahmi.github.io/TTS-VCT-PPKN/');
