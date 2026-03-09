import React, { useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import { Heart, Trash2, ShoppingBag } from "lucide-react";
// Assuming there is a way to add to cart, if not I will just show 'Add to Cart' button visualization

export default function WishlistTab() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [removingItem, setRemovingItem] = useState(null);

  const handleRemove = (id) => {
    setRemovingItem(id);
    setTimeout(() => {
      removeFromWishlist(id);
      setRemovingItem(null);
    }, 300);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-100">
          <Heart className="mx-auto text-gray-300 mb-4" size={48} />
          <p className="text-gray-500 font-medium">Your wishlist is empty</p>
          <button className="mt-4 text-[#cbb87f] font-semibold hover:underline">Start Exploring</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className={`bg-white p-3 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 flex gap-3 ${
                removingItem === item.id ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg bg-gray-100"
              />
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <h3 className="font-semibold text-gray-900 line-clamp-1">{item.name}</h3>
                  <p className="text-[#cbb87f] font-medium text-sm">₹{item.price.toLocaleString()}</p>
                </div>
                
                <div className="flex justify-end gap-2">
                   <button
                    onClick={() => handleRemove(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                    title="Remove"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
