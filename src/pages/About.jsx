const HyglamAboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-amber-500 to-amber-700 py-20 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Redefining artificial jewellery with affordable luxury for every
            woman
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1606760227093-89928c8d5e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Hyglam jewellery"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Welcome to Hyglam
              </h2>
              <p className="text-gray-600 mb-4">
                At Hyglam, we're redefining artificial jewellery. Our mission is
                simple: to bring affordable luxury into every woman's life.
              </p>
              <p className="text-gray-600 mb-4">
                We understand that every girl plays many roles — from casual
                everyday wear to festive joy to boss lady confidence to
                glamorous evenings.
              </p>
              <p className="text-gray-600">
                That's why we design jewellery that fits seamlessly into your
                story, enhancing every moment with elegance and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-amber-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Hyglam?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Craftsmanship */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-amber-600 mb-4 text-4xl">✨</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Craftsmanship
              </h3>
              <p className="text-gray-600">
                Inspired by luxury jewellery, crafted with precision and
                attention to detail.
              </p>
            </div>

            {/* Design */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-amber-600 mb-4 text-4xl">🎨</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Design</h3>
              <p className="text-gray-600">
                Curated with trends, culture, and confidence in mind for the
                modern woman.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-amber-600 mb-4 text-4xl">⭐</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Quality</h3>
              <p className="text-gray-600">
                Lightweight, long-lasting finish that maintains its beauty over
                time.
              </p>
            </div>

            {/* Style */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-amber-600 mb-4 text-4xl">👑</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Style</h3>
              <p className="text-gray-600">
                Designs that make heads turn — without breaking the bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Woman wearing Hyglam jewellery"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-6">
                To be every woman's first choice when she thinks style,
                elegance, and affordable luxury. We believe that every woman
                deserves to feel beautiful and confident without compromise.
              </p>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Promise
              </h2>
              <p className="text-gray-600">
                Every piece at Hyglam is more than jewellery — it's a feeling of
                confidence, celebration, and glamour. We promise to deliver
                exceptional quality and design that empowers you to express your
                unique style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Discover Our Collections
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Explore our exquisite range of jewellery designed for every occasion
            and style
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1617117811969-97e5f8e5b7db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Everyday collection"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-2xl font-bold">
                  Everyday Elegance
                </h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ad5e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Festive collection"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-2xl font-bold">Festive Joy</h3>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1596944946755-63d1fea4d47b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Evening glamour collection"
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-2xl font-bold">
                  Evening Glamour
                </h3>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-md hover:bg-amber-700 transition">
              View All Collections
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HyglamAboutUs;
