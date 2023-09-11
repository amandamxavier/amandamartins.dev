let repos;

export const getRepos = async () => {
  if (repos) return repos;
  const response = await fetch("https://api.github.com/users/pixelmandy/repos");
  repos = await response.json();
  return repos;
};

export const getReposByTopic = async (topic: string) => {
  const response = await getRepos();

  return response
    .filter((item) => item.topics.includes(topic))
    .map((item) => ({
      url: item.html_url,
      title: item.name,
      description: item.description,
    }));
};
