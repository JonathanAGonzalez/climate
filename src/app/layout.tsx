import type { Metadata } from 'next';
import { Kodchasan } from 'next/font/google';
import './globals.css';

const kodchasan = Kodchasan({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Jona González - Weather App',
  description:
    'Weather allows you to search for the weather in any city with just a few taps.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={kodchasan.className}>{children}</body>
    </html>
  );
}
