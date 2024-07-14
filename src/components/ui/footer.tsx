import Constants from '@/utils/constants';
import { IconBrandDiscord, IconBrandGithub } from '@tabler/icons-react';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="flex justify-between items-center py-5 space-x-3 border-t border-border">
      <p className="text-text text-paragraph-xs font-medium">
        &copy; kikorp.dev &mdash; 2024, All Rights Reserved
      </p>
      <div className="flex items-center space-x-5">
        <div className="hidden sm:flex items-center space-x-2">
          <Image
            className="w-4 h-4"
            src="/nextjs.svg"
            width={0}
            height={0}
            sizes="100vw"
            alt="Next.js Logo"
            priority
          />
          <p className="text-text text-paragraph-xs font-medium">
            Built with Next.js
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            className="group"
            href={Constants.GITHUB_URL}
            target="_blank"
            rel="noopener,noreferrer"
          >
            <IconBrandGithub className="text-text group-hover:text-text-hover dark:group-hover:text-white transition" />
          </Link>
          <Link
            className="group"
            href={Constants.DISCORD_URL}
            target="_blank"
            rel="noopener,noreferrer"
          >
            <IconBrandDiscord className="text-text group-hover:text-text-hover dark:group-hover:text-white transition" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
