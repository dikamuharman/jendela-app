import JLogo from '../../components/logo/logo';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="max-w-[1024px] w-full md:w-1/3 px-4 mx-auto ">
        <div className="h-[100px] md:h-[150px]" />
        <JLogo />
        <section>{children}</section>
      </main>
    </>
  );
}
