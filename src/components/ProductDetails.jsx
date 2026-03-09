import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Star,
  ShoppingCart,
  Share,
  Check,
  Minus,
  Plus,
} from "lucide-react";
import HighlightedHeading from "./common/HighlightedHeading";
import allProducts from "../data/allProducts.json";
import { setCookie, getCookie } from "../utils/cookies";
import { useWishlist } from "../components/context/WishlistContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShippingInformation from "../components/services/ShippingInformation";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToWishlist, wishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isWishlistUpdated, setIsWishlistUpdated] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    deliveryLocation: "",
    productName: "",
    productPrice: "",
    quantity: 1,
  });

  // Sample product images for gallery
  const productImages = product
    ? [
      product.image,
      product.image, // In a real app, these would be different images
      product.image,
      product.image,
    ]
    : [];

  useEffect(() => {
    let found = null;
    for (const cat of allProducts) {
      const p = cat.products.find((item) => item.id === id);
      if (p) {
        found = p;
        break;
      }
    }
    if (!found) {
      navigate("/products");
    } else {
      setProduct(found);
      setFormData((prev) => ({
        ...prev,
        productName: found.name,
        productPrice: found.price,
        quantity: quantity,
      }));
    }
  }, [id, navigate, quantity]);

  const handleAddToCart = () => {
    const cart = getCookie("cart") || [];
    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex >= 0) {
      // Update quantity if product exists
      cart[existingItemIndex].quantity =
        (cart[existingItemIndex].quantity || 1) + quantity;
    } else {
      // Add new product with quantity
      cart.push({ ...product, quantity });
    }

    setCookie("cart", cart);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    setIsWishlistUpdated(true);
    setTimeout(() => setIsWishlistUpdated(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    setFormData((prev) => ({ ...prev, quantity: quantity + 1 }));
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    setFormData((prev) => ({
      ...prev,
      quantity: quantity > 1 ? quantity - 1 : 1,
    }));
  };

  const handleOrderNow = () => {
    setShowOrderForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/hyglamofficial@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Subject: "New Direct Order - HyGlam",
            name: formData.name,
            email: formData.email,
            address: formData.address,
            deliveryLocation: formData.deliveryLocation,
            product: formData.productName,
            price: formData.productPrice,
            quantity: formData.quantity,
            total: formData.productPrice * formData.quantity,
          }),
        }
      );

      const data = await response.json();

      if (data.success === "true") {
        toast.success("Order placed successfully! We'll contact you soon.");
        setShowOrderForm(false);
        setFormData({
          name: "",
          email: "",
          address: "",
          deliveryLocation: "",
          productName: product.name,
          productPrice: product.price,
          quantity: quantity,
        });
      } else {
        toast.error("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to place order. Please try again.");
    }
  };

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );

  return (
    <div className="min-h-screen py-8" style={{ background: 'radial-gradient(circle at center, #1a1605 0%, #000 100%)' }}>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-gold-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight size={16} className="text-gray-600" />
            </li>
            <li>
              <Link
                to="/products"
                className="text-gray-400 hover:text-gold-500 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <ChevronRight size={16} className="text-gray-600" />
            </li>
            <li className="text-white font-medium truncate">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-10 border border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/10 group">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Wishlist Button */}
                <button
                  onClick={handleAddToWishlist}
                  className={`absolute top-6 right-6 p-3 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 ${wishlist.some((item) => item.id === product.id)
                    ? "bg-gold-500 text-black"
                    : "bg-black/40 text-white hover:bg-gold-500 hover:text-black"
                    }`}
                >
                  <Heart
                    size={24}
                    className={
                      wishlist.some((item) => item.id === product.id)
                        ? "fill-current"
                        : ""
                    }
                  />
                </button>
              </div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${selectedImage === index
                      ? "border-gold-500 scale-105"
                      : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl font-bold text-white mb-3">
                {product.name}
              </h1>
              <p className="text-gold-500/80 font-medium tracking-wide mb-6 uppercase text-sm">{product.category}</p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className={
                        star <= 4
                          ? "text-gold-500 fill-current"
                          : "text-white/20"
                      }
                    />
                  ))}
                </div>
                <span className="ml-3 text-gray-400 font-medium">(42 Verified Reviews)</span>
              </div>

              {/* Price */}
              <div className="text-4xl font-extrabold text-gold-500 mb-8 flex items-center gap-2">
                ₹{product.price}
                <span className="text-sm font-normal text-gray-400 line-through ml-2">₹{Math.round(product.price * 1.5)}</span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-white">Product Description</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {product.description ||
                    "This premium jewelry piece is meticulously crafted for elegance and enduring beauty. Each detail reflects our commitment to high-end artistry and sophistication."}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8 p-6 bg-white/5 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold mb-4 text-white">Luxury Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li className="flex items-center text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mr-3">
                      <Check size={14} className="text-gold-500" />
                    </div>
                    Premium Quality
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mr-3">
                      <Check size={14} className="text-gold-500" />
                    </div>
                    Sourced Stones
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mr-3">
                      <Check size={14} className="text-gold-500" />
                    </div>
                    Life-time Polish
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mr-3">
                      <Check size={14} className="text-gold-500" />
                    </div>
                    Eco-Friendly Box
                  </li>
                </ul>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3 text-white">Quantity</h3>
                <div className="flex items-center w-fit p-1 bg-white/5 rounded-xl border border-white/10">
                  <button
                    onClick={decreaseQuantity}
                    className="p-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="px-6 py-2 text-white font-bold text-lg min-w-[50px] text-center">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="p-3 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gold-500 transition-all duration-300 flex-1 shadow-xl shadow-white/5 active:scale-95"
                >
                  <ShoppingCart size={22} />
                  {addedToCart ? "In Your Cart" : "Add to Cart"}
                </button>

                <button
                  onClick={handleOrderNow}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gold-500 text-black font-bold rounded-xl hover:bg-gold-600 transition-all duration-300 flex-1 shadow-xl shadow-gold-500/20 active:scale-95"
                >
                  Order Direct
                </button>

                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all active:scale-95"
                >
                  <Share size={22} />
                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t border-white/5 pt-6">
                <div className="text-sm text-gray-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                    <span>Complimentary signature gift packaging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                    <span>Global express shipping available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ShippingInformation />

        {/* Related Products Section */}
        <div className="mt-20">
          <HighlightedHeading level="h2" className="text-3xl font-bold mb-8 text-white">
            Exclusively Curated for You
          </HighlightedHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts
              .flatMap((category) => category.products)
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-black/40 backdrop-blur-md rounded-2xl shadow-xl border border-white/5 overflow-hidden hover:border-gold-500/50 transition-all group"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-white text-lg mb-1 group-hover:text-gold-500 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 italic">
                      {relatedProduct.category}
                    </p>
                    <div className="text-gold-500 font-extrabold text-lg mb-4">
                      ₹{relatedProduct.price}
                    </div>
                    <Link
                      to={`/product/${relatedProduct.id}`}
                      className="inline-flex items-center text-white hover:text-gold-500 font-bold text-xs uppercase tracking-widest transition-colors"
                    >
                      Explore Piece
                      <ChevronRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Order Form Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 border border-gold-500/30 rounded-3xl shadow-2xl shadow-gold-500/10 max-w-lg w-full p-8 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>

            <h2 className="text-3xl font-extrabold mb-2 text-white">Secure Your Piece</h2>
            <p className="text-gold-500/70 text-sm mb-8 font-medium">Complete details for {product.name}</p>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2 font-bold" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Enter your name"
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2 font-bold" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="name@luxury.com"
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2 font-bold" htmlFor="address">
                  Delivery Details
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                  placeholder="Enter your complete address"
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                  rows="2"
                  required
                ></textarea>
              </div>

              <div>
                <label
                  className="block text-gray-400 text-xs uppercase tracking-widest mb-2 font-bold"
                  htmlFor="deliveryLocation"
                >
                  City / Location
                </label>
                <input
                  type="text"
                  id="deliveryLocation"
                  name="deliveryLocation"
                  value={formData.deliveryLocation}
                  onChange={handleFormChange}
                  placeholder="e.g. Mumbai, Maharashtra"
                  className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all"
                  required
                />
              </div>

              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-[10px] uppercase font-bold">Total Amount</p>
                  <p className="text-gold-500 font-extrabold text-2xl">₹{product.price * quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-[10px] uppercase font-bold">Quantity</p>
                  <p className="text-white font-bold">{quantity} Items</p>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowOrderForm(false)}
                  className="flex-1 px-6 py-4 bg-transparent border border-white/10 text-gray-400 font-bold rounded-xl hover:bg-white/5 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-4 bg-gold-500 text-black font-extrabold rounded-xl hover:bg-gold-600 shadow-lg shadow-gold-500/20 transition-all active:scale-95"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Notification Toasts */}
      {addedToCart && (
        <div className="fixed bottom-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-lg animate-fadeInOut">
          Product added to cart successfully!
        </div>
      )}

      {isWishlistUpdated && (
        <div className="fixed bottom-4 left-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-lg animate-fadeInOut">
          {wishlist.some((item) => item.id === product.id)
            ? "Added to wishlist!"
            : "Removed from wishlist!"}
        </div>
      )}
    </div>
  );
}
