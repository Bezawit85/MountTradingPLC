'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CgClose, CgMenuRightAlt } from 'react-icons/cg';
import { usePathname } from 'next/navigation';

const MobileNavbar = ({ menuItems }: { menuItems: string[] }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const getLinkPath = (item: string) => {
    const basePath = pathname.split('/')[1]; // Get the first part of the current path, e.g., 'pharma', 'coffee', etc.
    return `/${basePath}/${item.toLowerCase()}`;
  };

  return (
    <div className="flex items-center justify-between p-4 text-black bg-white font-bold z-10 shadow-lg shadow-[#008080]/30">
      <h1>Mount Trading PLC</h1>
      <button onClick={() => setOpen(!open)} className="text-3xl">
        {open ? <CgClose /> : <CgMenuRightAlt />}
      </button>
      <div
        className={`absolute top-full left-0 w-full bg-white text-black transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        {menuItems.map((item, i) => (
          <Link
            key={i}
            href={getLinkPath(item)} // Use the dynamic link path
            passHref
            onClick={() => setOpen(false)}
          >
            <p className="py-4 pl-4 relative group w-fit">
              {item}
              <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-[#008080] transition-all duration-300 group-hover:w-full"></span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavbar;
