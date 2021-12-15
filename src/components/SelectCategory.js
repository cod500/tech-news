import React, { useContext, useState } from 'react';
import ArticlesContext from '../ArticlesContext';
import getArticlesList from '../data/getArticlesList';

export default function SelectCategory() {

    const { setCategory, setArticles } = useContext(ArticlesContext);

    const changeArticles = async (keyword) => {
        const response = await getArticlesList(keyword);
        setArticles(response.data.articles);
        setCategory(keyword);
        console.log(response.data.articles);

    }

    const styles = {
        backgroundColor: 'green',

    }

    return (
        <div className="category-select">
            <label>Select a category</label>
            <br />
            <select
                onChange={(e) => {
                    changeArticles(e.target.value);
                }}
            >
                <option className="option-bg" style={styles} value="Javascript">Javascript</option>
                <option className="option-bg" style={styles} value="Web Development Jobs">Development Jobs</option>
                <option className="option-bg" style={styles} value="Python Programming">Python</option>
                <option className="option-bg" style={styles} value="React Programming">React</option>
            </select>
        </div>
    )
}
