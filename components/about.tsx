"use client"

import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const profileImages = [
  "/images/profile.jpg",
  "/images/profile2.jpg",
  "/images/profile3.jpg",
  "/images/profile4.jpg",
  "/images/profile5.jpg",
]

const tagColors: Record<string, string> = {
  CAD: "#4F8A8B",
  Figma: "#A259FF",
  "Design Systems": "#F6C90E",
  React: "#61DAFB",
  "TypeScript": "#3178C6",
  "Node.js": "#3C873A",
  // Add more as needed
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(0);

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

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? profileImages.length - 1 : prev - 1));
  }
  const handleNext = () => {
    setCurrent((prev) => (prev === profileImages.length - 1 ? 0 : prev + 1));
  }

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      id="about"
      className="py-20 md:py-32"
    >
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1"
          >
            <motion.div variants={item} className="space-y-6 text-lg text-gray-700 dark:text-gray-200 text-center md:text-left">
              <h2 className="text-3xl font-light tracking-tight mb-4 text-gray-900 dark:text-white">About Me</h2>
              <p>
                I'm a 16-year-old builder, coder, and problem-solver based in Toronto. I'm passionate about software, hardware, robotics, and innovative technology. Whether I'm writing code, designing in CAD, experimenting with Arduino, or building projects from the ground up, I love getting to be creative.
              </p>
              <p>
                Outside of my academic and personal projects, some of my key interests include motorcycles (I ride a 1999 Ducati Monster), 3D printing, basketball, shoe-collecting, and Arduino.
              </p>
              <p>
                I'm currently open to collaborative projects, internships, or just connecting with like-minded builders. Let's make something awesome.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={item}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <button
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 dark:bg-gray-900/70 rounded-full p-2 hover:bg-white/90 dark:hover:bg-gray-900/90 transition"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              </button>
              <motion.div
                key={profileImages[current]}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <Image src={profileImages[current]} alt={`Profile ${current + 1}`} fill className="object-cover" priority />
              </motion.div>
              <button
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 dark:bg-gray-900/70 rounded-full p-2 hover:bg-white/90 dark:hover:bg-gray-900/90 transition"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {profileImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2 h-2 rounded-full ${idx === current ? 'bg-primary' : 'bg-gray-400 dark:bg-gray-600'} transition-colors`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
