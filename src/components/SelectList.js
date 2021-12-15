import React from 'react'

export default function SelectList({ articles }) {
    return (
        <div>
            <select name="" id="">
                {articles.map(({ title }) => {
                    return <option value={title}>{title}</option>
                })}
            </select>
        </div>
    )
}
