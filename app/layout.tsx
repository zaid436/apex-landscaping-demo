import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Premium Interlock & Landscaping in Mississauga | Apex Interlock & Landscaping',
  description:
    'Request a free estimate from Apex Interlock & Landscaping for premium interlock, landscaping, patios, driveways, walkways, retaining walls, and sod installation in Mississauga, Oakville, Brampton, Etobicoke, and Toronto.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
