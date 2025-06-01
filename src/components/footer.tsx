import Constants from '@/utils/constants';
import {
  IconBrandNextjs,
  IconBrandVercel,
  IconCode
} from '@tabler/icons-react';

import Link from 'next/link';
import { FC } from 'react';

const Footer: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 border-t border-border py-4 sm:flex-row sm:justify-between sm:space-x-3 sm:space-y-0">
      <div className="flex items-center space-x-[6px]">
        <IconCode className="text-foreground" size={20} />
        <p className="text-paragraph-xs font-medium text-foreground">
          kikorp.dev &mdash; Open-source on{' '}
          <Link
            className="text-primary transition hover:underline dark:text-white"
            href={Constants.GITHUB_REPO_URL}
            target="_blank"
            rel="noopener,noreferrer"
          >
            GitHub
          </Link>
        </p>
      </div>
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-[6px]">
          <IconBrandNextjs size={20} />
          <p className="text-paragraph-xs font-medium text-foreground">
            Built with{' '}
            <Link
              className="text-primary transition hover:underline dark:text-white"
              href={Constants.NEXTJS_URL}
              target="_blank"
              rel="noopener,noreferrer"
            >
              Next.js
            </Link>
          </p>
        </div>
        <div className="flex items-center space-x-[6px]">
          <IconBrandVercel size={20} />
          <p className="text-paragraph-xs font-medium text-foreground">
            Hosted on{' '}
            <Link
              className="text-primary transition hover:underline dark:text-white"
              href={Constants.VERCEL_URL}
              target="_blank"
              rel="noopener,noreferrer"
            >
              Vercel
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
