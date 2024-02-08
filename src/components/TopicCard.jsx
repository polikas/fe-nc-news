import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
  return (
    <li key={topic.slug}>
      <Card
        sx={{ minWidth: 275, bgcolor: "bisque", border: "2px solid black" }}
      >
        <CardContent>
          <Link to={`/articles/topic/${topic.slug}`}>
            <Typography variant="h5" component="div">
              Slug: {topic.slug}
            </Typography>
          </Link>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Description: {topic.description}
          </Typography>
        </CardContent>
      </Card>
    </li>
  );
};

export default TopicCard;
