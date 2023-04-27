export const getArticles = async () => {
  const response = await fetch(
    "https://dev.to/api/articles?username=amandamartinsdev"
  );
  const articles = await response.json();
  return articles;
};
