export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="max-w-[1024px] w-full md:w-1/2 px-4 mx-auto ">
        <div className="h-[100px] " />
        <section>{children}</section>
      </main>
    </>
  );
}
