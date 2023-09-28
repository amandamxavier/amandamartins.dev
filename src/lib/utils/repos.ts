import { nanoid } from 'nanoid';

export const getRepos = async () => {
	const response = await fetch('https://api.github.com/users/pixelmandy/repos');
	const repos = await response.json();

	return repos.map((item) => ({
		url: item.html_url,
		title: item.name,
		description: item.description,
		preview: `https://opengraph.githubassets.com/${nanoid()}/${item.full_name}`
	}));
};
