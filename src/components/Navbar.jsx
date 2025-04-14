import { useState } from "react";
import logo from "../assets/appLogo.svg";
import icon from "../assets/veggie menu icon.webp";
import { FaTimes } from "react-icons/fa"; // Close Icon
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full flex items-center justify-between px-16 lm:px-5 tb:px-8 py-3 bg-white/20 backdrop-blur-md border-b-[1.4px] border-zinc-300 fixed z-50">
        {/* Logo & Title */}
        <div className="flex items-center">
         <NavLink to="/" className="flex text-xl items-center"> <img src={logo} className="w-10" alt="Logo" />
      MovaFlix</NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="flex gap-5 items-center vlm:hidden">
          <NavLink to="/contact" className="text-lg cursor-pointer">Contact Us</NavLink>
          <a download href="https://www.dropbox.com/scl/fi/tczm98j2ngucps4xr1g4p/app-release-6.apk?rlkey=lvb9x2bz3aaz4ot5pu4t3rw65&st=vp9o6zlm&dl=1" className="border-[1.5px] border-zinc-300 hover:border-zinc-600 duration-500 p-3 rounded-lg">
            Download App
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <img
          src={icon}
          className="hidden w-10 vlm:inline-block cursor-pointer"
          alt="Menu"
          onClick={() => setSidebarOpen(true)}
        />
      </div>

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/30 backdrop-blur-lg shadow-lg transform ${sidebarOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out z-50`}
      >
        {/* Sidebar Close Button */}
        <button className="absolute top-3 right-3 text-2xl text-black" onClick={() => setSidebarOpen(false)}>
          <FaTimes />
        </button>

        {/* Sidebar Links */}
        <div className="flex text-white flex-col items-start mt-16 pl-6 space-y-6 text-lg">
          <NavLink to="/" className="hover:text-red-500 cursor-pointer" onClick={() => setSidebarOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="hover:text-red-500 cursor-pointer" onClick={() => setSidebarOpen(false)}>About</NavLink>
          <NavLink to="/contact" className="hover:text-red-500 cursor-pointer" onClick={() => setSidebarOpen(false)}>Contact Us</NavLink>
          <a download href="https://www.dropbox.com/scl/fi/tczm98j2ngucps4xr1g4p/app-release-6.apk?rlkey=lvb9x2bz3aaz4ot5pu4t3rw65&st=vp9o6zlm&dl=1"
            className="border-[1.5px] border-zinc-300 hover:border-zinc-600 duration-500 p-3 rounded-lg"
            onClick={() => setSidebarOpen(false)}
          >
            Download App
          </a>
        </div>
      </div>

      {/* Overlay (Darkened Background when Sidebar is Open) */}
      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};
