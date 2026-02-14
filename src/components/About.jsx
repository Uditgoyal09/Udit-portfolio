import { motion } from "framer-motion";

function About() {
  const laptopBars = [
    "w-24 sm:w-32 md:w-32",
    "w-20 sm:w-28 md:w-28",
    "w-16 sm:w-24 md:w-24",
    "w-12 sm:w-20 md:w-20",
    "w-12 sm:w-20 md:w-16",
    "w-12 sm:w-20 md:w-12",
    "w-12 sm:w-20 md:w-8",


  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#f3f3f3] overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-14 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="relative mx-auto w-full max-w-7xl">
        <h1 className="hidden sm:block absolute top-12 md:top-0 left-0 md:-left-8 lg:-left-14 pointer-events-none select-none text-[110px] md:text-[150px] lg:text-[190px] font-black bg-gradient-to-b from-gray-300 to-transparent bg-clip-text text-transparent">
          ABOUT
        </h1>

        <div className="relative z-10 grid md:grid-cols-2 items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 pt-4 sm:pt-16 md:pt-20 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h2 className="text-center md:text-left text-[26px] sm:text-4xl md:text-[44px] lg:text-5xl font-bold leading-tight tracking-tight mb-4 sm:mb-6 md:mb-10">
              Crafting Experiences <br />
              Beyond Just Code.
            </h2>

            <div className="mx-auto md:mx-0 w-full max-w-[620px]">
              <div className="mt-2 sm:mt-6 md:mt-8 rounded-[14px] sm:rounded-[18px] border border-black/25 bg-[#f8f8f8] shadow-lg hover:shadow-2xl overflow-hidden">
                <div className="relative h-6 sm:h-8 md:h-9 px-3 bg-[#ececec] border-b border-black/10 flex items-center justify-center shadow-[inset_0_6px_10px_rgba(0,0,0,0.06)]">
                  <div className="absolute left-2 sm:left-3 flex gap-1.5 sm:gap-2">
                    <span className="h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-red-400"></span>
                    <span className="h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-yellow-400"></span>
                    <span className="h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 rounded-full bg-green-400"></span>
                  </div>
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gray-400/80"></span>
                </div>

                <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                  <pre className="overflow-x-auto whitespace-pre-wrap break-words text-[10px] sm:text-xs md:text-sm leading-4 sm:leading-5 md:leading-6 text-gray-700 font-mono">
                    <code>
                      {`const developer = {
  name: "Udit Goyal",
  role: "Full-Stack Developer",
  passion: "Building Products",
  stack: ["React", "Node.js", "Express", "TypeScript", "MongoDB"],
  motto: "Code with purpose."
};`}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="mx-auto h-2 sm:h-2.5 md:h-3 w-[92%] sm:w-[88%] md:w-[85%] bg-[#d9d9d9] border border-black/10 rounded-b-2xl"></div>
              <div className="mx-auto mt-1 flex flex-col items-center gap-1 sm:gap-1.5 ">
                {laptopBars.map((barWidth, index) => (
                  <div
                    key={index}
                    className={`h-1.5 sm:h-2 ${barWidth} bg-[#c6c6c6] rounded-b-full `}
                  ></div>

                ))}
                <div className="mx-auto h-2 sm:h-2.5 md:h-3 w-[62%] sm:w-[58%] md:w-[55%] bg-[#d9d9d9] border border-black/10 rounded-b-2xl "></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full space-y-5 sm:space-y-6 md:space-y-8"
          >
            <p className="font-serif text-gray-600 text-[15px] sm:text-base md:text-[17px] lg:text-[18px] leading-7 sm:leading-8 md:leading-8 lg:leading-9">
              I'm a 3rd year Computer Science student focused on becoming a
              full-stack engineer through the MERN ecosystem. While frontend is
              currently my strongest edge, I intentionally build complete systems
              from responsive interfaces to structured backend architecture.
              <br />
              <br />
              I care deeply about clean UI, smooth animations, scalable structure
              and performance-driven design. For me, development is not just
              writing code. It is engineering experiences that feel intentional,
              polished, and efficient.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-5 md:p-6 border border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-black/10 hover:scale-[1.01]">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-sm text-gray-500">
                  React - Next.js - Tailwind - Framer Motion
                </p>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-5 md:p-6 border border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-black/10 hover:scale-[1.01]">
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-sm text-gray-500">
                  Node.js - Express - MongoDB - Mongoose - Firebase
                </p>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-5 md:p-6 border border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-black/10 hover:scale-[1.01]">
                <h3 className="font-semibold mb-2">Strength</h3>
                <p className="text-sm text-gray-500">
                  Clean UI - Animation Focus - Performance
                </p>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-5 md:p-6 border border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-black/10 hover:scale-[1.01]">
                <h3 className="font-semibold mb-2">Mindset</h3>
                <p className="text-sm text-gray-500">
                  Structured Thinking - Fast Learning - Discipline
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
