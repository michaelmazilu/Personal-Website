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
      title: "Physics Simulation",
      description: "Interactive simulation demonstrating principles of classical mechanics and gravitational forces.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Python", "Physics", "Matplotlib"],
      github: "#",
      demo: "#",
    },
    {
      title: "Personal Blog",
      description: "A blog where I share my thoughts on science, technology, and academic experiences.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
    },
    {
      title: "Math Problem Solver",
      description:
        "An application that solves various types of mathematical problems and shows step-by-step solutions.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Python", "Mathematics", "Algorithms"],
      github: "#",
      demo: "#",
    },
    {
      title: "Science Fair Project",
      description: "Research project exploring the effects of different variables on plant growth rates.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Biology", "Data Analysis", "Research"],
      github: "#",
      demo: "#",
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
    <section id="projects" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light tracking-tight mb-4">Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic and personal projects showcasing my interests and skills.
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
              className="group relative rounded-2xl overflow-hidden border border-border bg-card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="rounded-full">
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
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
