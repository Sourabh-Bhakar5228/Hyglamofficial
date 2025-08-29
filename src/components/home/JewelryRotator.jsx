import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Eye, Sparkles, Zap } from "lucide-react";

const JewelryRotator = () => {
  const [rotations, setRotations] = useState([0, 0, 0]);
  const [isAutoRotating, setIsAutoRotating] = useState([true, true, true]);
  const [isPaused, setIsPaused] = useState([false, false, false]);
  const [speeds, setSpeeds] = useState([1, 1, 1]);
  const [isZoomed, setIsZoomed] = useState([false, false, false]);
  const [isLoaded, setIsLoaded] = useState([false, false, false]);
  const [sparklePositions, setSparklePositions] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const intervalRefs = useRef([]);

  // Track window size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Generate sparkle positions
  useEffect(() => {
    const generateSparkles = () => {
      const sparkles = [];
      for (let i = 0; i < 8; i++) {
        sparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 1 + Math.random() * 2,
        });
      }
      setSparklePositions(sparkles);
    };
    generateSparkles();
  }, []);

  // Auto-rotation effect with variable speeds
  useEffect(() => {
    intervalRefs.current.forEach((interval) => clearInterval(interval));
    intervalRefs.current = [];

    rotations.forEach((_, index) => {
      if (isAutoRotating[index] && !isPaused[index]) {
        const interval = setInterval(() => {
          setRotations((prev) => {
            const newRotations = [...prev];
            newRotations[index] =
              (newRotations[index] + 0.5 * speeds[index]) % 360;
            return newRotations;
          });
        }, 50);
        intervalRefs.current.push(interval);
      }
    });

    return () =>
      intervalRefs.current.forEach((interval) => clearInterval(interval));
  }, [isAutoRotating, isPaused, speeds]);

  // Handle manual rotation with slider
  const handleSliderChange = (index, value) => {
    setRotations((prev) => {
      const newRotations = [...prev];
      newRotations[index] = parseInt(value);
      return newRotations;
    });

    setIsAutoRotating((prev) => {
      const newAuto = [...prev];
      newAuto[index] = false;
      return newAuto;
    });
  };

  // Handle speed change
  const handleSpeedChange = (index, speed) => {
    setSpeeds((prev) => {
      const newSpeeds = [...prev];
      newSpeeds[index] = speed;
      return newSpeeds;
    });
  };

  // Toggle auto-rotation
  const toggleAutoRotation = (index) => {
    setIsAutoRotating((prev) => {
      const newAuto = [...prev];
      newAuto[index] = !newAuto[index];
      return newAuto;
    });

    setIsPaused((prev) => {
      const newPaused = [...prev];
      newPaused[index] = false;
      return newPaused;
    });
  };

  // Toggle pause
  const togglePause = (index) => {
    setIsPaused((prev) => {
      const newPaused = [...prev];
      newPaused[index] = !newPaused[index];
      return newPaused;
    });
  };

  // Reset rotation
  const resetRotation = (index) => {
    setRotations((prev) => {
      const newRotations = [...prev];
      newRotations[index] = 0;
      return newRotations;
    });

    setIsAutoRotating((prev) => {
      const newAuto = [...prev];
      newAuto[index] = false;
      return newAuto;
    });

    setSpeeds((prev) => {
      const newSpeeds = [...prev];
      newSpeeds[index] = 1;
      return newSpeeds;
    });
  };

  // Toggle zoom
  const toggleZoom = (index) => {
    setIsZoomed((prev) => {
      const newZoomed = [...prev];
      newZoomed[index] = !newZoomed[index];
      return newZoomed;
    });
  };

  // Handle image load
  const handleImageLoad = (index) => {
    setIsLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  // Calculate image size based on screen width
  const getImageSize = () => {
    if (windowWidth < 640) return 200; // Mobile
    if (windowWidth < 1024) return 250; // Tablet
    return 300; // Desktop
  };

  // Jewelry image data with enhanced info
  const jewelryItems = [
    {
      id: 1,
      name: "Diamond Ring",
      description: "Brilliant cut diamond in platinum setting",
      image: "https://images.pexels.com/photos/168927/pexels-photo-168927.jpeg",
      price: "$2,499",
    },
    {
      id: 2,
      name: "Gold Necklace",
      description: "18k gold chain with delicate pendant",
      image: "https://images.pexels.com/photos/177332/pexels-photo-177332.jpeg",
      price: "$899",
    },
    {
      id: 3,
      name: "Pearl Earrings",
      description: "Freshwater pearls with sterling silver",
      image: "https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg",
      price: "$299",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8 md:py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {sparklePositions.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Jewelry 360°
            </h1>
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
          </div>
          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
            Experience our luxury jewelry collection in stunning 360° detail.
            Rotate, zoom, and explore every facet of craftsmanship.
          </p>
        </div>

        {/* Jewelry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {jewelryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-black/20 backdrop-blur-lg rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl border border-white/10 overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-white/10"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-4 md:p-6 lg:p-8 relative z-10">
                {/* Item Header */}
                <div className="text-center mb-4 md:mb-6">
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-white mb-1 md:mb-2">
                    {item.name}
                  </h2>
                  <p className="text-gray-400 text-xs md:text-sm mb-1">
                    {item.description}
                  </p>
                  <p className="text-white font-bold text-base md:text-lg">
                    {item.price}
                  </p>
                </div>

                {/* Image Container */}
                <div
                  className="relative mx-auto mb-6 md:mb-8 perspective-1000"
                  style={{ width: getImageSize(), height: getImageSize() }}
                >
                  <div
                    className={`relative w-full h-full transform-gpu transition-all duration-700 ${
                      isZoomed[index] ? "scale-125" : "scale-100"
                    }`}
                    style={{
                      transform: `rotateY(${rotations[index]}deg) ${
                        isZoomed[index] ? "scale(1.25)" : "scale(1)"
                      }`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Loading shimmer */}
                    {!isLoaded[index] && (
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-white to-gray-300 animate-pulse rounded-xl md:rounded-2xl" />
                    )}

                    {/* Main image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border-2 md:border-4 border-white/20"
                      style={{
                        filter:
                          "brightness(0.9) contrast(1.2) saturate(0) brightness(1.1)",
                      }}
                      onLoad={() => handleImageLoad(index)}
                    />

                    {/* Reflection */}
                    <div
                      className="absolute -bottom-4 md:-bottom-6 left-0 w-full h-6 md:h-8 bg-cover bg-center opacity-20 blur-sm transform scale-y-[-0.3]"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        maskImage:
                          "linear-gradient(to bottom, transparent, black)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ffffff, #9ca3af);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(255, 255, 255, 0.3);
          border: 2px solid #374151;
        }

        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ffffff, #9ca3af);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(255, 255, 255, 0.3);
          border: 2px solid #374151;
        }

        @media (max-width: 640px) {
          .slider-thumb::-webkit-slider-thumb {
            width: 18px;
            height: 18px;
          }

          .slider-thumb::-moz-range-thumb {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default JewelryRotator;
