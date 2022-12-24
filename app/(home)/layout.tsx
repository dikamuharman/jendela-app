import JNavbar from '../../components/navbar/navbar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JNavbar />
      <main className="max-w-[1024px] w-full px-4 mx-auto">{children}</main>
    </>
  );
}
