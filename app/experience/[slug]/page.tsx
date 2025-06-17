import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// This would typically come from a database or CMS
const experiences = {
  "swarmzero-internship": {
    title: "Software Engineering Intern",
    company: "Swarmzero.ai",
    period: "September 2024 - December 2024",
    description: "As a Software Engineering Intern at Swarmzero.ai, I developed and optimized backend services for their AI platform.",
    longDescription: `During my Software Engineering Internship at Swarmzero.ai, my responsibilities included:\n\n• Developing and optimizing backend services for the AI platform.\n• Implementing new features and improving existing functionalities.\n• Collaborating with the team to design and deploy scalable solutions.`,
    tags: ["Python", "TensorFlow", "FastAPI"],
    image: "/images/experience/swarmzero_logo.jpg",
  },
  "waterloo-reality-labs": {
    title: "Software Developer",
    company: "Waterloo Reality Labs",
    period: "May 2024 - August 2024",
    description: "Trained a PyTorch feedforward neural network, achieving 99.98% accuracy in classifying RGB colors as warm or cool, by generating synthetic data and using backpropagation. Implemented hand gesture controls for a Meta Quest VR app using the Meta SDK and XR Simulator.",
    longDescription: `At Waterloo Reality Labs, I worked on advanced software development projects, including:\n\n• Training a PyTorch feedforward neural network for highly accurate RGB color classification, utilizing synthetic data generation and backpropagation techniques.\n• Implementing intricate hand gesture controls for a Meta Quest VR application, leveraging the Meta SDK and XR Simulator for realistic interactions.\n• Contributing to the development of innovative VR experiences and applications.`,
    tags: ["Python", "PyTorch", "Meta Quest SDK", "C#", "Unity"],
    image: "/images/experience/waterloo-reality-labs.jpg",
  },
  "unlimitek": {
    title: "Computer Repair Technician",
    company: "Unlimitek",
    period: "Jan 2024 - Present",
    description: "Developing and maintaining web applications using modern technologies.",
    longDescription: `At Unlimitek, I work as a Computer Repair Technician where I:\n\n• Diagnose and repair hardware and software issues\n• Provide technical support to customers\n• Maintain inventory of parts and components\n• Document repair processes and solutions.`,
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