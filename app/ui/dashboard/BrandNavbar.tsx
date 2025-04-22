'use client';

import Link from 'next/link';

const BrandSelector = () => {
  return (
    <div className="w-full bg-gray-100 py-5 px-4 sm:px-6 md:px-10">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pharmaceutical Equipment */}
        <Link
          href="/pharma"
          className="group block border rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition"
        >
          <h2 className="text-lg md:text-xl font-bold mb-2 text-blue-900 group-hover:underline">
            Explore our Pharmaceutical Equipment
          </h2>
          <p className="text-sm md:text-base text-blue-800">
            High-quality machines for labs and production.
          </p>
        </Link>

        {/* Coffee Import */}
        <Link
          href="/coffee"
          className="group block border rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition"
        >
          <h2 className="text-lg md:text-xl font-bold mb-2 text-amber-900 group-hover:underline">
            Explore our Coffee Import
          </h2>
          <p className="text-sm md:text-base text-amber-800">
            Premium Ethiopian coffee directly from origin.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BrandSelector;
