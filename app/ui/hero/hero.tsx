import React from "react";
import Image from "next/image"; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="image-container">
        <Image
          src="/image/coffeeBackground.jpg" 
          alt="Hero Background"
          layout="fill" 
          objectFit="cover" 
          objectPosition="left center" 
          quality={100} 
        />
      </div>
      <div className="text-content">
        <h1>Hero</h1>
      </div>
    </section>
  );
};

export default Hero;
