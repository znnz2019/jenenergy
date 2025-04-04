import React from 'react';
import { ArrowRight, Cpu, Battery, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Technology = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Cutting-Edge Battery Technology
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Our innovative approach to energy storage is revolutionizing how the world thinks about power.
          </p>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Cpu className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Smart Management System</h3>
              <p className="text-gray-600">
                Advanced AI-driven power management for optimal performance and longevity.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Battery className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Enhanced Cell Chemistry</h3>
              <p className="text-gray-600">
                Proprietary battery composition delivering higher energy density and faster charging.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">Rapid Charging</h3>
              <p className="text-gray-600">
                Revolutionary charging technology that reduces waiting times by up to 70%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Energy Density</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Up to 350 Wh/kg</li>
                <li>• 25% higher than industry standard</li>
                <li>• Compact design for space efficiency</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Charging Speed</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 0-80% in 15 minutes</li>
                <li>• Smart temperature management</li>
                <li>• Adaptive charging protocols</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Cycle Life</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 3000+ cycles at 80% capacity</li>
                <li>• Advanced wear leveling</li>
                <li>• Predictive maintenance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Safety Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Multi-layer protection system</li>
                <li>• Real-time monitoring</li>
                <li>• Automatic fault detection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Experience the Future of Energy</h2>
          <p className="text-xl mb-8">
            Ready to transform your energy infrastructure with our cutting-edge technology?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Contact Our Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Technology;