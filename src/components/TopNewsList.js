import React from 'react';

export default function TopNewsList({ title, url, image, name }) {
    console.log(image)
    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${image}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="top-news-item" style={styles}>
            {/* <img className="article-image" src={image} alt="" /> */}
            <h2 className="top-article-title"><a href={url} target="_blank">{title}</a></h2>
            <p className="top-article-name">{name}</p>
        </div>
    )
}
