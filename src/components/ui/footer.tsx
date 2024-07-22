import Constants from '@/utils/constants';
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconCode
} from '@tabler/icons-react';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import nextjs from '../../../public/nextjs.svg';

const Footer: FC = () => {
  return (
    <div className="flex justify-between items-center py-5 space-x-3 border-t border-border">
      <div className="flex items-center space-x-[6px]">
        <IconCode className="text-text" size={16} />
        <p className="text-text text-paragraph-xs font-medium">
          kikorp.dev &mdash; Open-source on{' '}
          <Link
            className="text-primary hover:text-text-hover dark:hover:text-white transition"
            href={Constants.GITHUB_URL}
            target="_blank"
            rel="noopener,noreferrer"
          >
            GitHub
          </Link>
        </p>
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden sm:flex items-center space-x-2">
          <Image className="w-4" src={nextjs} sizes="16px" alt="next.js logo" />
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
