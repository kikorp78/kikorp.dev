import Constants from '@/utils/constants';
import { IconBrandNextjs, IconCode } from '@tabler/icons-react';

import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center py-4 sm:space-x-3 space-y-3 sm:space-y-0 border-t border-border">
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
      <div className="flex items-center space-x-2">
        <IconBrandNextjs size={20} />
        <p className="text-text text-paragraph-xs font-medium">
          Built with Next.js
        </p>
      </div>
    </div>
  );
};

export default Footer;
