import axios from "axios";

export const getArticles = (topicName) => {
  let url = `https://articles-service-api.onrender.com/api/articles`;

  if (topicName !== undefined) {
    url += `?topic=${topicName}`;
  }

  const response = axios.get(url).then((articles) => articles.data);
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

export const patchVotesByArticleId = (articleId, newVote) => {
  const response = axios
    .patch(
      `https://articles-service-api.onrender.com/api/articles/${articleId}`,
      { votes: newVote }
    )
    .then((article) => article.data);
  return response;
};

export const postComment = (articleId, authorName, newComment) => {
  const response = axios
    .post(
      `https://articles-service-api.onrender.com/api/articles/${articleId}/comments`,
      {
        author: authorName,
        body: newComment,
      }
    )
    .then((comment) => comment.data);
  return response;
};

export const deleteComment = (commentId) => {
  const response = axios
    .delete(
      `https://articles-service-api.onrender.com/api/comments/${commentId}`
    )
    .then((comment) => comment.data);
  return response;
};

export const getTopics = () => {
  const response = axios
    .get("https://articles-service-api.onrender.com/api/topics")
    .then((topics) => topics.data);
  return response;
};
