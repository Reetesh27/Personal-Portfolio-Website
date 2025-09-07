// src/component/Testimonials.jsx
import { Star } from "lucide-react";
import Slidein from "./SlideIn.jsx"


const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Computer Science Student",
    review:
      "This portfolio really inspired me. The design is clean and modern, and I love the animations!",
    rating: 5,
  },
  {
    name: "Ali Raza",
    role: "Frontend Developer",
    review:
      "Amazing work! The black & green theme gives a professional vibe. Very well structured.",
    rating: 4,
  },
  {
    name: "Hina Ahmed",
    role: "UI/UX Designer",
    review:
      "I really appreciate the creativity and minimalism. Perfect balance of aesthetics and functionality.",
    rating: 5,
  },
  {
    name: "Bilal Hussain",
    role: "Software Engineer",
    review:
      "Great projects showcased with neat details. This portfolio stands out among many others!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-16 px-8" id="testimonials">
      <Slidein direction="up">
        <h2 className="text-4xl font-bold text-center text-[#76e3b5] mb-12">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-[#76e3b5]/40 transition"
            >
              <p className="text-gray-300 mb-4">"{t.review}"</p>
              <div className="flex mb-2">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#76e3b5] fill-[#76e3b5]"
                  />
                ))}
              </div>
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <span className="text-sm text-gray-400">{t.role}</span>
            </div>
          ))}
        </div>
      </Slidein>
    </section>
  );
}
