import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeHeader from "./components/HomeHeader";
import Navigation from "./components/Navigation";
import Articles from "./components/Articles";

function App() {
  return (
    <div>
      <HomeHeader />
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
