import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 lg:pt-20 pb-10 animate-fadeIn text-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center sm:text-left">
        Get In Touch
      </h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Contact Information
          </h3>
          <div className="space-y-6 text-gray-300">
            <div className="flex items-start gap-3 sm:gap-4">
              <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-sm sm:text-base break-all">
                kipkiruidennis25@gmail.com
              </span>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">+254 741 952 205</span>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-blue-500 transition-colors shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
