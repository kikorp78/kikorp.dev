import GitHubColors from 'github-colors';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  name: string;
  description: string | null;
  url: string;
  language?: string | null;
}

const Repository: FC<Props> = ({ name, description, url, language }) => {
  return (
    <Link
      className="hover:bg-background-hover flex flex-col xl:flex-row items-start p-4 xl:space-x-[10px] space-y-3 xl:space-y-0 border border-border rounded-lg cursor-pointer select-none transition"
      href={url}
      target="_blank"
      rel="noopener,noreferrer"
    >
      <div className="w-full flex flex-col space-y-3">
        <p className="text-paragraph-md font-semibold">{name}</p>
        <p className="text-text text-paragraph-sm font-medium">{description}</p>
      </div>
      {language ? (
        <div className="flex items-center space-x-[6px]">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: GitHubColors.get(language).color }}
          />
          <p className="text-text text-paragraph-xs font-medium">{language}</p>
        </div>
      ) : null}
    </Link>
  );
};

export default Repository;
