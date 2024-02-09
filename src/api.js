import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://articles-service-api.onrender.com/api",
});

export const getArticles = (topicName) => {
  let url = `https://articles-service-api.onrender.com/api/articles`;

  if (topicName !== undefined) {
    url += `?topic=${topicName}`;
  }

  const response = axios.get(url).then((articles) => articles.data);
  return response;
};

export const getSingleArticle = (articleId) => {
  const response = articlesApi
    .get(`/articles/${articleId}`)
    .then((article) => article.data);
  return response;
};

export const getCommentsByArticleId = (articleId) => {
  const response = articlesApi
    .get(`/articles/${articleId}/comments`)
    .then((comments) => comments.data);
  return response;
};

export const patchVotesByArticleId = (articleId, newVote) => {
  const response = articlesApi
    .patch(`/articles/${articleId}`, { votes: newVote })
    .then((article) => article.data);
  return response;
};

export const postComment = (articleId, authorName, newComment) => {
  const response = articlesApi
    .post(`/articles/${articleId}/comments`, {
      author: authorName,
      body: newComment,
    })
    .then((comment) => comment.data);
  return response;
};

export const deleteComment = (commentId) => {
  const response = articlesApi
    .delete(`/comments/${commentId}`)
    .then((comment) => comment.data);
  return response;
};

export const getTopics = () => {
  const response = articlesApi.get("/topics").then((topics) => topics.data);
  return response;
};
