import IntroSection from "../sections/intro";
import ExperienceSection from "../sections/exprience";
import ProjectsSection from "../sections/project";
import AboutSection from "../sections/about";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <div className="fixed inset-0 bg-white sm:p-8 md:p-4">
        <div className="w-full h-full overflow-y-auto bg-primary ">
          <IntroSection />
          <ExperienceSection />
          <ProjectsSection />
          <AboutSection />
        </div>
      </div>
    </main>
  );
}
