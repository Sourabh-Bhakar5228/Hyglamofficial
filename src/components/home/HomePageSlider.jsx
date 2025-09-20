import { useState, useEffect, useRef } from "react";

const WeddingDressSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const totalSlides = 3;
  const intervalRef = useRef(null);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1656428852411-91cd732e96ee?w=1200&auto=format&fit=crop&q=80",
    "https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?w=1200&auto=format&fit=crop&q=80",
    "https://plus.unsplash.com/premium_photo-1680181724947-75f0956f1469?w=1200&auto=format&fit=crop&q=80",
  ];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    setIsVisible(true);

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

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
      }
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

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

  return (
    <div
      className={`min-h-screen py-8 px-4 relative bg-pattern ${
        isVisible ? "fade-in" : "opacity-0"
      }`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${backgroundImages[currentBg]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Slider Section */}
        <div className="flex justify-center">
          <div className="w-full lg:w-4/5 animate-on-scroll">
            <div
              className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] h-full rounded-xl overflow-hidden shadow-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Slides */}
              <div className="relative w-full h-full">
                {/* Slide 1 */}
                <div
                  className={`absolute inset-0 slide-transition ${
                    currentSlide === 0 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src="https://plus.unsplash.com/premium_photo-1674748385436-db725f68e312?w=1200&auto=format&fit=crop&q=80"
                    alt="Elegant lace wedding dress"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 text-white">
                    <h3 className="text-xl md:text-3xl font-bold mb-2">
                      Elegant Lace Collection
                    </h3>
                    <p className="max-w-sm md:max-w-md text-sm md:text-base">
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
                    src="https://plus.unsplash.com/premium_photo-1732700371929-33734953c369?w=1200&auto=format&fit=crop&q=80"
                    alt="Modern wedding dress"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 text-white">
                    <h3 className="text-xl md:text-3xl font-bold mb-2">
                      Modern Elegance
                    </h3>
                    <p className="max-w-sm md:max-w-md text-sm md:text-base">
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
                    src="https://plus.unsplash.com/premium_photo-1680181724947-75f0956f1469?w=1200&auto=format&fit=crop&q=80"
                    alt="Classic wedding dress"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 text-white">
                    <h3 className="text-xl md:text-3xl font-bold mb-2">
                      Classic Collection
                    </h3>
                    <p className="max-w-sm md:max-w-md text-sm md:text-base">
                      Traditional elegance that never goes out of style
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <button
                className={`absolute left-3 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
                onClick={prevSlide}
              >
                &#10094;
              </button>
              <button
                className={`absolute right-3 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
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
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>

            {/* Info Boxes */}
            {/* <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 text-base md:text-lg">
                  Custom Designs
                </h4>
                <p className="text-xs md:text-sm text-gray-600">
                  Tailored to your vision
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 text-base md:text-lg">
                  Free Alterations
                </h4>
                <p className="text-xs md:text-sm text-gray-600">
                  Perfect fit guaranteed
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingDressSlider;
