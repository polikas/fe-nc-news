import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getSingleArticle } from "../api";
import { useParams } from "react-router-dom";
import { patchVotesByArticleId } from "../api";

const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id).then((articleData) => {
      setArticle(articleData.article);
      setIsLoading(false);
    });
  }, []);

  const { votes } = article;

  const handleVoteBtn = () => {
    patchVotesByArticleId(article_id, 1).then(() =>
      setArticle((currentArticle) => {
        return { ...currentArticle, votes: currentArticle.votes + 1 };
      })
    );
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ArticleCard
      article={article}
      showBody={true}
      setArticle={setArticle}
      handleVoteBtn={handleVoteBtn}
    />
  );
};

export default SingleArticle;
