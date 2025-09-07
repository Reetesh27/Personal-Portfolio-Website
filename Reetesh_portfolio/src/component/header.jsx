import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-black text-[#76e3b5] py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-8">
        {/* Logo */}
        <img src={Logo} alt="logo" className="w-10 md:w-14" />

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-mono text-lg font-medium">
            <li>
              <a
                href="#home"
                className={`hover:underline ${
                  activeSection === "home" ? "underline text-green-400" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`hover:underline ${
                  activeSection === "about" ? "underline text-green-400" : ""
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`hover:underline ${
                  activeSection === "projects" ? "underline text-green-400" : ""
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`hover:underline ${
                  activeSection === "contact" ? "underline text-green-400" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col items-center py-4 space-y-4 font-mono text-lg font-medium">
            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className={`hover:underline ${
                  activeSection === "home" ? "underline text-green-400" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className={`hover:underline ${
                  activeSection === "about" ? "underline text-green-400" : ""
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`hover:underline ${
                  activeSection === "projects" ? "underline text-green-400" : ""
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`hover:underline ${
                  activeSection === "contact" ? "underline text-green-400" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
