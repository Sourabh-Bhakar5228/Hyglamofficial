import { Link } from "react-router-dom";

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
              "url(https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?w=1200&auto=format&fit=crop&q=80)",
          }}
        ></div>

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
              About <span className="text-gray-300">HyGlam</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Jewellery that inspires confidence, elegance, and individuality
            </p>
          </div>
        </div>
      </div>

      {/* About Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
            HyGlam is a jewellery brand where you’ll always find trendy and
            stylish pieces. Our aim is simple – whenever someone thinks of
            trendy jewellery, the first name that comes to mind should be
            <span className="font-semibold"> HyGlam</span>. We don’t just create
            jewellery; we build an emotional connection with our clients through
            every piece. HyGlam wants every common woman to feel like a
            superwoman, because we believe jewellery isn’t only about enhancing
            your look – it’s also about boosting your confidence. And when you
            feel confident, you carry the energy and passion to shine in every
            moment of life.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Meet Our Founders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Founder */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=80"
                alt="Founder - Nandini Sharma"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Nandini Sharma
                </h3>
                <p className="text-sm font-semibold text-gray-500 mb-4">
                  Founder
                </p>
                <p className="text-gray-700 leading-relaxed">
                  HyGlam was founded by{" "}
                  <span className="font-semibold">Nandini Sharma</span>, a
                  professional graphic designer with a deep passion for
                  creativity, aesthetics, and design. Drawing on her design
                  expertise, Nandini envisioned a jewellery brand that goes
                  beyond accessories—one that empowers women, celebrates
                  individuality, and makes elegance accessible.
                </p>
              </div>
            </div>

            {/* Co-Founder */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&auto=format&fit=crop&q=80"
                alt="Co-Founder - Madhur Arneja"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Madhur Arneja
                </h3>
                <p className="text-sm font-semibold text-gray-500 mb-4">
                  Co-Founder
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">Madhur Arneja</span>, the
                  Co-Founder of HyGlam, is a social media manager and
                  advertising specialist who brings expertise in digital
                  strategy and brand growth. He plays a key role in shaping
                  HyGlam’s online presence, marketing campaigns, and customer
                  engagement, working alongside the founder to ensure that the
                  brand continues to empower modern women with stylish,
                  high-quality jewellery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 bg-white px-4">
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
                img: "https://images.unsplash.com/photo-1656428361240-47e1737b7dce?w=600&auto=format&fit=crop&q=80",
                title: "Everyday Elegance",
              },
              {
                img: "https://images.unsplash.com/photo-1679156271456-d6068c543ee7?w=600&auto=format&fit=crop&q=80",
                title: "Festive Joy",
              },
              {
                img: "https://images.unsplash.com/photo-1695050049047-54e27a908898?w=600&auto=format&fit=crop&q=80",
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
            <Link
              to="/products"
              className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition inline-block"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HyglamAboutUs;
