import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Sticky effect on scroll
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
          ? "fixed top-0 shadow-lg bg-[#1e2b38]/95"
          : "relative bg-[#1e2b38]"
      } border-b border-[#cbb87f]`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Left Menu (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li className="cursor-pointer hover:text-[#cbb87f]">Home</li>
          <li className="cursor-pointer hover:text-[#cbb87f]">Dresses</li>
          <li className="cursor-pointer hover:text-[#cbb87f]">About</li>
          <li className="cursor-pointer hover:text-[#cbb87f]">FAQ</li>
          <li className="cursor-pointer hover:text-[#cbb87f]">Gallery</li>
        </ul>

        {/* Mobile Logo (Left) */}
        <div className="md:hidden flex justify-start flex-1">
          <span className="text-white text-xl font-bold">Hyglam</span>
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

        {/* Contact Button */}
        <button className="hidden md:block px-6 py-2 border border-[#cbb87f] text-white rounded-full hover:bg-[#cbb87f] hover:text-[#1e2b38] transition">
          Contact
        </button>
      </div>

      {/* Center Logo (Desktop) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-full -mt-8 hidden md:flex">
        <div className="w-20 h-20 bg-[#1e2b38] border border-[#cbb87f] rounded-full flex items-center justify-center shadow-md animate-bounce">
          <span className="text-white font-bold">Hyglam</span>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1e2b38] border-t border-[#cbb87f] px-6 py-4 space-y-4 text-white">
          <p className="cursor-pointer hover:text-[#cbb87f]">Home</p>
          <p className="cursor-pointer hover:text-[#cbb87f]">Dresses</p>
          <p className="cursor-pointer hover:text-[#cbb87f]">About</p>
          <p className="cursor-pointer hover:text-[#cbb87f]">FAQ</p>
          <p className="cursor-pointer hover:text-[#cbb87f]">Gallery</p>
          <button className="w-full mt-4 px-6 py-2 border border-[#cbb87f] text-white rounded-full hover:bg-[#cbb87f] hover:text-[#1e2b38] transition">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
