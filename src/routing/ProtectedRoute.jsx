import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";
import LoginModal from "../components/LoginModal";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setIsLoginOpen(true);
    }
  }, [currentUser]);

  if (!currentUser) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
            <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
            <p className="text-gray-600 mb-6">Please login to view your cart.</p>
            <button 
                onClick={() => setIsLoginOpen(true)}
                className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
                Login to Continue
            </button>
        </div>
        <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      </>
    );
  }

  return children;
}
