import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, X, CheckCircle, Award } from "lucide-react";
import HighlightedHeading from "../common/HighlightedHeading";

const HyglamTestimonialCTA = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const quizQuestions = useMemo(() => [
    {
      question: "Which metal is known as the 'King of Metals' in jewelry?",
      options: ["Silver", "Platinum", "Gold", "Titanium"],
      correct: 2,
    },
    {
      question: "What is the hardest natural substance used in jewelry?",
      options: ["Ruby", "Sapphire", "Diamond", "Emerald"],
      correct: 2,
    },
    {
      question: "The purity of gold is measured in?",
      options: ["Carats", "Karat", "Grams", "Percent"],
      correct: 1,
    },
    {
      question: "Which gemstone is famous for its deep green color?",
      options: ["Topaz", "Emerald", "Amethyst", "Opal"],
      correct: 1,
    },
    {
      question: "What is 'Rose Gold' an alloy of gold and which other metal?",
      options: ["Silver", "Copper", "Platinum", "Zinc"],
      correct: 1,
    },
    {
      question: "Which era is famous for ornate, romantic jewelry design?",
      options: ["Art Deco", "Victorian", "Modernist", "Retro"],
      correct: 1,
    },
    {
      question: "A 'Solitaire' ring typically features how many main stones?",
      options: ["One", "Two", "Three", "Five"],
      correct: 0,
    },
    {
      question: "Pearls are formed inside which aquatic creature?",
      options: ["Crab", "Oyster", "Starfish", "Snail"],
      correct: 1,
    },
    {
      question: "Which cut of diamond is known for having 58 facets?",
      options: ["Emerald Cut", "Princess Cut", "Round Brilliant", "Pear Cut"],
      correct: 2,
    },
    {
      question: "What does 'Sterling Silver' consist of mostly?",
      options: ["Gold", "Silver", "Platinum", "Iron"],
      correct: 1,
    },
  ], []);

  const handleAnswer = (index) => {
    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setShowQuiz(false);
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
  };

  const testimonials = [
    {
      quote:
        "Hyglam earrings are my everyday go-to. They're lightweight and stylish.",
      author: "Neha, Bangalore",
      productImage:
        "https://images.unsplash.com/photo-1679531751641-79f78cbb5c0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D", // example image
    },
    {
      quote:
        "I wore Hyglam's festive collection for Diwali, and everyone asked where I got it!",
      author: "Priya, Mumbai",
      productImage:
        "https://images.unsplash.com/photo-1679531751641-79f78cbb5c0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D",
    },
    {
      quote:
        "Finally found a brand that makes jewellery for office wear without being boring.",
      author: "Simran, Noida",
      productImage:
        "https://images.unsplash.com/photo-1514612497953-05d1e5e171fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D",
    },
    {
      quote:
        "The Glam Girl collection made me feel like a star at my friend's wedding.",
      author: "Mehak, Delhi",
      productImage:
        "https://images.unsplash.com/photo-1638517747421-a1eb8b4c9828?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D",
    },
    {
      quote: "Affordable yet premium — Hyglam is now part of all my looks.",
      author: "Ankita, Pune",
      productImage:
        "https://images.unsplash.com/photo-1674329109778-0cc72c23537c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGRpYW1vbmR8ZW58MHx8MHx8fDA%3D",
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
    <div className="min-h-screen text-white relative overflow-hidden" style={{ background: 'radial-gradient(circle at center, #1a1605 0%, #000 100%)' }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      {/* Testimonial Slider Section */}
      <div className="bg-black/50 backdrop-blur-xl py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Customers Say
          </h2>

          {/* Slider Container */}
          <div className="relative">
            {/* Navigation Arrows - Desktop Only */}
            <button
              onClick={prevSlide}
              className="hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-black/50 backdrop-blur-xl text-gold-500 p-5 rounded-2xl hover:bg-gold-500 hover:text-black transition-all duration-500 z-10 border border-white/5 shadow-2xl items-center justify-center group"
            >
              <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={nextSlide}
              className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-black/50 backdrop-blur-xl text-gold-500 p-5 rounded-2xl hover:bg-gold-500 hover:text-black transition-all duration-500 z-10 border border-white/5 shadow-2xl items-center justify-center group"
            >
              <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * (window.innerWidth >= 1024 ? 100 / 3 : 100)
                    }%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full lg:w-1/3 flex-shrink-0 px-4"
                  >
                    <div className="bg-white/5 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] shadow-2xl h-full flex flex-col justify-between min-h-[400px] mx-2 group hover:border-gold-500/30 transition-all duration-500">
                      <div>
                        {/* Product Image */}
                        <div className="w-full h-48 mb-6 overflow-hidden rounded-2xl relative">
                          <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                          <img
                            src={testimonial.productImage}
                            alt="Product"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-1000"
                          />
                        </div>

                        {/* Quote */}
                        <div className="text-gold-500 text-5xl mb-4 font-serif opacity-30">"</div>
                        <blockquote className="text-lg text-gray-300 italic mb-8 leading-relaxed">
                          {testimonial.quote}
                        </blockquote>
                      </div>

                      {/* Author & Rating */}
                      <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                        <div>
                          <p className="font-bold text-white tracking-wide">
                            — {testimonial.author}
                          </p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} className="fill-gold-500 text-gold-500 mr-1" />
                            ))}
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500 border border-gold-500/20">
                          <Star size={18} fill="currentColor" />
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
                  className={`h-2 rounded-full transition-all duration-700 ${index === currentSlide
                    ? "bg-gold-500 w-12 shadow-[0_0_15px_rgba(250,176,63,0.5)]"
                    : "bg-white/10 w-3 hover:bg-white/30"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="quiz-cta" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gold-500/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <HighlightedHeading level="h2" className="text-4xl md:text-5xl font-black mb-10 leading-tight">
            Find Your HyGlam Personality
          </HighlightedHeading>
          <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Discover jewelry that matches your unique style and personality.
            From everyday elegance to <span className="text-gold-500 font-bold">glamorous statements</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link
              to="/products"
              className="bg-gold-500 text-black px-12 py-5 text-lg font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all duration-500 transform hover:-translate-y-2 active:scale-95 shadow-2xl shadow-gold-500/20 min-w-[250px] text-center"
            >
              Shop Now
            </Link>
            <button
              onClick={() => setShowQuiz(true)}
              className="border-2 border-gold-500/30 text-gold-500 px-12 py-5 text-lg font-black uppercase tracking-widest rounded-2xl hover:bg-gold-500 hover:text-black transition-all duration-500 transform hover:-translate-y-2 active:scale-95 shadow-xl min-w-[250px]"
            >
              Play Quiz and won rewards
            </button>
          </div>
        </div>
      </div>

      {/* Style Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={resetQuiz}
          ></div>

          <div className="relative w-full max-w-2xl bg-neutral-900 border border-gold-500/30 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Luxury Style Quiz</h3>
                <p className="text-gold-500/70 text-sm font-bold uppercase tracking-widest mt-1">Question {currentQuestion + 1} of {quizQuestions.length}</p>
              </div>
              <button
                onClick={resetQuiz}
                className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-white hover:bg-red-500/20 transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 sm:p-12">
              {!quizFinished ? (
                <div className="space-y-8">
                  {/* Progress Bar */}
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold-500 to-white transition-all duration-500"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    ></div>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {quizQuestions[currentQuestion].question}
                  </h4>

                  <div className="grid grid-cols-1 gap-4">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className="w-full p-5 text-left bg-white/5 border border-white/5 rounded-2xl text-gray-300 hover:border-gold-500/50 hover:bg-gold-500/10 hover:text-gold-500 transition-all duration-300 group flex items-center justify-between"
                      >
                        <span className="text-lg font-medium">{option}</span>
                        <div className="w-6 h-6 rounded-full border border-white/20 group-hover:border-gold-500/50 transition-colors"></div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gold-500/20 blur-[50px] rounded-full"></div>
                    <Award size={100} className="text-gold-500 relative z-10 mx-auto" strokeWidth={1} />
                  </div>

                  <div>
                    <h4 className="text-4xl font-black text-white mb-2">Elegance Confirmed!</h4>
                    <p className="text-gray-400 text-lg">You scored <span className="text-gold-500 font-bold">{score} out of {quizQuestions.length}</span></p>
                  </div>

                  <div className="bg-gold-500/10 border border-gold-500/20 p-8 rounded-[2rem] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
                    <p className="text-gray-400 uppercase tracking-[0.3em] text-xs font-bold mb-2">Your Exclusive Reward</p>
                    <div className="text-6xl sm:text-7xl font-black text-gold-500 tracking-tighter">
                      {score}% <span className="text-3xl sm:text-4xl">OFF</span>
                    </div>
                    <p className="text-white font-bold mt-4 tracking-wide uppercase text-sm">Valid for the next 24 hours</p>
                  </div>

                  <button
                    onClick={resetQuiz}
                    className="w-full py-5 bg-gold-500 text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all duration-500 shadow-2xl shadow-gold-500/20 transform hover:-translate-y-1"
                  >
                    Claim Your Reward
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HyglamTestimonialCTA;
