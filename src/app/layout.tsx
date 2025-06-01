import '@/styles/globals.css';

import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'kikorp.dev | Portfolio',
  description: 'A software engineer based in Germany.'
};

export const viewport: Viewport = {
  themeColor: '#f5a658'
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
