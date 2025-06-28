"use client";

import StripedButton from "@/components/button";
import SectionHeader from "@/components/sectionHeader";

export default function AboutSection() {
  const handleResumeDownload = () => {
    // Create a dummy PDF download
    const link = document.createElement("a");
    link.href = "/placeholder.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <section id="about" className="min-h-screen py-24 bg-primary">
      <div className="container  px-8 mx-auto">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            heading="Meet the Maker"
            description="Full-stack developer passionate about clean code, smart solutions, and continuous learning. Always curious, always improving."
          />

          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            <StripedButton onClick={() => console.log("Clicked!")}>
              Hire Me
            </StripedButton>

            <div className="flex flex-col gap-6 text-center sm:flex-row sm:text-left">
              <div>
                <span className="text-sm text-font/60">Email</span>
                <div>
                  <a
                    href="mailto:hello@example.com"
                    className="transition-colors text-thirdy hover:text-font"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
              <div>
                <span className="text-sm text-font/60">Phone</span>
                <div>
                  <a
                    href="tel:+1234567890"
                    className="transition-colors text-thirdy hover:text-font"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
