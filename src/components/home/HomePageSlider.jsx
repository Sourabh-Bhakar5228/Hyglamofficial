import React, { useState, useEffect, useRef } from "react";

const JewelrySlider = () => {
  // State for both sliders
  const [leftSlider, setLeftSlider] = useState({
    currentSlide: 0,
    totalSlides: 3,
    isHovered: false,
  });

  const [rightSlider, setRightSlider] = useState({
    currentSlide: 0,
    totalSlides: 3,
    isHovered: false,
  });

  // Refs for interval management
  const leftIntervalRef = useRef(null);
  const rightIntervalRef = useRef(null);

  // Auto-slide functionality with pause on hover
  useEffect(() => {
    // Left slider interval
    leftIntervalRef.current = setInterval(() => {
      if (!leftSlider.isHovered) {
        setLeftSlider((prev) => ({
          ...prev,
          currentSlide: (prev.currentSlide + 1) % prev.totalSlides,
        }));
      }
    }, 5000);

    // Right slider interval
    rightIntervalRef.current = setInterval(() => {
      if (!rightSlider.isHovered) {
        setRightSlider((prev) => ({
          ...prev,
          currentSlide: (prev.currentSlide + 1) % prev.totalSlides,
        }));
      }
    }, 5000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(leftIntervalRef.current);
      clearInterval(rightIntervalRef.current);
    };
  }, [leftSlider.isHovered, rightSlider.isHovered]);

  // Navigation functions for left slider
  const nextLeftSlide = () => {
    setLeftSlider((prev) => ({
      ...prev,
      currentSlide: (prev.currentSlide + 1) % prev.totalSlides,
    }));

    // Reset interval after manual navigation
    resetLeftInterval();
  };

  const prevLeftSlide = () => {
    setLeftSlider((prev) => ({
      ...prev,
      currentSlide:
        (prev.currentSlide - 1 + prev.totalSlides) % prev.totalSlides,
    }));

    // Reset interval after manual navigation
    resetLeftInterval();
  };

  const goToLeftSlide = (index) => {
    if (index >= 0 && index < leftSlider.totalSlides) {
      setLeftSlider((prev) => ({ ...prev, currentSlide: index }));

      // Reset interval after manual navigation
      resetLeftInterval();
    }
  };

  // Navigation functions for right slider
  const nextRightSlide = () => {
    setRightSlider((prev) => ({
      ...prev,
      currentSlide: (prev.currentSlide + 1) % prev.totalSlides,
    }));

    // Reset interval after manual navigation
    resetRightInterval();
  };

  const prevRightSlide = () => {
    setRightSlider((prev) => ({
      ...prev,
      currentSlide:
        (prev.currentSlide - 1 + prev.totalSlides) % prev.totalSlides,
    }));

    // Reset interval after manual navigation
    resetRightInterval();
  };

  const goToRightSlide = (index) => {
    if (index >= 0 && index < rightSlider.totalSlides) {
      setRightSlider((prev) => ({ ...prev, currentSlide: index }));

      // Reset interval after manual navigation
      resetRightInterval();
    }
  };

  // Reset interval functions
  const resetLeftInterval = () => {
    clearInterval(leftIntervalRef.current);
    leftIntervalRef.current = setInterval(() => {
      if (!leftSlider.isHovered) {
        setLeftSlider((prev) => ({
          ...prev,
          currentSlide: (prev.currentSlide + 1) % prev.totalSlides,
        }));
      }
    }, 5000);
  };

  const resetRightInterval = () => {
    clearInterval(rightIntervalRef.current);
    rightIntervalRef.current = setInterval(() => {
      if (!rightSlider.isHovered) {
        setRightSlider((prev) => ({
          ...prev,
          currentSlide: (prev.currentSlide + 1) % prev.totalSlides,
        }));
      }
    }, 5000);
  };

  // Hover handlers
  const handleLeftSliderHover = () => {
    setLeftSlider((prev) => ({ ...prev, isHovered: true }));
  };

  const handleLeftSliderLeave = () => {
    setLeftSlider((prev) => ({ ...prev, isHovered: false }));
  };

  const handleRightSliderHover = () => {
    setRightSlider((prev) => ({ ...prev, isHovered: true }));
  };

  const handleRightSliderLeave = () => {
    setRightSlider((prev) => ({ ...prev, isHovered: false }));
  };

  return (
    <div className="max-w-8xl mx-auto h-[50%]">
      <div className="h-screen flex rounded-lg overflow-hidden shadow-xl">
        {/* Left Section with Image Slider */}
        <div
          className="flex-1 diagonal-stripes relative"
          onMouseEnter={handleLeftSliderHover}
          onMouseLeave={handleLeftSliderLeave}
        >
          <div className="slider-container">
            <div
              className="slider"
              style={{
                transform: `translateX(-${leftSlider.currentSlide * 100}%)`,
              }}
            >
              <div className="slide">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661645473770-90d750452fa0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Gold Bracelet 1"
                />
                <div className="slide-content">
                  <h2 className="slide-title">Elegance Redefined</h2>
                  <p className="slide-subtitle">
                    Discover our exclusive collection of handcrafted bracelets
                  </p>
                  <button className="slide-button">SHOP NOW</button>
                </div>
              </div>
              <div className="slide">
                <img
                  src="https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Gold Bracelet 2"
                />
                <div className="slide-content">
                  <h2 className="slide-title">Summer Collection</h2>
                  <p className="slide-subtitle">
                    New arrivals for the sunny season
                  </p>
                  <button className="slide-button">EXPLORE</button>
                </div>
              </div>
              <div className="slide">
                <img
                  src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Gold Bracelet 3"
                />
                <div className="slide-content">
                  <h2 className="slide-title">Limited Edition</h2>
                  <p className="slide-subtitle">
                    Unique pieces for the discerning collector
                  </p>
                  <button className="slide-button">VIEW COLLECTION</button>
                </div>
              </div>
            </div>

            {/* Navigation buttons - only visible on hover */}
            <button
              className={`slider-control prev ${
                leftSlider.isHovered ? "opacity-100" : "opacity-0"
              }`}
              onClick={prevLeftSlide}
            >
              &#10094;
            </button>
            <button
              className={`slider-control next ${
                leftSlider.isHovered ? "opacity-100" : "opacity-0"
              }`}
              onClick={nextLeftSlide}
            >
              &#10095;
            </button>

            <div className="slider-dots">
              {[...Array(leftSlider.totalSlides)].map((_, index) => (
                <span
                  key={index}
                  className={`slider-dot ${
                    leftSlider.currentSlide === index ? "active" : ""
                  }`}
                  onClick={() => goToLeftSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col">
          {/* Top: Image Slider */}
          <div
            className="flex-1 diagonal-stripes relative h-[60%]"
            onMouseEnter={handleRightSliderHover}
            onMouseLeave={handleRightSliderLeave}
          >
            <div className="slider-container">
              <div
                className="slider"
                style={{
                  transform: `translateX(-${rightSlider.currentSlide * 100}%)`,
                }}
              >
                <div className="slide">
                  <img
                    src="https://images.unsplash.com/photo-1633934542430-0905ccb5f050?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
                    alt="Gold Necklace 1"
                  />
                  <div className="slide-content">
                    <h2 className="slide-title">Necklace Collection</h2>
                    <p className="slide-subtitle">
                      Statement pieces for every occasion
                    </p>
                    <button className="slide-button">DISCOVER</button>
                  </div>
                </div>
                <div className="slide">
                  <img
                    src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
                    alt="Gold Necklace 2"
                  />
                  <div className="slide-content">
                    <h2 className="slide-title">Diamond Elegance</h2>
                    <p className="slide-subtitle">
                      Exquisite craftsmanship meets timeless design
                    </p>
                    <button className="slide-button">VIEW DIAMONDS</button>
                  </div>
                </div>
                <div className="slide">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D"
                    alt="Gold Necklace 3"
                  />
                  <div className="slide-content">
                    <h2 className="slide-title">Pearl Perfection</h2>
                    <p className="slide-subtitle">
                      Classic beauty reimagined for the modern woman
                    </p>
                    <button className="slide-button">SHOP PEARLS</button>
                  </div>
                </div>
              </div>

              {/* Navigation buttons - only visible on hover */}
              <button
                className={`slider-control prev ${
                  rightSlider.isHovered ? "opacity-100" : "opacity-0"
                }`}
                onClick={prevRightSlide}
              >
                &#10094;
              </button>
              <button
                className={`slider-control next ${
                  rightSlider.isHovered ? "opacity-100" : "opacity-0"
                }`}
                onClick={nextRightSlide}
              >
                &#10095;
              </button>

              <div className="slider-dots">
                {[...Array(rightSlider.totalSlides)].map((_, index) => (
                  <span
                    key={index}
                    className={`slider-dot ${
                      rightSlider.currentSlide === index ? "active" : ""
                    }`}
                    onClick={() => goToRightSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom: Product Info */}
          <div className="flex-1 bg-rose-400 p-6 text-white flex flex-col justify-center">
            <h2 className="font-heading font-semibold text-lg mb-1">
              BRACELETS
            </h2>
            <h3 className="font-medium mb-3">
              18ct Yellow Gold Square Tube Bangle
            </h3>
            <p className="text-sm mb-4">
              Crafted in fine 18ct gold, this geometric bangle fuses modern
              design with timeless luxury. Perfect for stacking or wearing solo,
              it brings sophistication to every gesture.
            </p>
            <div className="flex items-center justify-between">
              <p className="flex items-center text-sm">
                <span className="mr-1">★</span> 4.8
                <span className="ml-2 text-gray-100">245 Reviews</span>
              </p>
              <p className="text-xl font-semibold">$1,299</p>
            </div>
            <button className="mt-4 bg-white text-rose-600 py-2 px-4 rounded hover:bg-gray-100 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* Diagonal stripe background */
        .diagonal-stripes {
          background: repeating-linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.1) 10px,
            transparent 10px,
            transparent 20px
          );
        }

        /* Slider container styles */
        .slider-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .slider {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease-in-out;
        }

        .slide {
          min-width: 100%;
          height: 100%;
          position: relative;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slide-content {
          position: absolute;
          bottom: 20%;
          left: 10%;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          max-width: 80%;
        }

        .slide-title {
          font-size: 2.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .slide-subtitle {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .slide-button {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid white;
          color: white;
          padding: 0.6rem 1.8rem;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s;
          backdrop-filter: blur(5px);
        }

        .slide-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .slider-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.7);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          z-index: 10;
          opacity: 0;
          color: white;
          font-size: 24px;
          font-weight: bold;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .slider-control:hover {
          background: rgba(0, 0, 0, 0.9);
          transform: translateY(-50%) scale(1.1);
        }

        .slider-control.prev {
          left: 20px;
        }

        .slider-control.next {
          right: 20px;
        }

        .slider-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }

        .slider-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s;
        }

        .slider-dot.active {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.2);
        }

        .slider-dot:hover {
          background: rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </div>
  );
};

export default JewelrySlider;
