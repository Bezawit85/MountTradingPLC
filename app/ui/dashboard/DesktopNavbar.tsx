'use client';

import Link from 'next/link';
import { useState } from 'react';

const DesktopNavbar = ({ menuItems }: { menuItems: string[] }) => {
  const [activeItem, setActiveItem] = useState<string>('');

  const handleSetActiveItem = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div
      className={`flex z-10 relative my-5 mx-10 px-10 bg-white justify-between rounded-full items-center h-16 shadow-lg shadow-blue-600/30`}
    >
      <h1 className={`font-bold`}>MountTradingPLC</h1>

      <ul className={`flex gap-8 text-black font-bold cursor-pointer text-md`}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`relative hover:text-blue-600 group ${
              activeItem === item ? 'text-blue-600' : ''
            }`}
            onClick={() => handleSetActiveItem(item)}
          >
            <Link href={`${item.toLowerCase()}`} passHref>
              {item}
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNavbar;
