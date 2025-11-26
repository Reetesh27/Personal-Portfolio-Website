import { FaLinkedin, FaGithub } from "react-icons/fa";
import Slidein from "./SlideIn.jsx";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[85vh] flex relative flex-col justify-center items-center bg-black"
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-12">
        
        {/* Left Content */}
        <Slidein direction="up">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
              Hi, I’m{" "}
              <span className="text-[#76e3b5]">Reetesh Kumar</span> <br />
              Web Developer & <br /> AI Enthusiast
            </h1>

            {/* Social Links */}
            <div className="flex space-x-6 mt-4 text-2xl text-gray-400">
              <a
                href="https://linkedin.com/in/reetesh-kumar-719463328"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#76e3b5]"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Reetesh27"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#76e3b5]"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </Slidein>

        {/* Right Profile Image */}
        <Slidein direction="up">
          <div className="mt-6 md:mt-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-[#76e3b5] rounded-full transform rotate-12"></div>
              <img
                src={profile}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 sm:border-6 md:border-8 border-white shadow-lg"
              />
            </div>
          </div>
        </Slidein>
      </div>
    </section>
  );
}

