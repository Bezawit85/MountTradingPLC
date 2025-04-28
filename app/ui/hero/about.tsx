'use client';
import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Title */}
      <h1 className="text-center text-2xl md:text-5xl my-12 text-gray-700">
        Learn More About Our Two Unique Brands
      </h1>

      {/* Pharma Section */}
      <div className="w-full bg-blue-50 py-16 px-6 flex flex-col items-center text-center">
        <div className="max-w-2xl">
          <div className="text-5xl mb-4">📦</div>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
            Pharma Equipment
          </h2>
          <p className="text-gray-700 mb-8">
            High-quality machines for labs and production.
          </p>
          <Link
            href="/pharma"
            className="inline-block bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-900 transition"
          >
            Explore Pharma Equipment
          </Link>
        </div>
      </div>

      {/* Coffee Section */}
      <div className="w-full bg-amber-50 py-16 px-6 flex flex-col items-center text-center">
        <div className="max-w-2xl">
          <div className="text-5xl mb-4">☕</div>
          <h2 className="text-2xl md:text-4xl font-bold text-amber-900 mb-4">
            Coffee Export
          </h2>
          <p className="text-gray-700 mb-8">
            Premium Ethiopian coffee directly from origin.
          </p>
          <Link
            href="/coffee"
            className="inline-block bg-amber-900 text-white px-6 py-3 rounded-full hover:bg-amber-950 transition"
          >
            Explore Coffee Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
