import React, { useEffect, useState } from 'react';
import getArticlesList from '.././data/getArticlesList';
import TopNewsList from '../components/TopNewsList';

export default function TopArticles() {

    const [topNews, setTopNews] = useState([]);

    useEffect(() => {
        const getTopNews = async () => {
            const response = await getArticlesList("everything");
            const topTwo = response.data.articles.slice(0, 2);

            console.log(topTwo.forEach((el) => {
                console.log(el.source.name)
            }));

            setTopNews(topTwo);
        }

        getTopNews();
    }, []);

    return (
        <div>
            <div class="top-news">
                {topNews.map((el, i) => {
                    return <TopNewsList key={i} title={el.title} url={el.url} image={el.image} name={el.source.name} />
                })}
            </div>
        </div>
    )
}
