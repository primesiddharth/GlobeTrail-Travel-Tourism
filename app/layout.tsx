import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ScrollToTop } from '@/components/layout/scroll-to-top';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://globetrail.example.com'),
  title: 'GlobeTrail Travel & Tourism | Premium Tours, Holidays & Destinations',
  description:
    'GlobeTrail Travel & Tourism crafts premium holiday packages, honeymoon escapes, adventure tours and luxury holidays across India and the world. Flights, hotels, visas and travel insurance — all in one place.',
  keywords: [
    'travel agency',
    'tour packages',
    'honeymoon packages',
    'holiday packages',
    'flight booking',
    'hotel booking',
    'visa assistance',
    'luxury holidays',
    'GlobeTrail',
  ],
  openGraph: {
    title: 'GlobeTrail Travel & Tourism',
    description:
      'Premium holiday packages, honeymoon escapes and luxury holidays across India and the world.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlobeTrail Travel & Tourism',
    description:
      'Premium holiday packages, honeymoon escapes and luxury holidays across India and the world.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-background text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
