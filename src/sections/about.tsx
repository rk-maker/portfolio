"use client";

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
      <div className="container px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-12 text-4xl font-bold md:text-5xl text-font">
            About Me
          </h2>

          <div className="space-y-12">
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-font/80">
              I'm a passionate full-stack developer with expertise in modern web
              technologies. I love creating efficient, scalable, and
              user-friendly applications that solve real-world problems.
            </p>

            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
              <button
                onClick={handleResumeDownload}
                className="px-8 py-4 font-semibold transition-colors duration-300 rounded-full bg-thirdy text-primary hover-primary"
              >
                Download Resume
              </button>

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
      </div>
    </section>
  );
}
