import { Card, CardContent, Typography } from "@mui/material";
import DeleteComment from "./DeleteComment";

const CommentCard = ({ comment, selectedUser }) => {
  return (
    <li key={comment.comment_id}>
      <Card
        sx={{ minWidth: 275, bgcolor: "bisque", border: "2px solid black" }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Comment ID: {comment.comment_id}
          </Typography>
          <Typography color="text.secondary">
            Article ID: {comment.article_id}
          </Typography>
          <Typography color="text.secondary">Body: {comment.body}</Typography>
          <Typography color="text.secondary">Votes: {comment.votes}</Typography>
          <Typography variant="body2">Created: {comment.created_at}</Typography>
          <DeleteComment comment={comment} />
        </CardContent>
      </Card>
    </li>
  );
};

export default CommentCard;
