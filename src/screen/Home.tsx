import Hero from "../sections/Hero";
import Experience from "../sections/Experience";
import ProjectsSection from "../sections/ProjectsSection";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Reveal from "../components/Reveal";
import AskPanavChat from "../components/AskPanavChat";

function Home() {
  return (
    <main className="w-full animate-fade-up">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Hero />
      </div>
      <div className="mx-auto w-full max-w-3xl px-6">
        <Reveal>
          <AskPanavChat />
        </Reveal>
        <div className="border-t border-white/[0.07]" />
        <Reveal>
          <Experience />
        </Reveal>
        <div className="mt-16 border-t border-white/[0.07]" />
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <div className="mt-16 border-t border-white/[0.07]" />
        <Reveal>
          <Skills />
        </Reveal>
        <div className="mt-16 border-t border-white/[0.07]" />
        <Reveal>
          <Contact />
        </Reveal>
      </div>
    </main>
  );
}

export default Home;
