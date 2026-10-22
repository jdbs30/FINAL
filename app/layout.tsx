import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'John Drae Santos — Software Developer',
  description: 'John Drae B. Santos — Full stack software developer in Cabuyao, Laguna. React, Next.js, TypeScript, and practical applications built around real workflows.',
};
export const viewport: Viewport = { themeColor: '#F1F6F9' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
