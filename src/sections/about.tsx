"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import SectionHeader from "@/components/sectionHeader";
import StripedButton from "@/components/button";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { client } from "@/sanity/lib/client";
import { VscChromeClose } from "react-icons/vsc";
const characterCountLimit = 200;
const date = new Date();

interface ContactInfoData {
  email?: string;
  phoneNumber?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  mailToUrl?: string;
  twitterUrl?: string;
}

const socialVariants: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: (i: number) => ({
    x: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.6, 0, 0.3, 1],
    },
  }),
};

export default function AboutSection() {
  const [lineRef, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });
  const [contactInfo, setContactInfo] = useState<ContactInfoData>({
    email: "m.raffaykhan@outlook.com",
    phoneNumber: "(+49)-15567060036",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-raffay-khan-58b3ba177/",
    githubUrl: "https://github.com/rk-maker",
    mailToUrl: "mailto:m.raffaykhan@outlook.com",
    twitterUrl: "https://x.com/Rk_raffay",
  });
  const socialIconsControls = useAnimation();
  const aboutElementsAnimationControls = useAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
  });
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reasonCharacterCount, setReasonCharacterCount] = useState(0);
  const aboutElementsAnimation: Variants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: [0.6, 0, 0.3, 1],
      },
    }),
  };

  useEffect(() => {
    async function sequence() {
      if (inView) {
        await socialIconsControls.start("visible");
        aboutElementsAnimationControls.start("visible");
      }
    }
    sequence();
  }, [socialIconsControls, aboutElementsAnimationControls, inView]);

  useEffect(() => {
    async function loadContactInfo() {
      const query = `*[_type == "contactInfo"][0]{
        email,
        phoneNumber,
        linkedinUrl,
        githubUrl,
        mailToUrl,
        twitterUrl
      }`;

      try {
        const data = await client.fetch<ContactInfoData>(query);
        if (data) {
          setContactInfo((current) => ({ ...current, ...data }));
        }
      } catch (error) {
        console.error("Failed to load contact info:", error);
      }
    }

    loadContactInfo();
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setFeedback(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFeedback(null);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));

    if (name === "reason") {
      const trimmedReason = value.trim();
      const characters = trimmedReason.length;
      setReasonCharacterCount(characters);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedReason = formData.reason.trim();
    const characterCount = trimmedReason.length;

    if (characterCount > characterCountLimit) {
      setFeedback({
        type: "error",
        message: `Please keep your reason under ${characterCountLimit} characters.`,
      });
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFeedback({
        type: "error",
        message:
          "Email delivery is not configured yet. Please add your EmailJS environment variables to continue.",
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          user_email: formData.email,
          reason: trimmedReason,
        },
        publicKey,
      );

      setFeedback({
        type: "success",
        message: "Your request is on its way. I’ll be in touch shortly.",
      });
      setFormData({ name: "", email: "", reason: "" });
      setTimeout(() => setIsModalOpen(false), 1200);
    } catch (error) {
      console.error("Failed to send resume request email:", error);
      setFeedback({
        type: "error",
        message:
          "Something went wrong while sending your request. Please try again or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleResumeDownload = () => {
  //   const link = document.createElement("a");
  //   link.href =
  //     "https://drive.google.com/uc?export=download&id=1MoixaiihdrGbjAh9biVJhsbKtfZ6IJre";
  //   link.download = "resume.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const socialIcons = [
    { name: "Twitter", icon: FaTwitter, url: contactInfo.twitterUrl ?? "#" },
    { name: "GitHub", icon: FaGithub, url: contactInfo.githubUrl ?? "#" },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: contactInfo.linkedinUrl ?? "#",
    },
    {
      name: "Mail",
      icon: IoMdMail,
      url: contactInfo.mailToUrl ?? `mailto:${contactInfo.email ?? ""}`,
    },
  ];

  return (
    <section
      id="about"
      className="h-screen w-full justify-center items-center flex flex-col bg-primary"
    >
      <div className="container  mx-auto max-w-7xl " ref={lineRef}>
        {/* Section Header */}
        <div>
          <SectionHeader
            animated={false}
            heading="Meet the Maker"
            description="Full-stack developer passionate about clean code, smart solutions, and continuous learning. Always curious, always improving."
          />
        </div>
        <div className="flex  mt-8">
          {socialIcons.map((icon, i) => {
            const Icon = icon.icon;
            const isEmail = icon.name === "Mail";

            return (
              <motion.a
                key={icon.name}
                href={isEmail ? `mailto:${icon.url}` : icon.url}
                target={isEmail ? undefined : "_blank"} // add this line
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="mr-15 text-lg text-font hover:text-thirdy transition-colors duration-300"
                custom={i}
                variants={socialVariants}
                initial="hidden"
                animate={socialIconsControls}
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>
        {/* INfo Details */}
        <div className="mt-8 sm:flex-row">
          <div className="flex flex-col gap-20 text-center sm:flex-row sm:text-left">
            <motion.div
              custom={2}
              variants={aboutElementsAnimation}
              initial="hidden"
              animate={aboutElementsAnimationControls}
            >
              <span className="text-sm text-font">Email</span>
              <div>
                <a
                  href={
                    contactInfo.mailToUrl ?? `mailto:${contactInfo.email ?? ""}`
                  }
                  className="transition-colors text-thirdy hover:text-font"
                >
                  {contactInfo.email ?? "m.raffaykhan@outlook.com"}
                </a>
              </div>
            </motion.div>
            <motion.div
              custom={3}
              variants={aboutElementsAnimation}
              initial="hidden"
              animate={aboutElementsAnimationControls}
            >
              <span className="text-sm text-font">Phone</span>
              <div>
                <a
                  href={`tel:${contactInfo.phoneNumber ?? "+4915567060036"}`}
                  className="transition-colors text-thirdy hover:text-font"
                >
                  {contactInfo.phoneNumber ?? "(+49)-15567060036"}
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div
            custom={4}
            variants={aboutElementsAnimation}
            initial="hidden"
            animate={aboutElementsAnimationControls}
            className="mt-8 sm:mt-6"
          >
            <StripedButton onClick={handleOpenModal}>
              Request resume
            </StripedButton>
          </motion.div>
        </div>

        {isModalOpen ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-thirdy/2 px-4 py-6"
            onClick={handleCloseModal}
          >
            <div
              role="dialog"
              aria-modal="true"
              className="w-full max-w-xl rounded-2xl  bg-primary p-6 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-secondary">
                    Resume request
                  </p>
                  <h3 className="mt-3 text-3xl font-bold text-font">
                    Let's Connect
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className=" right-4 top-4 z-10 rounded-full   hover:bg-secondary px-2 py-2 text-3xl  text-font  transition"
                >
                  <VscChromeClose className="text-thirdy size-7" />
                </button>
              </div>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <label className="block text-md font-medium text-font ">
                  <span className="flex items-center gap-1">
                    Name
                    <span className="text-rose-500" aria-label="required">
                      *
                    </span>
                  </span>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className=" font-normal mt-2 w-full rounded-xl border border-secondary/70 bg-white/80 px-4 py-3 text-font outline-none transition focus:border-thirdy focus:ring-2 focus:ring-secondary"
                  />
                </label>

                <label className="block text-md font-medium text-font">
                  <span className="flex items-center gap-1">
                    Email
                    <span className="text-rose-500" aria-label="required">
                      *
                    </span>
                  </span>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    required
                    className=" font-normal mt-2 w-full rounded-xl border border-secondary/70 bg-white/80 px-4 py-3 text-font outline-none transition focus:border-thirdy focus:ring-2 focus:ring-secondary "
                  />
                </label>

                <label className="block text-md font-medium text-font">
                  <span className="flex items-center gap-1">
                    Reason
                    <span className="text-sm font-normal text-font/60">
                      (Optional)
                    </span>
                  </span>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    placeholder="Share why you'd like my resume and what you’re looking for."
                    rows={6}
                    maxLength={1200}
                    className=" font-normal mt-2 w-full resize-none rounded-xl border border-secondary/70 bg-white/80 px-4 py-3 text-font outline-none transition focus:border-thirdy focus:ring-2 focus:ring-secondary"
                  />
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span
                      className={
                        reasonCharacterCount > characterCountLimit
                          ? "text-rose-500 font-normal"
                          : "text-font/60  font-normal"
                      }
                    >
                      {reasonCharacterCount}/{characterCountLimit} characters
                    </span>
                  </div>
                </label>

                {feedback ? (
                  <p
                    className={`rounded-xl border px-4 py-3 text-sm ${
                      feedback.type === "success"
                        ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                        : "border-rose-300 bg-rose-50 text-rose-700"
                    }`}
                  >
                    {feedback.message}
                  </p>
                ) : null}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <p className="text-sm font-normal text-font/60">
                    I’ll use this only to respond to your request.
                  </p>
                  <StripedButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send request"}
                  </StripedButton>
                </div>
              </form>
            </div>
          </div>
        ) : null}
        {/* Bottom line and name */}
        <div className="mt-8 w-full border-t border-gray-300"></div>
        <motion.p
          custom={5}
          variants={aboutElementsAnimation}
          initial="hidden"
          animate={aboutElementsAnimationControls}
          className="mt-4 text-center text-sm text-gray-500"
        >
          {`© ${date.getFullYear()} Raffay Khan`}
        </motion.p>
      </div>
    </section>
  );
}
