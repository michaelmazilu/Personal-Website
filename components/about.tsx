"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileTextIcon } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
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
              I'm a builder, coder, and problem-solver based in Toronto. I'm passionate about software, hardware, robotics, and how technology shapes the future. Whether it's writing code, designing circuits, or building projects from the ground up, I love creating solutions that bridge the digital and physical worlds.
              </p>
              <p>
              Outside of personal projects, I constantly explore new technologies, programming languages, and engineering concepts to sharpen my skills and push my ideas further. I'm always excited by challenges that let me design, prototype, and innovate — and I'm driven by the belief that hands-on experience is the best way to learn and grow.
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/profile.jpg" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
