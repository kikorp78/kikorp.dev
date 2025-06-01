import { Endpoints } from '@octokit/types';

import { FC } from 'react';

import Repository from './components/repository';

export const fetchRepos = async () => {
  try {
    const username = 'kikorp78';

    const userReposRes = await fetch(
      `https://api.github.com/users/${username}/repos`,
      { next: { revalidate: 600 } }
    );
    const userRepos: Endpoints['GET /users/{username}/repos']['response']['data'] =
      await userReposRes.json();

    const orgsRes = await fetch(
      `https://api.github.com/users/${username}/orgs`,
      { next: { revalidate: 600 } }
    );
    const orgsData: Endpoints['GET /users/{username}/orgs']['response']['data'] =
      await orgsRes.json();

    const orgReposArr = await Promise.all(
      orgsData.map(async (org) => {
        const orgReposRes = await fetch(
          `https://api.github.com/orgs/${org.login}/repos`,
          { next: { revalidate: 600 } }
        );
        return await orgReposRes.json();
      })
    );

    const allRepos = userRepos.concat(...orgReposArr);

    return { data: allRepos, err: null };
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
          organization={
            repo.owner.login !== 'kikorp78'
              ? {
                  name: repo.owner.login,
                  avatarUrl: repo.owner.avatar_url
                }
              : undefined
          }
        />
      ))}
    </div>
  );
};

export default RepositoryList;
