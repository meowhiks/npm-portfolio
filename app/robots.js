export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: 'https://npm-portfolio-eta.vercel.app/sitemap.xml',
  };
}

