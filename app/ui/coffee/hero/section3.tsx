import React from 'react';

const Service = () => {
  return (
    <div className={`mx-16 py-12 min-h-screen`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
        {/* Service 1 */}
        <div
          className={`bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4`}
        >
          <div
            className={`w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0`}
          >
            <i className={`fas fa-cogs`}></i>
          </div>
          <div>
            <h3 className={`text-xl font-semibold`}>Yirgacheffe</h3>
            <p className={`text-gray-500`}>
              `Yirgacheffe coffee is grown in the highlands of the Gedeo Zone in
              Southern Ethiopia. Known for its bright acidity and vibrant floral
              notes, this coffee has a clean and crisp flavor profile with hints
              of citrus, jasmine, and bergamot. It is often considered one of
              the best coffees globally due to its distinctive and complex
              flavor.`
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div
          className={`bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4`}
        >
          <div
            className={`w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0`}
          >
            <i className={`fas fa-rocket`}></i>
          </div>
          <div>
            <h3 className={`text-xl font-semibold`}>Sidamo</h3>
            <p className={`text-gray-500`}>
              `Sidamo coffee comes from the Sidamo region in southern Ethiopia.
              This coffee is renowned for its smooth body, moderate acidity, and
              floral aroma. It often carries notes of lemon, tropical fruits,
              and spices, making it highly prized by coffee connoisseurs. Sidamo
              coffees are versatile, ideal for both espresso and drip brewing.`
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div
          className={`bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4`}
        >
          <div
            className={`w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center shrink-0`}
          >
            <i className={`fas fa-heart`}></i>
          </div>
          <div>
            <h3 className={`text-xl font-semibold`}>Harrar</h3>
            <p className={`text-gray-500`}>
              `Harrar coffee is produced in the eastern part of Ethiopia,
              particularly in the Hararghe region. It is known for its
              distinctive, wild flavor profile, which includes fruity, earthy,
              and spicy notes. Harrar coffee often has a medium to full body and
              a strong, complex flavor with hints of wine, chocolate, and a
              subtle smoky finish. It is typically processed using the natural
              (dry) method.`
            </p>
          </div>
        </div>

        {/* Service 4 */}
        <div
          className={`bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4`}
        >
          <div
            className={`w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0`}
          >
            <i className={`fas fa-shield-alt`}></i>
          </div>
          <div>
            <h3 className={`text-xl font-semibold`}>Limu</h3>
            <p className={`text-gray-500`}>
              `Limu coffee is grown in the western part of Ethiopia, primarily
              in the Jimma Zone. This coffee is known for its balanced flavor,
              smooth body, and mild acidity. It has a clean, sweet profile with
              notes of chocolate, caramel, and light fruity undertones. Limu is
              often regarded as a medium-bodied coffee that is well-suited for a
              variety of brewing methods.`
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
