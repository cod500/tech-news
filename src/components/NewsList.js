import React, { useEffect, useState, useContext } from 'react';
import Axios from 'axios';
import NewsItems from './NewsItems';
import SelectList from './SelectList.js';
import getArticlesList from '../data/getArticlesList';
import ArticlesContext from '../ArticlesContext';

export default function NewsList() {
    // const [articles, setArticles] = useState([]);
    const contextValue = useContext(ArticlesContext);
    console.log(contextValue);

    // useEffect(() => {
    //     const getArticles = async () => {
    //         const res = await getArticlesList('sports');
    //         setArticles(res.data.articles)

    //         console.log(res.data.articles.forEach((el) => {
    //             console.log(el.source.name)
    //         }));
    //     }
    //     getArticles();
    // }, []);
    return (
        <div>
            <br />
            <div className="news-block">
                <div class="news-articles">
                    {contextValue.articles.map(({ title, description, url, image, publishedAt }, i) => {
                        return <NewsItems key={i} title={title} description={description} url={url} image={image} date={publishedAt} />
                    })}
                </div>
            </div>
        </div>
    )
}
