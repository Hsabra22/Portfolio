"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Zap } from "lucide-react";


export default function Home() {
  const projects = [
    {
      id: 1,
      title: "E-Services Admin Platform",
      description: "Full-stack government services portal with real-time service tracking",
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Laravel", "PostgreSQL"],
      features: ["Service Management", "Document Upload", "Admin Dashboard", "RBAC"],
      status: "Production Ready",
      highlight: true,
    },
    {
      id: 2,
      title: "AI Resume Generator",
      description: "Intelligent resume creation with AI-powered content optimization",
      frontend: ["Next.js", "TypeScript"],
      backend: ["AI Integration", "Supabase"],
      features: ["AI Suggestions", "Smart Formatting", "Export to PDF"],
      demo: "https://resumify-2ddk.vercel.app/",
    },
    {
      id: 3,
      title: "Hotel Management System",
      description: "Complete hotel operations platform with booking & analytics",
      frontend: ["Next.js", "TypeScript", "Shadcn UI"],
      backend: ["Supabase", "REST APIs"],
      features: ["Room Management", "Bookings", "Revenue Analytics"],
      demo: "https://hotel-management-system-indol-pi.vercel.app/",
    },
    {
      id: 4,
      title: "TrainiFy - AI Workout Generator",
      description: "Smart fitness platform with personalized AI-driven training",
      frontend: ["Next.js", "TypeScript"],
      backend: ["AI Integration", "Supabase"],
      features: ["Custom Workouts", "Progress Tracking", "Adaptive Programming"],
      demo: "https://trainifygen.vercel.app/",
    },
    {
      id: 5,
      title: "E-Library Platform",
      description: "Modern digital library with advanced search & categorization",
      frontend: ["Next.js", "TypeScript", "Shadcn UI"],
      backend: ["Supabase", "REST APIs"],
      features: ["Book Search", "Collections", "Reading Progress"],
      demo: "https://e-library-eight-plum.vercel.app/",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      icon: "⚡",
      color: "from-blue-500 to-cyan-400",
      items: ["React.js", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
    },
    {
      category: "Backend",
      icon: "🔧",
      color: "from-purple-500 to-pink-400",
      items: ["Laravel", "PHP", "REST APIs", "Authentication", "Authorization"],
    },
    {
      category: "Databases",
      icon: "💾",
      color: "from-emerald-500 to-teal-400",
      items: ["PostgreSQL", "MySQL", "Supabase", "Query Optimization"],
    },
    {
      category: "AI & LLM",
      icon: "🤖",
      color: "from-orange-500 to-red-400",
      items: ["Prompt Engineering", "OpenAI API", "Claude API", "AI Integration"],
    },
    {
      category: "DevOps & Cloud",
      icon: "☁️",
      color: "from-indigo-500 to-blue-400",
      items: ["Azure Portal", "Docker", "CI/CD", "GitHub Actions", "Vercel"],
    },
    {
      category: "Tools & Workflow",
      icon: "🛠",
      color: "from-gray-600 to-gray-400",
      items: ["Git", "GitHub", "VS Code", "Postman", "Linux"],
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #1a1a3e 25%, #1f0747 75%, #0f172a 100%)",
        color: "white",
        fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          padding: "40px 20px",
        }}
      >
        {/* Animated Background Elements */}
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.2), transparent)",
            filter: "blur(80px)",
            top: "-200px",
            right: "-200px",
          }}
        />

        <motion.div
          animate={{ 
            y: [0, 40, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.15), transparent)",
            filter: "blur(70px)",
            bottom: "-150px",
            left: "-150px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            maxWidth: "1100px",
            width: "100%",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ marginBottom: 20 }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "12px 24px",
                borderRadius: "50px",
                background: "linear-gradient(90deg, rgba(59,130,246,0.1), rgba(34,211,238,0.1))",
                border: "1px solid rgba(59,130,246,0.3)",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.5px",
                color: "#93c5fd",
              }}
            >
              ✨ Full-Stack Developer & AI Integration Specialist
            </span>
          </motion.div>

          <h1
            style={{
              fontSize: "clamp(48px, 9vw, 110px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              background: "linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: 24,
            }}
          >
            Hassan Sabra
          </h1>

          <p
            style={{
              fontSize: "clamp(18px, 2.5vw, 24px)",
              lineHeight: 1.6,
              color: "#cbd5e1",
              maxWidth: 900,
              marginInline: "auto",
              marginBottom: 48,
              fontWeight: 400,
            }}
          >
            Crafting <strong style={{ color: "#93c5fd" }}>production-ready applications</strong> with 
            <strong style={{ color: "#06b6d4" }}> AI integration</strong>, 
            <strong style={{ color: "#a78bfa" }}> full-stack architecture</strong>, and 
            <strong style={{ color: "#34d399" }}> cloud deployment</strong>.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a
              href="https://github.com/Hsabra22/"
              target="_blank"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 32px",
                borderRadius: 12,
                background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
                color: "white",
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Github size={20} /> View GitHub
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 32px",
                borderRadius: 12,
                background: "rgba(148, 163, 184, 0.1)",
                border: "2px solid rgba(148, 163, 184, 0.3)",
                color: "#cbd5e1",
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Zap size={20} /> See My Work
            </motion.a>
          </div>
        </motion.div>
      </motion.section>

      {/* ABOUT SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: 1200,
          margin: "120px auto 0",
          padding: "0 20px 120px",
        }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            padding: 60,
            borderRadius: 24,
            background: "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(168,85,247,0.08) 100%)",
            border: "1px solid rgba(148,163,184,0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              marginBottom: 32,
              background: "linear-gradient(135deg, #e0e7ff, #cffafe)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About Me
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "#cbd5e1",
              marginBottom: 24,
            }}
          >
            I am a <strong style={{ color: "#93c5fd" }}>full-stack developer</strong> specializing in 
            <strong style={{ color: "#06b6d4" }}> AI-powered applications</strong> and 
            <strong style={{ color: "#34d399" }}> cloud infrastructure</strong>. My expertise spans:
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 20,
            marginTop: 28,
          }}>
            {[
              { icon: "⚛️", title: "Frontend Mastery", desc: "React, Next.js, React Native with modern UI patterns" },
              { icon: "🔧", title: "Backend Architecture", desc: "Laravel, PostgreSQL, MySQL with scalable APIs" },
              { icon: "🤖", title: "AI Integration", desc: "Prompt engineering & LLM implementation" },
              { icon: "☁️", title: "Cloud & DevOps", desc: "Azure, Docker, CI/CD, deployment pipelines" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: 20,
                  borderRadius: 16,
                  background: "rgba(15, 23, 42, 0.6)",
                  border: "1px solid rgba(148,163,184,0.15)",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#f1f5f9" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* SKILLS SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: 1300,
          margin: "120px auto 0",
          padding: "0 20px 120px",
        }}
      >
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: 80,
            background: "linear-gradient(135deg, #e0e7ff, #cffafe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Tech Stack
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -12 }}
              style={{
                position: "relative",
                padding: 40,
                borderRadius: 20,
                background: `linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(168,85,247,0.05) 100%)`,
                border: "1px solid rgba(148,163,184,0.2)",
                overflow: "hidden",
              }}
            >
              {/* Gradient Accent */}
              <motion.div
                whileHover={{ opacity: 0.4 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${skill.color})`,
                  opacity: 0.05,
                  borderRadius: 20,
                  zIndex: 0,
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <span style={{ fontSize: 32 }}>{skill.icon}</span>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#f1f5f9",
                      margin: 0,
                    }}
                  >
                    {skill.category}
                  </h3>
                </div>

                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                }}>
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        padding: "8px 14px",
                        borderRadius: 8,
                        background: "rgba(148,163,184,0.1)",
                        border: "1px solid rgba(148,163,184,0.2)",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#cbd5e1",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: 1400,
          margin: "120px auto 0",
          padding: "0 20px 120px",
        }}
      >
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: 80,
            background: "linear-gradient(135deg, #e0e7ff, #cffafe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Featured Projects
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 50 }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              whileHover={{
                boxShadow: project.highlight
                  ? "0 40px 80px rgba(34,211,238,0.2)"
                  : "0 30px 60px rgba(6,182,212,0.15)",
              }}
              style={{
                position: "relative",
                padding: 48,
                borderRadius: 24,
                background: project.highlight
                  ? "linear-gradient(135deg, rgba(34,211,238,0.1) 0%, rgba(59,130,246,0.1) 100%)"
                  : "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(168,85,247,0.05) 100%)",
                border: project.highlight
                  ? "2px solid rgba(34,211,238,0.4)"
                  : "1px solid rgba(148,163,184,0.2)",
                overflow: "hidden",
              }}
            >
              {project.highlight && (
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 300,
                    height: 300,
                    background: "radial-gradient(circle, rgba(34,211,238,0.2), transparent)",
                    borderRadius: "50%",
                    filter: "blur(80px)",
                  }}
                />
              )}

              <div style={{ position: "relative", zIndex: 2 }}>
                <div style={{ display: "flex", alignItems: "start", justifyContent: "space-between", marginBottom: 20 }}>
                  <div>
                    <h3
                      style={{
                        fontSize: 28,
                        fontWeight: 800,
                        marginBottom: 8,
                        background: project.highlight
                          ? "linear-gradient(135deg, #06b6d4, #0ea5e9)"
                          : "linear-gradient(135deg, #93c5fd, #cffafe)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p style={{ fontSize: 16, color: "#94a3b8", margin: 0 }}>
                      {project.description}
                    </p>
                  </div>
                  {project.highlight && (
                    <motion.span
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        padding: "8px 16px",
                        borderRadius: 20,
                        background: "linear-gradient(135deg, #06b6d4, #0ea5e9)",
                        fontSize: 12,
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                      }}
                    >
                      🚀 Latest
                    </motion.span>
                  )}
                </div>

                <div style={{ marginBottom: 28 }}>
                  <div style={{ marginBottom: 20 }}>
                    <p style={{ fontSize: 12, color: "#64748b", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
                      Frontend Stack
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {project.frontend.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: "6px 12px",
                            borderRadius: 6,
                            background: "rgba(59,130,246,0.15)",
                            border: "1px solid rgba(59,130,246,0.3)",
                            fontSize: 13,
                            color: "#93c5fd",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <p style={{ fontSize: 12, color: "#64748b", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
                      Backend Stack
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {project.backend.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: "6px 12px",
                            borderRadius: 6,
                            background: "rgba(168,85,247,0.15)",
                            border: "1px solid rgba(168,85,247,0.3)",
                            fontSize: 13,
                            color: "#d8b4fe",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.features && (
                    <div>
                      <p style={{ fontSize: 12, color: "#64748b", fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>
                        Key Features
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            style={{
                              padding: "6px 12px",
                              borderRadius: 6,
                              background: "rgba(52,211,153,0.15)",
                              border: "1px solid rgba(52,211,153,0.3)",
                              fontSize: 13,
                              color: "#86efac",
                            }}
                          >
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {(project.demo || project.status) && (
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        whileHover={{ x: 4 }}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#06b6d4",
                          textDecoration: "none",
                        }}
                      >
                        View Live <ExternalLink size={16} />
                      </motion.a>
                    )}
                    {project.status && (
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#34d399" }}>
                        ✓ {project.status}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: 1000,
          margin: "120px auto 0",
          padding: "80px 40px",
          borderRadius: 32,
          background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(168,85,247,0.15) 50%, rgba(34,211,238,0.15) 100%)",
          border: "1px solid rgba(148,163,184,0.3)",
          backdropFilter: "blur(20px)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            marginBottom: 24,
            background: "linear-gradient(135deg, #e0e7ff, #cffafe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Let us Build Something Extraordinary
        </h2>

        <p
          style={{
            fontSize: 18,
            color: "#cbd5e1",
            marginBottom: 50,
            lineHeight: 1.6,
          }}
        >
          I am always excited about collaborating on challenging projects, exploring new technologies, and building scalable solutions.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
          <motion.a
            href="mailto:hassan.sabra2005@gmail.com"
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 32px",
              borderRadius: 12,
              background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
              color: "white",
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✉ Get In Touch
          </motion.a>

          <motion.a
            href="https://github.com/Hsabra22/"
            target="_blank"
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 32px",
              borderRadius: 12,
              background: "rgba(148,163,184,0.1)",
              border: "2px solid rgba(148,163,184,0.3)",
              color: "#cbd5e1",
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <Github size={20} /> GitHub Profile
          </motion.a>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: 140,
          padding: "60px 20px",
          textAlign: "center",
          borderTop: "1px solid rgba(148,163,184,0.2)",
          color: "#64748b",
          fontSize: 14,
        }}
      >
        <p style={{ marginBottom: 12 }}>© {new Date().getFullYear()} Hassan Sabra</p>
        <p style={{ margin: 0, color: "#475569", fontSize: 12 }}>
          Full-Stack • AI Integration • Cloud Architecture • Next.js • Laravel • PostgreSQL • Azure DevOps
        </p>
      </footer>
    </main>
  );
}