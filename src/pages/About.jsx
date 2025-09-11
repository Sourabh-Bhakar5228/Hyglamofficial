const HyglamAboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-white to-gray-300 py-20 text-white min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8andlbGxlcnl8ZW58MHx8MHx8fDA%3D)",
          }}
        ></div>

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-gray/20 via-black/30 to-gray-500/80"></div> */}

        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 border border-white rounded-full"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our <span className="text-gray-300">Story</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Redefining artificial jewellery with affordable luxury for every
              woman
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow-lg">
                Explore Collections
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <img
                src="https://media.tenor.com/kzfyLo5FIN8AAAAM/emerald-jewelry.gif"
                alt="Hyglam jewellery"
                className="rounded-lg shadow-lg w-full h-96 object-cover grayscale hover:grayscale-0 transition"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Welcome to Hyglam
              </h2>
              <p className="text-gray-700 mb-4">
                At Hyglam, we're redefining artificial jewellery. Our mission is
                simple: to bring affordable luxury into every woman's life.
              </p>
              <p className="text-gray-700 mb-4">
                We understand that every girl plays many roles — from casual
                everyday wear to festive joy to boss lady confidence to
                glamorous evenings.
              </p>
              <p className="text-gray-700">
                That's why we design jewellery that fits seamlessly into your
                story, enhancing every moment with elegance and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Hyglam?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "✨",
                title: "Craftsmanship",
                desc: "Inspired by luxury jewellery, crafted with precision.",
              },
              {
                icon: "🎨",
                title: "Design",
                desc: "Curated with trends, culture, and confidence in mind.",
              },
              {
                icon: "⭐",
                title: "Quality",
                desc: "Lightweight, long-lasting finish that maintains beauty.",
              },
              {
                icon: "👑",
                title: "Style",
                desc: "Designs that make heads turn — without breaking the bank.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-gray-50 transition"
              >
                <div className="text-black mb-4 text-4xl">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=774&q=80"
                alt="Woman wearing Hyglam jewellery"
                className="rounded-lg shadow-lg w-full h-96 object-cover grayscale hover:grayscale-0 transition"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Our Vision
              </h2>
              <p className="text-gray-700 mb-6">
                To be every woman's first choice when she thinks style,
                elegance, and affordable luxury.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Our Promise
              </h2>
              <p className="text-gray-700">
                Every piece at Hyglam is more than jewellery — it's a feeling of
                confidence and glamour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Discover Our Collections
          </h2>
          <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            Explore our range of jewellery designed for every occasion and style
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1656428361240-47e1737b7dce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8andlbGxlcnl8ZW58MHx8MHx8fDA%3D",
                title: "Everyday Elegance",
              },
              {
                img: "https://images.unsplash.com/photo-1679156271456-d6068c543ee7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGp3ZWxsZXJ5fGVufDB8fDB8fHww",
                title: "Festive Joy",
              },
              {
                img: "https://images.unsplash.com/photo-1695050049047-54e27a908898?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGp3ZWxsZXJ5fGVufDB8fDB8fHww",
                title: "Evening Glamour",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-105 grayscale group-hover:grayscale-0 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">
              View All Collections
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HyglamAboutUs;
