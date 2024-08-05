import Constants from '@/utils/constants';
import { IconBrandDiscord, IconBrandGithub } from '@tabler/icons-react';

import Image from 'next/image';
import { FC } from 'react';

import avatar from '../../public/avatar.gif';
import EmailButton from './components/email-button';
import NavbarLink from './components/navbar-link';
import NavbarWrapper from './components/navbar-wrapper';
import ThemeSwitch from './components/theme-switch';
import Tooltip from './tooltip';

const Navbar: FC = () => {
  return (
    <NavbarWrapper>
      <Image
        className="w-12 rounded-full"
        src={avatar}
        sizes="48px"
        alt="official avatar"
        priority
      />
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <EmailButton />
          <Tooltip content="Go to Discord">
            <NavbarLink
              url={Constants.DISCORD_URL}
              icon={<IconBrandDiscord />}
            />
          </Tooltip>
          <Tooltip content="Go to GitHub">
            <NavbarLink url={Constants.GITHUB_URL} icon={<IconBrandGithub />} />
          </Tooltip>
        </div>
        <ThemeSwitch />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
