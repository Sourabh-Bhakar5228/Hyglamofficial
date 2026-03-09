import React, { useState, useEffect } from "react";
import HighlightedHeading from "../components/common/HighlightedHeading";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState("instagram");
  const [logoPositions, setLogoPositions] = useState([]);

  // Generate random positions for floating logos
  useEffect(() => {
    const positions = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
      delay: Math.random() * 4,
      duration: 8 + Math.random() * 4,
      scale: 0.5 + Math.random() * 0.5,
    }));
    setLogoPositions(positions);
  }, []);

  // Generate random positions for floating logos
  const HyglamLogo = ({ size = 40, className = "" }) => (
    <div
      className={`font-black text-gold-500/20 drop-shadow-[0_0_10px_rgba(250,176,63,0.3)] ${className}`}
      style={{ fontSize: `${size}px` }}
    >
      HYGLAM
    </div>
  );

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ background: 'radial-gradient(circle at center, #1a1605 0%, #000 100%)' }}>
      {/* Animated Background Logos */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {logoPositions.map((pos) => (
          <div
            key={pos.id}
            className="absolute animate-spin opacity-40"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
              animationDelay: `${pos.delay}s`,
              animationDuration: `${pos.duration}s`,
              transform: `scale(${pos.scale})`,
            }}
          >
            <HyglamLogo size={20} />
          </div>
        ))}

        {/* Additional floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gold-500/20 rounded-full animate-pulse blur-[1px]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Glowing light effects */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gold-500/5 blur-[120px] animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${200 + Math.random() * 300}px`,
                height: `${200 + Math.random() * 300}px`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Banner Section */}
        <div className="relative w-full h-[30vh] md:h-[60vh] overflow-hidden">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 z-10" />

          {/* Background Video with Poster */}
          <video
            className="w-full h-full object-cover contrast-125 brightness-110"
            autoPlay
            loop
            muted
            playsInline
            poster="https://videos.openai.com/vg-assets/assets%2Ftask_01jy5pnh02e1t8j7cp2ybv1c7c%2F1750390749_img_1.webp"
          >
            <source
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01jm239mh6f0yt0kph1m47xnwn%2Ftask_01jm239mh6f0yt0kph1m47xnwn_genid_79e1c16c-f28d-4b04-b0a5-fe55a9f9a382_25_02_14_11_25_301948%2Fvideos%2F00000_372303279%2Fmd.mp4"
              type="video/mp4"
            />
            <img
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01jy5pnh02e1t8j7cp2ybv1c7c%2F1750390749_img_1.webp"
              alt="Gallery Banner"
            />
          </video>

          {/* Centered Content */}
          <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
            <div className="text-center space-y-3 sm:space-y-6">
              <HighlightedHeading level="h1" className="text-white text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter animate-fade-in drop-shadow-2xl">
                GALLERY
              </HighlightedHeading>
              <p className="text-gold-500/80 text-xs sm:text-sm md:text-lg font-bold tracking-[0.4em] uppercase drop-shadow-lg animate-pulse">
                A Curated Visual Experience
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mt-10 sm:mt-12 gap-5 sm:space-x-10 px-4">
          <button
            onClick={() => setActiveTab("instagram")}
            className={`px-10 py-4 rounded-2xl font-black text-xs sm:text-sm tracking-[0.2em] transition-all duration-500 transform hover:scale-110 shadow-2xl active:scale-95 border ${activeTab === "instagram"
              ? "bg-gold-500 text-black border-gold-500 shadow-gold-500/20"
              : "bg-white/5 text-gold-500/50 border-white/10 hover:border-gold-500/50 hover:text-gold-500"
              }`}
          >
            INSTAGRAM
          </button>
          <button
            onClick={() => setActiveTab("facebook")}
            className={`px-10 py-4 rounded-2xl font-black text-xs sm:text-sm tracking-[0.2em] transition-all duration-500 transform hover:scale-110 shadow-2xl active:scale-95 border ${activeTab === "facebook"
              ? "bg-gold-500 text-black border-gold-500 shadow-gold-500/20"
              : "bg-white/5 text-gold-500/50 border-white/10 hover:border-gold-500/50 hover:text-gold-500"
              }`}
          >
            FACEBOOK
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 max-w-8xl mx-auto">
          {activeTab === "instagram" && (
            <div className="w-full h-full min-h-[600px] col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 bg-black/40 backdrop-blur-2xl rounded-[2rem] border border-white/5 overflow-hidden p-6 sm:p-10 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 blur-[100px] -mr-32 -mt-32"></div>
              {/* Elfsight Instagram Feed */}
              <div className="elfsight-app-a08e3d3f-2c7d-4d34-ad75-ef98423621a0" data-elfsight-app-lazy></div>
            </div>
          )}

          {activeTab === "facebook" && (
            <div className="w-full h-full min-h-[600px] col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 bg-black/40 backdrop-blur-2xl rounded-[2rem] border border-white/5 overflow-hidden p-6 sm:p-10 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 blur-[100px] -mr-32 -mt-32"></div>
              {/* Elfsight Facebook Feed */}
              <div className="elfsight-app-69cc0bc1-cc70-4825-914d-b8606f5b66bc" data-elfsight-app-lazy></div>
            </div>
          )}
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
