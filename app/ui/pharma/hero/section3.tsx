import React from 'react';

const Numbers = () => {
  return (
    <main className={`h-screen w-full flex flex-col`}>
      <section className={`flex flex-col flex-grow py-12 items-center`}>
        <div className={`mb-12 max-w-3xl px-4 text-center`}>
          <h2 className={`text-xl md:text-3xl font-semibold text-black`}>
            We Are Proud Med
          </h2>
          <p className={`text-sm md:text-base text-gray-700 mt-2`}>
            Trusted by Institutions, Built with Purpose
          </p>
          <p className={`mt-6 text-gray-700 text-sm md:text-base`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis, nulla at efficitur consequat, magna felis gravida metus,
            sed bibendum eros velit nec nisl. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Duis a augue ut magna bibendum accumsan.
          </p>
        </div>

        <div
          className={`w-full py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center bg-[#CCECEC]`}
        >
          <div>
            <h2 className={`text-3xl font-extrabold text-[#008080]`}>120+</h2>
            <p className={`mt-2 text-[#006666]`}>Employees</p>
          </div>
          <div>
            <h2 className={`text-3xl font-extrabold text-[#008080]`}>500+</h2>
            <p className={`mt-2 text-[#006666]`}>Products</p>
          </div>
          <div>
            <h2 className={`text-3xl font-extrabold text-[#008080]`}>35+</h2>
            <p className={`mt-2 text-[#006666]`}>Partners</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Numbers;
