import { Gift, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const GiftingCustomization = () => {
  return (
    <section className="bg-gradient-to-r from-white to-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Images */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-md">
            <img
              src="https://images.pexels.com/photos/5970866/pexels-photo-5970866.jpeg"
              alt="Gift Packaging"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-start mb-6">
            <div className="bg-black text-white p-4 rounded-full shadow-lg">
              <Gift size={32} />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gifting & Customization
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            HyGlam offers elegant gift packaging to make your jewellery
            purchases extra special, perfect for birthdays, anniversaries, or
            any occasion. You can also include a personalized message with your
            order on request.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            For those seeking something unique, we provide{" "}
            <span className="font-semibold text-gray-900">
              customization options
            </span>{" "}
            on select jewellery pieces, allowing you to add a personal touch.
            Since customized and personalized items are specially crafted, they
            may not be eligible for return or exchange.
          </p>

          {/* <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl shadow-md hover:bg-gray-800 transition">
            <Sparkles size={20} />
            Explore Customization
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default GiftingCustomization;
