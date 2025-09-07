// src/component/Contact.jsx
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import Slidein from "./SlideIn.jsx"


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
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Twitter className="w-8 h-8" />
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
