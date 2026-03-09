import { useState, useEffect, useRef } from "react";

const WeddingDressSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const totalSlides = 3;
  const intervalRef = useRef(null);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1656428852411-91cd732e96ee?w=1200&auto=format&fit=crop&q=80",
    "https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?w=1200&auto=format&fit=crop&q=80",
    "https://plus.unsplash.com/premium_photo-1680181724947-75f0956f1469?w=1200&auto=format&fit=crop&q=80",
  ];

  // Auto slide
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  // Manual controls
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    resetInterval();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }
    }, 5000);
  };

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${backgroundImages[currentSlide]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Slider Container */}
      <div className="max-w-7xl mx-auto relative z-10 px-4 py-8 md:py-12">
        <div className="flex justify-center">
          <div
            className="relative w-full lg:w-4/5 rounded-xl overflow-hidden shadow-2xl min-h-[30vh] sm:min-h-[60vh] md:min-h-[80vh]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Slides */}
            <div className="relative w-full h-full">
              {/* Slide 1 */}
              <div
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === 0 ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1674748385436-db725f68e312?w=1200&auto=format&fit=crop&q=80"
                  alt="Elegant lace wedding dress"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-8 left-4 md:bottom-12 md:left-12 text-white">
                  <h3 className="text-2xl md:text-4xl font-bold mb-2">
                    Elegant Lace Collection
                  </h3>
                  <p className="max-w-sm md:max-w-md text-sm md:text-base text-gray-200">
                    Timeless beauty with intricate lace details
                  </p>
                </div>
              </div>

              {/* Slide 2 */}
              <div
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === 1 ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1732700371929-33734953c369?w=1200&auto=format&fit=crop&q=80"
                  alt="Modern wedding dress"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-8 left-4 md:bottom-12 md:left-12 text-white">
                  <h3 className="text-2xl md:text-4xl font-bold mb-2">
                    Modern Elegance
                  </h3>
                  <p className="max-w-sm md:max-w-md text-sm md:text-base text-gray-200">
                    Contemporary designs for the modern bride
                  </p>
                </div>
              </div>

              {/* Slide 3 */}
              <div
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === 2 ? "opacity-100" : "opacity-0"
                  }`}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1680181724947-75f0956f1469?w=1200&auto=format&fit=crop&q=80"
                  alt="Classic wedding dress"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-8 left-4 md:bottom-12 md:left-12 text-white">
                  <h3 className="text-2xl md:text-4xl font-bold mb-2">
                    Classic Collection
                  </h3>
                  <p className="max-w-sm md:max-w-md text-sm md:text-base text-gray-200">
                    Traditional elegance that never goes out of style
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className={`absolute left-3 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                }`}
              onClick={prevSlide}
            >
              &#10094;
            </button>

            <button
              className={`absolute right-3 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                }`}
              onClick={nextSlide}
            >
              &#10095;
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 md:bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white" : "bg-white/50"
                    }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingDressSlider;
