import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes"
import Background from "@/components/background"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Michael Alexander Mazilu | Portfolio",
  description: "Personal portfolio for Michael Alexander Mazilu, Grade 11 AP Student",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen text-foreground font-sans antialiased", inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Background />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
