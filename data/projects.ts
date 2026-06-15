export interface Project {
  title: string
  description: string
  tags: string[]
  gradient: string
  image: string
  github: string
  demo: string
  category: "Full Stack" | "Frontend" | "Game Dev"
}

export const projects: Project[] = [
  {
    title: "Web LPMA Smaratungga",
    description:
      "Website Lembaga Penjaminan Mutu & Akreditasi dengan fitur import data Google Form via API, upload file otomatis ke Google Drive, serta REST API untuk integrasi data dari web lain.",
    tags: ["PHP Native", "MySQL", "Google API", "REST API", "Bootstrap"],
    gradient: "from-violet-600 to-indigo-600",
    image: "/lpma.PNG",
    github: "",
    demo: "https://lpma.smaratungga.ac.id/",
    category: "Full Stack",
  },
  {
    title: "Career Center Smaratungga",
    description:
      "Platform Career Center & konseling online untuk mahasiswa dengan fitur login Google Account, manajemen konseling, informasi karir, serta REST API untuk pengambilan data dari web lain.",
    tags: ["Tailwind CSS", "Laravel", "MySQL", "Google OAuth", "REST API"],
    gradient: "from-cyan-600 to-blue-600",
    image: "/cc.PNG",
    github: "",
    demo: "https://cc.smaratungga.ac.id/",
    category: "Full Stack",
  },
  {
    title: "Game 2D Platformer - Alchemist Nightmare",
    description:
      "Game 2D platformer yang dikembangkan sebagai proyek skripsi menggunakan Unity dan C# dengan menerapkan metodologi Agile/Scrum.",
    tags: ["Unity", "C#", "Git", "Agile"],
    gradient: "from-orange-500 to-rose-600",
    image: "/game2d.png",
    github: "",
    demo: "https://llizalliza.itch.io/alchemist-nightmare",
    category: "Game Dev",
  },
  {
    title: "StoryShare App",
    description:
      "Aplikasi berbagi cerita (PWA) dari bootcamp Dicoding Front-End Web Intermediate dengan fitur offline-first, push notification, peta lokasi, dan penyimpanan cerita favorit via IndexedDB.",
    tags: ["Webpack", "JavaScript", "PWA", "Workbox", "IndexedDB", "Push API", "MapTiler"],
    gradient: "from-pink-500 to-purple-600",
    image: "/storyshare.PNG",
    github: "https://github.com/LlizaLliza/storyshare-app",
    demo: "https://llizalliza.github.io/storyshare-app/",
    category: "Frontend",
  },
  {
    title: "Portfolio Website",
    description:
      "Website portfolio personal dengan animasi halus, dark theme glassmorphism, dan desain responsif modern yang dibangun dengan Next.js.",
    tags: ["Next.js", "TypeScript", "Tailwind", "React"],
    gradient: "from-emerald-500 to-teal-600",
    image: "/portofolio.PNG",
    github: "https://github.com/LlizaLliza/portofolio",
    demo: "https://llizafauzi.vercel.app/",
    category: "Frontend",
  },
  {
    title: "Sistem PMB Smaratungga",
    description:
      "Sistem Penerimaan Mahasiswa Baru (PMB) online dengan fitur pendaftaran, upload berkas, konfigurasi gelombang, manajemen calon mahasiswa, serta ujian online yang dapat diawasi secara realtime.",
    tags: ["PHP Native", "MySQL", "Bootstrap", "JavaScript"],
    gradient: "from-amber-500 to-orange-600",
    image: "/pmb.PNG",
    github: "",
    demo: "https://pmb.smaratungga.ac.id/",
    category: "Full Stack",
  },
]

export const categories = ["All", "Full Stack", "Frontend", "Game Dev"] as const
