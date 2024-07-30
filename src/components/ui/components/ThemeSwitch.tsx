'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';

import { useTheme } from 'next-themes';
import { FC } from 'react';

const ThemeSwitch: FC = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      className="w-9 h-9 hover:bg-border flex justify-center items-center rounded-md transition"
      onClick={() => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
      }}
    >
      <IconSun className="dark:hidden" />
      <IconMoon className="hidden dark:block" />
    </button>
  );
};

export default ThemeSwitch;
