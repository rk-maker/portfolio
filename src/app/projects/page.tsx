"use client";
import { ProjectCard } from "@/components/project-card";
import { ScrollIndicator } from "@/components/scrollIndeicator";
import SectionHeader from "@/components/sectionHeader";
import { client } from "@/sanity/lib/client";
import { useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

interface ProjectCardData {
  title: string;
  description: string;
  technologies: string[];
  media: {
    type: "video" | "photos";
    src: string | string[];
    alt?: string;
  };
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  detailedDescription?: string;
  features?: string[];
}

export default function ProjectsSection() {
  const [prevAnimation, setPrevAnimation] = useState(false);
  const [startScrollAnimate, setStartScrollAnimate] = useState(false);
  const [projects, setProjects] = useState<ProjectCardData[]>([]);

  const projectSectionControl = useAnimation();

  useEffect(() => {
    async function loadProjects() {
      const query = `*[_type == "project"] | order(order asc) {
        title,
        shortDescription,
        technologies,
        links,
        features,
        detailedDescription,
        media[]{
          type,
          altText,
          caption,
          videoUrl,
          "imageUrl": image.asset->url
        }
      }`;

      try {
        const data = await client.fetch(query);

        const normalized = (data ?? []).map((item: any) => {
          const images = (item.media ?? [])
            .filter(
              (mediaItem: any) =>
                mediaItem.type === "image" && mediaItem.imageUrl,
            )
            .map((mediaItem: any) => mediaItem.imageUrl);
          const videoItem = (item.media ?? []).find(
            (mediaItem: any) =>
              mediaItem.type === "video" && mediaItem.videoUrl,
          );

          const media = videoItem
            ? {
                type: "video" as const,
                src: videoItem.videoUrl,
                alt: videoItem.altText,
              }
            : {
                type: "photos" as const,
                src:
                  images.length > 1
                    ? images
                    : images.length === 1
                      ? images[0]
                      : "/placeholder.svg",
                alt: item.media?.[0]?.altText,
              };

          const detailedDescription = Array.isArray(item.detailedDescription)
            ? item.detailedDescription
                .map((block: any) =>
                  Array.isArray(block.children)
                    ? block.children
                        .map((child: any) => child.text || "")
                        .join("")
                    : "",
                )
                .filter(Boolean)
                .join("\n\n")
            : undefined;

          return {
            title: item.title,
            description: item.shortDescription,
            technologies: item.technologies ?? [],
            links: item.links ?? {},
            features: item.features ?? [],
            detailedDescription,
            media,
          };
        });

        setProjects(normalized);
        console.log("Loaded projects:", normalized);
      } catch (error) {
        console.error("Failed to load Sanity projects:", error);
      }
    }

    loadProjects();
  }, []);

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
        <div className="divide-y-2 divide-secondary/30">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
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
          <div className="w-2/2 border-b border-secondary mt-8 mb-8"></div>
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
