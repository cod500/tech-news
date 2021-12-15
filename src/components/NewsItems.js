import React from 'react';
import moment from 'moment';

export default function NewItems({ title, description, url, image, date }) {
    let newDate = moment(date).format("LL");
    return (
        <div className="news-item">
            <div className="article-image-div">
                <img className="article-image" src={image} alt="" />
                {/* <div className="share-box"><i class="fa fa-share-alt"></i></div> */}
                <div class="share-div">
                    <button class="one share-btn"><i class="fa fa-share-alt"></i></button>
                    <a href={`https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=${url}`} target="_blank">
                        <button class="two share-btn"><i class="fa fa-pinterest"></i></button>
                    </a>
                    <a href={`
https://twitter.com/share?url=${url}`} target="_blank">
                        <button class="three share-btn"><i class="fa fa-twitter"></i></button>
                    </a>
                    <a href={`https://www.facebook.com/sharer.php?u=${url}
`} target="_blank">
                        <button class="four share-btn"><i class="fa fa-facebook"></i></button>
                    </a>
                </div>
            </div>
            <h2 className="article-title"><a href={url} target="_blank">{title}</a></h2>
            <p className="article-description">{description}</p>
            <p className="article-date"><i class="fa fa-clock-o"></i>{newDate}</p>
        </div>
    )
}
