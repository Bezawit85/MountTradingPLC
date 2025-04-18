import Image from 'next/image';

const Landing = () => {
  return (
    <section className={`min-h-screen relative`}>
      <div>
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
      <div className="bg-black absolute inset-0 opacity-25"></div>
      <div className={`text-white absolute text-center inset-0 mt-80 md:mt-60`}>
        <p className={`text-md md:text-3xl mb-1.5`}>Mount Trading PLC</p>
        <h1 className={`text-3xl md:text-7xl font-bold`}>
          Bring Your Innovation
        </h1>
      </div>
    </section>
  );
};

export default Landing;
