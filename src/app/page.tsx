import IntroSection from "../sections/intro";
import ExperienceSection from "../sections/exprience";
import ProjectsSection from "../sections/project";
import AboutSection from "../sections/about";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 bg-white sm:p-8 md:p-4">
        <div className="relative w-full h-full overflow-y-auto bg-primary">
          <Navbar />
          <IntroSection />
          <ExperienceSection />
          <ProjectsSection />
          <AboutSection />
        </div>
      </div>
    </main>
  );
}
