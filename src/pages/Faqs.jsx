import React, { useState } from "react";

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

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Banner Section */}
      <div className="relative w-full h-72 bg-black">
        <img
          src="https://picsum.photos/id/1005/1200/400"
          alt="FAQ Banner"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-bold">FAQ</h1>
          <p className="mt-2 max-w-2xl">
            At Hyglam, we're redefining artificial jewellery with affordable
            luxury, elegance, and style that fits seamlessly into your story.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                  {faq.image && (
                    <img
                      src={faq.image}
                      alt={faq.question}
                      className="mt-3 rounded-lg w-full max-h-64 object-cover"
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
