import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isInHero, setIsInHero] = useState(true);
  const menuRef = useRef(null);

  const navItems = ["home", "about", "projects", "contact"];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Detect active section on scroll + refresh
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const currentY = window.scrollY;
      const heroSection = document.getElementById("home");
      const heroBottom = heroSection
        ? heroSection.offsetTop + heroSection.offsetHeight
        : window.innerHeight;

      setIsInHero(currentY < heroBottom - 120);

      for (let id of navItems) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const showCenteredNavbar = !isInHero;
  const isExpandedNavbar = isInHero;

  return (
    <nav className={`fixed top-0 inset-x-0 text-black z-50 transition-all duration-300 ${isExpandedNavbar ? "pt-0" : "pt-4"
        }`}>
      {/* Desktop Navbar */}
      <div className="hidden md:block ">
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 280, damping: 30 }}
          className={`mx-auto flex items-center gap-4 relative ${showCenteredNavbar
              ? "w-fit rounded-full bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_8px_20px_rgba(0,0,0,0.08)] px-2 py-2"
              : "w-full rounded-none bg-white/10 backdrop-blur-2xl border-b border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.08)] px-4 md:px-8 py-3"
            }`}
        >
          {isExpandedNavbar && (
            <button
              onClick={() => scrollToSection("home")}
              className="px-2 py-2 text-sm md:text-base font-semibold tracking-wide"
            >
              Udit Goyal
            </button>
          )}

          <div
            className={`flex items-center gap-1 md:gap-2 ${isExpandedNavbar ? "ml-auto" : ""
              }`}
          >
            {navItems.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative px-4 md:px-5 py-2 rounded-full text-[11px] md:text-sm tracking-wide font-medium"
              >
                {active === id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-black rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}

                <span
                  className={`relative z-10 ${active === id ? "text-white" : "text-black"
                    }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </span>
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 md:px-5 py-2 rounded-full text-[11px] md:text-sm tracking-wide font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Hire Me
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex justify-end px-4 pt-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl bg-gray-100 rounded-full p-2 shadow-sm border border-black/10"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="absolute right-4 top-20 bg-[#eaeaea] rounded-2xl shadow-md px-8 py-6 md:hidden border border-black/10"
          >
            <div className="flex flex-col gap-5 text-center text-sm tracking-wide font-light">
              {navItems.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={active === id ? "font-semibold" : ""}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-1 rounded-full bg-blue-600 text-white px-4 py-2 font-medium hover:bg-blue-700 transition-colors"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

export default Navbar;
