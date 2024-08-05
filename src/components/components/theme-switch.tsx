'use client';

import Tooltip from '@/components/tooltip';
import { IconMoon, IconSun } from '@tabler/icons-react';

import { useTheme } from 'next-themes';
import { FC } from 'react';

const ThemeSwitch: FC = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const Component = resolvedTheme === 'light' ? IconSun : IconMoon;

  return (
    <Tooltip
      content={`Change theme to ${resolvedTheme === 'light' ? 'dark' : 'light'}`}
    >
      <button
        className="flex size-9 items-center justify-center rounded-md transition hover:bg-border"
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      >
        <Component />
      </button>
    </Tooltip>
  );
};

export default ThemeSwitch;
