import { motion } from "framer-motion";

const CookiePolicy = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6 py-16"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
      <p className="text-gray-600 mb-4">
        We use cookies to enhance your browsing experience, analyze traffic, and
        personalize content.
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Essential cookies ensure site functionality.</li>
        <li>Analytics cookies help improve our services.</li>
        <li>You can manage cookie preferences anytime.</li>
      </ul>
    </motion.div>
  );
};

export default CookiePolicy;
