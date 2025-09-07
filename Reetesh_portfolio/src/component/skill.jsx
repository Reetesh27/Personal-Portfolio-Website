import { Code, Database, Cpu, Layout, BarChart, Boxes } from "lucide-react";
import Slidein from "./SlideIn.jsx"

export default function Skills() {
  return (
    <section id="skills" className="bg-[#000000] text-white py-16 px-6">
      <Slidein direction="up">
        <div className="max-w-5xl mx-auto min-h-[80vh] text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-[#76e3b5] inline-block">
            Skills
          </h2>
      
      
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Web Development */}
            <div className="bg-[#161b22] p-6 flex flex-col gap-2.5 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <Layout className="text-[#76e3b5] w-8 h-8 mr-3" />
                <h3 className="text-2xl font-semibold">Web Development</h3>
              </div>
              <p className="text-gray-400 mb-4">
                I build clean, responsive, and modern web apps with frontend technologies.
              </p>
              <ul className="space-y-2 text-gray-300 flex flex-col gap-2">
                <li className="flex items-center gap-2">
                  <i className="devicon-cplusplus-plain colored text-6xl"></i>
                  <i className="devicon-html5-plain colored text-6xl"></i>
                  <i className="devicon-css3-plain colored text-6xl"></i>
                  <i className="devicon-javascript-plain colored text-6xl"></i>
                  <i className="devicon-react-original colored text-6xl"></i>
                  <i className="devicon-tailwindcss-plain colored text-6xl"></i>
                </li>
                <li className="flex items-center">
                  <Code className="w-5 h-5 text-[#76e3b5] mr-2" /> React.js & JavaScript
                </li>
                <li className="flex items-center">
                  <Boxes className="w-5 h-5 text-[#76e3b5] mr-2" /> Tailwind CSS & Designing 
                </li>
                <li className="flex items-center">
                  <Database className="w-5 h-5 text-[#76e3b5] mr-2" /> HTML & CSS 
                </li>
              </ul>
            </div>

            {/* AI & Data Science */}
            <div className="bg-[#161b22] flex flex-col gap-2.5 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <Cpu className="text-[#76e3b5] w-8 h-8 mr-3" />
                <h3 className="text-2xl font-semibold">AI & Data Science</h3>
              </div>
              <p className="text-gray-400 mb-4">
                I enjoy solving problems with data and exploring AI to create
                practical solutions.
              </p>
              <ul className="space-y-2 flex flex-col gap-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <i className="devicon-python-plain colored text-6xl"></i>
                  <i className="devicon-scikitlearn-plain colored text-6xl"></i>
                  <i className="devicon-jupyter-plain colored text-6xl"></i>
                  <i className="devicon-git-plain colored text-6xl"></i>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" 
                      alt="Pandas" className="w-16 h-16" />
                  <img src="https://raw.githubusercontent.com/numpy/numpy/main/branding/logo/primary/numpylogo.svg" alt="NumPy" className="w-16 h-16" />

                </li>
                <li className="flex items-center">
                  <Code className="w-5 h-5 text-[#76e3b5] mr-2" /> Python (Beginner to Intermediate)
                </li>
                <li className="flex items-center">
                  <BarChart className="w-5 h-5 text-[#76e3b5] mr-2" /> NumPy, Pandas, Matplotlib
                </li>
                <li className="flex items-center">
                  <Cpu className="w-5 h-5 text-[#76e3b5] mr-2" /> Scikit-learn & Streamlit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Slidein>
    </section>
  );
}
