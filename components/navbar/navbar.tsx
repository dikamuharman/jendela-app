'use client';
import Link from 'next/link';
import JLogo from '../logo/logo';
import JDrawer from './drawer';

const JNavbar = () => {
  return (
    <>
      <header className="max-w-[1024px] w-full px-4 mx-auto pt-3">
        <nav className="md:bg-white bg-transparent rounded-xl px-4 py-2 flex flex-col lg:flex-row justify-between ">
          <JLogo withTitle />
          <div className="md:flex gap-4 items-center hidden self-end">
            <Link
              href="/"
              className="px-4 py-2 text-sm hover:underline text-netural-60 hover:text-netural-80 transition-color"
            >
              Home
            </Link>
            <Link
              href="/"
              className="px-4 py-2 text-sm hover:underline text-netural-60 hover:text-netural-80 transition-color"
            >
              Program studi
            </Link>
            <Link
              href="/"
              className="px-4 py-2 text-sm hover:underline text-netural-60 hover:text-netural-80 transition-color"
            >
              Cara kontribusi
            </Link>
            <Link
              href="/"
              passHref
              className="bg-primary-50 px-6 py-2 text-white hover:bg-primary-60 transition-colors rounded-lg"
            >
              Login
            </Link>
          </div>
        </nav>
      </header>
      <JDrawer />
    </>
  );
};

export default JNavbar;
