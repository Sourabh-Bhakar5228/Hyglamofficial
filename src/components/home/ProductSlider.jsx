import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import allProducts from "../../data/allProducts.json";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function ProductSlider() {
  const products = allProducts.flatMap((cat) => cat.products);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length);
  };

  if (!products || products.length === 0) {
    return <p className="text-gray-500">No products available</p>;
  }

  return (
    <div className="relative overflow-hidden bg-black py-12 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Featured Products
      </h2>

      <div className="relative w-full max-w-7xl mx-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / products.length)
            }%)`,
          }}
          ref={sliderRef}
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="flex-none w-64 mx-3 bg-gray-900 rounded-xl shadow-2xl p-5 transition-all duration-300 hover:bg-gray-800"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-56 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="mt-2">
                <div className="text-white font-semibold truncate">
                  {p.name}
                </div>
                <div className="text-gray-300 text-lg font-bold mt-2">
                  ₹{p.price}
                </div>
                <Link
                  to={`/product/${p.id}`}
                  className="block mt-4 px-4 py-2 bg-white text-black text-sm font-semibold rounded-lg text-center hover:bg-gray-300 transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors z-20"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors z-20"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
