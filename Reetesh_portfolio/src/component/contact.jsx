// src/component/Contact.jsx
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Slidein from "./SlideIn.jsx"

const XIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-[#76e3b5] py-20 px-6 min-h-[60vh]">
      <Slidein direction="up">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-300 mb-8">
          Feel free to reach out for collaborations, projects, or just a friendly chat!
        </p>

        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/Reetesh27"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/reetesh-kumar-719463328"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="https://x.com/Reeteshmr27"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <XIcon className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/reetesh_mr27?igsh=YzljYTk1ODg3Zg== "
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Instagram className="w-8 h-8" />
          </a>
          <a
            href="mailto:reeteshkumar12191981@gmail.com"
            className="hover:text-white transition"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
      </Slidein>
    </section>
  );
}

