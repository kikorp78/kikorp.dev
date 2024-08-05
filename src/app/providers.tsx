'use client';

import { ThemeProvider } from 'next-themes';
import { FC, PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
      <Toaster />
    </>
  );
};

export default Providers;
