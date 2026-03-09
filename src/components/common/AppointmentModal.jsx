import React, { useState } from "react";
import { X, Calendar, Clock, MapPin, Phone, Send } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppointmentModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        mobile: "",
        location: "",
        date: "",
        time: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/hyglamofficial@gmail.com",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        Subject: "New Appointment Request - HyGlam",
                        Mobile: formData.mobile,
                        Location: formData.location,
                        Date: formData.date,
                        Time: formData.time,
                    }),
                }
            );

            const data = await response.json();

            if (data.success === "true") {
                toast.success("Appointment request sent successfully! We'll contact you soon.");
                setTimeout(() => {
                    onClose();
                    setFormData({ mobile: "", location: "", date: "", time: "" });
                }, 2000);
            } else {
                toast.error("Failed to send request. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting appointment form:", error);
            toast.error("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
            <ToastContainer position="top-right" autoClose={3000} />
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-lg bg-neutral-900 border border-gold-500/30 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 blur-[80px] rounded-full -mr-24 -mt-24"></div>

                {/* Header */}
                <div className="p-8 border-b border-white/5 flex items-center justify-between relative z-10">
                    <div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight">Book Appointment</h3>
                        <p className="text-gold-500/70 text-sm font-bold uppercase tracking-widest mt-1">Exclusive Consultation</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-white hover:bg-red-500/20 transition-all"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-6 relative z-10">
                    <div className="space-y-4">
                        {/* Mobile */}
                        <div>
                            <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
                                <Phone size={14} className="text-gold-500" /> Mobile Number
                            </label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="+91 00000 00000"
                                required
                                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all font-medium"
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
                                <MapPin size={14} className="text-gold-500" /> Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Your City / Address"
                                required
                                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all font-medium"
                            />
                        </div>

                        {/* Date & Time Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
                                    <Calendar size={14} className="text-gold-500" /> Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all font-medium"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
                                    <Clock size={14} className="text-gold-500" /> Time
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all font-medium"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-5 bg-gold-500 text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all duration-500 shadow-2xl shadow-gold-500/20 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        ) : (
                            <>
                                Confirm Booking
                                <Send size={18} />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AppointmentModal;
