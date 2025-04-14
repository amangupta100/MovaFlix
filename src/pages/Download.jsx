import React from "react";

export default function DownloadPage() {
  return (
    <div className="min-h-fit bg-gray-100 px-4 pt-4 pb-20 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-[1380px] ">
        <h1 className="text-4xl bg-gradient-to-b from-[red] to-[black] text-transparent bg-clip-text font-bold text-center text-gray-800 mb-6">Download MovaFlix</h1>
        <table className="w-full text-left text-gray-700 mb-6">
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-bold text-lg">App Name</td>
              <td className="py-2 text-lg">MovaFlix</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-bold text-lg">Version</td>
              <td className="py-2 text-lg">2.0.0</td>
            </tr>
            <tr>
              <td className="py-2 font-bold text-lg">Download Size</td>
              <td className="py-2 text-lg">77 MB</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center">
          <a href='https://www.dropbox.com/scl/fi/tczm98j2ngucps4xr1g4p/app-release-6.apk?rlkey=lvb9x2bz3aaz4ot5pu4t3rw65&st=vp9o6zlm&dl=1' download className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-black transition-all duration-300">
            Download App
          </a>
        </div>
      </div>
    </div>
  );
}