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
        Terms of Service
      </h1>
      <p className="text-gray-600 mb-4">
        By using HYGLAM services, you agree to the following terms:
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Use our services lawfully and respectfully.</li>
        <li>Do not misuse or attempt unauthorized access.</li>
        <li>All content is owned or licensed by HYGLAM.</li>
      </ul>
    </motion.div>
  );
};

export default TermsOfService;
