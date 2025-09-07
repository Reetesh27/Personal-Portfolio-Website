import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import Slidein from "./SlideIn.jsx"
import profile from "../assets/profile.png"

export default function Hero() {
  return (
    <section id="home" className=" w-full min-h-[85vh] flex relative flex-col justify-center items-center bg-black">
      
      <div className="max-w-6xl w-full flex gap-20 flex-col justify-center md:flex-row items-center px-6 md:px-12">
        
        <Slidein direction="up">
          <div className="flex flex-col relative space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white ">
              Hi,  I’m{" "}
              <span className="text-[#76e3b5]">Reetesh Kumar</span> <br />
              Web Developer & <br /> AI Enthusiast
            </h1>


            {/* Social Links */}
            <div className="flex space-x-4 w-full mt-4 text-2xl text-gray-400">
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
        <Slidein direction="up">
          <div className="mt-10 md:mt-0 md:ml-12">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-600 rounded-full transform rotate-12"></div>
              <img
                src={profile} // replace with your image
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-8 border-white shadow-lg"
              />
            </div>
          </div>
        </Slidein>
      </div>
    
    </section>
  );
}
