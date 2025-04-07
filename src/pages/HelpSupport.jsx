import React from "react";
import HelpImage from "../assets/admin-animate.svg"; // update path based on your folder structure

export const HelpSupport = () => {
  return (
    <div className="pt-20">

<div className="flex vtb:flex-col mtb:flex-col lD:flex-row bg-white rounded-2xl shadow-lg overflow-hidden p-6 max-w-7xl mx-auto ">
      {/* Image Section */}
      <div className="w-full flex justify-center items-center mb-6 lD:mb-0">
        <img
          src={HelpImage}
          alt="Help and Support Illustration"
          className="w-3/4 max-w-[500px]"
        />
      </div>

      {/* Text Section */}
      <div className="w-full text-left px-4">
        <h2 className="text-2xl font-bold mb-4 text-[#2c3e50]">Help & Support</h2>

        <p className="mb-4">
          At <strong>MOVAFLIX MOVIES</strong>, we're committed to making your experience as smooth and enjoyable as possible. If you're experiencing issues or have any questions, our support team is here to help!
        </p>

        <ul className="list-disc list-inside space-y-3 text-sm">
          <li>
            <strong>Account Issues:</strong> Reset your password, update profile info, or manage subscriptions easily from your account settings.
          </li>
          <li>
            <strong>Streaming Problems:</strong> Buffering or playback issues? Check your internet connection or try switching devices.
          </li>
          <li>
            <strong>Billing & Payments:</strong> View your transaction history and manage payment methods from your billing dashboard.
          </li>
          <li>
            <strong>Technical Support:</strong> Our team is available 24/7 to assist you with any platform-related concerns.
          </li>
          <li>
            <strong>Contact Us:</strong> Reach out via our <a href="#" className="text-blue-600 underline">support form</a> or email <a href="mailto:support@evoflixmovies.com" className="text-blue-600 underline">Movaflixmovies@gmail.com</a>.
          </li>
        </ul>

        <p className="mt-4">
          Thank you for choosing MovaFlixMovies — we’re here whenever you need us!
        </p>
      </div>
    </div>

    </div>
  );
};
