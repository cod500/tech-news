import React from 'react';
import Axios from 'axios';

export default async function getArticlesList(keyword) {
    const response = await Axios.get(
        `https://gnews.io/api/v4/search?q=${keyword}&token=e820f2b04f2e34dfa7621b11c40f11fc&lang=en`
    );

    return response;
}




