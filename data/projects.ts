import { TranslationKey } from "@/contexts/LanguageContext"

export interface Project {
  title: string
  descriptionKey: TranslationKey
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
    descriptionKey: "projectData.lpma.description",
    tags: ["PHP Native", "MySQL", "Google API", "REST API", "Bootstrap"],
    gradient: "from-violet-600 to-indigo-600",
    image: "/lpma.PNG",
    github: "",
    demo: "https://lpma.smaratungga.ac.id/",
    category: "Full Stack",
  },
  {
    title: "Career Center Smaratungga",
    descriptionKey: "projectData.cc.description",
    tags: ["Tailwind CSS", "Laravel", "MySQL", "Google OAuth", "REST API"],
    gradient: "from-cyan-600 to-blue-600",
    image: "/cc.PNG",
    github: "",
    demo: "https://cc.smaratungga.ac.id/",
    category: "Full Stack",
  },
  {
    title: "Game 2D Platformer - Alchemist Nightmare",
    descriptionKey: "projectData.game2d.description",
    tags: ["Unity", "C#", "Git", "Agile"],
    gradient: "from-orange-500 to-rose-600",
    image: "/game2d.png",
    github: "",
    demo: "https://llizalliza.itch.io/alchemist-nightmare",
    category: "Game Dev",
  },
  {
    title: "StoryShare App",
    descriptionKey: "projectData.storyshare.description",
    tags: ["Webpack", "JavaScript", "PWA", "Workbox", "IndexedDB", "Push API", "MapTiler"],
    gradient: "from-pink-500 to-purple-600",
    image: "/storyshare.PNG",
    github: "https://github.com/LlizaLliza/storyshare-app",
    demo: "https://llizalliza.github.io/storyshare-app/",
    category: "Frontend",
  },
  {
    title: "Portfolio Website",
    descriptionKey: "projectData.portfolio.description",
    tags: ["Next.js", "TypeScript", "Tailwind", "React"],
    gradient: "from-emerald-500 to-teal-600",
    image: "/portofolio.PNG",
    github: "https://github.com/LlizaLliza/portofolio",
    demo: "https://llizafauzi.vercel.app/",
    category: "Frontend",
  },
  {
    title: "Sistem PMB Smaratungga",
    descriptionKey: "projectData.pmb.description",
    tags: ["PHP Native", "MySQL", "Bootstrap", "JavaScript"],
    gradient: "from-amber-500 to-orange-600",
    image: "/pmb.PNG",
    github: "",
    demo: "https://pmb.smaratungga.ac.id/",
    category: "Full Stack",
  },
]

export const categories = ["All", "Full Stack", "Frontend", "Game Dev"] as const
