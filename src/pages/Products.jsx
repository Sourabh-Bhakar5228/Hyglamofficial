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
    .slice(0, 12); // Limit to 12 featured products

  // Number of cards visible in one slide
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(featuredProducts.length / itemsPerSlide);

  // Handle wishlist button click with visual feedback
  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    setIsWishlistUpdated(true);
    setTimeout(() => setIsWishlistUpdated(false), 1000);
  };

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section with Image */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1710756640106-add3c3be763d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D" // ✅ replace with your image path
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
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

      {/* Featured Products Slider */}
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and premium quality products loved by
            thousands of customers
          </p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative overflow-hidden rounded-2xl group">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
              width: `${totalSlides * 20}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 flex-shrink-0"
              >
                {featuredProducts
                  .slice(
                    slideIndex * itemsPerSlide,
                    slideIndex * itemsPerSlide + itemsPerSlide
                  )
                  .map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                      {/* Product Image */}
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-56 object-cover"
                        />
                        <button
                          className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                            wishlist.some((item) => item.id === product.id)
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

                      {/* Product Details */}
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                        <p className="text-gray-500 text-sm mb-3">
                          {product.category}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center mb-3">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={14}
                              className={
                                star <= (product.rating || 4)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                          <span className="ml-1 text-xs text-gray-500">
                            ({product.reviews || 24})
                          </span>
                        </div>

                        {/* Price */}
                        <div className="text-indigo-600 font-bold text-lg mb-4">
                          ₹{product.price}
                        </div>

                        {/* Buttons */}
                        <div className="mt-auto flex space-x-3">
                          <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-all">
                            Add to Cart
                          </button>
                          <Link
                            to={`/product/${product.id}`}
                            className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 flex items-center"
                          >
                            View
                            <ChevronRight size={16} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-indigo-50 opacity-0 group-hover:opacity-100 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={26} className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-indigo-50 opacity-0 group-hover:opacity-100 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={26} className="text-gray-700" />
          </button>

          {/* Circle Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-white scale-125"
                    : "bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* All Products Section (same as before) */}
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
