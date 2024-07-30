import Link from 'next/link';
import { FC, ReactElement, cloneElement } from 'react';

interface Props {
  name: string;
  icon: ReactElement;
  url: string;
}

const ContactLink: FC<Props> = ({ name, icon, url }) => {
  return (
    <Link
      className="hover:bg-background-hover flex justify-between items-center p-4 space-x-3 border border-border rounded-lg cursor-pointer select-none transition"
      href={url}
      target="_blank"
      rel="noopener,noreferrer"
    >
      <p className="text-paragraph-sm font-semibold">{name}</p>
      {cloneElement(icon)}
    </Link>
  );
};

export default ContactLink;
