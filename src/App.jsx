import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white px-6">

      {/* HERO SECTION */}
      <div className="flex flex-col items-center justify-center text-center h-screen">
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Gideon Ofosu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mt-4 max-w-xl"
        >
          Computer Science graduate specializing in Technical Support, Web Development, and Remote Customer Solutions.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex gap-4"
        >
          <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition">
            View Projects
          </a>

          <a href="#contact" className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded-xl transition">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto py-20">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
          <p className="text-gray-300 leading-relaxed">
            I am a Computer Science graduate focused on building modern web applications, providing technical support,
            and delivering excellent customer experience through digital solutions. I enjoy solving problems and building scalable systems.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Python",
            "React",
            "JavaScript",
            "Firebase",
            "Git & GitHub",
            "Technical Support",
            "API Integration",
            "Problem Solving",
            "Live Chat Support"
          ].map((skill, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT SECTION */}
      <section id="projects" className="max-w-5xl mx-auto py-20">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-bold">Support Dashboard</h3>
            <p className="text-gray-400 mt-2">
              A technical support system for managing customer requests and tickets.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-bold">Portfolio Website</h3>
            <p className="text-gray-400 mt-2">
              Modern responsive portfolio built with React and Tailwind CSS.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-5xl mx-auto py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-gray-400 mb-6">
          Open to remote opportunities and freelance projects.
        </p>

        <a
          href="mailto:youremail@gmail.com"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition"
        >
          Send Email
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 border-t border-white/10">
        © 2026 Gideon Ofosu. All rights reserved.
      </footer>

    </div>
  );
}
