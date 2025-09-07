// src/components/Footer.jsx
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">Reetesh Kumar</h2>
          <p className="mt-3 text-sm text-gray-400">
            Passionate developer creating impactful digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-green-400">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-400">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-green-400">Projects</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-green-400">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-400">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Connect with me</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://github.com/Reetesh27"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/reetesh-kumar-719463328"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/reetesh_mr27?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-green-500 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Reetesh Kumar. All Rights Reserved.
      </div>
    </footer>
  );
}
