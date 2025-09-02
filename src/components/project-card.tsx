import { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Badge from "./badge";
import StripedButton from "./button";

interface ProjectCardProps {
  title: string;
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

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    rotate: direction > 0 ? 6 : -6,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 500, damping: 40 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -120 : 120,
    rotate: direction > 0 ? -6 : 6,
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.18 },
  }),
};

export function ProjectCard({
  title,
  description,
  technologies,
  media,
  links,
  detailedDescription,
  features,
  className = "",
  index,
}: ProjectCardProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const photos = useMemo(
    () => (Array.isArray(media.src) ? media.src : [media.src]),
    [media.src]
  );
  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const prevIdx = wrap(0, photos.length, currentPhotoIndex - 1);
  const nextIdx = wrap(0, photos.length, currentPhotoIndex + 1);

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
                <iframe
                  width={560}
                  height={315}
                  src={`https://www.youtube.com/watch?v=wmde-jlQ5bY`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              ) : (
                <div className="relative w-full max-w-sm mx-auto h-[420px]  flex items-center justify-center ">
                  <img
                    src={photos[currentPhotoIndex] || "/placeholder.svg"}
                    alt={
                      media.alt || `${title} - Image ${currentPhotoIndex + 1}`
                    }
                    className=" h-auto max-h-[400px] object-contain transition-all duration-300 animate-in fade-in-0 rounded-2xl bg-blue-400"
                  />

                  {photos.length > 1 && (
                    <>
                      <FaChevronLeft
                        onClick={prevPhoto}
                        className="w-15 h-15 absolute left-0 top-1/2 text-thirdy rounded-full p-3  transition-all duration-200 hover:scale-110"
                      />

                      <FaChevronRight
                        className=" w-15 h-15 absolute right-0 top-1/2 text-thirdy rounded-full p-3  transition-all duration-200 hover:scale-110"
                        onClick={nextPhoto}
                      />

                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                        {photos.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentPhotoIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                              index === currentPhotoIndex
                                ? "bg-thirdy scale-125"
                                : "bg-primary hover:bg-primary border-2 border-thirdy"
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
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
                <h3 className="text-4xl md:text-5xl font-bold text-[#0f1b61] mb-4">
                  {title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge key={index} label={tech} />
                ))}
              </div>

              <p className="text-[#0f1b61] leading-relaxed text-lg">
                {description}
              </p>

              <div className="flex flex-wrap gap-4">
                {links.live && <StripedButton>Live Demo</StripedButton>}
                {links.github && <StripedButton>Git repo</StripedButton>}
              </div>

              {(detailedDescription || features) && (
                <StripedButton onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? `Less Details  ^` : `More Details  >`}
                </StripedButton>
              )}
            </div>
          </div>
        </div>

        {isExpanded && (detailedDescription || features) && (
          <div className="mt-12 pt-8 border-t-2 border-[#aee1f5] animate-in slide-in-from-top-2 duration-300">
            {detailedDescription && (
              <div className="mb-8">
                <h4 className="text-2xl font-semibold text-[#0f1b61] mb-4">
                  Project Details
                </h4>
                <p className="text-[#0f1b61] leading-relaxed text-lg">
                  {detailedDescription}
                </p>
              </div>
            )}

            {features && features.length > 0 && (
              <div>
                <h4 className="text-2xl font-semibold text-[#0f1b61] mb-4">
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-[#0f1b61] flex items-start text-lg"
                    >
                      <span className="w-3 h-3 bg-[#7f15e9] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
