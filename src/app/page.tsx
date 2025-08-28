import IntroSection from "../sections/intro";
import ExperienceSection from "../sections/exprience";
import ProjectsSection from "../sections/project";
import AboutSection from "@/sections/about";
import TechSkillsSection from "@/sections/tech";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative">
      <IntroSection />
      {/* <ExperienceSection /> */}
      <TechSkillsSection />
      <ProjectsSection />
      <AboutSection />
    </main>
  );
}
