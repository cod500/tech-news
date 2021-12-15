import React, { useEffect, useState } from 'react';
import getArticlesList from '.././data/getArticlesList';
import moment from 'moment';

export default function BreakingNewsBanner() {

    const [breakingNews, setBreakingNews] = useState([]);

    useEffect(() => {
        const getTopNews = async () => {
            const response = await getArticlesList("everything");
            const singleStory = response.data.articles[6];
            setBreakingNews(singleStory);
        }

        getTopNews();
    }, []);

    let newDate = moment(breakingNews.publishedAt).format("ll");

    return (
        <div className="breaking-news-div">
            <h5>BREAKING</h5>
            <p>{newDate}, {breakingNews.title}</p>
        </div>
    )
}
