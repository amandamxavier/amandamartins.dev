export const getArticles = async () => {
  const response = await fetch(
    "https://dev.to/api/articles?username=pixelmandy",
  );
  const articles = await response.json();
  return articles;
};
