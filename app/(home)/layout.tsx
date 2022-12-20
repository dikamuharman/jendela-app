import JNavbar from '../../components/navbar/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JNavbar />
      <main className="max-w-[768px] w-full px-4 mx-auto">{children}</main>
    </>
  );
}
