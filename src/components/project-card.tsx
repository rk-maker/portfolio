import { useState, useMemo, useEffect } from "react";
import Badge from "./badge";
import StripedButton from "./button";
import Image from "next/image";
import { MdArrowForward, MdOutlineArrowOutward } from "react-icons/md";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";

interface ProjectCardProps {
  title: string;
  projectType: string;
  publishedYear: string;
  index: number;
  description: string;
  technologies: string[];
  media: {
    type: "video" | "photos";
    src: string | string[]; // Support array of images for photos
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
  const [loading, setLoading] = useState(true);

  const photos = useMemo(
    () => (Array.isArray(media.src) ? media.src : [media.src]),
    [media.src],
  );
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3s fallback
    return () => clearTimeout(timer);
  }, []);

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
            <div className={`flex items-center justify-center`}>
              {media.type === "video" ? (
                <div className="relative w-[560px] h-[315px] rounded-lg">
                  {/* Skeleton Loader */}
                  {loading && (
                    <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6 4l12 6-12 6V4z" />
                      </svg>
                    </div>
                  )}

                  <video
                    width={560}
                    height={315}
                    controls
                    preload="auto"
                    className={`rounded-lg transition-opacity duration-300 ${
                      loading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoadedData={() => setLoading(false)}
                    onCanPlay={() => setLoading(false)}
                  >
                    <source src={media.src as string} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="w-full overflow-x-auto rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
                  <div className="flex snap-x snap-mandatory gap-2 px-4 py-4">
                    {photos.map((photo, photoIndex) => (
                      <div
                        key={photoIndex}
                        className="w-[240px] sm:w-[260px] flex-shrink-0 snap-center rounded-3xl overflow-hidden"
                      >
                        <div className="relative h-[320px] w-full">
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
                <h3 className="text-4xl md:text-5xl font-bold text-font mb-4">
                  {title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge key={index} label={tech} />
                ))}
              </div>

              <p className="text-font leading-relaxed font-light text-lg">
                {description}
              </p>

              <div className="flex flex-wrap gap-4">
                {links.live && (
                  <StripedButton
                    icon={<GoArrowUpRight className="stroke-tirdy stroke-2" />}
                  >
                    Live Site
                  </StripedButton>
                )}
                {links.github && (
                  <StripedButton
                    icon={<GoArrowUpRight className="stroke-tirdy stroke-2" />}
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

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-10"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative w-full max-w-7xl h-[80vh] overflow-hidden rounded-[2rem] bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 z-10 rounded-full border border-slate-200 bg-white px-3 py-1 text-3xl font-light text-font shadow-sm transition hover:bg-slate-100"
              >
                ×
              </button>

              <div className="h-full overflow-hidden">
                <div className="border-b border-slate-200 px-6 py-5">
                  <p className="text-sm uppercase tracking-[0.35em] text-secondary">
                    {projectType} / {publishedYear}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-font">{title}</h2>
                </div>
                <div className="grid h-full grid-cols-1 md:grid-cols-[1.4fr_0.8fr] overflow-hidden">
                  <div className="overflow-y-auto px-6 py-6">
                    {media.type === "video" ? (
                      <div className="relative w-full h-[320px] rounded-3xl overflow-hidden bg-slate-100">
                        <video
                          width="100%"
                          height="100%"
                          controls
                          preload="auto"
                          className="h-full w-full object-cover"
                        >
                          <source src={media.src as string} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ) : (
                      <div className="flex h-[320px] gap-2 overflow-x-auto snap-x snap-mandatory rounded-3xl">
                        {photos.map((photo, photoIndex) => (
                          <div
                            key={photoIndex}
                            className="min-w-full flex-shrink-0 snap-center overflow-hidden rounded-3xl"
                          >
                            <div className="relative h-[320px] w-full">
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
                    )}

                    <div className="mt-6">
                      <h3 className="text-2xl font-light text-font mb-3">
                        Description
                      </h3>
                      <p className="whitespace-pre-line text-font leading-relaxed text-base">
                        {detailedDescription || description}
                      </p>
                    </div>
                  </div>
                  <div className="overflow-y-auto border-t border-slate-200 px-6 py-6 md:border-t-0 md:border-l">
                    <div className="mb-8">
                      <h3 className="text-2xl font-light text-font mb-4">
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
                        <h3 className="text-2xl font-light text-font mb-4">
                          Project Links
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {links.live && (
                            <a
                              href={links.live}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex rounded-full border border-thirdy bg-thirdy/10 px-4 py-2 text-sm font-light text-thirdy transition hover:bg-thirdy/20"
                            >
                              Live Demo
                            </a>
                          )}
                          {links.github && (
                            <a
                              href={links.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex rounded-full border border-thirdy bg-thirdy/10 px-4 py-2 text-sm font-light text-thirdy transition hover:bg-thirdy/20"
                            >
                              GitHub
                            </a>
                          )}
                          {links.demo && (
                            <a
                              href={links.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex rounded-full border border-thirdy bg-thirdy/10 px-4 py-2 text-sm font-light text-thirdy transition hover:bg-thirdy/20"
                            >
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {features && features.length > 0 && (
                      <div>
                        <h3 className="text-2xl font-light text-font mb-4">
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="text-font flex items-start text-lg"
                            >
                              <span className="w-3 h-3 rounded-full bg-[#7f15e9]  font-light mt-2 mr-4 shrink-0"></span>
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
