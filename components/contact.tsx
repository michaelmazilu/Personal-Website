"use client"

import { motion } from "framer-motion"
import { MailIcon, LinkedinIcon } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-light tracking-tight mb-12">Contact</h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <Link href="mailto:m.mazilu@icloud.com" className="flex items-center hover:text-primary transition-colors">
              <MailIcon className="h-5 w-5 mr-3" />
              <span className="text-lg">m.mazilu@icloud.com</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/michael-mazilu-32247832b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary transition-colors"
            >
              <LinkedinIcon className="h-5 w-5 mr-3" />
              <span className="text-lg">LinkedIn</span>
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Michael Alexander Mazilu. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
