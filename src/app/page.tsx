// page.tsx
import DarkModeToggle from "@/components/DarkModeToggle"
import ProjectCard from "@/components/ProjectCard"

const projects = [
  {
    title: "Wellness Platform",
    description:
      "Full-stack Appwrite + Next.js wellness booking platform.",
    link: "https://github.com/yourusername/wellness-platform",
  },
  {
    title: "Turnstile Upgrade Project",
    description:
      "A smart turnstile system with RFID, mobile app, and AI monitoring.",
    link: "https://github.com/yourusername/turnstile-project",
  },
  {
    title: "RestoTrack POS",
    description:
      "Restaurant POS with real-time inventory and smart waste tracking.",
    link: "https://github.com/yourusername/restotrack",
  },
]

export default function Home() {
  return (
    <main className="
      min-h-screen
      bg-gray-100 dark:bg-gray-900 creeper:bg-green-700
      text-gray-900 dark:text-white creeper:text-black
    ">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">John Christopher G. So</h1>
          <DarkModeToggle />
        </div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Full Stack Developer | Laravel • React • TypeScript • MySQL
        </p>

        {/* Projects Section */}
        <h2 className="mt-12 mb-6 text-2xl font-semibold">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </main>
  )
}
