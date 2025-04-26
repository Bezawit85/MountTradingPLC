import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center mt-12 px-4">
      <h1 className="text-center text-2xl md:text-5xl mb-12 text-gray-700">
        Learn More About Our Two Unique Brands
      </h1>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pharma */}
        <div className="bg-blue-800 overflow-hidden max-w-sm mx-auto">
          <div className="w-full h-72 relative">
            <Image
              src="/image/pharmaImage.jpg"
              alt="Pharmaceutical Equipment"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Pharmaceutical Equipment
            </h2>
            <p className="text-sm text-gray-200">
              High-quality machines for labs and production.
            </p>
          </div>
        </div>

        {/* Coffee */}
        <div className="bg-amber-900 overflow-hidden max-w-sm mx-auto">
          <div className="w-full h-72 relative">
            <Image
              src="/image/coffeeImage.jpg"
              alt="Coffee Import"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2 text-white">
              Coffee Import
            </h2>
            <p className="text-sm text-gray-200">
              Premium Ethiopian coffee directly from origin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
