import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import project1Video from "../assets/videos/project1.mp4";
import project2Image from "../assets/videos/project-2.jpg";
import project3Video from "../assets/videos/project3.mp4";
import project4Video from "../assets/videos/project4.mp4";
import project5Video from "../assets/videos/project5.mp4";

function Projects() {
  const projects = [
    {
      title: "Helping Hand - NGO Website",
      description:
        "Built a static, responsive donation website with WCAG-compliant UI/UX and an optimized mobile-first flow to enhance donor experience and reduce drop-offs.",
      tech: ["HTML", "CSS", "Tailwind", "JavaScript", "WCAG UI/UX"],
      github: "https://github.com/Uditgoyal09/Helping-Hands-NGO",
      live: "#",
      mediaType: "video",
      media: project1Video,
    },
    {
      title: "Ganesh Jeweller - Wholesale Ordering Platform",
      description:
        "Built a wholesale jewelry ordering platform for retailers to browse collections, place bulk orders, and securely manage order data with real-time database integration.",
      tech: ["React", "TypeScript", "Supabase", "Tailwind"],
      github: "https://github.com/Uditgoyal09/Jewellery-Webiste",
      live: "#",
      mediaType: "image",
      media: project2Image,
    },
    {
      title: "Paisa Growth - Fintech Website",
      description:
        "A digital wealth platform focused on helping users invest and grow capital with guided flows and trust-driven product experience.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
      github: "https://github.com/Uditgoyal09/Jewellery-Webiste",
      live: "#",
      mediaType: "video",
      media: project3Video,
    },
    {
      title: "FinanceAI",
      description:
        "AI-powered financial analytics platform designed to broaden access to smart forecasting and advanced financial analysis tools.",
      tech: ["React", "Tailwind", "Framer Motion", "TypeScript", "AI Model"],
      github: "https://github.com/Uditgoyal09/FinanceAI",
      live: "#",
      mediaType: "video",
      media: project5Video,
    },
    {
      title: "Coseverse Academy - Learning Platform",
      description:
        "A learning platform delivering training programs, business-aligned outcomes, and long-term learner engagement.",
      tech: ["HTML", "CSS", "Tailwind", "JavaScript", "UI/UX"],
      github: "https://github.com/Uditgoyal09/LMS-File",
      live: "#",
      mediaType: "video",
      media: project4Video,
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="relative px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 md:py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto relative">
        <h1 className="absolute text-[80px] md:text-[130px] lg:text-[170px] font-black bg-gradient-to-b from-gray-300 to-transparent bg-clip-text text-transparent -top-20 md:-top-28 left-0 pointer-events-none">
          PROJECTS
        </h1>

        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-14 md:mb-16 tracking-tight"
          >
            Built With Curiosity
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7"
          >
            {projects.map((project, index) => {
              const hasLiveLink = project.live && project.live !== "#";

              return (
                <motion.article
                  key={index}
                  variants={cardVariant}
                  className="group h-full flex flex-col bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 md:p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] hover:border-black/20"
                >
                  <div className="mb-5 overflow-hidden rounded-xl border border-black/10 bg-black/5">
                    {project.mediaType === "video" ? (
                      <video
                        src={project.media}
                        className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={project.media}
                        alt={project.title}
                        className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-black">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-[15px] leading-7 mb-5 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-gray-700 transition-colors duration-300 group-hover:bg-gray-200/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-1 flex items-center gap-8 text-sm font-medium text-gray-900">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 group"
                    >
                      <FaGithub />
                      <span className="relative">
                        GitHub
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                      </span>
                    </a>

                    {hasLiveLink ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group"
                      >
                        <HiOutlineExternalLink />
                        <span className="relative">
                          Live
                          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                        </span>
                      </a>
                    ) : (
                      <span className="text-gray-400">Live Soon</span>
                    )}
                  </div>
                </motion.article>
              );
            })}

            <motion.article
              variants={cardVariant}
              className="group h-full flex flex-col rounded-2xl border border-black/10 bg-gradient-to-br from-black to-gray-800 p-5 sm:p-6 md:p-7 shadow-[0_10px_28px_rgba(0,0,0,0.18)] text-white transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_20px_44px_rgba(0,0,0,0.28)] hover:border-white/30"
            >
              <div className="mb-5 rounded-xl border border-white/20 bg-white/10 h-40 sm:h-44 md:h-48 flex items-center justify-center">
                <span className="text-sm text-white/70 uppercase tracking-[0.18em]">
                  More Projects
                </span>
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-3">
                More Work
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold leading-tight">
                Explore Complete Project Archive
              </h3>
              <p className="mt-4 text-sm sm:text-[15px] leading-7 text-white/80 flex-1">
                See additional case studies, experiments, and production-ready
                builds beyond these featured projects.
              </p>

              <div className="mt-auto pt-6">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  View All Projects
                </a>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
