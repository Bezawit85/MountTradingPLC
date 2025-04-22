import Image from 'next/image';

const Landing = () => {
  return (
    <section className="min-h-[50vh] sm:min-h-screen relative">
      <div>
        <Image
          src="/image/coffeeDesktopBackground.png"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
          className="hidden md:block"
        />
        <Image
          src="/image/coffeeMobileBackground.jpg"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority
          className="md:hidden"
        />
      </div>
      <div className="bg-black absolute inset-0 opacity-20"></div>
      <div className={`text-white absolute text-center inset-0 mt-30 md:mt-50`}>
        <div>
          <h1
            className={`text-3xl md:text-7xl font-bold mb-2.5 tracking-wider`}
          >
            Mount Trading PLC
          </h1>
          <p className={`text-sm md:text-2xl`}>
            Quality, best price, and service deliver after sales
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
