import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <main className={`relative w-full min-h-[80vh] md:min-h-screen`}>
      <Image
        src="/image/medicalEquipmentDesktop.jpg"
        alt="Hero Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        className="hidden md:block"
      />
      <Image
        src="/image/medicalEquipmentMobile.jpg"
        alt="Hero Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        className="md:hidden"
      />
      <div className={`bg-black opacity-20 absolute inset-0`}></div>
      <section
        className={`absolute inset-0 flex flex-col justify-center px-4 md:px-8 lg:px-16`}
      >
        <h1
          className={`text-3xl md:text-6xl font-bold tracking-wide mb-4 text-white`}
        >
          Medical <span className={`text-[#008080]`}>Equipment supply</span>
        </h1>
        <p
          className={`text-base md:text-lg md:max-w-3xl tracking-wide text-white`}
        >
          We supply high-quality, reliable medical equipment to hospitals,
          clinics, and healthcare professionals. Our mission is to support
          patient care with cutting-edge technology, exceptional service, and
          fast delivery. Partner with us for solutions that make a difference.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
