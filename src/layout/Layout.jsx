import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import LoginModal from "../components/LoginModal";
import { useAuth } from "../components/context/AuthContext";

export default function Layout() {
  const { currentUser, isLoginModalOpen, setLoginModalOpen } = useAuth();
  // const { loading } = useAuth(); // Assuming loading is available in context, if not, add it

  useEffect(() => {
    // Show login modal on initial load if user is not authenticated
    // Add a small delay for better UX
    const timer = setTimeout(() => {
        if (!currentUser) {
            setLoginModalOpen(true);
        }
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, [currentUser, setLoginModalOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      {/* Nav */}
      <Nav />

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setLoginModalOpen(false)} 
      />
    </div>
  );
}
