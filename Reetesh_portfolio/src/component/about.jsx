import React from "react";
import Slidein from "./SlideIn.jsx";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16"
    >
      <Slidein direction="up">
        <div className="max-w-4xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl flex justify-center font-bold mb-8 text-[#76e3b5]">
            About Me
          </h2>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            Hi 👋, I’m <span className="text-[#76e3b5]">Reetesh Kumar</span>, a
            passionate Computer Science student and aspiring developer who loves
            creating practical solutions for students and professionals.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mt-4">
            I’m currently building{" "}
            <span className="text-[#76e3b5] font-semibold">Student.ai</span> —
            an all-in-one platform that helps students with{" "}
            <span className="italic">
              AI note summarization, flashcards, study planners, problem-solving,
              and lecture transcription
            </span>
            . My mission is to create tools that make learning smarter, faster,
            and more enjoyable.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mt-4">
            Alongside this, I enjoy working on{" "}
            <span className="text-[#76e3b5]">web development projects</span>,
            improving my skills in{" "}
            <span className="text-[#76e3b5]">
              Python, React.js, Node.js, and AI/ML
            </span>
            , and exploring creative ideas that bring real impact.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mt-4">
            My long-term vision is to grow as a developer, innovate in the field
            of education technology, and build impactful digital products that
            empower people.
          </p>
        </div>
      </Slidein>

      {/* Resume Button */}
      <Slidein direction="up">
        <a
          href="/resume.pdf"
          download="Reetesh_Kumar_Resume.pdf"
          className="mt-8 sm:mt-10 inline-flex justify-center sm:justify-start items-center w-full sm:w-auto px-6 py-3 rounded-lg bg-black border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all"
        >
          📄 Download Resume
        </a>
      </Slidein>
    </section>
  );
};

export default About;

