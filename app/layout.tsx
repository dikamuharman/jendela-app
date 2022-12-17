import './globals.css';
import Provider from './provider';

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
      <body
        style={{
          backgroundColor: '#F9F9FB',
          position: 'relative',
          minHeight: '100vh',
        }}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
