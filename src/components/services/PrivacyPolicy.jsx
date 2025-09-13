import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">
        At HyGlam, your privacy matters to us. We collect only the information
        needed to process your orders, improve our services, and share updates
        with your consent.
      </p>
      <p className="text-gray-600">
        Your data is kept secure, never sold, and shared only with trusted
        partners or when required by law.
      </p>
    </motion.div>
  );
};

export default PrivacyPolicy;
