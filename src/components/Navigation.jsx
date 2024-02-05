import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Link to="/articles">
          <Button>Articles</Button>
        </Link>
        <Button>Topics</Button>
        <Button>Change User</Button>
      </ButtonGroup>
    </nav>
  );
};

export default Navigation;
