'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RiMenu3Fill, RiCloseLargeFill } from 'react-icons/ri';

const MobileNavbar = ({ menuItems }: { menuItems: string[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 text-black bg-white font-bold z-10 shadow-lg shadow-blue-600/30">
      <h1>Mount Trading PLC</h1>
      <button onClick={() => setOpen(!open)} className="text-3xl">
        {open ? <RiCloseLargeFill /> : <RiMenu3Fill />}
      </button>
      <div
        className={`absolute top-full left-0 w-full bg-white text-black transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        {menuItems.map((item, i) => (
          <Link
            key={i}
            href={`${item.toLowerCase()}`}
            passHref
            onClick={() => setOpen(false)}
          >
            <p className="py-4 pl-4 relative group w-fit">
              {item}
              <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
