import React, { useState, useEffect } from "react";
import { useWishlist } from "../components/context/WishlistContext";

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
    <div className="min-h-screen bg-gray-100 text-gray-900 transition-all duration-300">
      {/* Black & White Banner with Image */}
      <div
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1672883551961-dd625e47990a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmclMjB3aXNobGlzdHxlbnwwfHwwfHx8MA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold animate-slideInDown">
            Your Wishlist
          </h1>
          <p className="text-lg md:text-xl mt-3 text-gray-200 animate-fadeInUp">
            ❤️ Save your favorite items & shop later
          </p>
          <p className="text-base font-semibold mt-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full inline-block animate-fadeInUp">
            {wishlist.length} item{wishlist.length !== 1 ? "s" : ""} | Total: ₹
            {wishlist.reduce((s, i) => s + i.price, 0)}
          </p>
        </div>
      </div>

      {/* Wishlist Section */}
      <div className="container mx-auto px-4 py-12">
        {wishlist.length === 0 ? (
          <div className="text-center py-16 animate-fadeIn text-gray-800">
            <div className="text-7xl mb-4">❤️</div>
            <p className="text-xl font-semibold">Your wishlist is empty</p>
            <p className="text-gray-500 mt-2">
              Start exploring and add items you adore
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-300">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 transform ${
                  removingItem === item.id
                    ? "opacity-0 scale-90"
                    : "opacity-100 scale-100"
                } hover:shadow-lg hover:-translate-y-1`}
              >
                {/* Image Top */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />

                {/* Details Below */}
                <div className="p-4 flex flex-col items-center text-center">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Price: ₹{item.price}
                  </p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="mt-4 px-5 py-2 border border-black rounded-full text-sm font-medium text-black hover:bg-black hover:text-white transition-all duration-300"
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
