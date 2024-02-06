import axios from "axios";

export const getArticles = (articleId) => {
  let urlStr = "https://articles-service-api.onrender.com/api/articles";

  if (articleId !== undefined) {
    urlStr += `/${articleId}`;
  }

  const response = axios.get(urlStr).then((articles) => articles.data);
  return response;
};
