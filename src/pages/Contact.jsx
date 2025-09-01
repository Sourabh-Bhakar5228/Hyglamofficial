import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Array of Picsum images for banner rotation (black and white versions)
  const bannerImages = [
    "https://picsum.photos/1600/900?random=1&grayscale",
    "https://picsum.photos/1600/900?random=2&grayscale",
    "https://picsum.photos/1600/900?random=3&grayscale",
  ];

  // Rotate banner images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    // Animation trigger
    setTimeout(() => setIsVisible(true), 100);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/bhakarsoursbh@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("❌ Failed to send message. Try again!");
      }
    } catch (error) {
      toast.error("⚠️ Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        toastClassName="bg-gray-900 text-white"
      />

      {/* Animated Banner with Grayscale Picsum Images */}
      <div
        className="relative h-80 md:h-96 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImages[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40 flex items-center justify-center">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-300 text-lg">We'd Love to Hear from You!</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info with Animation */}
          <div
            className={`space-y-6 transition-all duration-700 delay-150 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions about our services or want to discuss a project?
              Reach out to us using the information below or fill out the form.
            </p>

            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
              <div className="bg-gray-800 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Address</h3>
                <p className="text-gray-600">Modinagar</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
              <div className="bg-gray-800 p-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                <p className="text-gray-600">+91-9837235619</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 border border-gray-200">
              <div className="bg-gray-800 p-3 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                <p className="text-gray-800 font-medium">hyglam@gmail.com</p>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mt-6 border border-gray-200">
              <p className="text-gray-600 text-sm">
                Customer Support Hours: Mon – Sat | 10:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form with Animation */}
          <div
            className={`bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200 transition-all duration-700 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-300 bg-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-300 bg-white"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-300 bg-white"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-300 bg-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white font-semibold py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Text with Animation */}
      <div
        className={`text-center mt-12 text-gray-700 pb-12 transition-all duration-700 delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <p className="text-lg">
          ✨ Your Hyglam journey starts here. Reach out today!
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
