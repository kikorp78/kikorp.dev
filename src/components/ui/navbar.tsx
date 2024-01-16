import Constants from '@/utils/constants';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 md:py-10">
      <Image
        src="/klopov.png"
        width={48}
        height={48}
        alt="official avatar"
        priority
      />
      <div className="flex items-center space-x-4">
        <Link
          className="group"
          href={Constants.GITHUB_URL}
          target="_blank"
          rel="noopener,noreferrer"
        >
          <FontAwesomeIcon
            className="transition group-hover:scale-90"
            icon={faGithub}
            size="xl"
          />
        </Link>
        <Link
          className="group"
          href={Constants.DISCORD_URL}
          target="_blank"
          rel="noopener,noreferrer"
        >
          <FontAwesomeIcon
            className="transition group-hover:scale-90"
            icon={faDiscord}
            size="xl"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
