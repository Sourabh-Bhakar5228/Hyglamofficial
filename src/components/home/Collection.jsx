import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const JewelryCollection = () => {
  const [loaded, setLoaded] = useState(false);

  // Animation controls for header
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const headerControls = useAnimation();

  // Animation controls for divider
  const dividerRef = useRef(null);
  const dividerInView = useInView(dividerRef, { once: true, amount: 0.3 });
  const dividerControls = useAnimation();

  // Animation controls for sections
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section1InView = useInView(section1Ref, { once: true, amount: 0.3 });
  const section2InView = useInView(section2Ref, { once: true, amount: 0.3 });
  const section3InView = useInView(section3Ref, { once: true, amount: 0.3 });
  const section1Controls = useAnimation();
  const section2Controls = useAnimation();
  const section3Controls = useAnimation();

  useEffect(() => {
    setLoaded(true);

    // Header animation
    if (headerInView) {
      headerControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }

    // Divider animation
    if (dividerInView) {
      dividerControls.start({
        opacity: 1,
        scaleX: 1,
        transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
      });
    }

    // Section animations
    if (section1InView) {
      section1Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
    if (section2InView) {
      section2Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
    if (section3InView) {
      section3Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [
    headerInView,
    dividerInView,
    section1InView,
    section2InView,
    section3InView,
    headerControls,
    dividerControls,
    section1Controls,
    section2Controls,
    section3Controls,
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 font-sans overflow-hidden">
      {/* Header */}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={headerControls}
        className="text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-3 sm:mb-4 font-medium">
          NEW COLLECTION
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-extralight text-white mb-4 sm:mb-6 lg:mb-8">
          2025
        </h1>
        <p className="max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed px-4">
          Our newest collection blends timeless elegance with contemporary
          flair. Crafted with precision, each piece—from radiant gold accents to
          bold statement designs—elevates your style for every occasion. Embrace
          luxury that lasts.
        </p>
      </motion.header>

      <motion.div
        ref={dividerRef}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={dividerControls}
        className="w-24 sm:w-32 md:w-40 h-0.5 bg-gradient-to-r from-gray-600 via-white to-gray-600 mx-auto my-8 sm:my-12 lg:my-16"
      ></motion.div>

      {/* Product Sections */}
      <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        {/* Glamour That Glows */}
        <motion.section
          ref={section1Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={section1Controls}
          className="mb-16 sm:mb-20 lg:mb-24 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16"
        >
          <div className="w-full lg:w-1/2 group relative">
            <div className="h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <img
                src="https://plus.unsplash.com/premium_photo-1691030255383-ec9765ad5340?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q3J5c3RhbCUyMEVhcnJpbmdzfGVufDB8fDB8fHww"
                alt="Crystal Earrings"
                className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 grayscale group-hover:scale-110 filter brightness-90 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <p className="text-sm sm:text-base font-medium tracking-wide">
                Crystal Earrings
              </p>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Premium Collection
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-6 lg:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-serif font-light text-white mb-4 sm:mb-6">
              Glamour That Glows
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
              Illuminate your style with our crystal-embellished aluminum
              earrings, designed to add a touch of brilliance to any ensemble.
            </p>
            <button className="relative bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-200 transition-all duration-300 group overflow-hidden border-2 border-transparent hover:border-gray-300 transform hover:scale-105">
              <span className="relative z-10 tracking-wide">SHOP NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800/10 to-black/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4 font-light">
              Starting at $99
            </p>
          </div>
        </motion.section>

        {/* Sculpted in Strength */}
        <motion.section
          ref={section2Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={section2Controls}
          className="mb-16 sm:mb-20 lg:mb-24 flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-12 lg:gap-16"
        >
          <div className="w-full lg:w-1/2 group relative">
            <div className="h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <img
                src="https://images.unsplash.com/photo-1662376992902-0ea15147620e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8R29sZCUyMENoYW1wJTIwUmluZ3N8ZW58MHx8MHx8fDA%3D"
                alt="Gold Champ Rings"
                className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 grayscale group-hover:scale-110 filter brightness-90 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <p className="text-sm sm:text-base font-medium tracking-wide">
                Gold Champ Rings
              </p>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Signature Series
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-6 lg:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-serif font-light text-white mb-4 sm:mb-6">
              Sculpted in Strength
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
              Bold and empowering, our gold champ rings are crafted to make a
              statement with every gesture.
            </p>
            <button className="relative bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-200 transition-all duration-300 group overflow-hidden border-2 border-transparent hover:border-gray-300 transform hover:scale-105">
              <span className="relative z-10 tracking-wide">SHOP NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800/10 to-black/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4 font-light">
              Starting at $149
            </p>
          </div>
        </motion.section>

        {/* Timeless Together */}
        <motion.section
          ref={section3Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={section3Controls}
          className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16"
        >
          <div className="w-full lg:w-1/2 group relative">
            <div className="h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <img
                src="https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8R29sZCUyMFBlbmRhbnRzfGVufDB8fDB8fHww"
                alt="Gold Pendants"
                className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 grayscale group-hover:scale-110 filter brightness-90 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <p className="text-sm sm:text-base font-medium tracking-wide">
                Gold Pendants
              </p>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Eternal Collection
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-6 lg:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-serif font-light text-white mb-4 sm:mb-6">
              Timeless Together
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg">
              Our gold pendants symbolize connection and elegance, perfect for
              cherishing life's special moments.
            </p>
            <button className="relative bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-gray-200 transition-all duration-300 group overflow-hidden border-2 border-transparent hover:border-gray-300 transform hover:scale-105">
              <span className="relative z-10 tracking-wide">SHOP NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800/10 to-black/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4 font-light">
              Starting at $179
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default JewelryCollection;
