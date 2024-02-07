import { Button, Snackbar } from "@mui/material";
import { deleteComment } from "../api";
import { useState } from "react";

const DeleteComment = ({ comment }) => {
  const [commentDelete, setComment] = useState([]);
  const [open, setOpen] = useState(false);

  const { comment_id } = comment;

  const handleDeleteBtn = () => {
    deleteComment(comment_id).then(() => {
      setComment((currentComment) => {
        return { ...currentComment };
      });
    });
    setOpen(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button className="voteBtn" size="small" onClick={handleDeleteBtn}>
        Delete Comment
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Comment deleted"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </>
  );
};

export default DeleteComment;
