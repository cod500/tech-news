import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useMemo } from 'react';
import getArticlesList from './data/getArticlesList';
import NewsList from './components/NewsList';
import Categorytitle from './components/CategoryTitle';
import TopArticles from './components/TopArticles';
import BreakingNewsBanner from './components/BreakingNewsBanner';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import SelectCategory from './components/SelectCategory';
import ArticlesContext from './ArticlesContext';

function App() {

  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("");

  const contextValue = useMemo(() => {
    return {
      articles: articles,
      setArticles: setArticles,
      category: category,
      setCategory: setCategory
    }
  }, [articles, category, setArticles, setCategory]);

  useEffect(() => {
    console.log('useEffect called');

    const getArticles = async () => {
      const res = await getArticlesList('everything');
      console.log(res.data.articles)
      setArticles(res.data.articles)

      console.log(res.data.articles.forEach((el) => {
        console.log(el.source.name)
      }));
    }
    getArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={contextValue}>
      <div className="App">
        <BreakingNewsBanner />
        <div className="container">
          <TopArticles />
          <NavBar />
          <Categorytitle categoryTitle={category} />
          <NewsList />
        </div>
        <Footer />
      </div>
    </ArticlesContext.Provider>
  );
}

export default App;
