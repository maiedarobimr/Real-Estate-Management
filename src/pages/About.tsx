import React from 'react';
import { Users, Award, TrendingUp, Shield, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Integrity',
      description: 'We conduct all business with the highest ethical standards and transparency'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Customer First',
      description: 'Your satisfaction and success are our top priorities in every transaction'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for perfection in every aspect of our service delivery'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Innovation',
      description: 'We embrace technology and new methods to better serve our clients'
    }
  ];

  const team = [
    {
      name: 'John Matthews',
      role: 'CEO & Founder',
      bio: 'With over 20 years in real estate, John founded PrimEstate to revolutionize property management.',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      name: 'Sarah Williams',
      role: 'Head of Sales',
      bio: 'Sarah leads our sales team with expertise in luxury properties and investment opportunities.',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    {
      name: 'Michael Torres',
      role: 'Property Manager',
      bio: 'Michael oversees our property management division with focus on client satisfaction.',
      image: 'bg-gradient-to-br from-green-400 to-green-600'
    },
    {
      name: 'Emily Chen',
      role: 'Investment Advisor',
      bio: 'Emily provides strategic investment guidance to help clients build wealth through real estate.',
      image: 'bg-gradient-to-br from-pink-400 to-pink-600'
    }
  ];

  const milestones = [
    { year: '2008', event: 'PrimEstate founded with a vision to transform real estate' },
    { year: '2012', event: 'Expanded to 3 major cities with 500+ properties managed' },
    { year: '2016', event: 'Launched digital platform serving 10,000+ clients' },
    { year: '2020', event: 'Introduced AI-powered property matching system' },
    { year: '2024', event: 'Reached 5,000+ successful transactions milestone' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About PrimEstate
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transforming real estate experiences with innovation, integrity, and exceptional service since 2008
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008, PrimEstate emerged from a simple vision: to make real estate transactions 
                more transparent, efficient, and client-focused. What started as a small team of passionate 
                real estate professionals has grown into a leading property management company serving 
                thousands of clients across multiple markets.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that buying, selling, or managing property should be an exciting journey, not a 
                stressful ordeal. That's why we've invested heavily in technology, training, and processes 
                that put our clients first and deliver exceptional results.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                  <div className="text-gray-600">Properties Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are here to guide you through every step of your real estate journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`h-48 ${member.image}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our company and strengthened our commitment to excellence
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            "To empower individuals and businesses in making informed real estate decisions through 
            innovative technology, expert guidance, and unwavering commitment to excellence. We strive 
            to create lasting relationships built on trust, transparency, and exceptional results."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;