import React, { useState, useEffect } from "react";
import { useWishlist } from "../components/context/WishlistContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [removingItem, setRemovingItem] = useState(null);
  const [showBanner, setShowBanner] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
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
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-pulse text-2xl text-gray-800">
          Loading your wishlist...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 transition-all duration-300">
      {/* Promotional Banner */}
      {showBanner && (
        <div className="bg-black text-white py-2 px-4 relative animate-fadeIn">
          <div className="container mx-auto text-center">
            ❤️ Save your favorite items for later!
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
          >
            ✕
          </button>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center animate-slideInDown">
          Your Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center py-12 animate-fadeIn">
            <div className="text-6xl mb-4">❤️</div>
            <p className="text-xl">Your wishlist is empty</p>
            <p className="text-gray-600 mt-2">Start adding items you love</p>
          </div>
        ) : (
          <div className="space-y-4 transition-all duration-300">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className={`flex items-center gap-4 bg-white p-4 rounded-lg shadow-md border border-gray-200 transition-all duration-300 transform ${
                  removingItem === item.id
                    ? "opacity-0 -translate-x-8"
                    : "opacity-100 translate-x-0"
                } hover:shadow-lg`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded transition-transform duration-300 hover:scale-105"
                />
                <div className="flex-1">
                  <div className="font-semibold text-lg">{item.name}</div>
                  <div className="text-gray-600">₹{item.price}</div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="px-3 py-1 border border-gray-800 rounded transition-all duration-300 hover:bg-black hover:text-white"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

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
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slideInDown {
          animation: slideInDown 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
