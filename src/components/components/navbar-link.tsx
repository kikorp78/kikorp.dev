import Link from 'next/link';
import { FC, ReactElement } from 'react';

interface Props {
  url: string;
  icon: ReactElement;
}

const NavbarLink: FC<Props> = ({ url, icon }) => {
  return (
    <Link
      className="flex size-9 items-center justify-center rounded-md transition hover:bg-border"
      href={url}
      target="_blank"
      rel="noopener,noreferrer"
    >
      {icon}
    </Link>
  );
};

export default NavbarLink;
