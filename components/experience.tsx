"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Experience() {
  const experiences = [
    {
      title: "Mechanical Engineering Intern",
      company: "Waterloo Design Team",
      period: "Jan 2025 - Present",
      description: "As a mechanical engineering intern, I worked on designing humanoid robots (fingers), contributing to the development of mechanical systems that mimic human movement.",
      tags: ["CAD", "Figma", "Design Systems"],
      image: "/images/experience/waterloo-design.jpg",
      slug: "waterloo-design"
    },
    {
      title: "Computer Repair Technician",
      company: "Unlimitek",
      period: "Jan 2024 - Present",
      description: "Developing and maintaining web applications using modern technologies.",
      tags: ["React", "TypeScript", "Node.js"],
      image: "/images/experience/unlimitek.jpg",
      slug: "unlimitek"
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light tracking-tight mb-4">Experience</h2>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item} className="flex gap-4 items-start border-b border-border pb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded bg-white flex items-center justify-center overflow-hidden border border-border">
                <Image src={exp.image} alt={exp.company + ' logo'} width={48} height={48} className="object-contain" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                  <Link 
                    href={`/experience/${exp.slug}`}
                    className="group"
                  >
                    <span className="font-semibold text-lg inline-block relative">
                      {exp.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                  <span className="text-muted-foreground md:ml-2">{exp.company}</span>
                </div>
                <div className="text-muted-foreground text-sm mt-1">{exp.period}</div>
                <div className="mt-2">{exp.description}</div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
