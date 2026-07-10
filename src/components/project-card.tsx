import { useState, useMemo } from "react";
import Badge from "./badge";
import StripedButton from "./button";
import Image from "next/image";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { VscChromeClose } from "react-icons/vsc";
import { FiGithub } from "react-icons/fi";
import { VscGithubAlt } from "react-icons/vsc";

interface ProjectCardProps {
  title: string;
  projectType: string;
  publishedYear: string;
  index: number;
  description: string;
  technologies: string[];
  media: {
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
  className?: string;
}

// const variants: Variants = {
//   enter: (direction: number) => ({
//     x: direction > 0 ? 120 : -120,
//     rotate: direction > 0 ? 6 : -6,
//     opacity: 0,
//     scale: 0.96,
//   }),
//   center: {
//     x: 0,
//     rotate: 0,
//     opacity: 1,
//     scale: 1,
//     transition: { type: "spring", stiffness: 500, damping: 40 },
//   },
//   exit: (direction: number) => ({
//     x: direction > 0 ? -120 : 120,
//     rotate: direction > 0 ? -6 : 6,
//     opacity: 0,
//     scale: 0.96,
//     transition: { duration: 0.18 },
//   }),
// };

export function ProjectCard({
  title,
  projectType,
  publishedYear,
  description,
  technologies,
  media,
  links,
  detailedDescription,
  features,
  className = "",
  index,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobileApp = projectType.trim().toLowerCase() === "mobile app";

  const photos = useMemo(
    () => (Array.isArray(media.src) ? media.src : [media.src]),
    [media.src],
  );

  return (
    <div className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Media Section */}
          <div
            className={
              index % 2 === 0 ? "order-1 md:order-1" : "order-1 md:order-2"
            }
          >
            <div className="flex items-center justify-center">
              {isMobileApp ? (
                <div className="w-full overflow-x-auto rounded-2xl   bg-secondary/10 shadow-sm">
                  <div className="flex snap-x snap-mandatory gap-2 px-4 py-4">
                    {photos.map((photo, photoIndex) => (
                      <div
                        key={photoIndex}
                        className="w-40 sm:w-50 shrink-0 snap-center overflow-hidden rounded-3xl"
                      >
                        <div className="relative h-80 w-50">
                          <Image
                            src={photo || "/placeholder.svg"}
                            alt={
                              media.alt || `${title} - Image ${photoIndex + 1}`
                            }
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 260px"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                  <div className="relative aspect-5/3 w-full">
                    <Image
                      src={photos[0] || "/placeholder.svg"}
                      alt={media.alt || title}
                      fill
                      className="object-fill"
                      sizes="(max-width: 768px) 100vw, 640px"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Content Section */}
          <div
            className={
              index % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1"
            }
          >
            <div className="space-y-8">
              <div>
                <p className="text-sm md:text-base uppercase tracking-[0.3em] text-secondary mb-3">
                  {projectType} / {publishedYear}
                </p>
                <h3 className="text-xl md:text-5xl font-bold text-font mb-4">
                  {title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge key={index} label={tech} />
                ))}
              </div>

              <p className="text-font leading-relaxed font-light text-sm md:text-lg">
                {description}
              </p>

              <div className="flex flex-wrap gap-4">
                {links.live && (
                  <StripedButton
                    icon={<GoArrowUpRight className="stroke-tirdy stroke-2" />}
                    onClick={() => window.open(links.live, "_blank")}
                  >
                    Live Site
                  </StripedButton>
                )}
                {links.github && (
                  <StripedButton
                    icon={<VscGithubAlt className="stroke-tirdy stroke-2" />}
                    onClick={() => window.open(links.github, "_blank")}
                  >
                    Git repo
                  </StripedButton>
                )}
                {(detailedDescription || features) && (
                  <StripedButton
                    onClick={() => setIsModalOpen(true)}
                    icon={<GoArrowRight className="stroke-tirdy stroke-2" />}
                  >
                    More Details
                  </StripedButton>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* modal starts here  */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-thirdy/2 backdrop-blur-sm px-4 py-4 sm:py-6"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative w-full max-w-7xl max-h-[90vh] overflow-hidden rounded-4xl bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 z-10 rounded-full   hover:bg-secondary px-2 py-2 text-3xl  text-font  transition"
              >
                <VscChromeClose className="text-thirdy size-7" />
              </button>

              <div className="flex h-full max-h-[90vh] flex-col overflow-hidden">
                <div className="shrink-0 border-b border-slate-200 px-6 py-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-secondary">
                    {projectType} / {publishedYear}
                  </p>
                  <h2 className="mt-3 text-xl md:text-3xl font-bold text-font">
                    {title}
                  </h2>
                </div>
                <div className="grid flex-1 min-h-0 grid-cols-1 overflow-hidden md:grid-cols-[1.4fr_0.8fr]">
                  <div className="overflow-y-auto px-6 py-6 pb-10">
                    {isMobileApp ? (
                      <div className="flex h-80 gap-2 overflow-x-auto snap-x snap-mandatory rounded-3xl">
                        {photos.map((photo, photoIndex) => (
                          <div
                            key={photoIndex}
                            className="w-40 sm:w-50 shrink-0 snap-center overflow-hidden rounded-3xl"
                          >
                            <div className="relative h-80 w-50">
                              <Image
                                src={photo || "/placeholder.svg"}
                                alt={
                                  media.alt ||
                                  `${title} - Image ${photoIndex + 1}`
                                }
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 900px"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="relative h-80 overflow-hidden rounded-4xl bg-slate-100">
                        <Image
                          src={photos[0] || "/placeholder.svg"}
                          alt={media.alt || title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 900px"
                        />
                      </div>
                    )}

                    <div className="mt-6">
                      <h3 className="text-lg md:text-2xl font-semibold text-font mb-3">
                        Description
                      </h3>
                      <p className="whitespace-pre-line text-font leading-relaxed text-sm md:text-lg font-light">
                        {detailedDescription || description}
                      </p>
                    </div>
                  </div>
                  <div className="overflow-y-auto border-t border-slate-200 px-6 py-6 pb-10 md:border-t-0 md:border-l">
                    <div className="mb-8">
                      <h3 className="text-lg md:text-2xl font-semibold text-font mb-4">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} label={tech} />
                        ))}
                      </div>
                    </div>

                    {links && (links.live || links.github || links.demo) && (
                      <div className="mb-8">
                        <h3 className="text-lg md:text-2xl font-semibold text-font mb-4">
                          Project Links
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {links.live && (
                            <StripedButton
                              icon={
                                <GoArrowUpRight className="stroke-tirdy stroke-2" />
                              }
                              onClick={() => window.open(links.live, "_blank")}
                            >
                              Live Site
                            </StripedButton>
                          )}
                          {links.github && (
                            <StripedButton
                              icon={
                                <VscGithubAlt className="stroke-tirdy stroke-2" />
                              }
                              onClick={() =>
                                window.open(links.github, "_blank")
                              }
                            >
                              Git repo
                            </StripedButton>
                          )}
                          {links.demo && (
                            <StripedButton
                              icon={
                                <GoArrowUpRight className="stroke-tirdy stroke-2" />
                              }
                              onClick={() => window.open(links.demo, "_blank")}
                            >
                              Live Demo
                            </StripedButton>
                          )}
                        </div>
                      </div>
                    )}

                    {features && features.length > 0 && (
                      <div>
                        <h3 className="text-lg md:text-2xl font-semibold text-font mb-4">
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="text-font flex items-start text-sm md:text-lg font-light"
                            >
                              <span className="w-2 h-2 rounded-full bg-thirdy  font-light mt-2 mr-4 shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
