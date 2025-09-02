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
              "url(https://videos.openai.com/vg-assets/assets%2Ftask_01jsakerr2f6zr0tq67hqxa4c3%2Fimg_1.webp?st=2025-09-02T10%3A16%3A12Z&se=2025-09-08T11%3A16%3A12Z&sks=b&skt=2025-09-02T10%3A16%3A12Z&ske=2025-09-08T11%3A16%3A12Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=fea36edb-a052-425e-a84a-436fdce0a7b4&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=lCFafqb8IMH%2BK%2Ftz%2BnZjRD%2BZ7N7G%2FYDNprumLk6KutM%3D&az=oaivgprodscus)",
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
              Our <span className="text-gray-700">Story</span>
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
                src="https://videos.openai.com/vg-assets/assets%2Ftask_01jtjbw4gnechv7azh15mgb04k%2F1746520680_img_2.webp?st=2025-09-02T10%3A18%3A07Z&se=2025-09-08T11%3A18%3A07Z&sks=b&skt=2025-09-02T10%3A18%3A07Z&ske=2025-09-08T11%3A18%3A07Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=fea36edb-a052-425e-a84a-436fdce0a7b4&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=CVezsUbF53lCCbtcCrGrHz8pZe%2Bcvcen0se9OE5eFpg%3D&az=oaivgprodscus"
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
                img: "https://videos.openai.com/vg-assets/assets%2Ftask_01k1g77ec1evhb3afftfnpkay3%2F1753964915_img_0.webp?st=2025-09-02T10%3A18%3A07Z&se=2025-09-08T11%3A18%3A07Z&sks=b&skt=2025-09-02T10%3A18%3A07Z&ske=2025-09-08T11%3A18%3A07Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=fea36edb-a052-425e-a84a-436fdce0a7b4&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=XdENYziS1NCYW00xgAZ7YMq1NKl%2FJ0CDo3K3MHoWsII%3D&az=oaivgprodscus",
                title: "Everyday Elegance",
              },
              {
                img: "https://videos.openai.com/vg-assets/assets%2Ftask_01jyeaphkpf9zrqmrgj0szxqzm%2F1750680198_img_0.webp?st=2025-09-02T10%3A18%3A07Z&se=2025-09-08T11%3A18%3A07Z&sks=b&skt=2025-09-02T10%3A18%3A07Z&ske=2025-09-08T11%3A18%3A07Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=fea36edb-a052-425e-a84a-436fdce0a7b4&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=GyWEA4B9dOoqtOp8qQUuCoBcBj9ZGwGf1anHtI6Z%2FBA%3D&az=oaivgprodscus",
                title: "Festive Joy",
              },
              {
                img: "https://videos.openai.com/vg-assets/assets%2Ftask_01jy3qmg6afhxbn201fa66199c%2F1750324732_img_1.webp?st=2025-09-02T10%3A12%3A05Z&se=2025-09-08T11%3A12%3A05Z&sks=b&skt=2025-09-02T10%3A12%3A05Z&ske=2025-09-08T11%3A12%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=fea36edb-a052-425e-a84a-436fdce0a7b4&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=dz4JO44%2FXd77pDlaKJUd1RldxaTvqJbP0%2F6zZ4aDuM8%3D&az=oaivgprodscus",
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
