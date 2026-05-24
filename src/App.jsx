export default function Portfolio() {
  const projects = [
    {
      title: "Internship Management System",
      tech: "React Native, Firebase, Expo",
      desc: "A mobile platform that allows students to apply for internships, upload CVs, and track approval status in real time.",
    },
    {
      title: "Crypto Dashboard",
      tech: "React, Vite, API Integration",
      desc: "A responsive crypto dashboard with token tracking, wallet UI concepts, and live price monitoring.",
    },
    {
      title: "AI Virtual Assistant",
      tech: "Python",
      desc: "A Python-based assistant project focused on automation, command handling, and user interaction.",
    },
  ];

  const skills = [
    "Python",
    "React",
    "JavaScript",
    "Firebase",
    "Git & GitHub",
    "Technical Support",
    "Live Chat Support",
    "Problem Solving",
    "Communication",
    "API Integration",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              Remote Support & Tech Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Gideon <span className="text-gray-400">Ofosu</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Computer Science graduate focused on technical support,
              customer communication, and modern web applications. Skilled
              in troubleshooting, remote collaboration, and building digital
              solutions that improve user experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6">Quick Overview</h2>

            <div className="space-y-5 text-gray-300">
              <div>
                <p className="text-sm text-gray-500">Education</p>
                <p>Bachelor of Technology in Computer Science</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Focus Areas</p>
                <p>Technical Support • Customer Support • Web Development</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p>Accra, Ghana</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Availability</p>
                <p>Open to Remote Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-20 py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 md:px-20 py-20 border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300"
              >
                <div className="h-40 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 mb-6 flex items-center justify-center text-gray-500">
                  Project Preview
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 mb-4">{project.tech}</p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.desc}
                </p>

                <button className="px-5 py-2 rounded-xl bg-white text-black font-medium hover:scale-105 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 md:px-20 py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Why Work With Me</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Strong Communication
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Able to communicate clearly with customers and teams while
                handling support requests efficiently and professionally.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Technical Troubleshooting
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Comfortable diagnosing user issues, identifying bugs, and
                guiding users through technical solutions.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Remote Work Ready
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Organized, adaptable, and capable of maintaining performance
                and consistency in remote environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-20 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Let’s Work Together</h2>

          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            I’m currently open to remote opportunities in customer support,
            technical support, chat operations, and web development.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 inline-block">
            <p className="text-gray-400 mb-2">Email</p>
            <p className="text-2xl font-semibold mb-6">
              ofosugideon002@gmail.com
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <button className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
                Download Resume
              </button>

              <button className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition">
                GitHub Profile
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
