import { useContext, useEffect, useState } from "react";
import { ArticleContext } from "../contexts/Article";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const Articles = () => {
  const { articles, setArticles } = useContext(ArticleContext);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(slug).then((articlesData) => {
      setArticles(articlesData.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </ul>
  );
};

export default Articles;
