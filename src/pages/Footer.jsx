import React from "react";
import logo from "../assets/logo.png";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="max-w-9xl mx-auto px-4 grid grid-cols-3 tb:grid-cols-2 lm:grid-cols-1 gap-6 text-center lD:text-left">
        
        {/* Logo and Brand */}
        <div className="flex flex-col items-center lD:items-start space-y-2">
          <div className="flex items-center justify-center lD:justify-start space-x-2">
           <a href="#Home">
           <img src={logo} alt="MovaFlix Logo" className="w-8 h-8" />
           </a>
            <span className="text-lg font-semibold">MovaFlix</span>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MovaFlix. All rights reserved.
          </p>
          <a href="mailto:evoflixmovies@gmail.com" className="hover:text-red-400 transition">
            evoflixmovies@gmail.com
          </a>
        </div>

        {/* Links */}
        <div className="space-y-2 lm:my-8 grid grid-cols-2 w-full items-center lD:items-start">
          <a href="#About" className="hover:text-red-400 transition">About</a>
          <NavLink to="/terms-condition" className="hover:text-red-400 transition">Terms & Condition</NavLink>
          <NavLink to="/help&support" className="hover:text-red-400 transition">Help & Support</NavLink>
          <NavLink to="/refund-cancellation" className="hover:text-red-400 transition">Refund & Cancellation Policy</NavLink>
          <NavLink to="/policy" className="hover:text-red-400 transition">Privacy Policy</NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lD:justify-end items-center space-x-4 text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};
