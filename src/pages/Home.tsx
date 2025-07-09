import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Users, Award, TrendingUp, Shield, Clock } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: 'Advanced Search',
      description: 'Find your perfect property with our intelligent search system'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Secure Transactions',
      description: 'All transactions are secured with bank-level encryption'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Expert Team',
      description: 'Professional real estate experts at your service'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your needs'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Properties Sold' },
    { number: '2500+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Agents' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'PrimEstate made buying our first home an absolute breeze. Their team was professional, knowledgeable, and always available to answer our questions.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Investor',
      content: 'I\'ve worked with many real estate companies, but PrimEstate stands out. Their market insights and property management services are top-notch.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Seller',
      content: 'Selling my property was stress-free thanks to PrimEstate. They handled everything professionally and got me a great price.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-700 flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Find Your Dream Property
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover premium real estate opportunities with our comprehensive property management solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/properties"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Browse Properties
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PrimEstate?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive real estate solutions with cutting-edge technology and expert guidance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our hand-picked selection of premium properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-gray-900">${(index * 250000 + 450000).toLocaleString()}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">For Sale</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Modern {index === 1 ? 'Luxury' : index === 2 ? 'Contemporary' : 'Executive'} Home
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {index === 1 ? 'Downtown District' : index === 2 ? 'Suburban Heights' : 'Waterfront Area'}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{index + 2} beds</span>
                    <span>{index + 1} baths</span>
                    <span>{(index + 2) * 800} sq ft</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our expert team today and let us help you find your perfect property
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;