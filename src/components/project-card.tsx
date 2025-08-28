"use client";

import { useState } from "react";
import Badge from "./badge";
import StripedButton from "./button";
interface ProjectCardProps {
  title: string;
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
  detailedDescription?: string; // Added detailed description prop
  features?: string[]; // Added features list prop
  className?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  media,
  links,
  detailedDescription,
  features,
  className = "",
}: ProjectCardProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const photos = Array.isArray(media.src) ? media.src : [media.src];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className={`py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Project Title with underline accent */}
        <div className="mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-[#0f1b61] mb-4">
            {title}
          </h3>
          <div className="w-16 h-1 bg-[#7f15e9]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Technology Tags */}
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <Badge key={index} label={tech} />
              ))}
            </div>

            {/* Project Description */}
            <p className="text-[#0f1b61] leading-relaxed text-lg">
              {description}
            </p>

            {/* Action Links */}
            <div className="flex flex-wrap gap-4">
              {links.live && <StripedButton>Live Demo</StripedButton>}

              {links.github && <StripedButton>Git repo</StripedButton>}
            </div>

            {/* Details Button */}
            {(detailedDescription || features) && (
              <StripedButton onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? `Less Details  ^` : `More Details  >`}
              </StripedButton>
            )}
          </div>

          {/* Media Section */}
          <div className="flex items-center justify-center relative">
            {media.type === "video" ? (
              <iframe
                width={560}
                height={315}
                src={`https://www.youtube.com/watch?v=wmde-jlQ5bY`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="relative w-full">
                <img
                  src={photos[currentPhotoIndex] || "/placeholder.svg"}
                  alt={media.alt || `${title} - Image ${currentPhotoIndex + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg max-h-96 object-cover transition-all duration-300 animate-in fade-in-0"
                />
                {/* 
                {photos.length > 1 && (
                  <>
                    <button
                      onClick={prevPhoto}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0f1b61] rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={nextPhoto}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0f1b61] rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                      {photos.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPhotoIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentPhotoIndex ? "bg-[#7f15e9] scale-125" : "bg-white/70 hover:bg-white/90"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )} */}
              </div>
            )}
          </div>
        </div>

        {/* Expanded Details Section */}
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
