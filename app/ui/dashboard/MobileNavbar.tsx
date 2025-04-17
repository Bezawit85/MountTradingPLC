'use client';

import { useState } from 'react';
import { RiMenu3Fill, RiCloseLargeFill } from 'react-icons/ri';

const MobileNavbar = ({ menuItems }: { menuItems: string[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 text-white bg-black font-bold z-10">
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
          <p key={i} className="py-4 pl-4">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
