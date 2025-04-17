import type { Metadata } from 'next';
import './globals.css';
import ResponsiveNavbar from './ui/dashboard/ResponsiveNavbar';

export const metadata: Metadata = {
  title: 'Mount Trading PLC',
  description: 'Enhance Healthcare Together.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ResponsiveNavbar />
        {children}
      </body>
    </html>
  );
}
