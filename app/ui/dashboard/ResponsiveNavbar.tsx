'use client';

import { useEffect, useState } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const ResponsiveNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.visualViewport?.width || window.innerWidth;
      setIsMobile(viewportWidth <= 1024);
    };

    handleResize(); // Run on mount to set initial state

    window.visualViewport?.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleResize);

    // Cleanup event listeners on unmount
    return () => {
      window.visualViewport?.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuItems = ['Home', 'About', 'Products', 'Services', 'Contact'];

  return (
    <>
      {isMobile ? (
        <MobileNavbar menuItems={menuItems} />
      ) : (
        <DesktopNavbar menuItems={menuItems} />
      )}
    </>
  );
};

export default ResponsiveNavbar;
