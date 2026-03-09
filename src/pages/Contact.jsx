import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HighlightedHeading from "../components/common/HighlightedHeading";

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
        "https://formsubmit.co/ajax/hyglamofficial@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Subject: "New Contact Inquiry - HyGlam",
            ...formData
          }),
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
    <div className="min-h-screen text-white overflow-hidden" style={{ background: 'radial-gradient(circle at center, #1a1605 0%, #000 100%)' }}>
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
          backgroundImage: `url(${bannerImages[currentImage]})`, // changes image dynamically
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out", // smooth transition
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40 flex items-center justify-center">
          <div
            className={`text-center transform transition-all duration-1000 ${isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
              }`}
          >
            <HighlightedHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</HighlightedHeading>
            <p className="text-gold-500/80 text-lg font-medium tracking-widest uppercase">We'd Love to Hear from You!</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info with Animation */}
          <div
            className={`space-y-6 transition-all duration-700 delay-150 ${isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
              }`}
          >
            <HighlightedHeading level="h2" className="text-3xl font-bold text-white mb-4">Get in Touch</HighlightedHeading>
            <p className="text-gray-400 leading-relaxed">
              Have questions about our services or want to discuss a project?
              Reach out to us using the information below or fill out the form.
            </p>

            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 group">
              <div className="bg-gold-500 p-3 rounded-xl shadow-lg shadow-gold-500/20">
                <MapPin className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Address</h3>
                <p className="text-gray-400">Modinagar, Uttar Pradesh</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 group">
              <div className="bg-gold-500 p-3 rounded-xl shadow-lg shadow-gold-500/20">
                <Phone className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Phone</h3>
                <p className="text-gray-400">+91-9837235619</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 group">
              <div className="bg-gold-500 p-3 rounded-xl shadow-lg shadow-gold-500/20">
                <Mail className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">Email</h3>
                <p className="text-gold-500 font-extrabold uppercase text-xs tracking-widest mt-1">hyglamofficial@gmail.com</p>
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded-xl mt-6 border border-white/5 italic">
              <p className="text-gray-500 text-xs">
                ✨ Guest Support Hours: Mon – Sat | 10:00 AM – 7:00 PM IST
              </p>
            </div>
          </div>

          {/* Contact Form with Animation */}
          <div
            className={`bg-black/40 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/5 transition-all duration-700 delay-300 ${isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-10 opacity-0"
              }`}
          >
            <HighlightedHeading level="h2" className="text-2xl font-bold mb-8 text-white">
              Send us a Message
            </HighlightedHeading>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all placeholder:text-gray-600"
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
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all placeholder:text-gray-600"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all placeholder:text-gray-600"
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
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all placeholder:text-gray-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gold-500 text-black font-extrabold py-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-gold-500/20 active:scale-95"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Text with Animation */}
      <div
        className={`text-center mt-16 text-gray-500 pb-16 transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        <p className="text-lg">
          ✨ Your <span className="text-gold-500 font-bold">Hyglam</span> journey starts here. Reach out today!
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
