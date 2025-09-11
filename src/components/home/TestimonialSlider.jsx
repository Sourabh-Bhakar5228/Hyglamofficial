import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HyglamTestimonialCTA = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "Hyglam earrings are my everyday go-to. They're lightweight and stylish.",
      author: "Neha, Bangalore",
      productImage: "https://source.unsplash.com/400x400/?earrings,jewelry", // example image
    },
    {
      quote:
        "I wore Hyglam's festive collection for Diwali, and everyone asked where I got it!",
      author: "Priya, Mumbai",
      productImage:
        "https://source.unsplash.com/400x400/?indian,jewelry,festive",
    },
    {
      quote:
        "Finally found a brand that makes jewellery for office wear without being boring.",
      author: "Simran, Noida",
      productImage:
        "https://source.unsplash.com/400x400/?office,necklace,jewelry",
    },
    {
      quote:
        "The Glam Girl collection made me feel like a star at my friend's wedding.",
      author: "Mehak, Delhi",
      productImage:
        "https://source.unsplash.com/400x400/?wedding,jewelry,necklace",
    },
    {
      quote: "Affordable yet premium — Hyglam is now part of all my looks.",
      author: "Ankita, Pune",
      productImage:
        "https://source.unsplash.com/400x400/?fashion,accessories,jewelry",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      const isDesktop = window.innerWidth >= 1024;
      const maxSlides = isDesktop
        ? Math.ceil(testimonials.length / 3)
        : testimonials.length;
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    const isDesktop = window.innerWidth >= 1024;
    const maxSlides = isDesktop
      ? Math.ceil(testimonials.length / 3)
      : testimonials.length;
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    const isDesktop = window.innerWidth >= 1024;
    const maxSlides = isDesktop
      ? Math.ceil(testimonials.length / 3)
      : testimonials.length;
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Testimonial Slider Section */}
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Customers Say
          </h2>

          {/* Slider Container */}
          <div className="relative">
            {/* Navigation Arrows - Desktop Only */}
            <button
              onClick={prevSlide}
              className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors z-10"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-colors z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentSlide * (window.innerWidth >= 1024 ? 100 / 3 : 100)
                  }%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full lg:w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="bg-white text-black p-8 rounded-lg shadow-lg h-full flex flex-col justify-between min-h-[350px] mx-2">
                      <div>
                        {/* Product Image */}
                        <div className="w-full h-40 mb-6 overflow-hidden rounded-md">
                          <img
                            src={testimonial.productImage}
                            alt="Product"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Quote */}
                        <div className="text-4xl mb-6 text-center">"</div>
                        <blockquote className="text-lg italic mb-6 leading-relaxed text-center">
                          {testimonial.quote}
                        </blockquote>
                      </div>

                      {/* Author & Rating */}
                      <div className="text-center">
                        <p className="font-semibold text-lg">
                          — {testimonial.author}
                        </p>
                        <div className="flex justify-center mt-4">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-black text-xl">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({
                length:
                  window.innerWidth >= 1024
                    ? Math.ceil(testimonials.length / 3)
                    : testimonials.length,
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-gray-500 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Find Your Hyglam Personality
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover jewelry that matches your unique style and personality.
            From everyday elegance to glamorous statements.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-black text-white px-12 py-4 text-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 min-w-[200px]">
              Shop Now
            </button>
            <button className="border-2 border-black text-black px-12 py-4 text-xl font-semibold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 min-w-[200px]">
              Take Style Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HyglamTestimonialCTA;
