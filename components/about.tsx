"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileTextIcon } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#1c1c1c]">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-light tracking-tight mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Grade 11 AP student with a passion for learning and academic excellence. My journey in education
                has been driven by curiosity and a desire to understand how things work.
              </p>
              <p>
                I excel in mathematics and sciences, with a particular interest in physics and computer science. My
                academic focus has equipped me with strong analytical thinking and problem-solving skills.
              </p>
              <p>
                Outside of academics, I'm involved in various extracurricular activities including science club,
                volunteer work, and personal projects that allow me to apply what I've learned in real-world contexts.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <FileTextIcon className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-8 border-[#222222] shadow-2xl">
              <Image src="/placeholder.svg?height=400&width=400" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
