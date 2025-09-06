"use client";
import SvgComponent from "@/assets/techVector";
import { ProjectCard } from "@/components/project-card";
import { ScrollIndicator } from "@/components/scrollIndeicator";
import SectionHeader from "@/components/sectionHeader";
import { projects } from "@/Helper/project";
import { motion, useAnimation, Variants } from "framer-motion";
import { useState, useEffect } from "react";

export default function ProjectsSection() {
  const [prevAnimation, setPrevAnimation] = useState(false);
  const [startScrollAnimate, setStartScrollAnimate] = useState(false);

  const projectSectionControl = useAnimation();
  useEffect(() => {
    if (prevAnimation) {
      Promise.resolve(setStartScrollAnimate(true));
      projectSectionControl.start("visible");
    }
  }, [projectSectionControl, prevAnimation]);
  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}

        <div className="md:pt-33 md:px-7">
          <SectionHeader
            heading="Featured Projects"
            description="Explore my curated projects, each crafted with a focus on real-world impact and technical excellence.
Check out live demos, see the technologies I used, and understand how I approached each challenge.
You can also view ratings and feedback that highlight the quality and usability of my work.
Dive in to see how I turn ideas into functional, well-engineered solutions."
            headingSize={"xl"}
            descriptionSize="large"
            width={"large"}
            onAnimationComplete={() => {
              setPrevAnimation(true);
            }}
          />
        </div>
        <div className="flex justify-center  w-1/2">
          <div className="md:mr-25 md:mt-9">
            <ScrollIndicator animate={startScrollAnimate} />
          </div>
        </div>
        {/* Projects List - each project is now a full section */}
        <div className="divide-y-2 divide-[#aee1f5]/30">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                media={project.media}
                links={project.links}
                detailedDescription={project.detailedDescription}
                features={project.features}
                className=""
                index={index}
              />
            </div>
          ))}
        </div>
        <div className="w-full justify-center items-center flex flex-col">
          <div className="w-2/2 border-b-1 border-secondary  mt-8 mb-8"></div>
          <SectionHeader
            heading={
              "Each project tells a story. More stories are being written…"
            }
            width={"large"}
            description={""}
            animated={false}
            align={"center"}
          />
        </div>
      </div>
    </>
  );
}
