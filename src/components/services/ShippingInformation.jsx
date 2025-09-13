import React from "react";
import { Truck, Globe } from "lucide-react";
import { motion } from "framer-motion";

const ShippingInformation = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-md">
            <img
              src="https://images.unsplash.com/photo-1577702312706-e23ff063064f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNoaXBwaW5nJTIwUGFja2FnZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Shipping Package"
              className="rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaXZlcnl8ZW58MHx8MHx8fDA%3D"
              alt="Delivery"
              className="absolute -bottom-16 -right-24 w-2/3 rounded-2xl shadow-xl border-4 border-white"
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
              <Truck size={32} />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shipping Information
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At HyGlam, we ensure that every order is carefully processed and
            shipped through trusted courier partners. Customers receive a
            tracking ID once the order is dispatched, making it easy to follow
            the delivery.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We offer <span className="font-semibold">free shipping</span> on
            eligible prepaid orders, while standard charges may apply for
            certain orders or international deliveries. Customs duties and taxes
            for international shipments are the responsibility of the customer.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            While we strive for timely delivery, delays may occasionally occur
            due to unforeseen circumstances or issues with our courier.
          </p>

          {/* <button className="flex items-center gap-2 bg-black text-white px-6 py-3 mt-6 rounded-xl shadow-md hover:bg-gray-800 transition">
            <Globe size={20} />
            Track Your Order
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ShippingInformation;
