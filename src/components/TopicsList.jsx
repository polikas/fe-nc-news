import { useEffect, useState } from "react";
import { getTopics } from "../api";
import TopicCard from "./TopicCard";

const TopicsList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsData) => {
      setTopics(topicsData.topic);
    });
  }, []);

  return (
    <ul>
      {topics.map((topic) => (
        <TopicCard key={topic.slug} topic={topic} />
      ))}
    </ul>
  );
};

export default TopicsList;
