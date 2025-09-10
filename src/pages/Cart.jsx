import React, { useEffect, useState } from "react";
import { getCookie, setCookie, deleteCookie } from "../utils/cookies";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [showBanner, setShowBanner] = useState(true);
  const [removingItem, setRemovingItem] = useState(null);

  useEffect(() => {
    // Simulate loading animation
    const timer = setTimeout(() => {
      setItems(getCookie("cart") || []);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const remove = (id) => {
    setRemovingItem(id);
    // Wait for animation to complete before actually removing
    setTimeout(() => {
      const next = items.filter((i) => i.id !== id);
      setItems(next);
      setCookie("cart", next);
      setRemovingItem(null);
    }, 300);
  };

  const clear = () => {
    // Animate clearing all items
    const cartElement = document.querySelector(".space-y-4");
    if (cartElement) {
      cartElement.style.opacity = "0";
      cartElement.style.transform = "translateY(20px)";
    }

    setTimeout(() => {
      setItems([]);
      deleteCookie("cart");

      // Reset animation properties
      if (cartElement) {
        cartElement.style.opacity = "1";
        cartElement.style.transform = "translateY(0)";
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 transition-all duration-300">
      {/* Promotional Banner */}
      {showBanner && (
        <div className="bg-black text-white py-2 px-4 relative animate-fadeIn">
          <div className="container mx-auto text-center">
            🚀 Free shipping on orders over ₹999! Limited time offer.
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
          Your Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-12 animate-fadeIn">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-xl">Your cart is empty</p>
            <p className="text-gray-600 mt-2">Add some items to get started</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 transition-all duration-300">
              {items.map((item) => (
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
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => remove(item.id)}
                      className="px-3 py-1 border border-gray-800 rounded transition-all duration-300 hover:bg-black hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center p-4 bg-white rounded-lg shadow-md border border-gray-200 animate-fadeInUp">
              <button
                onClick={clear}
                className="px-4 py-2 border border-gray-800 rounded transition-all duration-300 hover:bg-black hover:text-white"
              >
                Clear Cart
              </button>
              <div className="text-xl font-bold">
                Total: ₹{items.reduce((s, i) => s + i.price, 0)}
              </div>
            </div>
          </>
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
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slideInDown {
          animation: slideInDown 0.5s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
