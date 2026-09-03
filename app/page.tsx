import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Credentials from "@/components/portfolio/Credentials";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ThemeToggle from "@/components/portfolio/ThemeToggle";
import SectionDashboard from "@/components/portfolio/SectionDashboard";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <div className="fixed top-6 right-6 z-[999]">
        <ThemeToggle />
      </div>
      <SectionDashboard />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}