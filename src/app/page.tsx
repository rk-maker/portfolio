import IntroSection from "../sections/intro";
import ExperienceSection from "../sections/exprience";
import ProjectsSection from "../sections/project";
import AboutSection from "../sections/about";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      {/* Universal border */}
      <div className="fixed inset-0 border-[20px] border-white pointer-events-none z-50"></div>

      {/* Outer white background container */}
      <div
        style={{
          background: "white",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <main className="relative">
          <Navbar />
          <IntroSection />
          <ExperienceSection />
          <ProjectsSection />
          <AboutSection />
        </main>
      </div>
    </>
  );
}
