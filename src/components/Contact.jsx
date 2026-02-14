import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaPaperPlane, 
  FaCheckCircle,
  FaRegSmile,
  FaRegCommentDots,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
  FaArrowRight,
  FaRegCopy
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copied, setCopied] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitStatus) setSubmitStatus(null);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("uditgoyal0905@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: "https://github.com/Uditgoyal09", 
      label: "GitHub",
      color: "hover:bg-gray-900",
      bgColor: "bg-gray-100"
    },
    { 
      icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/udit-goyal09/", 
      label: "LinkedIn",
      color: "hover:bg-blue-400",
      bgColor: "bg-[#e8f4ff]"
    },
    { 
      icon: FaInstagram, 
      href: "https://www.instagram.com/", 
      label: "Instagram",
      color: "hover:bg-pink-400",
      bgColor: "bg-[#ffe8f0]"
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="mx-auto max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-full mb-4"
          >
            Get In Touch
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let&apos;s Create Something
            <span className="relative ml-3">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Amazing
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-gradient-to-r from-blue-200/50 to-purple-200/50 -z-10 rounded-full"
              />
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? I&apos;d love to hear from you. 
            Drop me a message and I&apos;ll get back to you within 24-48 hours.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left Column - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Contact Cards */}
            <div className="grid gap-4">
              {[
                { 
                  icon: HiOutlineMail, 
                  label: "Email", 
                  value: "uditgoyal0905@gmail.com",
                  action: handleCopyEmail,
                  actionLabel: copied ? "Copied!" : "Copy",
                  // bgColor: "from-blue-50 to-blue-100/50",
                  iconBg: "bg-blue-400"
                },
                { 
                  icon: HiOutlineLocationMarker, 
                  label: "Location", 
                  value: "India (Available for Remote)",
                  // bgColor: "from-purple-50 to-purple-100/50",
                  iconBg: "bg-purple-500"
                },
                { 
                  icon: HiOutlineClock, 
                  label: "Response Time", 
                  value: "Within 24-48 hours",
                  // bgColor: "from-orange-50 to-orange-100/50",
                  iconBg: "bg-green-500"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className={`relative group p-5 rounded-2xl bg-gradient-to-br border border-gray-200/50 backdrop-blur-sm overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <div className="flex items-start gap-4">
                    <div className={`${item.iconBg} p-3 rounded-xl text-white shadow-lg`}>
                      <item.icon className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-500 mb-1">{item.label}</p>
                      <p className="text-gray-800 font-semibold">{item.value}</p>
                    </div>
                    {item.action && (
                      <button
                        onClick={item.action}
                        className="px-3 py-1.5 bg-white/80 backdrop-blur rounded-lg text-xs font-medium text-gray-600 hover:bg-white transition-colors"
                      >
                        {item.actionLabel}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FaRegSmile className="text-gray-400 bg-yellow-300 rounded-lg" />
                Connect With Me
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group relative flex items-center gap-3 px-5 py-3 ${social.bgColor} rounded-xl transition-all duration-300 ${social.color} hover:text-white`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-lg" />
                    <span className="text-sm font-medium">{social.label}</span>
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute -right-2 -top-2 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center"
                    >
                      <FaArrowRight className="text-xs text-gray-700" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full opacity-50"
                />
              </div>
              <span className="text-xs text-green-700 ">
                Currently available for freelance work and opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div variants={itemVariants}>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-white rounded-2xl border border-gray-200/50 shadow-xl p-6 sm:p-8"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <FaRegCommentDots className="text-gray-400" />
                  Send a Message
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  I&apos;ll respond within 24-48 hours
                </p>
              </div>

              <div className="space-y-5">
                {/* Name Input */}
                <div className="relative">
                  <label 
                    htmlFor="from_name" 
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'name' || formData.from_name
                        ? '-top-2 text-xs bg-white px-2 text-gray-600'
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-200 rounded-xl focus:border-gray-900 outline-none transition-colors duration-200"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label 
                    htmlFor="from_email" 
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'email' || formData.from_email
                        ? '-top-2 text-xs bg-white px-2 text-gray-600'
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    id="from_email"
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-200 rounded-xl focus:border-gray-900 outline-none transition-colors duration-200"
                  />
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label 
                    htmlFor="message" 
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'message' || formData.message
                        ? '-top-2 text-xs bg-white px-2 text-gray-600'
                        : 'top-3 text-gray-400'
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-gray-200 rounded-xl focus:border-gray-900 outline-none transition-colors duration-200 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full group relative overflow-hidden rounded-xl bg-gray-900 px-6 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
                >
                  <FaCheckCircle className="text-green-500" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              {/* Form Footer Note */}
              <p className="text-xs text-gray-400 text-center mt-4">
                Your information is safe with me. I respect your privacy.
              </p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;