import { ReactNode } from 'react';
import JNavbar from '../../components/navbar/navbar';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JNavbar />
      <main>{children}</main>
    </>
  );
}
