import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">HYGLAM</h3>
          <p className="text-sm leading-relaxed mb-6">
            Elevating beauty and wellness through premium products and
            exceptional service.
          </p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-white transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white transition-colors">
                Faq
              </Link>
            </li>
            <li>
              <Link
                to="/wishlist"
                className="hover:text-white transition-colors"
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white transition-colors">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Featured Products */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Popular Products
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/product/boss-necklace"
                className="hover:text-white transition-colors"
              >
                Statement Choker
              </Link>
            </li>
            <li>
              <Link
                to="/product/everyday-necklaces"
                className="hover:text-white transition-colors"
              >
                Minimal Chain Pendant
              </Link>
            </li>
            <li>
              <Link
                to="/product/glam-necklace"
                className="hover:text-white transition-colors"
              >
                Stone-Studded Choker
              </Link>
            </li>
            <li>
              <Link
                to="/product/festive-necklace"
                className="hover:text-white transition-colors"
              >
                Kundan Necklace
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4" />
              <span>
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                Bangalore-560016
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4" />
              <span>+91 9837235619</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4" />
              <span>hyglamofficial@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-1">
              Stay Glamorous
            </h4>
            <p className="text-sm text-gray-400">
              Subscribe for beauty tips & exclusive offers
            </p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-l-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-r-md font-medium text-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 HYGLAM. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
