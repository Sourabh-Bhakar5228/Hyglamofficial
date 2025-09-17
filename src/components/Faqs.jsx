import React, { useState } from "react";

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
    question: "Do you have festive jewellery collections?",
    answer:
      "Yes, we have exclusive festive collections that bring joy and sparkle to your celebrations.",
  },
  {
    question: "Is Hyglam jewellery skin-friendly?",
    answer: "Yes, our jewellery is nickel-free and safe for sensitive skin.",
  },
  {
    question: "Can I return or exchange jewellery?",
    answer:
      "Yes, we have an easy 7-day return and exchange policy for unused items.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Video */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-80 sm:h-80 lg:h-full object-cover"
          ></video>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Right: FAQs */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg shadow-sm transition-all duration-300 ${
                  openIndex === index ? "bg-white shadow-md" : "bg-gray-50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left"
                >
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-xl font-bold text-gray-600">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? "max-h-40 p-4 pt-0" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
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
