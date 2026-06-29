import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Projects — Uki Aula Fauzi",
  description:
    "Complete collection of projects by Uki Aula Fauzi in frontend, full-stack web development, and game development.",
  openGraph: {
    title: "All Projects — Uki Aula Fauzi",
    description:
      "Complete collection of projects by Uki Aula Fauzi in frontend, full-stack web development, and game development.",
    url: "https://llizafauzi.vercel.app/projects",
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
