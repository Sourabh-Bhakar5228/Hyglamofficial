import React, { useState, useEffect } from "react";

const JewelryCollection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans overflow-hidden">
      {/* Header */}
      <header
        className={`text-center py-12 px-4 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
          NEW COLLECTION
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-light text-gray-800 mb-8">
          2025
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
          Our newest collection brings you a refined fusion of classic elegance
          and modern edge. From radiant gold accents to sculptural statement
          pieces, each design is thoughtfully crafted to elevate your everyday
          style and unforgettable moments. Celebrate your individuality with
          jewelry that redefines modern luxury — made to shine now and for years
          to come.
        </p>
      </header>

      <div
        className={`w-24 h-1 bg-gray-300 mx-auto my-12 transition-all duration-1000 delay-300 ${
          loaded ? "opacity-100" : "opacity-0 scale-x-50"
        }`}
      ></div>

      {/* Product Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Glamour That Glows */}
        <section className="mb-20 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 group">
            <div className="bg-gray-200 h-80 w-full rounded-lg overflow-hidden relative">
              <img
                src="https://picsum.photos/600/800?grayscale&random=1"
                alt="Earrings"
                className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 grayscale group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">
              Glamour That Glows
            </h2>
            <p className="text-gray-600 mb-6">
              Turn heads with dramatic elegance! These crystal embellished
              aluminum earrings bring brilliance to every look!
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors mb-4 group relative overflow-hidden">
              <span className="relative z-10">SHOP NOW</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <p className="text-sm text-gray-500">starting at $99 /day</p>
          </div>
        </section>

        {/* Sculpted in Strength */}
        <section className="mb-20 flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2 group">
            <div className="bg-gray-200 h-80 w-full rounded-lg overflow-hidden relative">
              <img
                src="https://picsum.photos/600/800?grayscale&random=2"
                alt="Rings"
                className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 grayscale group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">
              Sculpted in Strength
            </h2>
            <p className="text-gray-600 mb-6">
              Mysterious, bold, and full of attitude, our gold champ rings are
              crafted to empower and impress.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors mb-4 group relative overflow-hidden">
              <span className="relative z-10">SHOP NOW</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <p className="text-sm text-gray-500">starting at $149 /day /year</p>
          </div>
        </section>

        {/* Timeless Together */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 group">
            <div className="bg-gray-200 h-80 w-full rounded-lg overflow-hidden relative">
              <img
                src="https://picsum.photos/600/800?grayscale&random=3"
                alt="Pendants"
                className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 grayscale group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif text-gray-800 mb-4">
              Timeless Together
            </h2>
            <p className="text-gray-600 mb-6">
              Celebrate connection with our elegantly crafted gold pendants,
              perfect for love, promises, or personal milestones.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors group relative overflow-hidden">
              <span className="relative z-10">SHOP NOW</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JewelryCollection;
