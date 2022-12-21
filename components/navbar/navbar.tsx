'use client';

import JDrawer from './drawer';
import JNavbarDesktop from './navbar-desktop';

const JNavbar = () => {
  return (
    <>
      <header className="max-w-[1024px] w-full px-4 mx-auto pt-3">
        <JNavbarDesktop />
      </header>
      <JDrawer />
    </>
  );
};

export default JNavbar;
