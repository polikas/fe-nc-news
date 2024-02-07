import { Alert, Button, TextField } from "@mui/material";
import { useState } from "react";
import { postComment } from "../api";

const AddComment = ({ setCommentBox, article }) => {
  const [comment, setComment] = useState("");
  
  const { author, article_id, body } = article;

  const handleAddCommentBtn = () => {
    postComment(article_id, author, comment).then(() => {
      setComment((currentComment) => {
        return { ...currentComment, body: currentComment.body };
      });
    });
    setCommentBox(false);
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        placeholder="leave a comment"
        onChange={(event) => {
          setComment(event.target.value);
        }}
      />
      <Button
        className="addCommentBtn"
        size="small"
        onClick={handleAddCommentBtn}
      >
        Add Comment
      </Button>
    </div>
  );
};

export default AddComment;
