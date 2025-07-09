import React, { useState } from 'react';
import { Search, Filter, MapPin, Bed, Bath, Square, Heart, Eye } from 'lucide-react';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedBedrooms, setSelectedBedrooms] = useState('all');

  const properties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      price: 850000,
      type: 'sale',
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      location: 'Beverly Hills, CA',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      featured: true,
      description: 'Stunning modern villa with panoramic city views and premium finishes throughout.'
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      price: 1200000,
      type: 'sale',
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      location: 'Manhattan, NY',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
      featured: false,
      description: 'Luxurious penthouse in the heart of Manhattan with spectacular skyline views.'
    },
    {
      id: 3,
      title: 'Cozy Family Home',
      price: 3500,
      type: 'rent',
      bedrooms: 3,
      bathrooms: 2,
      area: 1600,
      location: 'Austin, TX',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
      featured: false,
      description: 'Perfect family home in a quiet neighborhood with excellent schools nearby.'
    },
    {
      id: 4,
      title: 'Waterfront Condo',
      price: 750000,
      type: 'sale',
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      location: 'Miami Beach, FL',
      image: 'bg-gradient-to-br from-teal-400 to-teal-600',
      featured: true,
      description: 'Beautiful waterfront condo with direct beach access and resort-style amenities.'
    },
    {
      id: 5,
      title: 'Historic Brownstone',
      price: 4500,
      type: 'rent',
      bedrooms: 4,
      bathrooms: 3,
      area: 2200,
      location: 'Brooklyn, NY',
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
      featured: false,
      description: 'Charming historic brownstone with original details and modern updates.'
    },
    {
      id: 6,
      title: 'Mountain View Cabin',
      price: 450000,
      type: 'sale',
      bedrooms: 2,
      bathrooms: 1,
      area: 900,
      location: 'Aspen, CO',
      image: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
      featured: false,
      description: 'Rustic cabin with breathtaking mountain views and ski-in/ski-out access.'
    },
    {
      id: 7,
      title: 'Contemporary Loft',
      price: 2800,
      type: 'rent',
      bedrooms: 1,
      bathrooms: 1,
      area: 800,
      location: 'San Francisco, CA',
      image: 'bg-gradient-to-br from-pink-400 to-pink-600',
      featured: false,
      description: 'Modern loft in trendy SOMA district with high ceilings and industrial finishes.'
    },
    {
      id: 8,
      title: 'Suburban Estate',
      price: 1500000,
      type: 'sale',
      bedrooms: 5,
      bathrooms: 4,
      area: 4000,
      location: 'Greenwich, CT',
      image: 'bg-gradient-to-br from-red-400 to-red-600',
      featured: true,
      description: 'Magnificent estate on 2 acres with pool, tennis court, and guest house.'
    },
    {
      id: 9,
      title: 'Urban Studio',
      price: 1800,
      type: 'rent',
      bedrooms: 1,
      bathrooms: 1,
      area: 500,
      location: 'Chicago, IL',
      image: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
      featured: false,
      description: 'Efficient studio apartment in vibrant downtown area with great amenities.'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || property.type === selectedType;
    const matchesPrice = selectedPrice === 'all' || 
                        (selectedPrice === 'under-500k' && property.price < 500000) ||
                        (selectedPrice === '500k-1m' && property.price >= 500000 && property.price < 1000000) ||
                        (selectedPrice === 'over-1m' && property.price >= 1000000) ||
                        (selectedPrice === 'under-2k' && property.price < 2000) ||
                        (selectedPrice === '2k-4k' && property.price >= 2000 && property.price < 4000) ||
                        (selectedPrice === 'over-4k' && property.price >= 4000);
    const matchesBedrooms = selectedBedrooms === 'all' || 
                           property.bedrooms.toString() === selectedBedrooms;
    
    return matchesSearch && matchesType && matchesPrice && matchesBedrooms;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Perfect Property
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover amazing properties from our extensive portfolio
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Types</option>
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
            </select>

            {/* Price Filter */}
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Prices</option>
              {selectedType === 'sale' || selectedType === 'all' ? (
                <>
                  <option value="under-500k">Under $500k</option>
                  <option value="500k-1m">$500k - $1M</option>
                  <option value="over-1m">Over $1M</option>
                </>
              ) : (
                <>
                  <option value="under-2k">Under $2,000</option>
                  <option value="2k-4k">$2,000 - $4,000</option>
                  <option value="over-4k">Over $4,000</option>
                </>
              )}
            </select>

            {/* Bedrooms Filter */}
            <select
              value={selectedBedrooms}
              onChange={(e) => setSelectedBedrooms(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4 Bedrooms</option>
              <option value="5">5+ Bedrooms</option>
            </select>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredProperties.length} Properties Available
            </h2>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-gray-600">Sort by: Latest</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <div className={`h-48 ${property.image}`}></div>
                  {property.featured && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                      <Heart className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      property.type === 'sale' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      For {property.type === 'sale' ? 'Sale' : 'Rent'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${property.price.toLocaleString()}
                      {property.type === 'rent' && <span className="text-sm text-gray-500">/month</span>}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {property.description}
                  </p>
                  
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      <span>{property.bedrooms} beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span>{property.bathrooms} baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      <span>{property.area} sq ft</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No properties match your search criteria.</p>
              <p className="text-gray-400 mt-2">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;