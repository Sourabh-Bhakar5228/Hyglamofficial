import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, ChevronLeft, ChevronRight, Star, Filter } from "lucide-react";
import allProducts from "../data/allProducts.json";
import { useWishlist } from "../components/context/WishlistContext";
import GiftingCustomization from "../components/services/GiftingCustomization";

export default function Products() {
  const { addToWishlist, wishlist } = useWishlist();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isWishlistUpdated, setIsWishlistUpdated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Get all unique categories
  const categories = [
    { id: "all", name: "All Products" },
    ...allProducts.map((category) => ({
      id: category.id,
      name: category.title,
    })),
  ];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((category) => category.id === selectedCategory);

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
      {/* Banner Section with Image - Text on Left */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmVja2xhY2V8ZW58MHx8MHx8fDA%3D"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                Our Products
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white mb-6">
                Discover our curated collection of premium products designed for
                your lifestyle
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("products-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div id="products-section" className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">All Products</h2>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4"
          >
            <Filter size={18} />
            Filter Categories
          </button>

          {/* Category Filters - Desktop */}
          <div className="hidden md:flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Category Filters - Mobile */}
          {showFilters && (
            <div className="md:hidden grid grid-cols-2 gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setShowFilters(false);
                  }}
                  className={`px-4 py-2 rounded-lg border transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.map((category) => (
          <div key={category.id} className="mb-16">
            {selectedCategory === "all" && (
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>
            )}

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
                              ? "text-black fill-current"
                              : "text-gray-300"
                          }
                        />
                      ))}
                      <span className="ml-1 text-xs text-gray-500">(24)</span>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="text-black font-bold">
                        ₹{product.price}
                      </div>
                      <Link
                        to={`/product/${product.id}`}
                        className="text-black hover:text-gray-800 font-medium text-sm flex items-center"
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

      <GiftingCustomization />

      {/* Wishlist Confirmation Toast */}
      {isWishlistUpdated && (
        <div className="fixed bottom-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-lg animate-fadeInOut">
          Product added to wishlist!
        </div>
      )}
    </div>
  );
}
