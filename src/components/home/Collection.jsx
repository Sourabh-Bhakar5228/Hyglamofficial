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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans overflow-hidden">
      {/* Header */}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={headerControls}
        className="text-center py-16 px-4"
      >
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-medium">
          NEW COLLECTION
        </p>
        <h1 className="text-6xl md:text-8xl font-serif font-extralight text-gray-800 mb-6">
          2025
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed">
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
        className="w-32 h-0.5 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto my-12"
      ></motion.div>

      {/* Product Sections */}
      <div className="max-w-8xl mx-auto px-4 pb-20">
        {/* Glamour That Glows */}
        <motion.section
          ref={section1Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={section1Controls}
          className="mb-24 flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2 group relative">
            <div className="h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/600/800?grayscale&random=1"
                alt="Earrings"
                className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 grayscale group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm font-medium">Crystal Earrings</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-light text-gray-800 mb-4">
              Glamour That Glows
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Illuminate your style with our crystal-embellished aluminum
              earrings, designed to add a touch of brilliance to any ensemble.
            </p>
            <button className="relative bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors group overflow-hidden">
              <span className="relative z-10">SHOP NOW</span>
              <div className="absolute inset-0 bg-gold-500/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <p className="text-sm text-gray-500 mt-3">Starting at $99</p>
          </div>
        </motion.section>

        {/* Sculpted in Strength */}
        <motion.section
          ref={section2Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={section2Controls}
          className="mb-24 flex flex-col md:flex-row-reverse items-center gap-12"
        >
          <div className="md:w-1/2 group relative">
            <div className="h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/600/800?grayscale&random=2"
                alt="Rings"
                className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 grayscale group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm font-medium">Gold Champ Rings</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-light text-gray-800 mb-4">
              Sculpted in Strength
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Bold and empowering, our gold champ rings are crafted to make a
              statement with every gesture.
            </p>
            <button className="relative bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors group overflow-hidden">
              <span className="relative z-10">SHOP NOW</span>
              <div className="absolute inset-0 bg-gold-500/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
            <p className="text-sm text-gray-500 mt-3">Starting at $149</p>
          </div>
        </motion.section>

        {/* Timeless Together */}
        <motion.section
          ref={section3Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={section3Controls}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2 group relative">
            <div className="h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/600/800?grayscale&random=3"
                alt="Pendants"
                className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 grayscale group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-sm font-medium">Gold Pendants</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-light text-gray-800 mb-4">
              Timeless Together
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our gold pendants symbolize connection and elegance, perfect for
              cherishing life’s special moments.
            </p>
            <button className="relative bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors group overflow-hidden">
              <span className="relative z-10">SHOP NOW</span>
              <div className="absolute inset-0 bg-gold-500/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default JewelryCollection;
