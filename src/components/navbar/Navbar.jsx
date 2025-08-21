import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaBars,
  FaSearch,
  FaComment,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaTimes,
  FaPhone,
  FaMapMarkerAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const HyglamHeader = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [cartCount] = useState(5);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body overflow when mobile menu is open
  useEffect(() => {
    if (isMobileMenuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuActive]);

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  const toggleSearch = (e) => {
    e.preventDefault();
    setIsSearchActive(!isSearchActive);
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isSearchActive &&
        !e.target.closest(".search-toggle") &&
        !e.target.closest("#search-dropdown")
      ) {
        setIsSearchActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSearchActive]);

  return (
    <div className="font-sans">
      {/* Top Black Bar */}
      <div className="bg-black text-white text-sm py-2 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Left: Social Icons */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="hover:text-rose-400 transition-colors duration-200"
            >
              <FaInstagram />
            </Link>
            <Link
              to="/"
              className="hover:text-rose-400 transition-colors duration-200"
            >
              <FaTwitter />
            </Link>
            <Link
              to="/"
              className="hover:text-rose-400 transition-colors duration-200"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="/"
              className="hover:text-rose-400 transition-colors duration-200"
            >
              <FaYoutube />
            </Link>
            <Link
              to="/"
              className="hover:text-rose-400 transition-colors duration-200"
            >
              <FaFacebookF />
            </Link>
          </div>

          {/* Center Text */}
          <div className="hidden md:block text-center mx-4 flex-1">
            <span className="animate-pulse">
              NEW: DELIVERY TO THE DOOR IS ACTIVE!
            </span>
          </div>

          {/* Right Links */}
          <div className="hidden md:flex space-x-6 text-xs">
            <Link
              to="/about"
              className="hover:text-rose-400 transition-colors duration-200 flex items-center"
            >
              <FaUser className="mr-1" /> About Us
            </Link>
            <Link
              to="/"
              className="hover:text-rose-400 transition-colors duration-200 flex items-center"
            >
              <FaMapMarkerAlt className="mr-1" /> Store Location
            </Link>
            <Link
              to="/"
              className="hover:text-rose-400 transition-colors duration-200 flex items-center"
            >
              <FaPhone className="mr-1" /> Contact Us
            </Link>
            <Link
              to="/"
              className="hover:text-rose-400 transition-colors duration-200 flex items-center"
            >
              <FaQuestionCircle className="mr-1" /> FAQs
            </Link>
          </div>

          {/* Mobile: Simplified top bar */}
          <div className="md:hidden text-xs w-full text-center">
            <span className="animate-pulse">
              FREE SHIPPING ON ORDERS OVER $50
            </span>
          </div>
        </div>
      </div>

      {/* White Navbar */}
      <nav
        className={`bg-white border-b border-gray-200 text-black sticky top-0 z-30 transition-all duration-300 ${
          isScrolled ? "shadow-md py-2" : "py-0"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Mobile: Hamburger Menu (visible only on mobile) */}
          <div className="md:hidden">
            <button
              className="text-rose-800 focus:outline-none transition-transform hover:scale-110"
              onClick={() => setIsMobileMenuActive(true)}
              aria-label="Open menu"
            >
              <FaBars className="text-xl" />
            </button>
          </div>

          {/* Desktop Left Menu (hidden on mobile) */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="hover:text-rose-500 transition-colors duration-200 font-medium"
            >
              HOME
            </Link>
            <Link
              to="/"
              className="hover:text-rose-500 transition-colors duration-200 font-medium"
            >
              SHOP
            </Link>
            <Link
              to="/products"
              className="hover:text-rose-500 transition-colors duration-200 font-medium"
            >
              CATEGORIES
            </Link>
            <Link
              to="/"
              className="hover:text-rose-500 transition-colors duration-200 font-medium"
            >
              BLOG
            </Link>
            <Link
              to="/contact"
              className="hover:text-rose-500 transition-colors duration-200 font-medium"
            >
              CONTACT
            </Link>
          </div>

          {/* Center Logo */}
          <div
            className="text-2xl font-bold tracking-widest text-rose-800 transition-all duration-300 hover:scale-105
             absolute left-1/2 -translate-x-1/2 
             md:static md:translate-x-0 md:ml-[-270px]"
          >
            <Link to="/">Hyglam</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5 relative">
            {/* Desktop Icons */}
            <Link
              to="/"
              className="hidden md:block search-toggle hover:text-rose-500 transition-colors duration-200"
              onClick={toggleSearch}
            >
              <FaSearch />
            </Link>
            <Link
              to="/"
              className="hidden md:block hover:text-rose-500 transition-colors duration-200"
            >
              <FaComment />
            </Link>
            <Link
              to="/"
              className="hidden md:block hover:text-rose-500 transition-colors duration-200"
            >
              <FaUser />
            </Link>
            <Link
              to="/"
              className="hidden md:block hover:text-rose-500 transition-colors duration-200"
            >
              <FaHeart />
            </Link>

            {/* Mobile: Only show search icon */}
            <Link
              to="/"
              className="md:hidden search-toggle hover:text-rose-500 transition-colors duration-200 "
              onClick={toggleSearch}
            >
              <FaSearch />
            </Link>

            {/* Cart Icon (visible on all screens) */}
            <Link
              to="/"
              className="cart-icon hover:text-rose-500 transition-colors duration-200 relative"
            >
              <FaShoppingCart />
              <span className="cart-count">{cartCount}</span>
            </Link>

            {/* Search Dropdown */}
            <div
              id="search-dropdown"
              className={`search-dropdown ${isSearchActive ? "active" : ""}`}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="search-input pl-10 pr-4"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="overlay"
        className={`overlay fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuActive ? "active" : ""
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out ${
          isMobileMenuActive ? "active" : ""
        }`}
      >
        <div className="p-5 border-b flex justify-between items-center">
          <div className="text-2xl font-bold tracking-widest text-rose-800">
            Hyglam
          </div>
          <button
            id="close-menu"
            className="text-gray-500 hover:text-rose-800 transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            <FaTimes />
          </button>
        </div>
        <div className="p-5 flex flex-col space-y-4 overflow-y-auto h-full pb-20">
          <Link
            to="/"
            className="hover:text-rose-500 py-2 font-medium transition-colors duration-200 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            HOME
          </Link>
          <Link
            to="/"
            className="hover:text-rose-500 py-2 font-medium transition-colors duration-200 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            SHOP
          </Link>
          <Link
            to="/"
            className="hover:text-rose-500 py-2 font-medium transition-colors duration-200 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            CATEGORIES
          </Link>
          <Link
            to="/"
            className="hover:text-rose-500 py-2 font-medium transition-colors duration-200 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            BLOG
          </Link>
          <Link
            to="/"
            className="hover:text-rose-500 py-2 font-medium transition-colors duration-200 border-b border-gray-100"
            onClick={closeMobileMenu}
          >
            CONTACT
          </Link>

          <div className="pt-4 border-t mt-4">
            <Link
              to="/"
              className="hover:text-rose-400 py-2 block transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              to="/"
              className="hover:text-rose-400 py-2 block transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Store Location
            </Link>
            <Link
              to="/"
              className="hover:text-rose-400 py-2 block transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
            <Link
              to="/"
              className="hover:text-rose-400 py-2 block transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              FAQs
            </Link>
          </div>

          <div className="pt-4 border-t mt-4">
            <div className="flex space-x-4 justify-center">
              <Link
                to="/"
                className="hover:text-rose-500 transition-colors duration-200"
              >
                <FaInstagram className="text-lg" />
              </Link>
              <Link
                to="/"
                className="hover:text-rose-500 transition-colors duration-200"
              >
                <FaTwitter className="text-lg" />
              </Link>
              <Link
                to="/"
                className="hover:text-rose-500 transition-colors duration-200"
              >
                <FaLinkedinIn className="text-lg" />
              </Link>
              <Link
                to="/"
                className="hover:text-rose-500 transition-colors duration-200"
              >
                <FaYoutube className="text-lg" />
              </Link>
              <Link
                to="/"
                className="hover:text-rose-500 transition-colors duration-200"
              >
                <FaFacebookF className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cart-icon {
          position: relative;
        }
        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #f43f5e;
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
        }

        /* Mobile menu styles */
        .mobile-menu {
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
        }

        .mobile-menu.active {
          transform: translateX(0);
        }

        .overlay {
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-in-out;
        }

        .overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Search dropdown styles */
        .search-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          width: 100%;
          background: white;
          padding: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          display: none;
          z-index: 30;
        }

        .search-dropdown.active {
          display: block;
          animation: slideDown 0.3s ease-out;
        }

        .search-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .search-input:focus {
          border-color: #f43f5e;
        }

        /* Custom breakpoint for better control */
        @media (max-width: 968px) {
          .desktop-only {
            display: none !important;
          }

          .mobile-only {
            display: block !important;
          }

          .search-dropdown {
            left: 0;
          }
        }

        @media (min-width: 969px) {
          .mobile-only {
            display: none !important;
          }

          .search-dropdown {
            width: 300px;
            left: auto;
            right: 0;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HyglamHeader;
