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
        At HYGLAM, your privacy is our priority. We collect and process personal
        data responsibly and transparently.
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>We only collect necessary personal data.</li>
        <li>We never sell your data to third parties.</li>
        <li>You may request data deletion at any time.</li>
      </ul>
    </motion.div>
  );
};

export default PrivacyPolicy;
