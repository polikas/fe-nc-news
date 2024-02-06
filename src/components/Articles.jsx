import { useContext, useEffect, useState } from "react";
import { ArticleContext } from "../contexts/Article";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const Articles = () => {
  const { articles, setArticles } = useContext(ArticleContext);
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (article_id) {
      getArticles(article_id).then((articleData) => {
        setArticle(articleData.article);
        setIsLoading(false);
      });
    } else {
      getArticles().then((articlesData) => {
        setArticles(articlesData.articles);
        setIsLoading(false);
      });
    }
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {!article_id ? (
        <ul>
          {articles.map((article) => (
            <ArticleCard key={article.article_id} article={article} />
          ))}
        </ul>
      ) : (
        article && <ArticleCard article={article} showBody={true}/>
      )}
    </>
  );
};

export default Articles;
