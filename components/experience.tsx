"use client"

import { motion } from "framer-motion"
import { CalendarIcon, MapPinIcon } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "AP Student",
      organization: "High School Name",
      location: "City, State",
      period: "2022 - Present",
      description:
        "Taking advanced placement courses in Mathematics, Physics, and Computer Science. Maintaining a 4.0 GPA across all AP subjects.",
    },
    {
      title: "Science Club President",
      organization: "High School Science Club",
      location: "City, State",
      period: "2023 - Present",
      description:
        "Leading weekly meetings, organizing science fairs, and coordinating with faculty advisors to create engaging STEM activities for club members.",
    },
    {
      title: "Volunteer Tutor",
      organization: "Community Learning Center",
      location: "City, State",
      period: "2022 - Present",
      description:
        "Providing free tutoring in mathematics and science to middle school students, helping them improve their academic performance and confidence.",
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
    <section id="experience" className="py-20 md:py-32 bg-[#1c1c1c]">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light tracking-tight mb-4">Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic achievements and extracurricular activities that have shaped my journey.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={item} className="relative pl-8 border-l-2 border-[#333333]">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
              <div className="mb-1 flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="h-4 w-4 mr-2" />
                <span>{experience.period}</span>
              </div>
              <h3 className="text-xl font-medium">{experience.title}</h3>
              <div className="mb-3 flex items-center text-sm">
                <span className="font-medium">{experience.organization}</span>
                <span className="mx-2">•</span>
                <span className="flex items-center text-muted-foreground">
                  <MapPinIcon className="h-3 w-3 mr-1" />
                  {experience.location}
                </span>
              </div>
              <p className="text-muted-foreground">{experience.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
