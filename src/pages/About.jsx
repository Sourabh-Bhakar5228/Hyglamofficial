import { Link } from "react-router-dom";
import HighlightedHeading from "../components/common/HighlightedHeading";

const HyglamAboutUs = () => {
  return (
    <div className="min-h-screen text-white overflow-hidden" style={{ background: 'radial-gradient(circle at center, #1a1605 0%, #000 100%)' }}>
      {/* Hero Banner */}
      <div className="relative py-20 text-white min-h-[40vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale opacity-40 hover:grayscale-0 transition-all duration-1000 transform hover:scale-105"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?w=1200&auto=format&fit=crop&q=80)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <HighlightedHeading level="h1" className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight text-white tracking-tighter animate-pulse">
              About HyGlam
            </HighlightedHeading>
            <p className="text-lg sm:text-xl md:text-3xl max-w-3xl mx-auto mb-8 leading-relaxed font-light italic text-gold-500/80">
              Jewellery that inspires confidence, elegance, and individuality
            </p>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-24 px-4 bg-transparent">
        <div className="container mx-auto max-w-5xl">
          <HighlightedHeading level="h2" className="text-3xl md:text-5xl font-bold text-center mb-12 text-white">
            Who We Are
          </HighlightedHeading>
          <div className="bg-white/5 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-gold-500/10 blur-[100px] rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 text-center leading-relaxed font-light">
              HyGlam is a jewellery brand where you’ll always find trendy and
              stylish pieces. Our aim is simple – whenever someone thinks of
              trendy jewellery, the first name that comes to mind should be
              <span className="font-bold text-gold-500"> HyGlam</span>. We don’t just create
              jewellery; we build an emotional connection with our clients through
              every piece. HyGlam wants every common woman to feel like a
              superwoman, because we believe jewellery isn’t only about enhancing
              your look – it’s also about boosting your confidence. And when you
              feel confident, you carry the energy and passion to shine in every
              moment of life.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 px-4 bg-transparent border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <HighlightedHeading level="h2" className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
            Meet Our Founders
          </HighlightedHeading>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 lg:gap-20">
            {/* Founder 1 */}
            <div className="bg-black/40 backdrop-blur-md rounded-3xl shadow-2xl border border-white/5 overflow-hidden hover:border-gold-500/30 transition-all duration-500 group grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="relative overflow-hidden h-96 md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=80"
                  alt="Founder - Nandini Sharma"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 py-10 bg-gradient-to-t from-black via-black/40 to-transparent md:hidden"></div>
              </div>
              <div className="p-10 md:p-16 relative z-10">
                <HighlightedHeading level="h3" className="text-3xl lg:text-4xl font-black text-white mb-2">
                  Nandini Sharma
                </HighlightedHeading>
                <p className="text-gold-500 font-bold uppercase tracking-[0.3em] text-xs mb-6">
                  Visionary Founder
                </p>
                <p className="text-gray-400 leading-relaxed text-lg lg:text-xl font-light">
                  HyGlam was founded by{" "}
                  <span className="text-white font-medium">Nandini Sharma</span>, a
                  professional graphic designer with a deep passion for
                  creativity, aesthetics, and design. Drawing on her design
                  expertise, Nandini envisioned a jewellery brand that goes
                  beyond accessories—one that empowers women, celebrates
                  individuality, and makes elegance accessible.
                </p>
              </div>
            </div>

            {/* Founder 2
            <div className="bg-black/40 backdrop-blur-md rounded-3xl shadow-2xl border border-white/5 overflow-hidden hover:border-gold-500/30 transition-all duration-500 group">
              <div className="relative overflow-hidden h-96">
                <img
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&auto=format&fit=crop&q=80"
                  alt="Co-Founder - Madhur Arneja"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 py-10 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>
              <div className="p-10 -mt-16 relative z-10">
                <HighlightedHeading level="h3" className="text-3xl font-black text-white mb-2">
                  Madhur Arneja
                </HighlightedHeading>
                <p className="text-gold-500 font-bold uppercase tracking-[0.3em] text-xs mb-6">
                  Strategy Co-Founder
                </p>
                <p className="text-gray-400 leading-relaxed text-lg font-light">
                  <span className="text-white font-medium">Madhur Arneja</span>, the
                  Co-Founder of HyGlam, is a social media manager and
                  advertising specialist who brings expertise in digital
                  strategy and brand growth. He plays a key role in shaping
                  HyGlam’s online presence, marketing campaigns, and customer
                  engagement, working alongside the founder to ensure that the
                  brand continues to empower modern women with stylish,
                  high-quality jewellery.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>


    </div>
  );
};

export default HyglamAboutUs;
