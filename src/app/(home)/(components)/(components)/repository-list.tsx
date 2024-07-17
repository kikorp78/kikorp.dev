import { Endpoints } from '@octokit/types';

import { FC } from 'react';

import Repository from './(components)/repository';

export const fetchRepos = async () => {
  try {
    const repos = await fetch('https://api.github.com/users/kikorp78/repos');

    const data =
      (await repos.json()) as Endpoints['GET /users/{username}/repos']['response']['data'];

    return { data, err: null };
  } catch (err) {
    return { data: null, err };
  }
};

const RepositoryList: FC = async () => {
  const { data } = await fetchRepos();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 items-start gap-5">
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
