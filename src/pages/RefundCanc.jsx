import React from "react";
import RefundImage from "../assets/refund-animate.svg"; // Make sure to place your image here

export const RefundPolicy = () => {
  return (
   <div className="pt-20">
    <div className="flex vtb:flex-col mtb:flex-col lD:flex-row bg-white rounded-2xl shadow-lg overflow-hidden p-6 max-w-7xl mx-auto">
      {/* Image Section */}
      <div className="w-full lD:w-1/2 flex justify-center items-center mb-6 lD:mb-0">
        <img
          src={RefundImage}
          alt="Refund Policy Illustration"
          className="w-full h-full"
        />
      </div>

      {/* Text Section */}
      <div className="w-full text-left px-4">
        <h2 className="text-2xl font-bold mb-4 text-[#2c3e50]">Refund & Cancellation Policy</h2>

        <p className="mb-4">
          At <strong>MovaFlixMovies</strong>, we strive to provide excellent service to our customers. However, we understand that situations may arise where you need to request a refund or cancel a service. Please review our policy below:
        </p>

        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-700 mb-2">Refunds:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Refund requests must be submitted within 7 days of purchase.</li>
            <li>Refunds will only be processed for technical issues preventing access to purchased content, duplicate charges, or other valid reasons.</li>
            <li>Refunds will not be issued for partially watched or downloaded content.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-700 mb-2">Cancellations:</h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>Subscription cancellations must be made at least 24 hours before the next billing cycle.</li>
            <li>Canceled subscriptions will remain active until the end of the current billing period.</li>
            <li>
              To request a refund or cancel your subscription, please contact us at <a href="mailto:MovaFlixmovies@gmail.com" className="text-blue-600 underline">MovaFlixmovies@gmail.com</a> with your account details and a description of the issue.
            </li>
          </ul>
        </div>

        <p className="text-sm text-gray-600">
          <strong>Note:</strong> MovaFlixMovies reserves the right to modify this policy at any time.
        </p>
      </div>
    </div>
   </div>
  );
};
