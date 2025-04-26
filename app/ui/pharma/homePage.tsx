import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Image
        src="/image/medicalStrand.jpg"
        alt="Hero Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
      />
    </div>
  );
};

export default HomePage;
