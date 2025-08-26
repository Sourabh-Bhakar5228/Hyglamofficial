import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Star,
  Heart,
} from "lucide-react";

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Sample product data with two images per product
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299",
      originalPrice: "$399",
      rating: 4.8,
      image1:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
      image2:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop&crop=center",
      category: "Audio",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Smart Watch Series X",
      price: "$449",
      originalPrice: "$549",
      rating: 4.9,
      image1:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
      image2:
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop&crop=center",
      category: "Wearables",
      badge: "New",
    },
    {
      id: 3,
      name: "Minimalist Laptop Stand",
      price: "$89",
      originalPrice: "$129",
      rating: 4.7,
      image1:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
      image2:
        "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=400&fit=crop&crop=center",
      category: "Accessories",
      badge: "Sale",
    },
    {
      id: 4,
      name: "Wireless Charging Pad",
      price: "$59",
      originalPrice: "$79",
      rating: 4.6,
      image1:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop&crop=center",
      image2:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop&crop=center",
      category: "Tech",
      badge: "Hot",
    },
    {
      id: 5,
      name: "Bluetooth Speaker Pro",
      price: "$199",
      originalPrice: "$249",
      rating: 4.8,
      image1:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
      image2:
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop&crop=center",
      category: "Audio",
      badge: "Featured",
    },
    {
      id: 6,
      name: "Gaming Mechanical Keyboard",
      price: "$159",
      originalPrice: "$199",
      rating: 4.9,
      image1:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop&crop=center",
      image2:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop&crop=center",
      category: "Gaming",
      badge: "Popular",
    },
  ];

  // Responsive products per slide
  const getProductsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // Desktop: 3 products
      return 1; // Mobile & Tablet: 1 product
    }
    return 3; // Default for SSR
  };

  const [productsPerSlide, setProductsPerSlide] = useState(
    getProductsPerSlide()
  );
  const totalSlides = Math.ceil(products.length / productsPerSlide);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const newProductsPerSlide = getProductsPerSlide();
      if (newProductsPerSlide !== productsPerSlide) {
        setProductsPerSlide(newProductsPerSlide);
        setCurrentSlide(0); // Reset to first slide on resize
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [productsPerSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const getCurrentProducts = () => {
    const startIndex = currentSlide * productsPerSlide;
    return products.slice(startIndex, startIndex + productsPerSlide);
  };

  return (
    <div className="w-full max-w-8xl mx-auto bg-white p-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-black mb-4">
          Featured Products
        </h2>
        <div className="w-32 h-1 bg-black mx-auto mb-2"></div>
        <p className="text-gray-600 text-lg">Discover our premium collection</p>
      </div>

      {/* Main Slider Container */}
      <div className="relative overflow-hidden bg-gray-50 rounded-3xl shadow-2xl p-8">
        {/* Products Grid - Responsive Layout */}
        <div
          className={`grid gap-8 min-h-[600px] ${
            productsPerSlide === 1
              ? "grid-cols-1"
              : "grid-cols-1 lg:grid-cols-3"
          }`}
        >
          {getCurrentProducts().map((product) => (
            <div
              key={product.id}
              className={`group ${
                productsPerSlide === 1 ? "max-w-md mx-auto" : ""
              }`}
            >
              {/* Product Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container with Flip Effect */}
                <div
                  className={`relative overflow-hidden bg-gray-100 ${
                    productsPerSlide === 1 ? "h-96" : "h-80"
                  }`}
                >
                  {/* Front Image */}
                  <div className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
                    <img
                      src={product.image1}
                      alt={product.name}
                      className="w-full h-full object-cover [backface-visibility:hidden] filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  {/* Back Image */}
                  <div className="absolute inset-0 transition-transform duration-700 ease-in-out [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)] [transform-style:preserve-3d]">
                    <img
                      src={product.image2}
                      alt={`${product.name} alternate view`}
                      className="w-full h-full object-cover [backface-visibility:hidden]"
                    />
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    {product.badge}
                  </div>

                  {/* Favorite Button */}
                  <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-all duration-200 z-10 group/heart opacity-0 group-hover:opacity-100">
                    <Heart className="w-5 h-5 text-gray-600 group-hover/heart:text-red-500 group-hover/heart:fill-current transition-colors duration-200" />
                  </button>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {product.category}
                  </span>

                  <h3
                    className={`font-bold text-black mb-3 leading-tight group-hover:text-gray-700 transition-colors duration-200 ${
                      productsPerSlide === 1 ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-current" : ""
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm font-medium">
                      ({product.rating})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <span
                      className={`font-bold text-black mr-2 ${
                        productsPerSlide === 1 ? "text-3xl" : "text-2xl"
                      }`}
                    >
                      {product.price}
                    </span>
                    <span
                      className={`text-gray-500 line-through ${
                        productsPerSlide === 1 ? "text-xl" : "text-lg"
                      }`}
                    >
                      {product.originalPrice}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div
                    className={`flex gap-3 ${
                      productsPerSlide === 1
                        ? "flex-row"
                        : "flex-col sm:flex-row"
                    }`}
                  >
                    <a
                      href="/product"
                      className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group/btn transform hover:scale-105 text-sm"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                      Add to Cart
                    </a>
                    <a
                      href="/product"
                      className="border-2 border-black text-black px-4 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center transform hover:scale-105 text-sm"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/80 text-white p-3 rounded-full hover:bg-black transition-colors duration-200 z-10 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/80 text-white p-3 rounded-full hover:bg-black transition-colors duration-200 z-10 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </>
        )}

        {/* Auto-play Toggle */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-black transition-colors duration-200"
        >
          {isAutoPlay ? "Auto" : "Manual"}
        </button>
      </div>

      {/* Slide Indicators */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-8 space-x-3">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-black scale-125"
                  : "bg-gray-300 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {/* <div className="w-full bg-gray-200 h-1 mt-6 rounded-full overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-300 ease-out rounded-full"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div> */}

      {/* Slide Counter */}
      {/* <div className="text-center mt-4 text-gray-600">
        <span className="text-sm font-medium">
          {currentSlide + 1} of {totalSlides}
        </span>
      </div> */}
    </div>
  );
};

export default ProductSlider;
