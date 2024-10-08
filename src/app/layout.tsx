import '@/styles/globals.css';

import { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'kikorp.dev',
  description:
    'A personal website of a full-stack web developer. Thank you for visiting!'
};

export const viewport: Viewport = {
  themeColor: '#8c58f5'
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
