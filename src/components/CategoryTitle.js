import React from 'react'

export default function CategoryTitle({ categoryTitle }) {
    return (
        <div>
            <h1 className="category-title">{categoryTitle != undefined ? `Most Recent ${categoryTitle} News` : "Recent news"}</h1>
        </div>
    )
}
