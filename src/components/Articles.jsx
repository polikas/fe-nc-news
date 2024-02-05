import { useContext, useEffect } from "react";
import { ArticleContext } from "../contexts/Article";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { getArticles } from "../api";

const Articles = () => {
  const { articles, setArticles } = useContext(ArticleContext);
  console.log(articles);

  useEffect(() => {
    getArticles().then((articlesData) => {
      setArticles(articlesData.articles);
    });
  }, []);

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.article_id}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Author: {article.author}
              </Typography>
              <Typography variant="h5" component="div">
                Title: {article.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Topic: {article.topic}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Votes: {article.votes}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Comment Count: {article.comment_count}
              </Typography>
              <Typography variant="body2">
                Created: {article.created_at}
              </Typography>
              <img
                key={article}
                src={article.article_img_url}
                alt={article.title}
                style={{ width: "75px", height: "75px" }}
              />
            </CardContent>
            <CardActions>
              <Button className="voteBtn" size="small">
                Vote
              </Button>
              <Button className="commentBtn" size="small">
                Comment
              </Button>
            </CardActions>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default Articles;
