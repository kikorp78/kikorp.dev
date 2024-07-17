import Constants from '@/utils/constants';
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconLink,
  IconMail
} from '@tabler/icons-react';

import { FC } from 'react';

import ContactLink from './(components)/contact-link';

const Contact: FC = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center space-x-2">
        <IconLink className="text-text" />
        <p className="text-text text-paragraph-sm font-bold uppercase">
          Contact and Socials
        </p>
      </div>
      <hr className="w-full h-[1px] bg-border border-none" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5">
        <ContactLink
          name="Email"
          icon={<IconMail />}
          url={Constants.GITHUB_URL}
        />
        <ContactLink
          name="GitHub"
          icon={<IconBrandGithub />}
          url={Constants.GITHUB_URL}
        />
        <ContactLink
          name="Discord"
          icon={<IconBrandDiscord />}
          url={Constants.DISCORD_URL}
        />
      </div>
    </div>
  );
};

export default Contact;
