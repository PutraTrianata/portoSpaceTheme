# 🚀 Space Portfolio - Tutorial Lengkap

## Web Portfolio Modern | React.js + Vite + Tailwind CSS | Galaxy Theme

---

## 📋 DAFTAR ISI

1. [Instalasi Node.js & VS Code](#1-instalasi-nodejs--vs-code)
2. [Membuat Project Baru](#2-membuat-project-baru)
3. [Instalasi Dependencies](#3-instalasi-dependencies)
4. [Setting Tailwind CSS](#4-setting-tailwind-css)
5. [Struktur Folder Project](#5-struktur-folder-project)
6. [Penjelasan Setiap File](#6-penjelasan-setiap-file)
7. [Penjelasan Komponen](#7-penjelasan-komponen)
8. [Menjalankan Project](#8-menjalankan-project)
9. [Kustomisasi Data Portfolio](#9-kustomisasi-data-portfolio)
10. [Build & Deploy ke Vercel/Netlify](#10-build--deploy-ke-vercelnetlify)
11. [Tips & Troubleshooting](#11-tips--troubleshooting)

---

## 1. INSTALASI NODE.JS & VS CODE

### Install Node.js

1. Buka browser → pergi ke **https://nodejs.org**
2. Download versi **LTS (Long Term Support)** — versi ini lebih stabil
3. Jalankan installer, klik Next terus → Finish
4. Verifikasi instalasi: buka Terminal / Command Prompt:
   ```bash
   node --version   # harusnya muncul: v20.x.x atau lebih baru
   npm --version    # harusnya muncul: 10.x.x
   ```

### Install VS Code

1. Buka **https://code.visualstudio.com**
2. Download untuk sistem operasimu (Windows/Mac/Linux)
3. Install seperti biasa

### Extension VS Code yang Direkomendasikan

Buka VS Code → Ctrl+Shift+X → Install:
- **ES7+ React/Redux/React-Native Snippets** (dsznajder)
- **Tailwind CSS IntelliSense** (Brad Cornes)
- **Prettier - Code formatter** (Prettier)
- **Auto Rename Tag** (Jun Han)
- **GitLens** (GitKraken)

---

## 2. MEMBUAT PROJECT BARU

Buka Terminal di VS Code (Ctrl+`), lalu jalankan:

```bash
# Buat project React + Vite baru
npm create vite@latest space-portfolio -- --template react

# Masuk ke folder project
cd space-portfolio

# Install dependencies default
npm install
```

---

## 3. INSTALASI DEPENDENCIES

```bash
# Install semua dependencies utama
npm install framer-motion react-icons react-type-animation aos

# Install Tailwind CSS (versi terbaru untuk Vite)
npm install tailwindcss @tailwindcss/vite
```

### Penjelasan Dependencies:

| Package | Fungsi |
|---------|--------|
| `framer-motion` | Library animasi React yang powerful dan smooth |
| `react-icons` | Ribuan icon (Font Awesome, Material, dll) dalam satu package |
| `react-type-animation` | Efek typing / mengetik otomatis |
| `aos` | Animate On Scroll - animasi saat scroll |
| `tailwindcss` | Utility-first CSS framework |
| `@tailwindcss/vite` | Plugin Tailwind untuk Vite (v4) |

---

## 4. SETTING TAILWIND CSS

### Update vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // ← tambahkan ini
  ],
})
```

### Update src/index.css

Pastikan baris pertama adalah:
```css
@import "tailwindcss";

/* Lalu import Google Fonts, custom styles, dll */
```

> ⚠️ **PENTING**: `@import "tailwindcss"` harus menjadi baris PERTAMA di file CSS!

---

## 5. STRUKTUR FOLDER PROJECT

```
space-portfolio/
│
├── public/                    # File statis (gambar, favicon)
│   └── vite.svg
│
├── src/                       # Source code utama
│   │
│   ├── components/            # Komponen UI yang bisa dipakai ulang
│   │   ├── Navbar.jsx         # Navigasi bar
│   │   ├── Hero.jsx           # Halaman utama / landing
│   │   ├── About.jsx          # Tentang saya
│   │   ├── Skills.jsx         # Keahlian
│   │   ├── Projects.jsx       # Portofolio project
│   │   ├── Contact.jsx        # Kontak
│   │   ├── Footer.jsx         # Footer
│   │   └── StarField.jsx      # Animasi bintang (background)
│   │
│   ├── data/                  # Data konten portfolio
│   │   └── portfolioData.js   # ← EDIT FILE INI untuk ganti data!
│   │
│   ├── assets/                # Gambar, font, dll
│   │
│   ├── App.jsx                # Root komponen
│   ├── main.jsx               # Entry point React
│   └── index.css              # Global styles + Tailwind
│
├── index.html                 # HTML template
├── vite.config.js             # Konfigurasi Vite
└── package.json               # Info project & dependencies
```

---

## 6. PENJELASAN SETIAP FILE

### `src/main.jsx`
Entry point utama React. Merender komponen `<App />` ke dalam elemen `#root` di HTML.

### `src/App.jsx`
Root komponen yang mengatur layout keseluruhan. Menggabungkan semua section/komponen menjadi satu halaman.

### `src/index.css`
File CSS global yang berisi:
- Import Tailwind CSS
- Import Google Fonts (Orbitron, Rajdhani, Exo 2)
- CSS Variables untuk warna tema
- Custom utility classes (`.glass`, `.gradient-text`, dll)
- Keyframe animations

### `src/data/portfolioData.js`
**File terpenting** — berisi semua data konten:
- Informasi pribadi (nama, email, sosmed)
- Daftar skills dengan level dan warna
- Data project
- Link navigasi
- Teks typing animation

### `vite.config.js`
Konfigurasi Vite (build tool). Mengaktifkan plugin React dan Tailwind CSS.

---

## 7. PENJELASAN KOMPONEN

### `StarField.jsx`
Menggunakan Canvas API JavaScript untuk menggambar dan menganimasikan:
- Ratusan bintang dengan efek twinkle (berkedip)
- Shooting stars (bintang jatuh) yang muncul secara random
- Warna bintang: putih, cyan, dan ungu untuk kesan galaksi
- Auto-resize saat window di-resize

### `Navbar.jsx`
- Transparan saat di atas, berubah jadi glassmorphism saat scroll
- Highlight nav item sesuai section yang sedang terlihat
- Mobile responsive dengan hamburger menu + animasi
- Smooth scroll saat klik nav link

### `Hero.jsx`
Section landing page dengan:
- **TypeAnimation**: efek mengetik nama peran (Web Developer, UI Designer, dll)
- **PlanetOrbit**: dekorasi planet 3D dengan cincin orbit berputar
- **Nebula gradients**: efek cahaya nebula di background
- Stats (project done, IPK, years coding)
- CTA buttons: Download CV & Contact Me

### `About.jsx`
- **Avatar**: lingkaran dengan efek galaksi, orbit berputar
- Info pendidikan dengan card glassmorphism
- Chips hobi yang bisa di-hover
- Quote motto hidup

### `Skills.jsx`
- **SkillCard**: card untuk tiap skill dengan:
  - Icon berwarna (dari react-icons/si)
  - Progress bar yang animasi mengisi dari 0 ke level saat card masuk viewport
  - Level label (Beginner → Expert)
- "Other Tools" chip list

### `Projects.jsx`
- **ProjectPreview**: mockup browser animasi yang mensimulasikan tampilan website (tanpa butuh screenshot sungguhan)
- Card dengan hover effect (naik ke atas)
- Tech stack badges
- Tombol Live Demo & Source Code

### `Contact.jsx`
- Social links dengan ikon berwarna
- Form kontak dengan validasi (nama, email wajib)
- Feedback "Pesan Terkirim" setelah submit

### `Footer.jsx`
- Logo, quote inspiratif, social icons
- Copyright dan quick nav links

---

## 8. MENJALANKAN PROJECT

```bash
# Development mode (auto-reload saat edit file)
npm run dev

# Build untuk production
npm run build

# Preview hasil build
npm run preview
```

Setelah `npm run dev`, buka browser ke: **http://localhost:5173**

---

## 9. KUSTOMISASI DATA PORTFOLIO

Buka `src/data/portfolioData.js` dan ubah semua data sesuai profilmu:

### Ganti Informasi Pribadi:
```javascript
export const personalInfo = {
  name: "Nama Lengkap Kamu",          // ← Ganti ini
  nickname: "Panggilan",               // ← Ganti ini
  title: "Mahasiswa Teknik Informatika",
  university: "Nama Universitasmu",    // ← Ganti ini
  email: "email@kamu.com",             // ← Ganti ini
  whatsapp: "+62 8xx-xxxx-xxxx",       // ← Ganti ini
  github: "https://github.com/username",     // ← Ganti ini
  instagram: "https://instagram.com/username", // ← Ganti ini
  linkedin: "https://linkedin.com/in/username", // ← Ganti ini
  cvLink: "https://drive.google.com/...",  // ← Link Google Drive CV
  about: "Deskripsi tentang dirimu...",    // ← Ganti ini
  motto: "\"Motto hidupmu\"",              // ← Ganti ini
};
```

### Ganti Skills:
```javascript
export const skills = [
  { name: "HTML5",  level: 90, color: "#e34f26", icon: "SiHtml5" },
  // level: 0-100 (persen kemampuan)
  // color: warna hex untuk progress bar
];
```

### Ganti Project:
```javascript
export const projects = [
  {
    title: "Nama Projectmu",
    description: "Deskripsi singkat...",
    tech: ["React", "Node.js", "MySQL"],
    liveDemo: "https://linkdemo.com",
    sourceCode: "https://github.com/...",
  },
];
```

---

## 10. BUILD & DEPLOY KE VERCEL/NETLIFY

### Build Project:
```bash
npm run build
# Hasil build ada di folder /dist
```

### Deploy ke Vercel (Recommended):

**Cara 1 - Via GitHub (Otomatis):**
1. Push project ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repo-name.git
   git push -u origin main
   ```
2. Buka **https://vercel.com** → Sign up dengan akun GitHub
3. Klik **New Project** → pilih repo-mu
4. Biarkan semua pengaturan default → klik **Deploy**
5. Selesai! Website langsung live 🎉

**Cara 2 - Via Vercel CLI:**
```bash
npm install -g vercel
vercel
# Ikuti instruksi yang muncul
```

### Deploy ke Netlify:

1. Buka **https://netlify.com** → Sign up
2. Drag & drop folder `/dist` ke dashboard Netlify
3. Website langsung live!

Atau via Git:
1. Push ke GitHub (langkah sama seperti di atas)
2. Di Netlify: New site → Import from Git → pilih repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

---

## 11. TIPS & TROUBLESHOOTING

### ❌ Error: `@import rules must precede all rules`
**Solusi**: Pastikan `@import "tailwindcss"` adalah baris PERTAMA di `index.css`, sebelum semua rule lainnya.

### ❌ Error: Module not found / Cannot find module
**Solusi**: 
```bash
rm -rf node_modules package-lock.json
npm install
```

### ❌ Port sudah digunakan
**Solusi**: 
```bash
npm run dev -- --port 3000
```

### 💡 Tips Performa:
- Gunakan format gambar WebP untuk foto profil
- Compress gambar sebelum dimasukkan ke project
- Gunakan lazy loading untuk gambar (`loading="lazy"`)

### 💡 Menambah Foto Profil Asli:
1. Simpan foto ke `src/assets/foto.jpg`
2. Import di `About.jsx`:
   ```jsx
   import fotoProfile from '../assets/foto.jpg';
   ```
3. Ganti komponen `Avatar` dengan:
   ```jsx
   <img src={fotoProfile} alt="Profile" className="w-full h-full object-cover" />
   ```

### 💡 Menambah Lebih Banyak Project:
Cukup tambahkan objek baru di array `projects` di `portfolioData.js`:
```javascript
{
  id: 2,
  title: "Nama Project Baru",
  // ...
}
```

---

## 🎨 WARNA TEMA

| Variabel | Warna | Hex |
|----------|-------|-----|
| Space Black | Background utama | `#030014` |
| Nebula Purple | Aksen ungu | `#7c3aed` |
| Stellar Cyan | Aksen cyan | `#06b6d4` |
| Aurora Pink | Aksen pink | `#ec4899` |

---

## 📦 VERSI DEPENDENCIES

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "vite": "^6.x",
  "framer-motion": "^11.x",
  "react-icons": "^5.x",
  "react-type-animation": "^3.x",
  "tailwindcss": "^4.x",
  "@tailwindcss/vite": "^4.x"
}
```

---

## 🌟 KREDIT

- **Design Inspiration**: Space/Galaxy Theme
- **Fonts**: Google Fonts (Orbitron, Rajdhani, Exo 2)
- **Animations**: Framer Motion
- **Icons**: React Icons (Simple Icons, Font Awesome)
- **Build Tool**: Vite

---

*Dibuat dengan ❤️ dan ☕ | Good luck dengan portfolio-mu!* 🚀
