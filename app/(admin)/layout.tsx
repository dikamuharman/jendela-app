import Link from 'next/link';
import { ReactNode } from 'react';
import { FiBook, FiGrid, FiLogOut, FiMap, FiUsers } from 'react-icons/fi';
import JLogo from '../../components/logo/logo';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-11">
      <nav className="col-start-1 col-end-4 bg-white sticky h-screen p-8 top-0 flex flex-col justify-between">
        <div>
          <JLogo withTitle />
          <div className="flex flex-col gap-2 mt-8">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 py-2 px-1 group"
            >
              <FiGrid
                className="group-hover:stroke-primary-70 stroke-netural-40"
                size={28}
              />
              <span className="group-hover:text-netural-90 font-medium text-netural-40">
                Dashboard
              </span>
            </Link>
            <Link
              href="/manage-program-studi"
              className="flex items-center gap-2 py-2 px-1 group"
            >
              <FiMap
                className="group-hover:stroke-primary-70 stroke-netural-40"
                size={28}
              />
              <span className="group-hover:text-netural-90 font-medium text-netural-40">
                Program studi
              </span>
            </Link>
            <Link
              href="/manage-materi"
              className="flex items-center gap-2 py-2 px-1 group"
            >
              <FiBook
                className="group-hover:stroke-primary-70 stroke-netural-40"
                size={28}
              />
              <span className="group-hover:text-netural-90 font-medium text-netural-40">
                Materi
              </span>
            </Link>
            <Link
              href="/manage-users"
              className="flex items-center gap-2 py-2 px-1 group"
            >
              <FiUsers
                className="group-hover:stroke-primary-70 stroke-netural-40"
                size={28}
              />
              <span className="group-hover:text-netural-90 font-medium text-netural-40">
                Users
              </span>
            </Link>
          </div>
        </div>
        <Link
          href={'/'}
          className="flex items-center gap-2 py-2 group self-center"
        >
          <span>Log out</span>
          <FiLogOut
            size={32}
            className=" p-2 rounded bg-error-50 stroke-white"
          />
        </Link>
      </nav>
      {children}
    </div>
  );
}
