"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Gems",
      description: "A community-driven platform for discovering and sharing hidden urban locations.",
      image: "/images/projects/gems.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#",
      slug: "gems",
      accentColor: "#4CAF50"
    },
    {
      title: "Net",
      description: "An AI-powered tool that transforms user prompts into a web-like network of ideas to enhance learning and exploration.",
      image: "/images/projects/net.jpg",
      tags: ["Python", "AI", "React"],
      github: "#",
      demo: "#",
      slug: "net",
      accentColor: "#EC69C3"
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A showcase of my technical expertise and creative problem-solving abilities.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 relative">
                <h3 
                  className="text-2xl font-semibold mb-3 transition-colors duration-300"
                  style={{ 
                    color: project.accentColor,
                    '--hover-color': project.accentColor 
                  } as React.CSSProperties}
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full hover:bg-white/10 hover:text-white transition-colors duration-300"
                  >
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="rounded-full bg-white text-black hover:bg-white/90 transition-colors duration-300"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      View Project
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
