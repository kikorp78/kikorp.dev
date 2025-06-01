import Constants from '@/utils/constants';
import { IconBrandDiscord } from '@tabler/icons-react';

import Link from 'next/link';
import { FC } from 'react';

import EmailContactButton from './components/email-contact-button';

const Contact: FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <h4 className="text-mobile-h4 font-bold lg:text-desktop-h4">
          Contact Me
        </h4>
        <p className="text-paragraph-sm font-medium text-foreground">
          If you want to get in touch, feel free to reach out to me.
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <EmailContactButton />
        <Link
          className="flex h-full items-center space-x-3 rounded-lg border border-border p-4 transition hover:bg-background-hover"
          href={Constants.DISCORD_URL}
          target="_blank"
          rel="noopener,noreferrer"
        >
          <IconBrandDiscord />
          <p className="text-paragraph-sm font-semibold">
            Message me on Discord
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
