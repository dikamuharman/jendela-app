'use client';

import JDrawer from './drawer';
import JNavbarDesktop from './navbar-desktop';

const JNavbar = () => {
  return (
    <>
      <header className="max-w-[1024px] w-full px-4 mx-auto lg:pt-8 md:pt-6 ">
        <JNavbarDesktop />
      </header>
      <JDrawer />
    </>
  );
};

export default JNavbar;
