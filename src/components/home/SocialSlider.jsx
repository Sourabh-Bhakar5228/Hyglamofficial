import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import HighlightedHeading from "../common/HighlightedHeading";
import AppointmentModal from "../common/AppointmentModal";

const HyglamLuxurySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const videoRef = useRef(null);
  const autoPlayRef = useRef(null);
  const sliderRef = useRef(null);

  // Media items with enhanced luxury collection
  const mediaItems = [
    {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2014/10/24/08/09/diamond-500872_1280.jpg",
      alt: "Diamond Elegance Collection",
      title: "Diamond Elegance Collection",
      description: "Handcrafted brilliance in every facet",
    },
    {
      type: "video",
      src: "https://cdn.pixabay.com/video/2020/11/07/55744-503980978_tiny.mp4",
      poster: "https://picsum.photos/id/1024/1200/800",
      title: "Golden Radiance Set",
      description: "Timeless luxury meets modern design",
    },
    {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2016/09/06/14/12/ring-1649210_1280.jpg",
      alt: "Pearl Luxury Set",
      title: "Pearl Luxury Set",
      description: "Ocean's treasures, refined",
    },
    {
      type: "video",
      src: "https://cdn.pixabay.com/video/2020/11/07/54945-486852968_tiny.mp4",
      poster: "https://picsum.photos/id/1035/1200/800",
      title: "Platinum Majesty",
      description: "Exquisite platinum craftsmanship",
    },
    {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2017/04/24/07/03/jewelry-2255623_1280.jpg",
      alt: "Sapphire Dreams",
      title: "Sapphire Dreams",
      description: "Azure beauty in precious metal",
    },
    {
      type: "video",
      src: "https://cdn.pixabay.com/video/2020/11/07/54926-483011907_tiny.mp4",
      poster: "https://picsum.photos/id/1040/1200/800",
      title: "Ruby Passion",
      description: "Fiery gems of eternal allure",
    },
    {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2023/05/23/09/23/cameo-8012321_1280.jpg",
      alt: "Emerald Glory",
      title: "Emerald Glory",
      description: "Nature's green perfection captured",
    },
    {
      type: "video",
      src: "https://cdn.pixabay.com/video/2024/07/03/219278_tiny.mp4",
      poster: "https://picsum.photos/id/1044/1200/800",
      title: "Opulent Collection",
      description: "Where luxury meets artistry",
    },
    {
      type: "image",
      src: "https://cdn.pixabay.com/photo/2015/02/01/16/14/treasure-chest-619762_1280.jpg",
      alt: "Gold Heritage",
      title: "Gold Heritage",
      description: "Legacy pieces for generations",
    },
    {
      type: "video",
      src: "https://cdn.pixabay.com/video/2021/11/13/96130-651410436_tiny.mp4",
      poster: "https://picsum.photos/id/1050/1200/800",
      title: "Diamond Splendor",
      description: "Ultimate expression of elegance",
    },
  ];

  // Enhanced auto slide functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
    }
    autoPlayRef.current = setTimeout(() => {
      goToNext();
    }, 6000);
  }, []);

  useEffect(() => {
    if (!isHovered && !isPlaying) {
      startAutoPlay();
    }
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex, isHovered, isPlaying, startAutoPlay]);

  const goToPrevious = useCallback(() => {
    setIsLoading(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? mediaItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setIsPlaying(false);
    setTimeout(() => setIsLoading(false), 300);
  }, [currentIndex, mediaItems.length]);

  const goToNext = useCallback(() => {
    setIsLoading(true);
    const isLastSlide = currentIndex === mediaItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setIsPlaying(false);
    setTimeout(() => setIsLoading(false), 300);
  }, [currentIndex, mediaItems.length]);

  const goToSlide = useCallback((index) => {
    setIsLoading(true);
    setCurrentIndex(index);
    setIsPlaying(false);
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const togglePlay = () => {
    if (mediaItems[currentIndex].type === "video" && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPrevious, goToNext]);

  // Auto-play video when video slide is selected
  useEffect(() => {
    if (mediaItems[currentIndex].type === "video" && videoRef.current) {
      setIsPlaying(false);
      videoRef.current.currentTime = 0;
    }
  }, [currentIndex]);

  return (
    <section className="min-h-screen py-24 px-3 sm:px-6 lg:px-8 font-sans relative overflow-hidden" style={{ background: 'radial-gradient(circle at center, #1a1605 0%, #000 100%)' }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#fab03f_1px,_transparent_1px)] bg-[length:30px_30px]"></div>
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="relative inline-block">
            <HighlightedHeading level="h2" className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-white mb-4 tracking-tighter">
              HYGLAM
            </HighlightedHeading>
            <div className="absolute -top-4 -right-8 w-3 h-3 bg-gold-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(250,176,63,0.8)]"></div>
          </div>

          <div className="flex items-center justify-center mb-6 sm:mb-12">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent w-32 sm:w-64"></div>
            <span className="text-3xl sm:text-4xl font-black text-gold-500 mx-6 sm:mx-10 scale-y-150">
              華
            </span>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent w-32 sm:w-64"></div>
          </div>
        </div>

        {/* Enhanced Slider */}
        <div
          ref={sliderRef}
          className="relative max-w-8xl mx-auto group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main media display */}
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-black/40 backdrop-blur-xl border border-white/5">
            <div
              className="relative w-full"
              style={{
                height: "700px",
                "@media (min-width: 640px)": { height: "400px" },
                "@media (min-width: 1024px)": { height: "500px" },
              }}
            >
              {/* Loading overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20 transition-opacity duration-300">
                  <div className="w-10 h-10 border-2 border-gold-500/30 border-t-gold-500 rounded-full animate-spin"></div>
                </div>
              )}

              {mediaItems[currentIndex].type === "image" ? (
                <img
                  src={mediaItems[currentIndex].src}
                  alt={mediaItems[currentIndex].alt}
                  className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-105"
                  style={{ minHeight: "300px" }}
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    ref={videoRef}
                    src={mediaItems[currentIndex].src}
                    poster={mediaItems[currentIndex].poster}
                    className="w-full h-full object-cover transition-transform duration-700"
                    loop
                    muted
                    style={{ minHeight: "300px" }}
                  />

                  {/* Video controls */}
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex space-x-2">
                    <button
                      onClick={togglePlay}
                      className="bg-gold-500 text-black p-3 sm:p-4 rounded-2xl hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg shadow-gold-500/20"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Video play overlay */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={togglePlay}
                        className="bg-gold-500/20 backdrop-blur-xl rounded-full p-6 sm:p-10 border border-gold-500/30 transition-all duration-500 hover:bg-gold-500/40 hover:scale-110 relative group-hover:shadow-[0_0_50px_rgba(250,176,63,0.3)]"
                      >
                        <svg
                          className="w-8 h-8 sm:w-12 sm:h-12 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Enhanced Navigation arrows */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 sm:left-8 transform -translate-y-1/2 bg-black/50 backdrop-blur-xl text-gold-500 rounded-2xl p-3 sm:p-4 hover:bg-gold-500 hover:text-black transition-all duration-500 opacity-0 group-hover:opacity-100 hover:scale-110 border border-white/5 shadow-2xl"
            aria-label="Previous slide"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 sm:right-8 transform -translate-y-1/2 bg-black/50 backdrop-blur-xl text-gold-500 rounded-2xl p-3 sm:p-4 hover:bg-gold-500 hover:text-black transition-all duration-500 opacity-0 group-hover:opacity-100 hover:scale-110 border border-white/5 shadow-2xl"
            aria-label="Next slide"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Enhanced Thumbnail navigation */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-1 sm:space-x-2 overflow-x-auto py-2 px-2">
            {mediaItems.map((item, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-500 transform hover:scale-110 ${currentIndex === index
                  ? "border-gold-500 shadow-2xl shadow-gold-500/30"
                  : "border-white/5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src={item.poster}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Enhanced Slide indicator */}
          <div className="text-center mt-8 sm:mt-12 text-gray-500 font-bold text-sm sm:text-base tracking-[0.5em] uppercase">
            <span className="text-gold-500 text-xl font-black">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-2 text-gray-600">/</span>
            <span>{String(mediaItems.length).padStart(2, "0")}</span>
          </div>

          {/* Progress bar */}
          <div className="mt-4 sm:mt-6 w-full bg-gray-700/50 h-1 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold-500 via-white to-gold-500 transition-all duration-700 shadow-[0_0_15px_rgba(250,176,63,0.5)]"
              style={{
                width: `${((currentIndex + 1) / mediaItems.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Enhanced Description */}
        <div className="max-w-4xl mx-auto mt-16 sm:mt-24 text-center">
          <p className="text-gray-400 leading-relaxed text-lg sm:text-xl lg:text-2xl font-light mb-12 italic">
            Discover the exquisite craftsmanship of our <span className="text-gold-500 font-bold">HyGlam Luxury</span> Collection.
            Each piece is meticulously designed with precision-cut gemstones set in radiant precious metals,
            embodying elegance and sophistication for the modern connoisseur.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 mt-12">
            <Link
              to="/products"
              className="px-12 py-5 bg-gold-500 text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all duration-500 shadow-2xl shadow-gold-500/20 transform hover:-translate-y-2 active:scale-95 text-center"
            >
              Explore Collection
            </Link>
            <button
              onClick={() => setIsAppointmentOpen(true)}
              className="px-12 py-5 border-2 border-gold-500/30 text-gold-500 font-black uppercase tracking-widest rounded-2xl hover:bg-gold-500 hover:text-black transition-all duration-500 transform hover:-translate-y-2 active:scale-95 shadow-xl"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

      {/* Floating elements for visual enhancement */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-white/20 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 left-8 w-1 h-1 bg-white/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/3 left-16 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default HyglamLuxurySlider;
