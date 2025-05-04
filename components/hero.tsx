"use client"

import { motion } from "framer-motion"
import { Space_Mono, Major_Mono_Display, Inter } from "next/font/google"
import { ArrowDown } from "lucide-react"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

const majorMono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-major-mono",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={`${inter.className} text-lg md:text-xl mb-4 text-white font-medium tracking-wide`}
          >
            Builder
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`${majorMono.className} text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground`}
          >
            Michael Alexander Mazilu
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={`${inter.className} text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed`}
          >
            Crafting Innovative solutions to hardware and software problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 transition-colors duration-300"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white hover:border-white/50 hover:text-white transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 w-full max-w-md px-4"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-full"></div>
      </motion.div>
    </section>
  )
}
