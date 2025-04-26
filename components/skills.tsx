"use client"

import { motion } from "framer-motion"
import { Calculator, BookOpen, Atom, Code, Lightbulb, Users, Globe, PenTool, Microscope, Brain } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      icon: <Calculator className="h-8 w-8" />,
      name: "Mathematics",
      description: "Advanced calculus, statistics, and problem-solving",
    },
    {
      icon: <Atom className="h-8 w-8" />,
      name: "Physics",
      description: "Mechanics, thermodynamics, and electromagnetism",
    },
    {
      icon: <Code className="h-8 w-8" />,
      name: "Programming",
      description: "Python, JavaScript, and web development basics",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      name: "Language Arts",
      description: "Critical analysis, research, and effective communication",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      name: "Critical Thinking",
      description: "Analytical reasoning and problem-solving approaches",
    },
    {
      icon: <Users className="h-8 w-8" />,
      name: "Leadership",
      description: "Team coordination, project management, and delegation",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      name: "Languages",
      description: "English (native), French (intermediate)",
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      name: "Design",
      description: "Basic graphic design and visual communication",
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      name: "Biology",
      description: "Cellular biology, genetics, and human physiology",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      name: "Research",
      description: "Data collection, analysis, and scientific methodology",
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
    <section id="skills" className="py-20 md:py-32 bg-[#1c1c1c]">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light tracking-tight mb-4">Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic and personal abilities developed through coursework and extracurricular activities.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card hover:bg-[#252525] transition-colors duration-300 rounded-2xl p-6 text-center"
            >
              <div className="text-primary mb-4 flex justify-center">{skill.icon}</div>
              <h3 className="font-medium mb-2">{skill.name}</h3>
              <p className="text-xs text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
