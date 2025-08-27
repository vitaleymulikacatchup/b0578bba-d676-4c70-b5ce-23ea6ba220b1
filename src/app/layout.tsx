import type { Metadata } from 'next';
import './globals.css';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';

export const metadata: Metadata = {
  title: 'LumenShutter – Futuristic Photographer Portfolio',
  description: 'Showcase cinematic photography in a single-page experience with a futuristic aesthetic and clear inquiry paths.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
