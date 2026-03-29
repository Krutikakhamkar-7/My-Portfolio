import myPhoto from "./assets/myphoto.jpeg";
export default function PortfolioWebsite() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Canva",
    "UI/UX Design",
    "Git & GitHub",
    "C",
    "C++",
    "Python",
    "Java",
    "Visual Basics",
    "MySQL",
    "PostgresQL",
    "Dart",
    "Bootstrap",
    "Flutter",
    "PHP"
  ];

  const projects = [
    {
      title: "AI SEO Strategy Project",
      description:
        "A website and SEO strategy project built during my internship assignment.",
      tech: ["React", "CSS", "SEO"]
    },
    {
      title: "Password Generator",
      description:
        "A random password generator web app made using JavaScript and DOM manipulation.",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Hackathon UI/UX Project",
      description:
        "A creative UI/UX design project created during my college hackathon.",
      tech: ["Figma", "UI/UX", "Design"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-sky-100 text-slate-800 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-pink-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            About<span className="text-fuchsia-500">Me</span>
          </h1>

          <div className="hidden md:flex gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-fuchsia-500 transition">About</a>
            <a href="#skills" className="hover:text-fuchsia-500 transition">Skills</a>
            <a href="#projects" className="hover:text-fuchsia-500 transition">Projects</a>
            <a href="#contact" className="hover:text-fuchsia-500 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-fuchsia-500 text-sm uppercase tracking-[0.3em] mb-4">
            Hello,It's
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Krutika
          </h2>

          <h3 className="text-2xl md:text-3xl text-slate-600 mb-6">
            Student • Aspiring Web Developer • Designer • Full Stack Enthusiast   
          </h3>

          <p className="text-slate-500 text-lg leading-8 max-w-xl mb-8">
  I love creating beautiful websites, designing user-friendly experiences, and exploring new technologies. I enjoy turning ideas into creative digital experiences that are both visually attractive and easy to use. Whether it’s designing a clean layout, choosing the perfect colors, or writing the code that brings everything to life, I truly enjoy every part of the process.
</p>

<div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 transition font-medium"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl border border-slate-700 hover:border-pink-400 hover:text-fuchsia-500 transition"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
  <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-fuchsia-400 via-pink-400 to-sky-400 p-1 shadow-2xl">
    <div className="w-full h-full rounded-3xl bg-white overflow-hidden">
            <img
        src={myPhoto}
        alt="My Photo"
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>
  </div>
  </div>
</section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-white border border-pink-100 rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-slate-600 leading-8 text-lg">
            I am a passionate and dedicated student with a strong interest in web development, graphic design, and creative problem solving. I enjoy transforming ideas into real websites and digital experiences that are both visually appealing and functional. For me, every project is an opportunity to combine creativity with technology and create something meaningful.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white border border-pink-100 rounded-2xl p-5 text-center hover:border-pink-400 hover:-translate-y-1 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white border border-pink-100 rounded-3xl p-6 hover:border-pink-400 transition shadow-lg"
            >
              <div className="h-40 rounded-2xl bg-slate-800 mb-5 flex items-center justify-center text-slate-500">
                Project Image
              </div>

              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-slate-500 leading-7 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-sm bg-pink-500/10 text-pink-300 border border-pink-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-pink-100 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>

          <p className="text-slate-600 mb-8 max-w-2xl mx-auto leading-8">
            If you'd like to work with me, collaborate on a project, or simply say hello,
            feel free to contact me.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="mailto:your@email.com"
              className="px-6 py-3 rounded-2xl bg-pink-500 hover:bg-pink-400 transition"
            >
              krutikakhamkar07@gmail.com
            </a>

            <a
              href="https://github.com/Krutikakhamkar-7"
              className="px-6 py-3 rounded-2xl border border-slate-700 hover:border-pink-400 hover:text-fuchsia-500 transition"
            >
              GitHub
            </a>

            <a
              href="www.linkedin.com/in/krutika-khamkar-5a2660319"
              className="px-6 py-3 rounded-2xl border border-slate-700 hover:border-pink-400 hover:text-fuchsia-500 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-pink-100 mt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-500 text-sm">
          © 2026 Krutika. Built with React and Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}
