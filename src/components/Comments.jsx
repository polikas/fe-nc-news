import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then((commentsData) =>
      setComments(commentsData.comments)
    );
  }, [comments]);
  return (
    <ol>
      {comments.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </ol>
  );
};

export default Comments;
