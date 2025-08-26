import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
      action: "Call Now"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@kasiacademy.com", "admissions@kasiacademy.com"],
      action: "Send Email"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: ["123 Beauty Boulevard", "Los Angeles, CA 90210"],
      action: "Get Directions"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: ["Mon-Fri: 9AM-7PM", "Sat-Sun: 10AM-5PM"],
      action: "Schedule Visit"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left md:text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Create
            <span className="gradient-text"> Something Beautiful</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience professional makeup artistry? Get in touch to discuss your vision 
            and book your consultation for your special event or photoshoot.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full text-white mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 mb-1">
                      {detail}
                    </p>
                  ))}
                  <button className="text-rose-500 font-semibold text-sm hover:text-rose-600 transition-colors mt-2">
                    {info.action} →
                  </button>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">
                Follow My Work
              </h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full text-white hover:shadow-lg transition-all duration-300">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full text-white hover:shadow-lg transition-all duration-300">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-500 rounded-full text-white hover:shadow-lg transition-all duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
              <p className="text-gray-600">
                Stay updated with my latest work, behind-the-scenes content, and beauty inspiration.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-display text-2xl font-semibold text-gray-900 mb-6">
              Book Your Consultation
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="editorial">Editorial/Fashion</option>
                  <option value="events">Special Events</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-colors"
                  placeholder="Tell me about your event, vision, or any specific requirements..."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full btn-primary">
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;