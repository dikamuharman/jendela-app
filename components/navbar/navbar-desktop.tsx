import Link from 'next/link';
import JLogo from '../logo/logo';

const JNavbarDesktop = () => {
  return (
    <nav className="md:bg-white bg-transparent rounded-xl md:px-4 py-2 flex flex-col lg:flex-row justify-between lg:tems-center ">
      <JLogo withTitle />
      <div className="md:flex gap-4 items-center hidden self-end lg:self-auto">
        <Link
          href="/"
          className="px-4 py-2 text-sm hover:underline text-netural-50 hover:text-netural-80 transition-color"
        >
          Home
        </Link>
        <Link
          href="/program-studi"
          className="px-4 py-2 text-sm hover:underline text-netural-50 hover:text-netural-80 transition-color"
        >
          Program studi
        </Link>
        <Link
          href="/"
          className="px-4 py-2 text-sm hover:underline text-netural-50 hover:text-netural-80 transition-color"
        >
          Cara kontribusi
        </Link>
        <Link
          href="/login"
          passHref
          className="bg-primary-50 px-6 py-2 text-white hover:bg-primary-60 transition-colors rounded-lg"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default JNavbarDesktop;
