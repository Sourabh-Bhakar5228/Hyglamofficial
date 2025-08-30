import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/hygalmlogo.png"; // 🦢 Put your Swan Black Logo here

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
        isSticky ? "fixed top-0 shadow-lg bg-white/95" : "relative bg-white"
      } border-b border-[#cbb87f]`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Left Menu (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li>
            <Link to="/" className="hover:text-[#cbb87f]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-[#cbb87f]">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#cbb87f]">
              About
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-[#cbb87f]">
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-[#cbb87f]">
              Gallery
            </Link>
          </li>
        </ul>

        {/* Mobile Logo (Left) */}
        <div className="md:hidden flex justify-start flex-1  ">
          <img src={logo} alt="Hyglam" className="h-10" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-black" size={28} />
            ) : (
              <Menu className="text-black" size={28} />
            )}
          </button>
        </div>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden md:block px-6 py-2 border border-[#cbb87f] text-black rounded-full hover:bg-[#cbb87f] hover:text-white transition"
        >
          Contact
        </Link>
      </div>

      {/* Center Logo (Desktop) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-full -mt-8 hidden md:flex">
        <div className="w-20 h-20 bg-black border border-[#cbb87f] rounded-full flex items-center justify-center shadow-md">
          <img src={logo} alt="Hyglam Logo" className="h-12" />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#cbb87f] px-6 py-4 space-y-4 text-black font-medium">
          <Link to="/" className="block hover:text-[#cbb87f]">
            Home
          </Link>
          <Link to="/products" className="block hover:text-[#cbb87f]">
            Products
          </Link>
          <Link to="/about" className="block hover:text-[#cbb87f]">
            About
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
