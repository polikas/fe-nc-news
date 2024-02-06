import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";


const ArticleCard = ({ article, showBody, handleVoteBtn }) => {


  return (
    <li key={article.article_id}>
      <Card
        sx={{ minWidth: 275, bgcolor: "bisque", border: "2px solid black" }}
      >
        <CardContent>
          <Link to={`/articles/${article.article_id}`}>
            <Typography variant="h5" component="div">
              Title: {article.title}
            </Typography>
          </Link>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Author: {article.author}
          </Typography>
          <Typography color="text.secondary">Topic: {article.topic}</Typography>
          {showBody && (
            <Typography color="text.secondary">Body: {article.body}</Typography>
          )}
          <Typography color="text.secondary">Votes: {article.votes}</Typography>
          <Typography color="text.secondary">
            Comment Count:{" "}
            <Link to={`/articles/${article.article_id}/comments`}>
              {article.comment_count}
            </Link>
          </Typography>
          <Typography variant="body2">Created: {article.created_at}</Typography>
          <img
            key={article}
            src={article.article_img_url}
            alt={article.title}
            style={{ width: "75px", height: "75px" }}
          />
        </CardContent>
        {showBody && (
          <CardActions>
            <Button className="voteBtn" size="small" onClick={handleVoteBtn}>
              Vote
            </Button>
            <Button className="commentBtn" size="small">
              Comment
            </Button>
          </CardActions>
        )}
      </Card>
    </li>
  );
};

export default ArticleCard;
