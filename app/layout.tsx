import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-[#F9F9FB] min-h-screen relative text-netural-90">
        <div className="w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] bg-secondary-50 absolute top-0 right-0 rounded-full -z-10 opacity-[.15] blur-2xl" />
        <div className="w-[200px] md:w-[300px] lg:w-[400px] h-[200px] md:h-[300px] lg:h-[400px] bg-primary-50 absolute top-[600px] left-0 rounded-full -z-10 opacity-[.15] blur-2xl" />
        {children}
      </body>
    </html>
  );
}
