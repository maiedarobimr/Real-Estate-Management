import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const offices = [
    {
      city: 'New York',
      address: '123 Real Estate Ave, Business District, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'ny@primestate.com',
      hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM'
    },
    {
      city: 'Los Angeles',
      address: '456 Property Blvd, Downtown, LA 90210',
      phone: '+1 (555) 234-5678',
      email: 'la@primestate.com',
      hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM'
    },
    {
      city: 'Chicago',
      address: '789 Investment St, Loop District, Chicago 60601',
      phone: '+1 (555) 345-6789',
      email: 'chi@primestate.com',
      hours: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM'
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: 'Phone',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      available: '24/7 Support Available'
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: 'Email',
      description: 'Send us a message anytime',
      contact: 'info@primestate.com',
      available: 'Response within 24 hours'
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
      title: 'Live Chat',
      description: 'Chat with our experts',
      contact: 'Available on website',
      available: 'Mon-Fri: 9AM-6PM'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with our expert team for all your real estate needs
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-lg text-gray-600">
              Choose the best way to reach us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 flex justify-center">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <p className="text-blue-600 font-semibold mb-2">{method.contact}</p>
                <p className="text-sm text-gray-500">{method.available}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="buying">Buying Property</option>
                      <option value="selling">Selling Property</option>
                      <option value="renting">Renting Property</option>
                      <option value="management">Property Management</option>
                      <option value="investment">Investment Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your real estate needs..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Visit Our Main Office
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="text-gray-900 font-medium">Address</p>
                      <p className="text-gray-600">123 Real Estate Ave, Business District, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="text-gray-900 font-medium">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="text-gray-900 font-medium">Email</p>
                      <p className="text-gray-600">info@primestate.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="text-gray-900 font-medium">Hours</p>
                      <p className="text-gray-600">Mon-Fri: 9AM-6PM</p>
                      <p className="text-gray-600">Saturday: 10AM-4PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-64 rounded-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <MapPin className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-blue-100">Find us on the map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Office Locations
            </h2>
            <p className="text-lg text-gray-600">
              Find us in major cities across the country
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-blue-600 mt-1" />
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-4 w-4 text-blue-600 mt-1" />
                    <p className="text-gray-600 text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-4 w-4 text-blue-600 mt-1" />
                    <p className="text-gray-600 text-sm">{office.email}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-4 w-4 text-blue-600 mt-1" />
                    <p className="text-gray-600 text-sm">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;