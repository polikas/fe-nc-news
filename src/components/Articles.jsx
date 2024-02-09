import { useContext, useEffect, useState } from "react";
import { ArticleContext } from "../contexts/Article";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Articles = () => {
  const { articles, setArticles } = useContext(ArticleContext);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("votes");
  const { slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(slug).then((articlesData) => {
      const sortArticles = [...articlesData.articles].sort(
        (a, b) => b[sortBy] - a[sortBy]
      );

      setArticles(sortArticles);
      setIsLoading(false);
    });
  }, [sortBy]);

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>Sort Articles</h2>
      <Box>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="sort_by_articles">Date</InputLabel>
          <Select
            labelId="sort_by_articles"
            id="sort_by"
            value={sortBy}
            label="Sort"
            onChange={handleChange}
          >
            <MenuItem value={"created_at"}>Date</MenuItem>
            <MenuItem value={"comment_count"}>Comment Count</MenuItem>
            <MenuItem value={"votes"}>Votes</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <ul>
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </>
  );
};

export default Articles;
