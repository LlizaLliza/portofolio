# 🚀 Portfolio — Uki Aula Fauzi

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?logo=vercel)

Website portfolio personal yang menampilkan pengalaman, skill, dan project saya di bidang **Web Development**, **IT Support**, dan **Game Development**.

## 🌐 Live Demo

🔗 **[llizafauzi.vercel.app](https://llizafauzi.vercel.app/)**

## ✨ Fitur

- 🌙 **Dark Theme** dengan efek glassmorphism modern
- 🎬 **Smooth Animations** — transisi dan animasi halus saat scroll
- 📱 **Fully Responsive** — tampil optimal di semua ukuran layar
- ⚡ **Performa Tinggi** — dibangun dengan Next.js App Router & React Server Components
- 🧭 **Single Page + Multi Page** — navigasi smooth scroll di homepage + halaman `/projects` terpisah

## 📸 Sections

| Section | Deskripsi |
|---------|-----------|
| **Hero** | Intro dengan animasi typing dan CTA |
| **About** | Informasi personal dan latar belakang |
| **Skills** | Tech stack yang dikuasai (Frontend, Backend, Database, DevOps, Game Dev) |
| **Experience** | Timeline pengalaman kerja |
| **Projects** | Showcase project unggulan dengan screenshot |
| **Contact** | Form kontak dan link sosial media |

## 🛠️ Tech Stack

| Teknologi | Versi |
|-----------|-------|
| [Next.js](https://nextjs.org/) | 16.1.6 |
| [React](https://react.dev/) | 19.2.3 |
| [TypeScript](https://www.typescriptlang.org/) | 5.x |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x |
| [ESLint](https://eslint.org/) | 9.x |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/LlizaLliza/portofolio.git
cd portofolio

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build Production

```bash
npm run build
npm start
```

## 📁 Struktur Project

```
portofolio/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles & design tokens
│   └── projects/
│       └── page.tsx        # Halaman semua project
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── HeroSection.tsx     # Hero section
│   ├── AboutSection.tsx    # About section
│   ├── SkillsSection.tsx   # Skills section
│   ├── ExperienceSection.tsx # Experience timeline
│   ├── ProjectsSection.tsx # Projects showcase
│   ├── ContactSection.tsx  # Contact form
│   └── Footer.tsx          # Footer
├── public/                 # Static assets (screenshots, images)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://llizafauzi.vercel.app/">Uki Aula Fauzi</a>
</p>
