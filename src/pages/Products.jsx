import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, ChevronLeft, ChevronRight, Star, Filter } from "lucide-react";
import HighlightedHeading from "../components/common/HighlightedHeading";
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
    <div className="min-h-screen" style={{ background: 'radial-gradient(circle at center, #1a1605 0%, #000 100%)' }}>
      {/* Banner Section with Image - Text on Left */}
      <div className="relative h-[30vh] md:h-[60vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmVja2xhY2V8ZW58MHx8MHx8fDA%3D"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-lg">
              <HighlightedHeading level="h1" className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                Our Products
              </HighlightedHeading>
              <p className="text-base md:text-xl lg:text-2xl text-white mb-6">
                Discover our curated collection of premium products designed for
                your lifestyle
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("products-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="bg-gold-500 text-black px-8 py-3.5 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-xl shadow-gold-500/20 active:scale-95"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div id="products-section" className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <HighlightedHeading level="h2" className="text-4xl font-bold mb-4 md:mb-0 text-white">
            All Products
          </HighlightedHeading>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 bg-black/40 backdrop-blur-md border border-gold-500/30 text-gold-500 rounded-xl px-5 py-2.5 mb-6 transition-all hover:border-gold-500"
          >
            <Filter size={18} />
            Filter Categories
          </button>

          {/* Category Filters - Desktop */}
          <div className="hidden md:flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 ${selectedCategory === category.id
                  ? "bg-gold-500 text-black border-gold-500 shadow-lg shadow-gold-500/20"
                  : "bg-black/40 text-gray-400 border-white/10 hover:border-gold-500/50 hover:text-white backdrop-blur-sm"
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
                  className={`px-4 py-2.5 rounded-xl border transition-all duration-300 ${selectedCategory === category.id
                    ? "bg-gold-500 text-black border-gold-500"
                    : "bg-black/40 text-gray-400 border-white/10"
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
              <div className="mb-10 text-center">
                <HighlightedHeading level="h2" className="text-3xl font-bold mb-3 text-white">
                  {category.title}
                </HighlightedHeading>
                <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base">
                  {category.description}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl border border-white/5 overflow-hidden hover:border-gold-500/50 transition-all duration-500 flex flex-col group"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover"
                    />
                    <button
                      className={`absolute top-4 right-4 p-2.5 rounded-full transition-all duration-300 z-10 ${isWishlistUpdated &&
                        wishlist.some((item) => item.id === product.id)
                        ? "animate-ping bg-gold-500"
                        : wishlist.some((item) => item.id === product.id)
                          ? "bg-gold-500 text-black"
                          : "bg-black/60 text-white/50 hover:bg-gold-500 hover:text-black backdrop-blur-md"
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

                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-1 text-white group-hover:text-gold-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {product.category}
                    </p>
                    <div className="flex items-center mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className={
                            star <= 4
                              ? "text-gold-500 fill-current"
                              : "text-white/20"
                          }
                        />
                      ))}
                      <span className="ml-1 text-xs text-gray-500">(24)</span>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="text-gold-500 font-extrabold text-xl">
                        ₹{product.price}
                      </div>
                      <Link
                        to={`/product/${product.id}`}
                        className="text-white hover:text-gold-500 font-bold text-sm flex items-center transition-all group/link"
                      >
                        View Details
                        <ChevronRight size={18} className="ml-1 transform group-hover/link:translate-x-1 transition-transform" />
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
