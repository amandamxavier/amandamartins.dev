export const getProjects = async () => {
  const response = await fetch(
    "https://api.github.com/users/amandamartinsdev/repos"
  );
  const projects = await response.json();
  return projects;
};
