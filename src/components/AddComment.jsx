import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { postComment } from "../api";
import { UserContext } from "../contexts/User";

const AddComment = ({ setCommentBox, article }) => {
  const [comment, setComment] = useState("");
  const [open, setOpen] = useState(false);
  const { selectedUser } = useContext(UserContext);

  const { author, article_id, body } = article;

  const handleAddCommentBtn = () => {
    postComment(article_id, author, comment).then(() => {
      setComment((currentComment) => {
        return {
          ...currentComment,
          body: currentComment.body,
        };
      });
    });
    setOpen(true);
    setCommentBox(false);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={`Commented By ${selectedUser}`}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </div>
  );
};

export default AddComment;
