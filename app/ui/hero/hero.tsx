import Image from 'next/image';

const Hero = () => {
  return (
    <section>
      <div className={`min-h-screen`}>
        <Image
          src="/image/coffeeDesktopBackground.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="hidden md:block"
        />
        <Image
          src="/image/coffeeMobileBackground.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="md:hidden"
        />
      </div>
      <div className={`min-h-screen`}>
        <h1>about</h1>
      </div>
    </section>
  );
};

export default Hero;
