import React, { useEffect, useState } from "react";
import { getCookie, setCookie, deleteCookie } from "../../utils/cookies";
import { ShoppingCart, Trash2 } from "lucide-react";

export default function CartTab() {
  const [items, setItems] = useState([]);
  const [removingItem, setRemovingItem] = useState(null);

  useEffect(() => {
    // Load cart items from cookies
    const timer = setTimeout(() => {
        try {
            const cartData = getCookie("cart");
            // Handle if cookie is undefined or not standard (string vs object)
            // Assuming getCookie returns JSON parsed object or null
            setItems(Array.isArray(cartData) ? cartData : []);
          } catch (e) {
            console.error("Failed to load cart", e);
            setItems([]);
          }
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
    setItems([]);
    deleteCookie("cart");
  };

  return (
    <div className="space-y-6 animate-fadeIn">
       <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Cart</h2>
        {items.length > 0 && (
             <button
             onClick={clear}
             className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
           >
             Clear Cart
           </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-100">
          <ShoppingCart className="mx-auto text-gray-300 mb-4" size={48} />
          <p className="text-gray-500 font-medium">Your cart is empty</p>
          <button className="mt-4 text-[#cbb87f] font-semibold hover:underline">Start Shopping</button>
        </div>
      ) : (
        <>
          <div className="grid gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className={`flex gap-4 bg-white p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 ${
                  removingItem === item.id ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg bg-gray-100"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 line-clamp-1">{item.name}</h3>
                    <p className="text-[#cbb87f] font-medium mt-1">₹{item.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      onClick={() => remove(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    >
                        <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 bg-gray-900 text-white rounded-xl flex justify-between items-center shadow-lg">
            <div>
                <p className="text-gray-400 text-sm">Total Amount</p>
                <p className="text-2xl font-bold">₹{items.reduce((s, i) => s + i.price, 0).toLocaleString()}</p>
            </div>
            <button className="px-6 py-2 bg-[#cbb87f] hover:bg-[#b3a06a] text-black font-semibold rounded-lg transition-colors">
                Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
