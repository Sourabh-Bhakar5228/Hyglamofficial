import React, { useState, useEffect } from "react";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState("images");
  const [selectedImage, setSelectedImage] = useState(null);
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

  // Random sample images
  const images = [
    "https://picsum.photos/800/500?random=1",
    "https://picsum.photos/800/500?random=2",
    "https://picsum.photos/800/500?random=3",
    "https://picsum.photos/800/500?random=4",
    "https://picsum.photos/800/500?random=5",
    "https://picsum.photos/800/500?random=6",
    "https://picsum.photos/800/500?random=8",
    "https://picsum.photos/800/500?random=9",
  ];

  // Random sample videos
  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
  ];

  // Hyglam Logo Component
  const HyglamLogo = ({ size = 40, className = "" }) => (
    <div
      className={`font-bold text-gray-600/40 drop-shadow-lg ${className}`}
      style={{ fontSize: `${size}px` }}
    >
      HYGLAM
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 relative overflow-hidden">
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
              className="absolute w-2 h-2 bg-gray-400/30 rounded-full animate-pulse"
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
              className="absolute rounded-full bg-white/20 blur-xl animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${100 + Math.random() * 200}px`,
                height: `${100 + Math.random() * 200}px`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Banner Section */}
        <div className="relative w-full h-[60vh] overflow-hidden">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 z-10" />

          {/* Background Video with Poster */}
          <video
            className="w-full h-full object-cover contrast-125 brightness-110"
            autoPlay
            loop
            muted
            playsInline
            poster="https://videos.openai.com/vg-assets/assets%2Ftask_01jy5pnh02e1t8j7cp2ybv1c7c%2F1750390749_img_1.webp?st=2025-09-02T10%3A16%3A12Z&se=2025-09-08T11%3A16%3A12Z&sks=b&skt=2025-09-02T10%3A16%3A12Z&ske=2025-09-08T11%3A16%3A12Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=fea36edb-a052-425e-a84a-436fdce0a7b4&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=YjOgzX3pJEa3wv82FyMcEql1upt2dU1QITR%2BwtnSZb4%3D&az=oaivgprodscus"
          >
            <source
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01jm239mh6f0yt0kph1m47xnwn%2Ftask_01jm239mh6f0yt0kph1m47xnwn_genid_79e1c16c-f28d-4b04-b0a5-fe55a9f9a382_25_02_14_11_25_301948%2Fvideos%2F00000_372303279%2Fmd.mp4?st=2025-09-02T11%3A13%3A08Z&se=2025-09-08T12%3A13%3A08Z&sks=b&skt=2025-09-02T11%3A13%3A08Z&ske=2025-09-08T12%3A13%3A08Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=fea36edb-a052-425e-a84a-436fdce0a7b4&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=Glt0LvA1Kk%2FXkuYD%2B2IE5DeJZRJPJwr9TPMYzu739TU%3D&az=oaivgprodscus"
              type="video/mp4"
            />
            {/* Fallback for browsers not supporting video */}
            <img
              src="https://videos.openai.com/vg-assets/assets%2Ftask_01jy5pnh02e1t8j7cp2ybv1c7c%2F1750390749_img_1.webp"
              alt="Gallery Banner"
            />
          </video>

          {/* Centered Content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center space-y-4">
              <h1 className="text-gray-100 text-5xl md:text-7xl font-bold tracking-wider animate-fade-in drop-shadow-xl">
                GALLERY
              </h1>
              <p className="text-gray-100 text-lg font-light tracking-wide drop-shadow-lg">
                Curated Visual Experience
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-8 space-x-8">
          <button
            onClick={() => setActiveTab("images")}
            className={`px-8 py-3 rounded-full font-semibold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg ${
              activeTab === "images"
                ? "bg-gray-800 text-white shadow-xl shadow-gray-400/30"
                : "bg-white text-gray-800 border-2 border-gray-300 hover:bg-gray-100 shadow-md"
            }`}
          >
            IMAGES
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-8 py-3 rounded-full font-semibold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg ${
              activeTab === "videos"
                ? "bg-gray-800 text-white shadow-xl shadow-gray-400/30"
                : "bg-white text-gray-800 border-2 border-gray-300 hover:bg-gray-100 shadow-md"
            }`}
          >
            VIDEOS
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {activeTab === "images"
            ? images.map((img, i) => (
                <div
                  key={i}
                  className="group relative rounded-xl overflow-hidden shadow-xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 bg-white border-2 border-gray-200 hover:shadow-2xl"
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={img}
                      alt={`Gallery ${i}`}
                      className="w-full h-64 object-cover  transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <HyglamLogo
                        size={24}
                        className="text-white drop-shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-400/50 transition-all duration-300 rounded-xl" />
                </div>
              ))
            : videos.map((video, i) => (
                <div
                  key={i}
                  className="group relative rounded-xl overflow-hidden shadow-xl bg-white border-2 border-gray-200 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <video
                    src={video}
                    controls
                    className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <HyglamLogo
                      size={20}
                      className="text-gray-700 drop-shadow-lg"
                    />
                  </div>
                </div>
              ))}
        </div>

        {/* Full Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] m-4">
              <img
                src={selectedImage}
                alt="Full view"
                className="max-w-full max-h-full rounded-lg shadow-2xl border-4 border-white/20"
              />
              <button
                className="absolute top-4 right-4 text-white bg-gray-800/80 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-700 transition-colors text-xl font-bold shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4">
                <HyglamLogo
                  size={32}
                  className="text-white/80 drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        )}
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
