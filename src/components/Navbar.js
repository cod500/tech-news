import React, { useContext, useState } from 'react';
import ArticlesContext from '../ArticlesContext';
import getArticles from '../data/getArticlesList';


export default function Navbar() {
    const { setCategory, setArticles } = useContext(ArticlesContext);

    const [term, setTerm] = useState("");

    const searchNews = async (event) => {
        event.preventDefault();

        const response = await getArticles(term);
        setArticles(response.data.articles);
        setCategory(term);
    };

    return (
        <div>
            <nav>

                <div className="brand">
                    <img src="d-news.png" />
                    <h3>News</h3>
                </div>
                <div className="navigation">
                    <ul className="menu">
                        <li>Search</li>
                    </ul>
                    <div className="search">
                        <div className="search-content">
                            <div className="search-button">
                                <i class="fa fa-search"></i>
                            </div>
                            <form onSubmit={searchNews} >
                                <div className="form-container">
                                    <div className="search-input">
                                        <input type="text" placeholder="Search for news..." value={term}
                                            onChange={e => setTerm(e.target.value)} />
                                        <input type="submit" value="Search" className="search-submit" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
