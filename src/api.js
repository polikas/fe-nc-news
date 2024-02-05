import axios from "axios";

export const getArticles = () => {
  const response = axios
    .get("https://articles-service-api.onrender.com/api/articles")
    .then((articles) => articles.data);
  return response;
};

getArticles();
