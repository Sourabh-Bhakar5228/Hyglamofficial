import React, { useState, useEffect } from "react";
import { Menu, X, Heart, ShoppingCart, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// import LoginModal from "../LoginModal"; // Moved to Layout
import logo from "/assets/hyglamlogo.png";
import leftLogo from "/assets/lettermark.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  // const [isLoginOpen, setIsLoginOpen] = useState(false); // Removed local state
  const { currentUser, logout, setLoginModalOpen } = useAuth(); // Added setLoginModalOpen
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${isSticky
        ? "fixed top-0 shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-black/80 backdrop-blur-lg"
        : "relative bg-black"
        } border-b border-gold-500/30`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Left Menu (Desktop with Logo + Links) */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium h-14">
          <Link to="/" className="flex items-center h-full">
            <img
              src={leftLogo}
              alt="Hyglam Logo"
              className="max-h-36 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <Link to="/about" className="hover:text-gold-500 transition-colors">
            About
          </Link>
          <Link to="/products" className="hover:text-gold-500 transition-colors">
            Products
          </Link>
        </div>

        {/* Right Menu (Desktop with FAQ, Gallery, Cart, Wishlist, Contact) */}
        <div className="hidden md:flex items-center space-x-4 text-white font-medium">
          <Link to="/gallery" className="hover:text-gold-500 transition-colors">
            Gallery
          </Link>
          <Link to="/contact" className="hover:text-gold-500 transition-colors">
            Contact
          </Link>

          {/* Cart & Wishlist Icons */}
          <button
            className="flex items-center space-x-1 hover:text-gold-500 transition-colors"
            onClick={() => handleNavClick("/cart")}
          >
            <ShoppingCart size={20} />
          </button>
          <button
            className="flex items-center space-x-1 hover:text-gold-500 transition-colors"
            onClick={() => handleNavClick("/wishlist")}
          >
            <Heart size={20} />
          </button>

          {/* Contact Button */}
          {currentUser ? (
            <button
              onClick={() => handleNavClick("/profile")}
              className="px-6 py-2 border border-white/20 text-white rounded-full hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all flex items-center gap-2"
            >
              <User size={18} />
              Profile
            </button>
          ) : (
            <button
              onClick={() => setLoginModalOpen(true)}
              className="px-6 py-2 border border-gold-500/50 text-gold-500 rounded-full hover:bg-gold-500 hover:text-black transition-all"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Header Layout */}
        <div className="md:hidden bg-black flex justify-between items-center w-full relative">
          {/* Left: Text Logo */}
          <Link to="/" className="flex items-center">
            <img src={leftLogo} alt="Hyglam" className="h-[57px] object-contain brightness-0 invert" />
          </Link>

          {/* Center: Animated Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link to="/">
              <div className="w-12 h-12 bg-black border border-[#cbb87f] rounded-full flex items-center justify-center shadow-sm animate-bounce">
                <img src={logo} alt="Hyglam" className="h-10 object-contain" />
              </div>
            </Link>
          </div>

          {/* Right: Hamburger Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="z-50">
            {isOpen ? (
              <X className="text-gold-500" size={28} />
            ) : (
              <Menu className="text-gold-500" size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Center Logo (Desktop Floating) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-full -mt-12 hidden md:flex">
        <Link to="/">
          <div className="w-36 h-36 bg-black border border-gold-500/50 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(250,176,63,0.4)] hover:border-gold-500 animate-bounce">
            <img src={logo} alt="Hyglam Logo" className="h-36" />
          </div>
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gold-500/20 px-6 py-8 space-y-6 text-white font-medium absolute top-full left-0 w-full shadow-2xl">
          <Link
            to="/about"
            className="block text-lg hover:text-gold-500 transition-colors"
            onClick={() => handleNavClick("/about")}
          >
            About
          </Link>
          <Link
            to="/products"
            className="block text-lg hover:text-gold-500 transition-colors"
            onClick={() => handleNavClick("/products")}
          >
            Products
          </Link>

          <Link
            to="/gallery"
            className="block text-lg hover:text-gold-500 transition-colors"
            onClick={() => handleNavClick("/gallery")}
          >
            Gallery
          </Link>

          {/* Cart & Wishlist */}
          <div className="flex space-x-8 pt-4 border-t border-white/5">
            <button
              className="flex items-center space-x-3 hover:text-gold-500 transition-colors"
              onClick={() => handleNavClick("/cart")}
            >
              <ShoppingCart size={22} /> <span className="text-sm uppercase tracking-widest">Cart</span>
            </button>
            <button
              className="flex items-center space-x-3 hover:text-gold-500 transition-colors"
              onClick={() => handleNavClick("/wishlist")}
            >
              <Heart size={22} /> <span className="text-sm uppercase tracking-widest">Wishlist</span>
            </button>
          </div>

          <div className="pt-6">
            {currentUser ? (
              <button
                onClick={() => handleNavClick("/profile")}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all flex items-center justify-center gap-3"
              >
                <User size={20} />
                Profile
              </button>
            ) : (
              <button
                onClick={() => {
                  setLoginModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full px-6 py-4 bg-gold-500 text-black rounded-2xl font-bold uppercase tracking-widest shadow-lg shadow-gold-500/20 active:scale-95 transition-all"
              >
                Login
              </button>
            )}
          </div>

          <Link
            to="/contact"
            className="block text-center text-gray-500 text-sm tracking-[0.3em] uppercase hover:text-gold-500 transition-colors"
            onClick={() => handleNavClick("/contact")}
          >
            Contact Support
          </Link>
        </div>
      )}
      {/* <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />  Moved to Layout */}
    </nav>
  );
};

export default Navbar;
