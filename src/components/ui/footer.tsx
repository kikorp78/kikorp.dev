import Constants from '@/utils/constants';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex justify-between items-center space-x-3 border-t border-neutral-100 py-5">
      <p className="text-opacity-80 text-neutral-300 text-paragraph-xs font-medium">
        &copy; kikorp.dev &mdash; 2024, All Rights Reserved
      </p>
      <div className="flex items-center space-x-5">
        <div className="hidden sm:flex items-center space-x-2">
          <Image
            src="/nextjs.svg"
            width={16}
            height={16}
            alt="Next.js Logo"
            priority
          />
          <p className="text-opacity-80 text-neutral-300 text-paragraph-xs font-medium">
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
            <FontAwesomeIcon
              className="text-opacity-80 group-hover:text-opacity-100 text-neutral-300 transition"
              icon={faGithub}
              size="lg"
            />
          </Link>
          <Link
            className="group"
            href={Constants.DISCORD_URL}
            target="_blank"
            rel="noopener,noreferrer"
          >
            <FontAwesomeIcon
              className="text-opacity-80 group-hover:text-opacity-100 text-neutral-300 transition"
              icon={faDiscord}
              size="lg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
