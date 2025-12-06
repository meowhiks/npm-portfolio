import './globals.css';
import { Ubuntu } from 'next/font/google';
import Script from 'next/script';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-ubuntu',
});

export const metadata = {
  title: 'meowhiks',
  description: 'Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={ubuntu.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

