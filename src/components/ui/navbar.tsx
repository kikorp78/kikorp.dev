import Constants from '@/utils/constants';
import { IconBrandDiscord, IconBrandGithub } from '@tabler/icons-react';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import ThemeSwitch from './(components)/ThemeSwitch';

const Navbar: FC = () => {
  return (
    <div className="flex justify-between items-center py-8 md:py-10">
      <Image
        className="w-12 h-12"
        src="/klopov.png"
        width={0}
        height={0}
        sizes="100vw"
        alt="official avatar"
        priority
      />
      <div className="flex items-center space-x-2">
        <Link
          className="w-9 h-9 hover:bg-border flex justify-center items-center rounded-md transition"
          href={Constants.GITHUB_URL}
          target="_blank"
          rel="noopener,noreferrer"
        >
          <IconBrandGithub />
        </Link>
        <Link
          className="w-9 h-9 hover:bg-border flex justify-center items-center rounded-md transition"
          href={Constants.DISCORD_URL}
          target="_blank"
          rel="noopener,noreferrer"
        >
          <IconBrandDiscord />
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
