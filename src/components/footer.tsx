import Constants from '@/utils/constants';
import { IconBrandNextjs, IconCode } from '@tabler/icons-react';

import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 border-t border-border py-4 sm:flex-row sm:justify-between sm:space-x-3 sm:space-y-0">
      <div className="flex items-center space-x-[6px]">
        <IconCode className="text-foreground" size={16} />
        <p className="text-paragraph-xs font-medium text-foreground">
          kikorp.dev &mdash; Open-source on{' '}
          <Link
            className="text-primary transition hover:text-foreground-hover dark:hover:text-white"
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
        <p className="text-paragraph-xs font-medium text-foreground">
          Built with Next.js
        </p>
      </div>
    </div>
  );
};

export default Footer;
