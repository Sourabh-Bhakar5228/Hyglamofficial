import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Terms & Conditions
      </h1>
      <p className="text-gray-600 mb-4">
        By using HyGlam’s website and services, you agree to our terms regarding
        orders, payments, shipping, and returns.
      </p>
      <p className="text-gray-600 mb-4">
        All products are subject to availability, and while we strive for
        accuracy, slight variations in product details may occur.
      </p>
      <p className="text-gray-600 mb-4">
        Payments are processed securely, and delivery timelines may vary. All
        website content, including designs and images, is the property of
        HyGlam.
      </p>
      <p className="text-gray-600 mb-4">
        We are not liable for indirect or incidental damages, and our liability
        is limited to the value of the purchased product.
      </p>
      <p className="text-gray-600">
        By continuing to use our website, you accept these terms along with our
        Privacy Policy.
      </p>
    </motion.div>
  );
};

export default TermsOfService;
