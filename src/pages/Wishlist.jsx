import React, { useState, useEffect } from "react";
import { useWishlist } from "../components/context/WishlistContext";
import HighlightedHeading from "../components/common/HighlightedHeading";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [removingItem, setRemovingItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleRemove = (id) => {
    setRemovingItem(id);
    setTimeout(() => {
      removeFromWishlist(id);
      setRemovingItem(null);
    }, 300);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-2xl text-white font-semibold">
          Loading your wishlist...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white transition-all duration-300" style={{ background: 'radial-gradient(circle at center, #1a1605 0%, #000 100%)' }}>
      {/* Black & White Banner with Image */}
      <div
        className="relative h-[30vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1672883551961-dd625e47990a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmclMjB3aXNobGlzdHxlbnwwfHwwfHx8MA%3D%3D')`,
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Centered content */}
        <div className="relative text-center text-white px-4 sm:px-6">
          <HighlightedHeading level="h1" className="text-3xl sm:text-4xl md:text-6xl font-extrabold animate-slideInDown text-white">
            Your Wishlist
          </HighlightedHeading>

          <p className="text-base sm:text-lg md:text-xl mt-3 text-gray-200 animate-fadeInUp">
            ❤️ Save your favorite items & shop later
          </p>

          <p className="text-sm sm:text-base md:text-lg font-bold mt-4 bg-gold-500/10 backdrop-blur-md px-5 py-2.5 rounded-full inline-block animate-fadeInUp border border-gold-500/20 text-gold-500">
            {wishlist.length} item{wishlist.length !== 1 ? "s" : ""} | Total: ₹
            {wishlist.reduce((s, i) => s + i.price, 0)}
          </p>
        </div>
      </div>

      {/* Wishlist Section */}
      <div className="container mx-auto px-4 py-12">
        {wishlist.length === 0 ? (
          <div className="text-center py-24 animate-fadeIn text-gray-400">
            <div className="text-8xl mb-6 opacity-30">❤️</div>
            <HighlightedHeading level="h2" className="text-2xl font-bold text-white mb-2">Your wishlist is empty</HighlightedHeading>
            <p className="text-gray-500 mt-2">
              Start exploring and add items you adore
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-300">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className={`bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/5 overflow-hidden transition-all duration-300 transform ${removingItem === item.id
                    ? "opacity-0 scale-90"
                    : "opacity-100 scale-100"
                  } hover:border-gold-500/50 hover:-translate-y-2 group`}
              >
                {/* Image Top */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Details Below */}
                <div className="p-6 flex flex-col items-center text-center">
                  <h3 className="font-bold text-xl text-white group-hover:text-gold-500 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gold-500 font-extrabold text-lg mt-2">
                    ₹{item.price}
                  </p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="mt-6 px-8 py-2.5 border border-gold-500/30 rounded-full text-sm font-bold text-gold-500 hover:bg-gold-500 hover:text-black transition-all duration-300 active:scale-95"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slideInDown {
          animation: slideInDown 0.6s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
