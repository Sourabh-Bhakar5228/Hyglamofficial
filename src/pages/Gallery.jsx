import React, { useState } from "react";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState("images");
  const [selectedImage, setSelectedImage] = useState(null);

  // Random sample images
  const images = [
    "https://picsum.photos/800/500?random=1",
    "https://picsum.photos/800/500?random=2",
    "https://picsum.photos/800/500?random=3",
    "https://picsum.photos/800/500?random=4",
    "https://picsum.photos/800/500?random=5",
    "https://picsum.photos/800/500?random=6",
  ];

  // Random sample videos
  const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-full h-64">
        <img
          src="https://picsum.photos/1200/400?random=7"
          alt="Gallery Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Gallery</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-6 space-x-6">
        <button
          onClick={() => setActiveTab("images")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "images"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Images
        </button>
        <button
          onClick={() => setActiveTab("videos")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "videos"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          Videos
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activeTab === "images"
          ? images.map((img, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden shadow-md cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Random ${i}`}
                  className="w-full h-60 object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))
          : videos.map((video, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-md">
                <video
                  src={video}
                  controls
                  className="w-full h-60 object-cover"
                />
              </div>
            ))}
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full"
            className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
