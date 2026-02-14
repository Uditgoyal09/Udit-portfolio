import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiArrowUp, HiOutlineMail } from "react-icons/hi";
import emailjs from "@emailjs/browser";

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_b2dthme","template_4en6qr4",
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        },
        "jLZSPQeHeSpYyBxF5"
      )
      .then(() => {
        setSubmitStatus("success");
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
  console.error("Error text:", error.text);
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <footer className=" relative bg-[#111111] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-14 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-3">
              Full-Stack Developer
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
              Udit Goyal
            </h3>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-7 max-w-md">
              Building robust web applications with clean architecture,
              production-ready APIs, and polished frontend experiences.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-white/60 mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2 text-sm text-white/85">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-white/60 mb-4">
              Connect
            </h4>
            <a
              href="mailto:uditgoyal0905@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white transition-colors"
            >
              <HiOutlineMail />
              uditgoyal0905@gmail.com
            </a>

            <div className="mt-5 flex items-center gap-3 text-lg">
              <a
                href="https://github.com/Uditgoyal09"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/udit-goyal09/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-white/20 hover:bg-[#0077B5] hover:border-[#0077B5] transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full border border-white/20 hover:bg-[#E4405F] hover:border-[#E4405F] transition-all duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-white/60">
          <p>� {year} Udit Goyal. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
          >
            Back to top
            <HiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
