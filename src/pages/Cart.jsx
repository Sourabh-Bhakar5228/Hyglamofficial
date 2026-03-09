import React, { useEffect, useState } from "react";
import { getCookie, setCookie, deleteCookie } from "../utils/cookies";
import HighlightedHeading from "../components/common/HighlightedHeading";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [removingItem, setRemovingItem] = useState(null);

  useEffect(() => {
    // Load cart items from cookies
    const timer = setTimeout(() => {
      setItems(getCookie("cart") || []);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const remove = (id) => {
    setRemovingItem(id);
    setTimeout(() => {
      const next = items.filter((i) => i.id !== id);
      setItems(next);
      setCookie("cart", next);
      setRemovingItem(null);
    }, 300);
  };

  const clear = () => {
    const cartElement = document.querySelector(".grid");
    if (cartElement) {
      cartElement.style.opacity = "0";
      cartElement.style.transform = "translateY(20px)";
    }

    setTimeout(() => {
      setItems([]);
      deleteCookie("cart");
      if (cartElement) {
        cartElement.style.opacity = "1";
        cartElement.style.transform = "translateY(0)";
      }
    }, 300);
  };

  return (
    <div className="min-h-screen text-white transition-all duration-300" style={{ background: 'radial-gradient(circle at center, #1a1605 0%, #000 100%)' }}>
      {/* Banner */}
      <div
        className="relative bg-cover bg-center h-[30vh] md:h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
    url('https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmclMjBjYXJ0fGVufDB8fDB8fHww')`,
        }}
      >
        <HighlightedHeading level="h1" className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white text-center animate-slideInDown">
          Your Cart
        </HighlightedHeading>
      </div>

      <div className="container mx-auto px-4 py-12">
        {items.length === 0 ? (
          <div className="text-center py-24 animate-fadeIn text-gray-400">
            <div className="text-8xl mb-6 opacity-30">🛒</div>
            <HighlightedHeading level="h2" className="text-2xl font-bold text-white mb-2">Your cart is empty</HighlightedHeading>
            <p className="text-gray-500 mt-2">Add some items to get started</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 transition-all duration-300">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/5 overflow-hidden transition-all duration-500 transform hover:border-gold-500/50 hover:-translate-y-2 group ${removingItem === item.id
                      ? "opacity-0 -translate-x-8"
                      : "opacity-100 translate-x-0"
                    }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  drum                  <div className="p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-xl text-white group-hover:text-gold-500 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gold-500 font-extrabold text-lg mt-2">
                        ₹{item.price}
                      </p>
                    </div>
                    <button
                      onClick={() => remove(item.id)}
                      className="mt-6 w-full px-4 py-2.5 border border-gold-500/30 rounded-full text-sm font-bold text-gold-500 hover:bg-gold-500 hover:text-black transition-all duration-300 active:scale-95"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-12 flex flex-col sm:flex-row justify-between items-center p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/5 animate-fadeInUp shadow-2xl">
              <button
                onClick={clear}
                className="mb-4 sm:mb-0 px-8 py-3 border border-red-500/30 rounded-full text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Clear Entire Cart
              </button>
              <div className="text-2xl font-extrabold text-white">
                Grand Total: <span className="text-gold-500">₹{items.reduce((s, i) => s + i.price, 0)}</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
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
        .animate-slideInDown {
          animation: slideInDown 0.6s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
