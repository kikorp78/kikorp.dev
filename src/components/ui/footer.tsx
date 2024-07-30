import Constants from '@/utils/constants';
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandNextjs,
  IconCode
} from '@tabler/icons-react';

import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="flex justify-between items-center py-4 space-x-3 border-t border-border">
      <div className="flex items-center space-x-[6px]">
        <IconCode className="text-text" size={16} />
        <p className="text-text text-paragraph-xs font-medium">
          kikorp.dev &mdash; Open-source on{' '}
          <Link
            className="text-primary hover:text-text-hover dark:hover:text-white transition"
            href={Constants.GITHUB_REPO_URL}
            target="_blank"
            rel="noopener,noreferrer"
          >
            GitHub
          </Link>
        </p>
      </div>
      <div className="hidden sm:flex items-center space-x-2">
        <IconBrandNextjs size={20} />
        <p className="text-text text-paragraph-xs font-medium">
          Built with Next.js
        </p>
      </div>
    </div>
  );
};

export default Footer;
