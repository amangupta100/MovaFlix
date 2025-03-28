import banner from '../assets/ddfb070b-26d2-4ae4-a4a9-be5063be899b.webp';

export const Home = () => {
  return (
    <div id="Home" className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Main Container */}
      <div className="w-[92%] tb:w-[95%] lm:pt-20 flex tb:flex-row items-center vlm:flex-col lm:w-full lm:py-10 lm:min-h-[90vh] h-[95%] mx-auto">
        
        {/* Banner Image */}
        <div className="flex justify-center">
          <img src={banner} className="w-[37%] h-[55%] tb:h-[50%] lm:w-[75%] vlm:w-[80%] sm:w-[90%]" alt="MovaFlix Banner" />
        </div>
        
        {/* Content Section */}
        <div className="flex flex-col tb:w-[60%] mx-auto w-[40%] p-5 tb:p-8 lm:w-full lm:mt-5 sm:w-[95%] rounded-lg">
          <h1 className="text-3xl font-bold text-center tb:text-left">MovaFlix</h1>
          <p className="text-lg tb:text-xl text-center tb:text-left mt-3">
            MovaFlix is an innovative and dynamic entertainment platform that has taken the streaming industry by storm. 
            Launched in 2025, MovaFlix quickly established itself as a hub for diverse content, offering TV shows, movies, and live events.
          </p>
          <div className="flex justify-center tb:justify-start mt-5">
            <button className="bg-red-500 text-white py-3 px-6 rounded-xl hover:bg-black transition-colors duration-500 ease-in-out">
              Download Apk
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};
