import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { User, Package, ShoppingCart, Heart, LogOut, Camera } from "lucide-react";
import OrdersTab from "./OrdersTab";
import CartTab from "./CartTab";
import WishlistTab from "./WishlistTab"; // Assuming WishlistTab is created
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { currentUser, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "orders", label: "Orders", icon: Package },
    { id: "cart", label: "Cart", icon: ShoppingCart },
    { id: "wishlist", label: "Wishlist", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px] flex flex-col md:flex-row">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-gray-900 text-white p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#cbb87f] flex items-center justify-center text-black font-bold text-xl">
                  {currentUser?.email?.charAt(0).toUpperCase() || "U"}
                </div>
                <div className="overflow-hidden">
                    <h2 className="font-semibold text-lg truncate">{currentUser?.displayName || "User"}</h2>
                    <p className="text-xs text-gray-400 truncate">{currentUser?.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-[#cbb87f] text-black font-semibold shadow-lg shadow-[#cbb87f]/20"
                          : "text-gray-400 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      <Icon size={20} />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            <button
              onClick={handleLogout}
              className="mt-8 md:mt-0 flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl transition-all duration-300 w-full"
            >
              <LogOut size={20} />
              Sign Out
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8 bg-white overflow-y-auto">
            {activeTab === "profile" && (
              <div className="animate-fadeIn space-y-6">
                <h2 className="text-2xl font-bold mb-6">Profile Details</h2>
                
                <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 mb-8">
                    <div className="relative group cursor-pointer">
                        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center border-4 border-white shadow-lg overflow-hidden">
                             {currentUser?.photoURL ? (
                                <img src={currentUser.photoURL} alt="Profile" className="w-full h-full object-cover" />
                             ) : (
                                <User size={40} className="text-gray-400" />
                             )}
                        </div>
                        <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <Camera size={20} className="text-white" />
                        </div>
                    </div>
                    
                    <div className="flex-1 w-full space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <label className="text-xs text-gray-500 uppercase font-semibold">Full Name</label>
                                <p className="font-medium text-gray-900 mt-1">{currentUser?.displayName || "Not set"}</p>
                            </div>
                             <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <label className="text-xs text-gray-500 uppercase font-semibold">Email Address</label>
                                <p className="font-medium text-gray-900 mt-1">{currentUser?.email}</p>
                            </div>
                             <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <label className="text-xs text-gray-500 uppercase font-semibold">Phone Number</label>
                                <p className="font-medium text-gray-900 mt-1">{currentUser?.phoneNumber || "Not set"}</p>
                            </div>
                             <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <label className="text-xs text-gray-500 uppercase font-semibold">Member Since</label>
                                <p className="font-medium text-gray-900 mt-1">{currentUser?.metadata?.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleDateString() : "Unknown"}</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            )}
            
            {activeTab === "orders" && <OrdersTab />}
            {activeTab === "cart" && <CartTab />}
            {activeTab === "wishlist" && <WishlistTab />}
          </div>
        </div>
      </div>
    </div>
  );
}
