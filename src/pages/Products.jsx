import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, ChevronLeft, ChevronRight, Star } from "lucide-react";
import allProducts from "../data/allProducts.json";
import { useWishlist } from "../components/context/WishlistContext";

export default function Products() {
  const { addToWishlist, wishlist } = useWishlist();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isWishlistUpdated, setIsWishlistUpdated] = useState(false);

  // Get featured products for the slider (first 5 products from each category)
  const featuredProducts = allProducts
    .flatMap((category) => category.products.slice(0, 5))
    .slice(0, 10); // Limit to 10 featured products

  // Handle wishlist button click with visual feedback
  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    setIsWishlistUpdated(true);
    setTimeout(() => setIsWishlistUpdated(false), 1000);
  };

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  // Manual slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative h-80 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-700">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-4">Our Products</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Discover our curated collection of premium products designed for
                your lifestyle
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Slider */}
      <div className="max-w-7xl mx-auto px-4 py-12 relative">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="relative overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {featuredProducts.map((product) => (
              <div key={product.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row h-96">
                  <div className="md:w-1/2 h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {product.description || "Premium quality product"}
                      </p>
                      <div className="flex items-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={18}
                            className={
                              star <= 4
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }
                          />
                        ))}
                        <span className="ml-2 text-gray-500">(42)</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-indigo-600 mb-4">
                        ₹{product.price}
                      </div>
                      <div className="flex space-x-4">
                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
                          Add to Cart
                        </button>
                        <button
                          className={`p-2 rounded-full border ${
                            wishlist.some((item) => item.id === product.id)
                              ? "bg-red-100 text-red-500 border-red-200"
                              : "bg-gray-100 text-gray-500 border-gray-200"
                          } hover:bg-red-100 hover:text-red-500 transition`}
                          onClick={() => handleAddToWishlist(product)}
                        >
                          <Heart
                            size={22}
                            className={
                              wishlist.some((item) => item.id === product.id)
                                ? "fill-current"
                                : ""
                            }
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-indigo-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* All Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">All Products</h2>

        {allProducts.map((category) => (
          <div key={category.id} className="mb-16">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover"
                    />

                    <button
                      className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                        isWishlistUpdated &&
                        wishlist.some((item) => item.id === product.id)
                          ? "animate-ping bg-red-100"
                          : wishlist.some((item) => item.id === product.id)
                          ? "bg-red-100 text-red-500"
                          : "bg-white text-gray-500 hover:bg-red-100 hover:text-red-500"
                      }`}
                      onClick={() => handleAddToWishlist(product)}
                    >
                      <Heart
                        size={18}
                        className={
                          wishlist.some((item) => item.id === product.id)
                            ? "fill-current"
                            : ""
                        }
                      />
                    </button>
                  </div>

                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-lg font-semibold mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3">
                      {product.category}
                    </p>

                    <div className="flex items-center mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className={
                            star <= 4
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }
                        />
                      ))}
                      <span className="ml-1 text-xs text-gray-500">(24)</span>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="text-indigo-600 font-bold">
                        ₹{product.price}
                      </div>
                      <Link
                        to={`/product/${product.id}`}
                        className="text-indigo-600 hover:text-indigo-800 font-medium text-sm flex items-center"
                      >
                        View Details
                        <ChevronRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Wishlist Confirmation Toast */}
      {isWishlistUpdated && (
        <div className="fixed bottom-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-lg animate-fadeInOut">
          Product added to wishlist!
        </div>
      )}
    </div>
  );
}
