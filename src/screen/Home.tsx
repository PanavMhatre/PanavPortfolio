import Hero from "../sections/Hero";
import Experience from "../sections/Experience";
import ProjectsSection from "../sections/ProjectsSection";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

function Home() {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 animate-fade-up">
      <Hero />
      <div className="border-t border-white/[0.06]" />
      <Experience />
      <div className="border-t border-white/[0.06] mt-16" />
      <ProjectsSection />
      <div className="border-t border-white/[0.06] mt-16" />
      <Skills />
      <div className="border-t border-white/[0.06] mt-16" />
      <Contact />
    </div>
  );
}

export default Home;
