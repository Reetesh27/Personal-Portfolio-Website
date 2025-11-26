import { Code, Layout, Sparkles, Workflow } from "lucide-react";
import Slidein from "./SlideIn.jsx";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white py-20 px-6 flex flex-col items-center"
    >
      <Slidein direction="up">
        <h2 className="text-4xl md:text-5xl font-bold text-[#76e3b5] text-center mb-12">
          Services
        </h2>

        <p className="text-gray-300 text-center max-w-3xl text-lg mb-16">
          I build modern, fast, and user-friendly websites and AI-powered tools 
          that help students, professionals, and businesses grow online.
        </p>
      </Slidein>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">

        {/* ---------- Portfolio Website ---------- */}
        <Slidein direction="up">
          <div className="bg-[#161b22] p-8 rounded-2xl border border-transparent hover:border-green-400 hover:shadow-green-400/30 shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <Layout className="w-8 h-8 text-[#76e3b5] mr-3" />
              <h3 className="text-2xl font-semibold">Portfolio Website</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Clean, responsive, and modern websites for doctors, freelancers, and creators.
            </p>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>• Fully mobile responsive</li>
              <li>• SEO optimized</li>
              <li>• Elegant UI/UX design</li>
              <li>• Fast loading & deployed on custom domain</li>
            </ul>
            <p className="text-[#76e3b5] font-semibold">Tech: React, Tailwind, Vercel</p>
          </div>
        </Slidein>

        {/* ---------- Business Website ---------- */}
        <Slidein direction="up">
          <div className="bg-[#161b22] p-8 rounded-2xl border border-transparent hover:border-green-400 hover:shadow-green-400/30 shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <Workflow className="w-8 h-8 text-[#76e3b5] mr-3" />
              <h3 className="text-2xl font-semibold">Business Website / Landing Page</h3>
            </div>
            <p className="text-gray-400 mb-4">
              High-converting landing pages and complete websites for businesses & startups.
            </p>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>• Professional UI/UX</li>
              <li>• Booking/contact system</li>
              <li>• Service showcase</li>
              <li>• Admin-friendly workflow</li>
            </ul>
            <p className="text-[#76e3b5] font-semibold">Tech: React, Node.js, MongoDB</p>
          </div>
        </Slidein>

        {/* ---------- AI Tools ---------- */}
        <Slidein direction="up">
          <div className="bg-[#161b22] p-8 rounded-2xl border border-transparent hover:border-green-400 hover:shadow-green-400/30 shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <Sparkles className="w-8 h-8 text-[#76e3b5] mr-3" />
              <h3 className="text-2xl font-semibold">AI Tools & Automations</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Smart AI solutions for students, productivity, and automation.
            </p>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>• Note summarizer</li>
              <li>• Flashcard generator</li>
              <li>• Web automations</li>
              <li>• Student.ai features</li>
            </ul>
            <p className="text-[#76e3b5] font-semibold">Tech: Python, AI Models, APIs</p>
          </div>
        </Slidein>

        {/* ---------- Custom Web Solutions ---------- */}
        <Slidein direction="up">
          <div className="bg-[#161b22] p-8 rounded-2xl border border-transparent hover:border-green-400 hover:shadow-green-400/30 shadow-lg transition-all">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 text-[#76e3b5] mr-3" />
              <h3 className="text-2xl font-semibold">Custom Web Solutions</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Custom dashboards, APIs, and full-stack apps tailored to your ideas.
            </p>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>• Authentication & dashboards</li>
              <li>• Custom API integrations</li>
              <li>• Database + backend logic</li>
              <li>• Business automation</li>
            </ul>
            <p className="text-[#76e3b5] font-semibold">Tech: MERN Stack</p>
          </div>
        </Slidein>

      </div>

      {/* CTA Section */}
      <Slidein direction="up">
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4 text-lg">
            Want to work on a project together?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#76e3b5] text-black font-medium rounded-lg hover:bg-white transition"
          >
            Contact Me
          </a>
        </div>
      </Slidein>
    </section>
  );
}
