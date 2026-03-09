import React, { useState } from "react";
import HighlightedHeading from "./common/HighlightedHeading";

const faqs = [
  {
    question: "What makes Hyglam jewellery unique?",
    answer:
      "Hyglam jewellery blends traditional craftsmanship with modern design, offering stylish pieces at affordable prices.",
  },
  {
    question: "Is Hyglam jewellery affordable?",
    answer:
      "Yes! Our mission is to make luxury accessible for every woman without compromising on quality.",
  },
  {
    question: "Can I wear Hyglam jewellery every day?",
    answer:
      "Absolutely! Our designs are lightweight, durable, and crafted for both daily wear and special occasions.",
  },

  {
    question: "Is Hyglam jewellery skin-friendly?",
    answer: "Yes, our jewellery is nickel-free and safe for sensitive skin.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 relative overflow-hidden" style={{ background: 'radial-gradient(circle at center, #1a1605 0%, #000 100%)' }}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Video */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
          <div className="absolute inset-0 bg-gold-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-80 sm:h-96 lg:h-[500px] object-cover relative z-10"
          ></video>
          <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none"></div>
        </div>

        {/* Right: FAQs */}
        <div className="relative z-10">
          <HighlightedHeading level="h2" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-10 leading-tight">
            Frequently Asked Questions
          </HighlightedHeading>
          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq, index) => (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-500 overflow-hidden ${openIndex === index
                  ? "bg-white/10 border-gold-500/50 shadow-2xl shadow-gold-500/5 scale-[1.02]"
                  : "bg-white/5 border-white/5 hover:border-gold-500/30 hover:bg-white/10"
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left group"
                >
                  <span className={`font-bold transition-colors duration-300 ${openIndex === index ? "text-gold-500" : "text-gray-300 group-hover:text-white"}`}>
                    {faq.question}
                  </span>
                  <span className={`text-2xl font-black transition-all duration-500 ${openIndex === index ? "text-gold-500 rotate-180" : "text-gray-500"}`}>
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-40 p-4 pt-0" : "max-h-0"
                    }`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
