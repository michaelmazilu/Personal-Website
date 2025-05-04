import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, GithubIcon, ExternalLinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const projects = {
  "gems": {
    title: "Gems",
    description: "A community-driven platform for discovering and sharing hidden urban locations.",
    longDescription: `Gems is a platform that connects urban explorers with hidden gems in their cities. The project features:

• User-generated content for discovering unique locations
• Interactive maps with custom markers and routes
• Social features for sharing and rating locations
• Mobile-responsive design for on-the-go exploration`,
    image: "/images/projects/gems.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#",
    accentColor: "#4CAF50",
    technologies: [
      "Next.js 14 with App Router",
      "TypeScript for type safety",
      "Tailwind CSS for styling",
      "Framer Motion for animations",
      "Prisma for database management",
      "NextAuth.js for authentication"
    ],
    challenges: [
      "Implementing real-time location updates",
      "Optimizing map performance with large datasets",
      "Building an intuitive user interface for location sharing"
    ]
  },
  "net": {
    title: "Net",
    description: "An AI-powered tool that transforms user prompts into a web-like network of ideas to enhance learning and exploration.",
    longDescription: `Net is an innovative tool that uses AI to create visual networks of connected ideas. Key features include:

• AI-powered idea generation and connection
• Interactive network visualization
• Real-time collaboration features
• Export and sharing capabilities`,
    image: "/images/projects/net.jpg",
    tags: ["Python", "AI", "React"],
    github: "#",
    demo: "#",
    accentColor: "#EC69C3",
    technologies: [
      "Python for AI processing",
      "React for frontend",
      "TensorFlow for ML models",
      "D3.js for network visualization",
      "WebSocket for real-time updates"
    ],
    challenges: [
      "Training accurate AI models for idea generation",
      "Optimizing network visualization performance",
      "Implementing real-time collaboration features"
    ]
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <main className="container px-4 py-16 md:py-24 bg-background bg-gradient-to-b from-background via-background/95 to-background/90 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 dark:bg-white/10 text-gray-900 dark:text-white font-medium shadow hover:bg-white dark:hover:bg-white/20 border border-gray-200 dark:border-white/20 transition-all duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back to Projects
          </Link>
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden mb-8 shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 
              className="text-4xl font-bold mb-2"
              style={{ color: project.accentColor }}
            >
              {project.title}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200">{project.description}</p>
          </div>
          <div className="flex gap-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full border-gray-200 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white text-gray-900 dark:text-white"
            >
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="mr-2 h-4 w-4" />
                View Code
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-full hover:opacity-90"
              style={{ backgroundColor: project.accentColor, color: '#fff' }}
            >
              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          </div>
        </div>

        <div className="prose prose-invert max-w-none mb-12">
          <div className="whitespace-pre-line text-gray-200">{project.longDescription}</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Technologies Used</h2>
            <ul className="space-y-2">
              {project.technologies.map((tech, index) => (
                <li key={index} className="flex items-center text-gray-100">
                  <span className="w-2 h-2 rounded-full bg-white/60 mr-2" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Key Challenges</h2>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-center text-gray-100">
                  <span className="w-2 h-2 rounded-full bg-white/60 mr-2" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm px-4 py-1 rounded-full bg-white/10 text-white border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
} 