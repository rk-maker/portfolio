import IntroSection from "../sections/intro";
import ProjectsSection from "../sections/project";
import AboutSection from "@/sections/about";
import TechSkillsSection from "@/sections/tech";

export default function Home() {
  return (
    <main className="relative">
      <IntroSection />
      <TechSkillsSection />
      <ProjectsSection />
      <AboutSection />
    </main>
  );
}
