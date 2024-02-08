import { Route, Routes } from "react-router-dom";
import "../App.css";
import HomeHeader from "./HomeHeader";
import Navigation from "./Navigation";
import Articles from "./Articles";
import Comments from "./Comments";
import SingleArticle from "./SingleArticle";
import UserAccount from "./UserAccount";
import TopicsList from "./TopicsList";

function App() {
  return (
    <div>
      <HomeHeader />
      <Routes>
        <Route path="/" element={<UserAccount />} />  
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/articles/:article_id/comments" element={<Comments />} />
        <Route path="/topics" element={<TopicsList />} />
        <Route path="/articles/topic/:slug" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
