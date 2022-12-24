import JLogo from '../../components/logo/logo';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="max-w-[1024px] w-full px-4 mx-auto ">
        <div className="h-[100px]" />
        <JLogo />
        {children}
      </main>
    </>
  );
}
