import { useState, useEffect, useRef } from "react";

const WeddingDressSlider = () => {
  // State for the slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const totalSlides = 3;
  const intervalRef = useRef(null);

  // Background images array
  const backgroundImages = [
    "https://images.unsplash.com/photo-1656428852411-91cd732e96ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGp3ZWxsZXJ5fGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGp3ZWxsZXJ5fGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGp3ZWxsZXJ5fGVufDB8fDB8fHww",
  ];
  const [currentBg, setCurrentBg] = useState(0);

  // Set visible on initial render for animations
  useEffect(() => {
    setIsVisible(true);

    // Set up intersection observer for animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the 'animate-on-scroll' class
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-slide functionality with pause on hover
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
      }
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    resetInterval();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setCurrentBg(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setCurrentBg(index % backgroundImages.length);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
      }
    }, 5000);
  };

  const handleSliderHover = () => {
    setIsHovered(true);
  };

  const handleSliderLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`min-h-screen py-12 px-4 relative bg-pattern ${
        isVisible ? "fade-in" : "opacity-0"
      }`}
    >
      {/* Animated background */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${backgroundImages[currentBg]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center mb-12 animate-on-scroll"></div>

        <div className="flex justify-center">
          {/* Right content - Slider */}
          <div className="w-full lg:w-4/5 animate-on-scroll">
            <div
              className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
              onMouseEnter={handleSliderHover}
              onMouseLeave={handleSliderLeave}
            >
              {/* Slider container */}
              <div className="relative h-full">
                {/* Slide 1 */}
                <div
                  className={`absolute inset-0 slide-transition ${
                    currentSlide === 0 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src="https://plus.unsplash.com/premium_photo-1674748385436-db725f68e312?w=600&auto=format&fit=crop&q=60"
                    alt="Elegant lace wedding dress"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-12 left-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      Elegant Lace Collection
                    </h3>
                    <p className="max-w-md">
                      Timeless beauty with intricate lace details
                    </p>
                  </div>
                </div>

                {/* Slide 2 */}
                <div
                  className={`absolute inset-0 slide-transition ${
                    currentSlide === 1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src="https://plus.unsplash.com/premium_photo-1732700371929-33734953c369?w=600&auto=format&fit=crop&q=60"
                    alt="Modern wedding dress"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-12 left-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Modern Elegance</h3>
                    <p className="max-w-md">
                      Contemporary designs for the modern bride
                    </p>
                  </div>
                </div>

                {/* Slide 3 */}
                <div
                  className={`absolute inset-0 slide-transition ${
                    currentSlide === 2 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src="https://plus.unsplash.com/premium_photo-1680181724947-75f0956f1469?w=600&auto=format&fit=crop&q=60"
                    alt="Classic wedding dress"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-12 left-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      Classic Collection
                    </h3>
                    <p className="max-w-md">
                      Traditional elegance that never goes out of style
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
                onClick={prevSlide}
              >
                &#10094;
              </button>
              <button
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
                onClick={nextSlide}
              >
                &#10095;
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[...Array(totalSlides)].map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>

            {/* Additional info below slider */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900">Custom Designs</h4>
                <p className="text-sm text-gray-600">Tailored to your vision</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900">Free Alterations</h4>
                <p className="text-sm text-gray-600">Perfect fit guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeddingDressSlider;
