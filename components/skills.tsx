"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { 
  Cloud, 
  Database, 
  Container, 
  GitBranch, 
  Brain, 
  Globe, 
  Code, 
  Beaker, 
  Calculator, 
  Zap, 
  Coffee, 
  Cpu, 
  FileCode, 
  FileText,
  CircleDot,
  Layers,
  Search,
  X
} from "lucide-react"
import { useRef, useState, useEffect } from "react"

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const skills = [
    {
      icon: <Cloud className="h-8 w-8" />,
      name: "Vercel",
      description: "Deployment platform and serverless functions",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      name: "Microsoft Azure",
      description: "Cloud computing platform and services",
    },
    {
      icon: <Database className="h-8 w-8" />,
      name: "PostgreSQL",
      description: "Advanced open-source relational database",
    },
    {
      icon: <Database className="h-8 w-8" />,
      name: "MongoDB",
      description: "NoSQL document-oriented database",
    },
    {
      icon: <Container className="h-8 w-8" />,
      name: "Docker",
      description: "Containerization and deployment platform",
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      name: "Git",
      description: "Version control and collaboration",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      name: "PyTorch",
      description: "Machine learning and deep learning framework",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      name: "TensorFlow",
      description: "Open-source machine learning platform",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      name: "React",
      description: "JavaScript library for building user interfaces",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      name: "Next.js",
      description: "React framework for production applications",
    },
    {
      icon: <Beaker className="h-8 w-8" />,
      name: "Flask",
      description: "Lightweight Python web framework",
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      name: "MATLAB",
      description: "Numerical computing and matrix operations",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      name: "Rust",
      description: "Systems programming language with memory safety",
    },
    {
      icon: <CircleDot className="h-8 w-8" />,
      name: "Python",
      description: "High-level programming language for data science",
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      name: "Java",
      description: "Object-oriented programming language",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      name: "C++",
      description: "High-performance systems programming",
    },
    {
      icon: <FileCode className="h-8 w-8" />,
      name: "C",
      description: "Low-level systems programming language",
    },
    {
      icon: <Code className="h-8 w-8" />,
      name: "JavaScript",
      description: "Web development and dynamic programming",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      name: "TypeScript",
      description: "Typed superset of JavaScript",
    },
    {
      icon: <Code className="h-8 w-8" />,
      name: "Object-oriented Programming",
      description: "Design patterns, inheritance, and encapsulation",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      name: "Mapbox API",
      description: "Location services and interactive mapping",
    },
  ]

  // Filter skills based on search query
  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    skill.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Use filtered skills for display, duplicate for seamless loop only if not searching
  const displaySkills = searchQuery ? filteredSkills : [...skills, ...skills];

  useEffect(() => {
    if (isInView && !isHovered && !searchQuery) {
      controls.start({
        x: "-50%",
        transition: {
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }
      });
    } else {
      controls.stop();
    }
  }, [isInView, isHovered, controls, searchQuery]);

  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      id="skills"
      className="py-20 md:py-32 overflow-hidden"
    >
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

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search for a specific skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-muted-foreground mt-2 text-center"
            >
              {filteredSkills.length} skill{filteredSkills.length !== 1 ? 's' : ''} found
            </motion.p>
          )}
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden">
            <motion.div
              animate={controls}
              className="flex gap-6 w-max"
              style={{ width: "max-content" }}
            >
              {displaySkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="bg-card hover:bg-accent/50 transition-all duration-300 rounded-2xl p-6 text-center min-w-[200px] max-w-[200px] border border-border/50 shadow-sm hover:shadow-lg backdrop-blur-sm"
                >
                  <motion.div 
                    className="text-primary mb-4 flex justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="font-medium mb-2 text-sm">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-muted-foreground">
            {searchQuery ? "Filtered results" : "Hover to pause • Scroll to explore"}
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
} 