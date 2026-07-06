import './globals.css';

export const metadata = {
  title: 'Beingscribe | Social-First Creative Studio',
  description:
    'Strategy, content and websites that help brands get noticed. Beingscribe is a premium social-first creative studio.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Pinyon+Script&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.typekit.net/usw2bav.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
