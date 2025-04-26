"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl mb-2 text-muted-foreground">Welcome to the website of</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">Michael Alexander Mazilu</h1>
          <p className="text-base md:text-lg text-muted-foreground mb-20">I'm a grade 11 student who loves to build</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-16 w-full max-w-md px-4"
      >
        <div className="h-px bg-border w-full"></div>
      </motion.div>
    </section>
  )
}
