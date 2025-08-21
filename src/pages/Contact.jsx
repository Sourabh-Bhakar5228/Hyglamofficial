import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  User,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-gray-300">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to elevate your beauty routine? We're here to help you
              shine.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-black mb-8">
                Send us a Message
              </h2>

              {isSubmitted && (
                <div className="bg-black text-white p-4 rounded-lg mb-6 flex items-center space-x-3 animate-bounce">
                  <CheckCircle className="w-5 h-5" />
                  <span>
                    Message sent successfully! We'll get back to you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-black transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 hover:border-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-black transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 hover:border-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-black transition-colors" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 hover:border-gray-400"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 hover:border-gray-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400 group-focus-within:text-black transition-colors" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-300 hover:border-gray-400 resize-none"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">
                  Let's Connect
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Have a question about our products or services? Want to
                  collaborate? Or simply want to say hello? We'd love to hear
                  from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="bg-black text-white p-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        Visit Our Studio
                      </h3>
                      <p className="text-gray-300">
                        123 Beauty Street, Glamour City, GC 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-black p-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-black p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-black">
                        Call Us
                      </h3>
                      <p className="text-gray-600">+1 (555) 123-GLAM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black text-white p-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-gray-300">hello@hyglam.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-black p-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="bg-black p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-black">
                        Business Hours
                      </h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                        <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div
        className={`bg-black py-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Find Us</h2>
            <p className="text-gray-300 text-lg">
              Located in the heart of the beauty district
            </p>
          </div>
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            <p className="text-gray-600 text-lg">Interactive Map Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
