import React from 'react';
import { Home, TrendingUp, Key, Shield, Calculator, Users, Search, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12 text-blue-600" />,
      title: 'Property Management',
      description: 'Comprehensive property management services including tenant screening, maintenance coordination, and financial reporting.',
      features: ['Tenant Screening', 'Maintenance Coordination', 'Rent Collection', 'Financial Reporting', '24/7 Support']
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: 'Investment Consulting',
      description: 'Expert guidance on real estate investments, market analysis, and portfolio optimization for maximum returns.',
      features: ['Market Analysis', 'Portfolio Review', 'Investment Strategy', 'Risk Assessment', 'Performance Tracking']
    },
    {
      icon: <Key className="h-12 w-12 text-blue-600" />,
      title: 'Buying & Selling',
      description: 'Full-service buying and selling assistance with market expertise and negotiation skills.',
      features: ['Market Evaluation', 'Property Staging', 'Negotiation Support', 'Legal Assistance', 'Closing Coordination']
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Property Valuation',
      description: 'Accurate property valuations using advanced analytics and market data for informed decisions.',
      features: ['Comparative Market Analysis', 'Appraisal Services', 'Investment Analysis', 'Market Trends', 'Valuation Reports']
    },
    {
      icon: <Calculator className="h-12 w-12 text-blue-600" />,
      title: 'Financial Services',
      description: 'Mortgage assistance, financing options, and financial planning for real estate transactions.',
      features: ['Mortgage Consultation', 'Loan Processing', 'Financial Planning', 'Investment Financing', 'Credit Analysis']
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: 'Tenant Services',
      description: 'Complete tenant management including screening, leasing, and ongoing support services.',
      features: ['Tenant Screening', 'Lease Management', 'Maintenance Requests', 'Tenant Relations', 'Move-in/Move-out']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We begin with a comprehensive consultation to understand your specific needs and objectives.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Our experts develop a customized strategy tailored to your unique situation and goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision, keeping you informed throughout the entire process.'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Our relationship continues with ongoing support and regular performance reviews.'
    }
  ];

  const benefits = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Expert Knowledge',
      description: 'Years of experience and deep market understanding'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Secure Transactions',
      description: 'Safe and secure handling of all transactions'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Personalized Service',
      description: 'Tailored solutions for your specific needs'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: 'Proven Results',
      description: 'Track record of successful outcomes'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive real estate solutions designed to meet all your property needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From property management to investment consulting, we provide end-to-end real estate solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach designed to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-blue-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver value through expertise, innovation, and unwavering commitment to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to suit your specific needs and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic',
                price: '$299',
                period: 'per month',
                features: ['Property Listing', 'Basic Marketing', 'Tenant Screening', 'Monthly Reports', 'Email Support']
              },
              {
                name: 'Professional',
                price: '$599',
                period: 'per month',
                features: ['Everything in Basic', 'Premium Marketing', 'Maintenance Coordination', 'Financial Management', 'Phone Support', 'Market Analysis']
              },
              {
                name: 'Enterprise',
                price: '$999',
                period: 'per month',
                features: ['Everything in Professional', 'Portfolio Management', 'Investment Consulting', 'Dedicated Account Manager', '24/7 Support', 'Custom Reports']
              }
            ].map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg ${index === 1 ? 'border-2 border-blue-600' : ''}`}>
                {index === 1 && (
                  <div className="bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  index === 1 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
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
            Contact us today to discuss your real estate needs and learn how we can help you achieve your goals
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;