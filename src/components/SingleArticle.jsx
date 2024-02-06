import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getSingleArticle } from "../api";
import { useParams } from "react-router-dom";

const Article = () => {
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <ArticleCard article={article} showBody={true} />;
};

export default Article;
