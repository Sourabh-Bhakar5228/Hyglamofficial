import React, { useEffect, useState } from "react";
import { getCookie, setCookie, deleteCookie } from "../utils/cookies";

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
    <div className="min-h-screen bg-gray-100 text-gray-900 transition-all duration-300">
      {/* Banner */}
      <div
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
          url('https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmclMjBjYXJ0fGVufDB8fDB8fHww')`,
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center animate-slideInDown">
          🛒 Your Cart
        </h1>
      </div>

      <div className="container mx-auto px-4 py-12">
        {items.length === 0 ? (
          <div className="text-center py-12 animate-fadeIn">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-xl font-semibold">Your cart is empty</p>
            <p className="text-gray-600 mt-2">Add some items to get started</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 transition-all duration-300">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    removingItem === item.id
                      ? "opacity-0 -translate-x-8"
                      : "opacity-100 translate-x-0"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        Price: ₹{item.price}
                      </p>
                    </div>
                    <button
                      onClick={() => remove(item.id)}
                      className="mt-4 w-full px-4 py-2 border border-gray-800 rounded-full text-sm font-medium text-gray-800 hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-10 flex flex-col sm:flex-row justify-between items-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 animate-fadeInUp">
              <button
                onClick={clear}
                className="mb-4 sm:mb-0 px-6 py-2 border border-gray-800 rounded-full text-gray-800 hover:bg-black hover:text-white transition-all duration-300"
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
