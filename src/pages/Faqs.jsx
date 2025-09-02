import React, { useState, useEffect } from "react";

const faqs = [
  {
    question: "What makes Hyglam jewellery unique?",
    answer:
      "Hyglam jewellery blends traditional craftsmanship with modern design, offering stylish pieces at affordable prices.",
    image: "https://picsum.photos/id/1011/400/250",
  },
  {
    question: "Is Hyglam jewellery affordable?",
    answer:
      "Yes! Our mission is to make luxury accessible for every woman without compromising on quality.",
    image: "https://picsum.photos/id/1015/400/250",
  },
  {
    question: "Can I wear Hyglam jewellery every day?",
    answer:
      "Absolutely! Our designs are lightweight, durable, and crafted for both daily wear and special occasions.",
    image: "https://picsum.photos/id/1025/400/250",
  },
  {
    question: "Do you have festive jewellery collections?",
    answer:
      "Yes, we have exclusive festive collections that bring joy and sparkle to your celebrations.",
    image: "https://picsum.photos/id/1035/400/250",
  },
  {
    question: "What materials are used in Hyglam jewellery?",
    answer:
      "We use high-quality alloys, gold plating, silver plating, and premium stones to ensure long-lasting shine.",
    image: "https://picsum.photos/id/1042/400/250",
  },
  {
    question: "Is Hyglam jewellery skin-friendly?",
    answer: "Yes, our jewellery is nickel-free and safe for sensitive skin.",
    image: "https://picsum.photos/id/1060/400/250",
  },
  {
    question: "Can I return or exchange jewellery?",
    answer:
      "Yes, we have an easy 7-day return and exchange policy for unused items.",
    image: "https://picsum.photos/id/1067/400/250",
  },
  {
    question: "Do you offer jewellery for office wear?",
    answer:
      "Yes, we design subtle and elegant pieces perfect for boss lady vibes at work.",
    image: "https://picsum.photos/id/1074/400/250",
  },
  {
    question: "Is Hyglam jewellery good for gifting?",
    answer:
      "Definitely! Our pieces come with beautiful packaging, making them perfect gifts for loved ones.",
    image: "https://picsum.photos/id/1084/400/250",
  },
  {
    question: "How do I care for my Hyglam jewellery?",
    answer:
      "Keep your jewellery away from perfumes, water, and chemicals. Store them in our provided soft pouches.",
    image: "https://picsum.photos/id/1080/400/250",
  },
];

