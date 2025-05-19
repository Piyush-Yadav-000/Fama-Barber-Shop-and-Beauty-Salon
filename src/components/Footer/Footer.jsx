import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#003135] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Social */}
        <div>
          <img
            src="assets/logo.webp"
            alt="Company Logo"
            className="w-24 mb-2"
          />
          <p className="text-sm">Classic cuts with modern style</p>
          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="bg-yellow-600 hover:bg-yellow-500 p-2 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-yellow-600 hover:bg-yellow-500 p-2 rounded-full"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500">About</a></li>
            <li><a href="#" className="hover:text-yellow-500">Services</a></li>
            <li><a href="#" className="hover:text-yellow-500">Gallery</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
          <div className="flex items-start gap-3 mb-2 text-sm">
            <FaMapMarkerAlt className="text-yellow-500 mt-1" />
            <p>518 Acme St unit 101, Denton, TX 76205, United States</p>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <FaPhone className="text-yellow-500" />
            <p>+1 940-808-1569</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Newsletter</h4>
          <p className="text-sm mb-3">Subscribe to receive updates and news.</p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black w-full py-2 rounded font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© 2023 Fama Barber Shop and Beauty Salon. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-yellow-500">Home</a>
          <a href="#" className="hover:text-yellow-500">About</a>
          <a href="#" className="hover:text-yellow-500">Services</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
