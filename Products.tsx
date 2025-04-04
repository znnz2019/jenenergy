import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      name: 'PowerCore X1',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Next-generation lithium battery technology with unparalleled performance.',
      features: [
        'High energy density',
        'Rapid charging capability',
        'Advanced safety features',
        'Smart monitoring system'
      ]
    },
    {
      name: 'EnergyHub Pro',
      image: 'https://images.unsplash.com/photo-1566731316116-27d8f9f19124?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive energy management system for residential and commercial use.',
      features: [
        'Intelligent power distribution',
        'Real-time monitoring',
        'Energy optimization',
        'Mobile app control'
      ]
    },
    {
      name: 'StorageMax',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Industrial-scale energy storage solution for maximum efficiency.',
      features: [
        'Scalable architecture',
        'High capacity storage',
        'Advanced thermal management',
        'Enterprise-grade security'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Discover our range of innovative energy solutions designed to meet your power needs.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-auto">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <h3 className="text-lg font-semibold mb-4">Key Features:</h3>
                    <ul className="space-y-2 mb-8">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Energy Infrastructure?</h2>
          <p className="text-xl mb-8">
            Contact us to learn more about our products and how they can benefit your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;