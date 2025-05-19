import React, { useState, useEffect } from "react";
import { FaGlobe, FaPalette, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "gallery", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#services", text: "Services" },
    { href: "#gallery", text: "Gallery" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <header className="bg-[#024950] w-full text-white px-6 py-4 shadow-md fixed top-0 left-0 z-50 rounded-lg drop-shadow-gray-950 drop-shadow-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <img
            src="assets/logo.webp"
            alt="Logo"
            className="h-10"
          />
        </div>

        {/* Hamburger Toggle (Mobile) */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden lg:flex space-x-8 p-2 font-semibold text-white text-base">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:text-yellow-400 ${
                activeSection === link.href.slice(1) ? "text-[#18e9f8] bg-[#0615189b] px-2 py-1 rounded-lg" : ""
              }`}
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Right: Icons, Phone, Button (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-4">
          <FaPalette className="text-xl hover:text-yellow-400 cursor-pointer" />
          <FaGlobe className="text-xl hover:text-yellow-400 cursor-pointer" />
          <div className="flex items-center text-[#17d3f4] font-semibold space-x-2">
            <FaPhoneAlt />
            <span>+1 940-612-9127</span>
          </div>
          <a
            href="#contact"
            className="bg-[#0FA4AF] hover:bg-[#71b1b4] text-WHITE font-bold px-4 py-2 rounded-md"
          >
            Book an Appointment
          </a>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="lg:hidden mt-4 space-y-4 text-center font-semibold text-white text-base">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block hover:text-yellow-400 ${
                activeSection === link.href.slice(1) ? "text-yellow-400" : ""
              }`}
            >
              {link.text}
            </a>
          ))}

          {/* Mobile-only extras */}
          <div className="flex justify-center space-x-4 mt-4">
            <FaPalette className="text-xl hover:text-yellow-400 cursor-pointer" />
            <FaGlobe className="text-xl hover:text-yellow-400 cursor-pointer" />
          </div>
          <div className="text-yellow-400 font-semibold">+1 940-612-9127</div>
          <a
            href="#contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-md"
          >
            Book an Appointment
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;