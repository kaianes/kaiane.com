import NavBar from "@/app/components/ui/NavBar";
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Academic from "@/app/components/sections/Academic";
import Projects from "@/app/components/sections/Projects";
import Experience from "@/app/components/sections/Experience";
import Credentials from "@/app/components/sections/Credentials";
import InsideMyMind from "@/app/components/sections/InsideMyMind";
import LetsTalk from "@/app/components/sections/LetsTalk";

export type SectionId =
  | "hero"
  | "about"
  | "academic"
  | "projects"
  | "experience"
  | "credentials"
  | "inside-my-mind"
  | "lets-talk";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Academic />
        <Projects />
        <Experience />
        <Credentials />
        <InsideMyMind />
        <LetsTalk />
      </main>
    </>
  );
}
