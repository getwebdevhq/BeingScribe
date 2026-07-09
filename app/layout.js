import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body-next',
  display: 'swap',
});

export const metadata = {
  title: 'Beingscribe | Social-First Creative Studio',
  description:
    'Strategy, content and websites that help brands get noticed. Beingscribe is a premium social-first creative studio.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/usw2bav.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
