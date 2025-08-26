import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const VideoSection = () => {
  // Animation controls for the section
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const sectionControls = useAnimation();

  useEffect(() => {
    if (sectionInView) {
      sectionControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [sectionInView, sectionControls]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={sectionControls}
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-serif font-light text-gray-800 mb-4">
          Crafted Brilliance
        </h2>
        <p className="max-w-2xl mx-auto text-base text-gray-600 leading-relaxed">
          Discover the artistry behind our 2025 collection. Each piece is
          meticulously crafted to capture light, movement, and emotion, bringing
          timeless beauty to life.
        </p>
      </div>
      <div className="relative rounded-xl overflow-hidden shadow-lg group">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-105"
          src="https://videos.pexels.com/video-files/4004214/4004214-hd_1920_1080_25fps.mp4"
          poster="https://picsum.photos/1200/600?grayscale&random=4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-sm font-medium">Explore the 2025 Collection</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="relative bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors group overflow-hidden">
          <span className="relative z-10">WATCH THE STORY</span>
          <div className="absolute inset-0 bg-gold-500/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
        </button>
      </div>
    </motion.section>
  );
};

export default VideoSection;
