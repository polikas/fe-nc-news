import axios from "axios";

export const getArticles = () => {
  const response = axios
    .get("https://articles-service-api.onrender.com/api/articles")
    .then((articles) => articles.data);
  return response;
};

export const getSingleArticle = (articleId) => {
  const response = axios
    .get(`https://articles-service-api.onrender.com/api/articles/${articleId}`)
    .then((article) => article.data);
  return response;
};

export const getCommentsByArticleId = (articleId) => {
  const response = axios
    .get(
      `https://articles-service-api.onrender.com/api/articles/${articleId}/comments`
    )
    .then((comments) => comments.data);
  return response;
};
