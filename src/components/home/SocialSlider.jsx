import { useState, useRef, useEffect, useCallback } from "react";

const HyglamLuxurySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
      src: "https://picsum.photos/id/1018/1200/800",
      alt: "Diamond Elegance Collection",
      title: "Diamond Elegance Collection",
      description: "Handcrafted brilliance in every facet",
    },
    {
      type: "video",
      src: "https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47b5e33e8ca7a94&profile_id=139&oauth2_token_id=57447761",
      poster: "https://picsum.photos/id/1024/1200/800",
      title: "Golden Radiance Set",
      description: "Timeless luxury meets modern design",
    },
    {
      type: "image",
      src: "https://picsum.photos/id/1033/1200/800",
      alt: "Pearl Luxury Set",
      title: "Pearl Luxury Set",
      description: "Ocean's treasures, refined",
    },
    {
      type: "video",
      src: "https://player.vimeo.com/external/457001552.sd.mp4?s=2d138f4075e4b3ee7c4935e6eeabbd2b4b5c5d3f&profile_id=139&oauth2_token_id=57447761",
      poster: "https://picsum.photos/id/1035/1200/800",
      title: "Platinum Majesty",
      description: "Exquisite platinum craftsmanship",
    },
    {
      type: "image",
      src: "https://picsum.photos/id/1038/1200/800",
      alt: "Sapphire Dreams",
      title: "Sapphire Dreams",
      description: "Azure beauty in precious metal",
    },
    {
      type: "video",
      src: "https://player.vimeo.com/external/370331607.sd.mp4?s=ade39fa679d032bc5d5555d258d5e6b4d6a888d6&profile_id=139&oauth2_token_id=57447761",
      poster: "https://picsum.photos/id/1040/1200/800",
      title: "Ruby Passion",
      description: "Fiery gems of eternal allure",
    },
    {
      type: "image",
      src: "https://picsum.photos/id/1043/1200/800",
      alt: "Emerald Glory",
      title: "Emerald Glory",
      description: "Nature's green perfection captured",
    },
    {
      type: "video",
      src: "https://player.vimeo.com/external/464741837.sd.mp4?s=5a4b15d9dff649eef2f4b081b7d35d1d6e8d9a0d&profile_id=139&oauth2_token_id=57447761",
      poster: "https://picsum.photos/id/1044/1200/800",
      title: "Opulent Collection",
      description: "Where luxury meets artistry",
    },
    {
      type: "image",
      src: "https://picsum.photos/id/1047/1200/800",
      alt: "Gold Heritage",
      title: "Gold Heritage",
      description: "Legacy pieces for generations",
    },
    {
      type: "video",
      src: "https://player.vimeo.com/external/457000850.sd.mp4?s=8b5a9a0f6b6a5f6b5a9a0f6b6a5f6b5a9a0f6b6a5&profile_id=139&oauth2_token_id=57447761",
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
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen py-8 sm:py-12 px-3 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:30px_30px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-2 sm:mb-4 tracking-tight">
              HYGLAM
            </h2>
            <div className="absolute -top-2 -right-6 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>

          <div className="flex items-center justify-center mb-4 sm:mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-24 sm:w-48"></div>
            <span className="text-2xl sm:text-3xl font-light text-white mx-4 sm:mx-8">
              華
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent w-24 sm:w-48"></div>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 mb-2">
            {mediaItems[currentIndex].title}
          </h3>
          <p className="text-sm sm:text-base text-gray-400 font-light tracking-wide">
            {mediaItems[currentIndex].description}
          </p>
        </div>

        {/* Enhanced Slider */}
        <div
          ref={sliderRef}
          className="relative max-w-5xl mx-auto group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main media display */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black backdrop-blur-sm border border-gray-700/30">
            <div
              className="relative w-full"
              style={{
                height: "300px",
                "@media (min-width: 640px)": { height: "400px" },
                "@media (min-width: 1024px)": { height: "500px" },
              }}
            >
              {/* Loading overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20 transition-opacity duration-300">
                  <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
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
                      className="bg-black/70 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-110"
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
                        className="bg-white/20 backdrop-blur-md rounded-full p-4 sm:p-6 transition-all duration-300 hover:bg-white/30 hover:scale-110"
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
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white rounded-full p-2 sm:p-3 hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-white/20"
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
            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white rounded-full p-2 sm:p-3 hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-white/20"
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
                className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 ${
                  currentIndex === index
                    ? "border-white shadow-lg shadow-white/25"
                    : "border-gray-600 hover:border-gray-400"
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
          <div className="text-center mt-4 sm:mt-6 text-gray-400 font-light text-sm sm:text-base tracking-wider">
            <span className="text-white font-medium">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-2 text-gray-600">/</span>
            <span>{String(mediaItems.length).padStart(2, "0")}</span>
          </div>

          {/* Progress bar */}
          <div className="mt-4 sm:mt-6 w-full bg-gray-700/50 h-1 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-white to-gray-300 transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / mediaItems.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Enhanced Description */}
        <div className="max-w-3xl mx-auto mt-12 sm:mt-16 text-center">
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg font-light mb-8 sm:mb-10">
            Discover the exquisite craftsmanship of our Hyglam Luxury
            Collection. Each piece is meticulously designed with precision-cut
            gemstones set in radiant precious metals, embodying elegance and
            sophistication for the modern connoisseur.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
            <button className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
              Explore Collection
            </button>
            <button className="px-6 sm:px-10 py-3 sm:py-4 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements for visual enhancement */}
      <div className="absolute top-20 right-10 w-2 h-2 bg-white/20 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 left-8 w-1 h-1 bg-white/30 rounded-full animate-pulse hidden lg:block"></div>
      <div className="absolute top-1/3 left-16 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default HyglamLuxurySlider;
