import { useEffect, useState } from "react";
import { getTopics } from "../api";
import TopicCard from "./TopicCard";

const TopicsList = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getTopics().then((topicsData) => {
      setTopics(topicsData.topic);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>is Loading...</p>;
  }

  return (
    <ul>
      {topics.map((topic) => (
        <TopicCard key={topic.slug} topic={topic} />
      ))}
    </ul>
  );
};

export default TopicsList;
