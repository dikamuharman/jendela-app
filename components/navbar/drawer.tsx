import Link from 'next/link';
import { useState } from 'react';
import { FiAlignRight, FiX } from 'react-icons/fi';
import JLogo from '../logo/logo';

const JDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <button
        className="w-[55px] h-[55px] bg-white shadow-sm grid place-content-center rounded-xl fixed bottom-[50px] right-4 md:hidden"
        onClick={() => setOpenDrawer(true)}
      >
        <FiAlignRight size={24} color="#545E6B" />
      </button>
      <div
        className={`top-0 right-0 w-[100vw] bg-white pl-8 pt-8  pr-4 text-netural-90 fixed h-full flex flex-col justify-between items-end ease-in-out duration-300 md:hidden ${
          openDrawer ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <JLogo />
        <div className="mb-11">
          <div className="flex gap-3 flex-col items-end w-full">
            <Link href="/">Home</Link>
            <Link href="/">Program studi</Link>
            <Link href="/">Cara kontribusi</Link>
            <Link
              href="/"
              passHref
              className="bg-primary-50 px-4 py-2 text-white hover:bg-primary-60 transition-colors rounded-lg"
            >
              Login
            </Link>
          </div>
          <div className="h-[150px]"></div>
        </div>
        <button
          className="w-[55px] h-[55px] bg-white shadow-sm grid place-content-center rounded-xl absolute bottom-[50px] right-4"
          onClick={() => setOpenDrawer(false)}
        >
          <FiX size={24} color="#545E6B" />
        </button>
      </div>
    </>
  );
};

export default JDrawer;
