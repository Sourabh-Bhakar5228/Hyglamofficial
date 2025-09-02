import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "/assets/hygalmlogo.png"; // 🦢 Swan Black Logo
import leftLogo from "/assets/lettermark.png"; // Left Decorative Logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 shadow-lg bg-black/95 md:bg-white/95"
          : "relative bg-black md:bg-white"
      } border-b border-[#cbb87f]`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Left Menu (Desktop with Logo + Links) */}
        <div className="hidden md:flex items-center space-x-8 text-black font-medium h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center h-full">
            <img
              src={leftLogo}
              alt="Hyglam Logo"
              className="max-h-36 w-auto object-contain"
            />
          </Link>

          <Link to="/about" className="hover:text-[#cbb87f]">
            About
          </Link>
          <Link to="/products" className="hover:text-[#cbb87f]">
            Products
          </Link>
        </div>

        {/* Right Menu (FAQ + Gallery + Contact) */}
        <div className="hidden md:flex items-center space-x-8 text-black font-medium">
          <Link to="/faq" className="hover:text-[#cbb87f]">
            FAQ
          </Link>
          <Link to="/gallery" className="hover:text-[#cbb87f]">
            Gallery
          </Link>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="px-6 py-2 border border-[#cbb87f] text-black rounded-full hover:bg-[#cbb87f] hover:text-white transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Logo (Left) */}
        <div className="md:hidden flex justify-start flex-1">
          <Link to="/">
            <img src={logo} alt="Hyglam" className="h-10" />
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-white" size={28} />
            ) : (
              <Menu className="text-white" size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Center Logo (Desktop - Floating) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-full -mt-12 hidden md:flex">
        <Link to="/">
          <div className="w-36 h-36 bg-black border border-[#cbb87f] rounded-full flex items-center justify-center shadow-sm transition-shadow duration-300 hover:shadow-[0_0_15px_2px_#fab040] animate-bounce">
            <img src={logo} alt="Hyglam Logo" className="h-36" />
          </div>
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#cbb87f] px-6 py-4 space-y-4 text-black font-medium">
          {/* <Link to="/" className="block hover:text-[#cbb87f]">
            Home
          </Link> */}
          <Link to="/about" className="block hover:text-[#cbb87f]">
            About
          </Link>
          <Link to="/products" className="block hover:text-[#cbb87f]">
            Products
          </Link>
          <Link to="/faq" className="block hover:text-[#cbb87f]">
            FAQ
          </Link>
          <Link to="/gallery" className="block hover:text-[#cbb87f]">
            Gallery
          </Link>
          <Link
            to="/contact"
            className="block w-full mt-4 px-6 py-2 border border-[#cbb87f] text-black rounded-full hover:bg-[#cbb87f] hover:text-white transition text-center"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
