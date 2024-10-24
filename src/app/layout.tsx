import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Computing Visualisations',
  description: 'A collection of interactive computing visualisation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
