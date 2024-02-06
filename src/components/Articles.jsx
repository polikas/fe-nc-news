import { useContext, useEffect, useState } from "react";
import { ArticleContext } from "../contexts/Article";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const { articles, setArticles } = useContext(ArticleContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articlesData) => {
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
