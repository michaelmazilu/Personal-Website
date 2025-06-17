"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Swarmzero.ai",
      period: "September 2024 - December 2024",
      description: "As a Software Engineering Intern at Swarmzero.ai, I developed and optimized backend services for their AI platform.",
      tags: ["Python", "TensorFlow", "FastAPI"],
      image: "/images/experience/swarmzero_logo.jpg",
      slug: "swarmzero-internship"
    },
    {
      title: "Software Developer",
      company: "Waterloo Reality Labs",
      period: "May 2024 - August 2024",
      description: "Trained a PyTorch feedforward neural network, achieving 99.98% accuracy in classifying RGB colors as warm or cool, by generating synthetic data and using backpropagation. Implemented hand gesture controls for a Meta Quest VR app using the Meta SDK and XR Simulator.",
      tags: ["Python", "PyTorch", "Meta Quest SDK", "C#", "Unity"],
      image: "/images/experience/waterloo-design.jpg",
      slug: "waterloo-reality-labs"
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
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      id="experience"
      className="py-20 md:py-32"
    >
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
          className="relative max-w-3xl mx-auto space-y-12 md:space-y-16 py-8"
        >
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-border h-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              initial="hidden"
              whileInView="show"
              exit={{ opacity: 0, y: 40 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row items-center w-full relative"
            >
              {/* Left side content (or empty space) */}
              {index % 2 !== 0 && <div className="flex-1 md:pr-8 text-right hidden md:block" />}

              {/* Experience Card */}
              <div className={`flex-1 max-w-sm ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} w-full`}>
                <div className="bg-card p-6 rounded-lg shadow-md border border-border/70 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                  {/* Image */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden border border-border mb-4">
                    <Image src={exp.image} alt={exp.company + ' logo'} width={64} height={64} className="object-contain" />
                  </div>
                  {/* Rest of the card content */}
                  <div className="flex flex-col md:flex-row md:items-center md:gap-2 mb-2">
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
                  <div className="text-muted-foreground text-sm mt-1 mb-2">{exp.period}</div>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1 text-left">
                    {exp.description.split('. ').map((point, pointIndex) => (
                      point.trim() && <li key={pointIndex}>{point.trim() + (pointIndex < exp.description.split('. ').length - 1 ? '.' : '')}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                    {exp.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * tagIndex, duration: 0.5, type: 'spring' }}
                        className="relative inline-block px-3 py-1 rounded-full font-semibold text-white shadow-md overflow-hidden animated-gradient-tag text-xs"
                        style={{ zIndex: 1 }}
                      >
                        <span className="relative z-10" style={{ mixBlendMode: 'difference' }}>{tag}</span>
                        <span className="absolute inset-0 w-full h-full animated-gradient-bg" aria-hidden="true" />
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Circular Icon */}
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-20" />

              {/* Right side content (or empty space) */}
              {index % 2 === 0 && <div className="flex-1 md:pl-8 text-left hidden md:block" />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
