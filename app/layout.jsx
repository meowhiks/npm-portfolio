export const metadata = {
  title: 'meowhiks',
  description: 'Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}

