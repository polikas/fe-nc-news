import { createContext, useState } from "react";

const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  return (
    <ArticleContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticleContext.Provider>
  );
};

export { ArticleContext, ArticleProvider };
