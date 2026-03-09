import React from "react";
import HighlightedHeading from "../common/HighlightedHeading";

const InspirationSection = () => {
  return (
    <section className="text-white py-24 relative overflow-hidden" style={{ background: 'radial-gradient(circle at center, #1a1605 0%, #000 100%)' }}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-16 relative z-10">
        {/* Left Content */}
        <div className="flex-1 bg-black/40 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] border border-white/5 shadow-2xl">
          <HighlightedHeading level="h2" className="text-3xl lg:text-5xl font-black mb-10 leading-tight">
            Maa Durga – Our Inspiration
          </HighlightedHeading>
          <p className="text-lg lg:text-xl text-gray-400 leading-relaxed font-light italic border-l-4 border-gold-500 pl-8">
            At HyGlam, our inspiration from Maa Durga is deeply personal and
            heartfelt. She symbolizes the strength every woman carries within:
            the courage to rise, the grace to move forward, and the confidence
            to stand with dignity.
            <br />
            <br />
            Maa Durga represents resilience, compassion, and inner power. Her
            divine presence inspires us to celebrate the balance of softness and
            strength that defines true feminine energy.
          </p>
          <div className="mt-10 flex items-center gap-4 text-gold-500 font-bold uppercase tracking-widest text-xs">
            <span className="w-12 h-[1px] bg-gold-500/30"></span>
            Inspired by Maa Durga
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center group">
          <div className="relative">
            <div className="absolute inset-0 bg-gold-500/20 blur-2xl rounded-3xl group-hover:bg-gold-500/30 transition-all duration-700"></div>
            <img
              src="/assets/images/durgama.png"
              alt="Maa Durga"
              className="relative rounded-[2rem] border border-white/10 shadow-2xl max-h-[600px] w-auto object-contain transform group-hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
