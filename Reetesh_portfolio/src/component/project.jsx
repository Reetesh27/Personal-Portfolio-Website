// src/component/Project.jsx
import { ExternalLink, Github } from "lucide-react";
import Slidein from "./SlideIn.jsx"

const projects = [
  {
    title: "Doctor Portfolio Website",
    description: "A professional portfolio site for doctors with appointment booking, reviews, and statistics.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    // github: "https://github.com/your-repo",
    demo: "https://drghansham.com",
  },
  {
    title: "Student.ai (MVP)",
    description: "AI-powered study assistant with note summarizer, flashcards, and planner.",
    tech: ["React", "Express", "MongoDB", "OpenAI API"],
    // github: "https://github.com/your-repo",
    // demo: "https://your-live-demo.com",
  },
  {
    title: "Virtual Assistant",
    description: "Voice-based assistant built with Python, converted into a web app.",
    tech: ["Python", "Flask", "React"],
    // github: "https://github.com/your-repo",
    // demo: "https://your-live-demo.com",
  },
];

export default function Project() {
  return (
    <section id="projects" className="py-16 bg-black text-white min-h-[90vh]">
      <Slidein direction="up">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#76e3b5]">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl flex flex-col justify-between shadow-lg hover:shadow-green-400/40 transition"
            >
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-gray-400">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-green-400"
                >
                  <Github size={20} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-green-400"
                >
                  <ExternalLink size={20} /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </Slidein>
    </section>
  );
}
