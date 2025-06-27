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
    <section
      id="about"
      className="min-h-screen py-20"
      style={{ backgroundColor: "#CCF381" }}
    >
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-5xl font-bold text-primary mb-16">About Me</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web
            technologies. I love creating efficient, scalable, and user-friendly
            applications that solve real-world problems.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
            <button
              onClick={handleResumeDownload}
              className="bg-primary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              Download Resume
            </button>

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="text-primary font-semibold">Email:</span>
                <a
                  href="mailto:hello@example.com"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  hello@example.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-primary font-semibold">Phone:</span>
                <a
                  href="tel:+1234567890"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
