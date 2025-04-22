'use client';

import Image from 'next/image';
import Link from 'next/link';
import BrandSelector from './BrandNavbar';

const Navbar = () => {
  const menuItems = ['About', 'Contact'];

  return (
    <>
      <BrandSelector />
      <div className="flex z-10 relative px-10 bg-blue-950 justify-between items-center h-28">
        <Link href="/" passHref>
          <Image
            src="/image/B.png"
            alt="Mount Trading PLC"
            className="h-30 w-auto cursor-pointer"
            height={100}
            width={100}
          />
        </Link>

        <ul className="flex gap-8 text-white font-bold cursor-pointer text-md">
          {menuItems.map((item, index) => (
            <li key={index} className="relative hover:text-gray-300">
              <Link href={`/${item.toLowerCase()}`} passHref>
                {item}
                <span className="absolute bg-gray-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
