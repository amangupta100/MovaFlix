import React from "react";
import contactImage from "../assets/contact-us-animate.svg";

const ContactUs = () => {
  const handleSubmit = (e) =>{
  e.preventDefault()
  }
  return (
    <div id="Contact" className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-2xl overflow-hidden flex mtb:flex-col vtb:flex-col tb:flex-col lD:flex-row">
        
        {/* Left Side - SVG */}
        <div className="w-full flex items-center justify-center p-6">
          <img
            src={contactImage}
            alt="Contact Us"
            className="w-full max-w-[400px] h-auto"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full p-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[red] to-[black] inline-block text-transparent bg-clip-text mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="4" 
                placeholder="Your Message"
                className="w-full px-4 py-2 border max-h-36 min-h-14 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-black transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