// Animated Logo Components
const AnimatedJewel = ({ className, delay = 0 }) => (
  <div
    className={`absolute ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="animate-spin-slow opacity-20"
    >
      <polygon
        points="20,5 30,15 25,30 15,30 10,15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="animate-pulse"
      />
      <circle
        cx="20"
        cy="20"
        r="3"
        fill="currentColor"
        className="animate-ping"
      />
    </svg>
  </div>
);

const AnimatedRing = ({ className, delay = 0 }) => (
  <div
    className={`absolute ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      className="animate-bounce-slow opacity-15"
    >
      <circle
        cx="17.5"
        cy="17.5"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="animate-pulse"
      />
      <circle
        cx="17.5"
        cy="17.5"
        r="4"
        fill="currentColor"
        className="animate-ping"
      />
      <circle cx="17.5" cy="8" r="2" fill="currentColor" />
    </svg>
  </div>
);

const AnimatedNecklace = ({ className, delay = 0 }) => (
  <div
    className={`absolute ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg
      width="50"
      height="30"
      viewBox="0 0 50 30"
      className="animate-sway opacity-10"
    >
      <path
        d="M5,15 Q25,5 45,15 Q25,25 5,15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="animate-pulse"
      />
      <circle
        cx="25"
        cy="15"
        r="4"
        fill="currentColor"
        className="animate-pulse"
      />
      <circle cx="15" cy="12" r="2" fill="currentColor" />
      <circle cx="35" cy="12" r="2" fill="currentColor" />
    </svg>
  </div>
);

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating Jewelry Elements */}
        <AnimatedJewel className="top-10 left-10 text-gray-600" delay={0} />
        <AnimatedRing className="top-20 right-20 text-gray-500" delay={0.5} />
        <AnimatedNecklace className="top-40 left-1/4 text-gray-400" delay={1} />
        <AnimatedJewel
          className="bottom-40 right-1/4 text-gray-600"
          delay={1.5}
        />
        <AnimatedRing className="bottom-20 left-1/3 text-gray-500" delay={2} />
        <AnimatedNecklace
          className="top-1/2 right-10 text-gray-400"
          delay={2.5}
        />
        <AnimatedJewel className="top-1/3 left-1/2 text-gray-600" delay={3} />

        {/* Mouse follower jewel */}
        <div
          className="fixed w-6 h-6 pointer-events-none z-10 opacity-30 transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="animate-spin text-gray-600"
          >
            <polygon
              points="12,2 18,8 15,18 9,18 6,8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>

        {/* Animated HYGLAM logos */}
        <div className="absolute top-20 left-8 text-4xl sm:text-6xl font-bold text-gray-100 opacity-10 animate-spin-slow">
          HYGLAM
        </div>
        <div className="absolute top-40 right-12 text-3xl sm:text-5xl font-bold text-gray-200 opacity-8 animate-spin-reverse">
          HYGLAM
        </div>
        <div
          className="absolute bottom-32 left-20 text-5xl sm:text-7xl font-bold text-gray-100 opacity-10 animate-spin-slow"
          style={{ animationDelay: "3s" }}
        >
          HYGLAM
        </div>
        <div
          className="absolute bottom-16 right-16 text-3xl sm:text-4xl font-bold text-gray-200 opacity-8 animate-spin-reverse"
          style={{ animationDelay: "1.5s" }}
        >
          HYGLAM
        </div>
        <div
          className="absolute top-1/2 left-1/4 text-6xl sm:text-8xl font-bold text-gray-100 opacity-5 animate-spin-slow"
          style={{ animationDelay: "4s" }}
        >
          HYGLAM
        </div>
        <div
          className="absolute top-1/3 right-1/4 text-4xl sm:text-6xl font-bold text-gray-200 opacity-8 animate-spin-reverse"
          style={{ animationDelay: "2s" }}
        >
          HYGLAM
        </div>

        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/3 w-20 h-20 border-2 border-gray-200 rounded-full animate-spin-slow opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border-2 border-gray-300 transform rotate-45 animate-pulse opacity-10"></div>
      </div>

      {/* Banner Section */}
      <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">
        <img
          src="https://picsum.photos/id/1005/1200/400"
          alt="FAQ Banner"
          className="w-full h-full object-cover opacity-40 transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-gray-900/50 to-black/50"></div>

        {/* Animated banner decorations */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Hyglam logos in banner */}
          <div className="absolute top-8 left-4 text-2xl sm:text-3xl font-bold text-white opacity-20 animate-spin-slow">
            HYGLAM
          </div>
          <div className="absolute bottom-8 right-4 text-xl sm:text-2xl font-bold text-white opacity-15 animate-spin-reverse">
            HYGLAM
          </div>
          <div
            className="absolute top-1/2 left-2 text-sm sm:text-lg font-bold text-white opacity-10 animate-spin-slow"
            style={{ animationDelay: "2s" }}
          >
            HYGLAM
          </div>
          <div
            className="absolute top-1/4 right-8 text-lg sm:text-xl font-bold text-white opacity-15 animate-spin-reverse"
            style={{ animationDelay: "3s" }}
          >
            HYGLAM
          </div>

          {/* Animated lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
          <div
            className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-300/20 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 animate-typewriter">
            FAQ
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl leading-relaxed opacity-90 animate-fadeInUp">
            At Hyglam, we're redefining artificial jewellery with affordable
            luxury, elegance, and style that fits seamlessly into your story.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-6xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 animate-slideInDown">
            Frequently Asked Questions
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-gray-600 to-black mx-auto rounded-full animate-expand"></div>
        </div>

        <div className="grid gap-4 sm:gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group border-2 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-1 ${
                openIndex === index
                  ? "border-black bg-gradient-to-br from-gray-50 via-white to-gray-100 shadow-2xl scale-[1.01]"
                  : "border-gray-200 bg-white hover:border-gray-400"
              } animate-slideInUp`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "both",
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 rounded-xl sm:rounded-2xl transition-all duration-300 group-hover:bg-gray-50"
              >
                <span className="font-semibold text-sm sm:text-base lg:text-lg text-gray-800 group-hover:text-black transition-colors duration-300 pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-gray-700 to-black flex items-center justify-center text-white font-bold text-lg sm:text-xl transition-all duration-700 transform ${
                    openIndex === index
                      ? "rotate-180 scale-110 bg-gradient-to-r from-black to-gray-800"
                      : "rotate-0 scale-100"
                  } hover:scale-110 shadow-lg hover:shadow-xl group-hover:animate-pulse`}
                >
                  <span
                    className={`transition-transform duration-500 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
                  <div
                    className={`transform transition-all duration-700 ${
                      openIndex === index
                        ? "translate-y-0 opacity-100 scale-100"
                        : "translate-y-8 opacity-0 scale-95"
                    }`}
                  >
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4 animate-shimmer"></div>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 animate-fadeIn">
                      {faq.answer}
                    </p>
                    {faq.image && (
                      <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md group">
                        <img
                          src={faq.image}
                          alt={faq.question}
                          className="w-full h-32 sm:h-48 md:h-56 lg:h-64 object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1 animate-slideInUp"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Overlay jewelry icons */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-60 transition-all duration-500 transform group-hover:scale-110">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            className="text-white animate-spin-slow"
                          >
                            <polygon
                              points="10,2 15,7 12,15 8,15 5,7"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <circle
                              cx="10"
                              cy="10"
                              r="1.5"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Decorative elements */}
        <div className="text-center mt-12 sm:mt-16 relative">
          <div className="relative mb-4">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-700 animate-float opacity-20">
              HYGLAM
            </h3>
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateY(-20px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(10px) rotate(-1deg);
          }
          50% {
            transform: translateY(20px) rotate(0deg);
          }
          75% {
            transform: translateY(10px) rotate(1deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes sway {
          0%,
          100% {
            transform: translateX(0) rotate(0deg);
          }
          25% {
            transform: translateX(-5px) rotate(-2deg);
          }
          75% {
            transform: translateX(5px) rotate(2deg);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .animate-slideInDown {
          animation: slideInDown 0.6s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 30s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 0, 0, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s ease-in-out infinite;
        }

        .animate-expand {
          animation: expand 1s ease-out forwards;
        }

        .animate-typewriter {
          animation: typewriter 2s steps(3) forwards;
        }

        /* Responsive utilities */
        @media (max-width: 640px) {
          .animate-float {
            animation-duration: 4s;
          }
          .animate-float-reverse {
            animation-duration: 6s;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQPage;
