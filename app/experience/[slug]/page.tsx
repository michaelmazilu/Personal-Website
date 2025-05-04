import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// This would typically come from a database or CMS
const experiences = {
  "waterloo-design": {
    title: "Mechanical Engineering Intern",
    company: "Waterloo Design Team",
    period: "Jan 2025 - Present",
    description: "As a mechanical engineering intern, I worked on designing humanoid robots (fingers), contributing to the development of mechanical systems that mimic human movement.",
    longDescription: `As a mechanical engineering intern at Waterloo Design Team, I focused on the development of humanoid robot fingers. My responsibilities included:

• Designing and prototyping mechanical components using CAD software
• Collaborating with cross-functional teams to integrate mechanical systems
• Conducting testing and validation of robotic movements
• Contributing to design documentation and technical specifications`,
    tags: ["CAD", "Figma", "Design Systems"],
    image: "/images/experience/waterloo-design.jpg",
  },
  "unlimitek": {
    title: "Computer Repair Technician",
    company: "Unlimitek",
    period: "Jan 2024 - Present",
    description: "Developing and maintaining web applications using modern technologies.",
    longDescription: `At Unlimitek, I work as a Computer Repair Technician where I:

• Diagnose and repair hardware and software issues
• Provide technical support to customers
• Maintain inventory of parts and components
• Document repair processes and solutions`,
    tags: ["React", "TypeScript", "Node.js"],
    image: "/images/experience/unlimitek.jpg",
  },
}

export default function ExperiencePage({ params }: { params: { slug: string } }) {
  const experience = experiences[params.slug as keyof typeof experiences]

  if (!experience) {
    notFound()
  }

  return (
    <main className="container px-4 py-16 md:py-24" style={{ backgroundColor: '#a19f99' }}>
      <Link 
        href="/#experience"
        className="inline-flex items-center text-gray-100 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Experience
      </Link>

      <div className="max-w-3xl mx-auto">
        <div className="flex items-start gap-6 mb-8">
          <div className="flex-shrink-0 w-16 h-16 rounded bg-white/90 flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm">
            <Image 
              src={experience.image} 
              alt={experience.company + ' logo'} 
              width={64} 
              height={64} 
              className="object-contain" 
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2 text-white">{experience.title}</h1>
            <h2 className="text-xl text-gray-100 mb-2">{experience.company}</h2>
            <p className="text-gray-200">{experience.period}</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6 text-gray-100">{experience.description}</p>
          <div className="whitespace-pre-line text-gray-200">{experience.longDescription}</div>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {experience.tags.map((tag, index) => (
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