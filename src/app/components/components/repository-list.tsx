import { Endpoints } from '@octokit/types';

import { FC } from 'react';

import Repository from './components/repository';

export const fetchRepos = async () => {
  try {
    const repos = await fetch('https://api.github.com/users/kikorp78/repos', {
      next: {
        revalidate: 600
      }
    });

    const data: Endpoints['GET /users/{username}/repos']['response']['data'] =
      await repos.json();

    return { data, err: null };
  } catch (err) {
    return { data: null, err };
  }
};

const RepositoryList: FC = async () => {
  const { data } = await fetchRepos();

  return (
    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 xl:grid-cols-3">
      {data!.map((repo) => (
        <Repository
          key={repo.id}
          name={repo.name}
          description={repo.description}
          url={repo.html_url}
          language={repo.language}
        />
      ))}
    </div>
  );
};

export default RepositoryList;
