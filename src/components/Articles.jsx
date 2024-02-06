import { useContext, useEffect } from "react";
import { ArticleContext } from "../contexts/Article";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const { articles, setArticles } = useContext(ArticleContext);

  useEffect(() => {
    getArticles().then((articlesData) => {
      setArticles(articlesData.articles);
    });
  }, []);

  return (
    <ul>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </ul>
  );
};

export default Articles;
