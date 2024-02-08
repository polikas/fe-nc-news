import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ArticleProvider } from "./contexts/Article.jsx";
import { UserProvider } from "./contexts/User.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <ArticleProvider>
        <App />
      </ArticleProvider>
    </UserProvider>
  </BrowserRouter>
);
