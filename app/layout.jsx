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
  title: 'meowhiks - FullStack разработчик | Заказать разработку сайта, купить веб-приложение',
  description: 'FullStack разработчик meowhiks. Разработка веб-приложений под ключ. Заказать сайт, купить разработку, создание FullStack приложений. Next.js, Python, React, Node.js, FastAPI, PostgreSQL. Работаю с заказами на разработку. Можете писать в Telegram для заказа.',
  keywords: [
    'заказать разработку сайта',
    'купить сайт',
    'заказать веб-приложение',
    'разработка под ключ',
    'FullStack разработчик',
    'веб-разработка',
    'создание сайта',
    'заказать приложение',
    'Next.js разработчик',
    'Python разработчик',
    'React разработчик',
    'разработка на заказ',
    'покупка сайта',
    'заказать разработку',
    'веб-разработчик',
    'программист на заказ',
    'можете писать',
    'заказать разработку веб-приложения',
    'купить веб-приложение',
    'разработка FullStack приложений',
  ],
  authors: [{ name: 'meowhiks' }],
  creator: 'meowhiks',
  openGraph: {
    title: 'meowhiks - FullStack разработчик | Заказать разработку сайта',
    description: 'FullStack разработчик. Разработка веб-приложений под ключ. Заказать сайт, купить разработку, создание FullStack приложений. Можете писать для заказа.',
    url: 'https://npm-portfolio-eta.vercel.app',
    siteName: 'meowhiks',
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'meowhiks - FullStack разработчик',
    description: 'FullStack разработчик. Разработка веб-приложений под ключ. Заказать сайт, купить разработку.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={ubuntu.variable}>
      <head>
        <link rel="icon" href="/icon.png" type="image/svg+xml" />
        <link rel="canonical" href="https://npm-portfolio-eta.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#02030a" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "meowhiks",
              "jobTitle": "FullStack Developer",
              "description": "FullStack разработчик. Разработка веб-приложений под ключ. Заказать сайт, купить разработку. Можете писать для заказа.",
              "url": "https://npm-portfolio-eta.vercel.app",
              "sameAs": [
                "https://github.com/meowhiks",
                "https://t.me/meowhiks"
              ],
              "knowsAbout": [
                "Web Development",
                "FullStack Development",
                "Next.js",
                "Python",
                "React",
                "Node.js"
              ],
              "offers": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Разработка веб-приложений и сайтов под ключ"
                }
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

