import { useContext, useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import { UserContext } from "../contexts/User";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  const { selectedUser } = useContext(UserContext);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((commentsData) =>
      setComments(commentsData.comments)
    );
  }, [comments]);
  return (
    <ol>
      {comments.map((comment) => (
        <CommentCard
          key={comment.comment_id}
          comment={comment}
          selectedUser={selectedUser}
        />
      ))}
    </ol>
  );
};

export default Comments;
