"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "E-Library Platform",
      frontend: ["Next.js", "TypeScript"],
      backend: ["Supabase", "REST APIs"],
      style: ["Tailwind CSS", "Shadcn UI", "PURE CSS"],
      demo: "https://e-library-eight-plum.vercel.app/",
    },
    {
      id: 2,
      title: "AI Resume Generator",
      frontend: ["Next.js", "TypeScript"],
      backend: ["AI Integration", "Supabase", "REST APIs"],
      style: ["Tailwind CSS", "Shadcn UI"],
      demo: "https://resumify-ten.vercel.app/",
    },
    {
      id: 3,
      title: "Hotel Management System",
      frontend: ["Next.js", "TypeScript"],
      backend: ["Supabase", "REST APIs"],
      style: ["Tailwind CSS", "Shadcn UI"],
      demo: "https://hotel-management-system-indol-pi.vercel.app/",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #111827, #000000 70%)",
        color: "white",
        padding: "100px 32px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(56px, 7vw, 90px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
          }}
        >
          Hassan Sabra
        </h1>


        <p
          style={{
            marginTop: 40,
            maxWidth: 900,
            marginInline: "auto",
            fontSize: 20,
            lineHeight: 1.8,
            color: "#d1d5db",
          }}
        >
          I build <strong>modern, scalable web applications</strong> using{" "}
          <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
          <strong>Supabase</strong>. I specialize in clean UI, AI-powered features,
          REST APIs, and cloud storage solutions.
        </p>

        <a
          href="https://github.com/Hsabra22/"
          target="_blank"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            marginTop: 48,
            padding: "16px 28px",
            borderRadius: 18,
            background: "white",
            color: "black",
            fontSize: 18,
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 20px 40px rgba(255,255,255,0.15)",
          }}
        >
          <Github size={22} /> View GitHub
        </a>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{
          maxWidth: 1100,
          margin: "160px auto 0",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: 40,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          About Me
        </h2>

        <p
          style={{
            fontSize: 20,
            lineHeight: 1.9,
            color: "#d1d5db",
            maxWidth: 900,
            marginInline: "auto",
          }}
        >
          I’m a <strong>third-year Computer Science student</strong> at the
          <strong> University of Antonine</strong>, passionate about building
          real-world applications with clean architecture and modern UI.
          <br />
          <br />
          My focus is on <strong>frontend excellence</strong>, smooth user
          experiences, and integrating powerful backends and AI features
          using scalable tools.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          maxWidth: 1300,
          margin: "160px auto 0",
        }}
      >
        <h2
          style={{
            fontSize: 40,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 100,
          }}
        >
          Tech Stack
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 60,
          }}
        >
          {[
            {
              title: "Frontend",
              items: ["React.js", "Next.js", "TypeScript"],
            },
            {
              title: "Styling",
              items: ["Tailwind CSS", "Shadcn UI", "Responsive Design"],
            },
            {
              title: "Backend & Services",
              items: ["Supabase", "REST APIs", "Storage Buckets"],
            },
            {
              title: "Advanced",
              items: ["AI Integration", "Auth Systems", "Performance Optimization"],
            },
          ].map((stack, i) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{ y: -8 }}
              style={{
                padding: 36,
                borderRadius: 28,
                background: "linear-gradient(180deg, #0b1220, #020617)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
              }}
            >
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  marginBottom: 20,
                }}
              >
                {stack.title}
              </h3>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  color: "#d1d5db",
                  fontSize: 16,
                  lineHeight: 2,
                }}
              >
                {stack.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <section
        style={{
          maxWidth: 1400,
          margin: "160px auto 0",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: 42,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 100,
          }}
        >
          Selected Projects
        </motion.h2>

        <div
          style={{
            display: "grid",
            gap: 100,
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -12,
                rotateX: 4,
                rotateY: -4,
              }}
              style={{
                position: "relative",
                padding: 48,
                borderRadius: 32,
                background: "linear-gradient(180deg, #0b1220, #020617)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
                transformStyle: "preserve-3d",
                perspective: "1400px",
                minHeight: 420,
                transition: "box-shadow 0.4s ease",
              }}
            >
              {/* DEPTH SHADOW */}
              <motion.div
                whileHover={{
                  y: 18,
                  scale: 0.96,
                  opacity: 0.3,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  inset: 24,
                  borderRadius: 36,
                  background: "#000",
                  filter: "blur(50px)",
                  opacity: 0.45,
                  zIndex: 0,
                }}
              />

              {/* SOFT GLOW */}
              <motion.div
                whileHover={{ opacity: 0.25 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  inset: -20,
                  borderRadius: 40,
                  background:
                    "linear-gradient(120deg, #6366f1, #22d3ee, #a855f7)",
                  opacity: 0.18,
                  filter: "blur(70px)",
                  zIndex: 0,
                }}
              />

              {/* CONTENT */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <h3
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    marginBottom: 26,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>

                <Info label="Frontend Stack" value={p.frontend} />
                <Info label="Backend Stack" value={p.backend} />
                <Info label="Styling" value={p.style} />

                <motion.a
                  href={p.demo}
                  target="_blank"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 30,
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#93c5fd",
                    textDecoration: "none",
                  }}
                >
                  View Live Project <ExternalLink size={18} />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{
          maxWidth: 1000,
          margin: "180px auto 0",
          textAlign: "center",
          padding: "80px 40px",
          borderRadius: 40,
          background:
            "linear-gradient(120deg, rgba(99,102,241,0.15), rgba(34,211,238,0.15), rgba(168,85,247,0.15))",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
        }}
      >
        <h2
          style={{
            fontSize: 36,
            fontWeight: 800,
            marginBottom: 24,
          }}
        >
          Let’s Build Something Great
        </h2>

        <p
          style={{
            fontSize: 20,
            color: "#d1d5db",
            marginBottom: 40,
          }}
        >
          I’m always open to collaboration, learning opportunities, and
          real-world projects.
        </p>

        <motion.a
          href="https://github.com/Hsabra22/"
          target="_blank"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            padding: "18px 32px",
            borderRadius: 20,
            background: "white",
            color: "black",
            fontSize: 18,
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 20px 40px rgba(255,255,255,0.2)",
          }}
        >
          <Github size={22} /> Visit My GitHub
        </motion.a>
      </motion.section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: 180,
          textAlign: "center",
          fontSize: 16,
          color: "#9ca3af",
        }}
      >
        © {new Date().getFullYear()} Hassan Sabra — Next.js • TypeScript • Supabase
      </footer>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string[] }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <p
        style={{
          fontSize: 14,
          color: "#9ca3af",
          marginBottom: 6,
        }}
      >
        {label}
      </p>
      <p style={{ fontSize: 16, fontWeight: 500 }}>{value.join(" · ")}</p>
    </div>
  );
}
