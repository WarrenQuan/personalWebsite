import React from 'react'
import "./portfolioCards.scss"

export default function PortfolioCards({ img, title, role, date, location, resume }) {
    return (
        <div className="item">
            <img
                src={img}
                alt=""
            />
            <h3>{title}</h3>
            <h3>{role}</h3>
            <h3>{date}</h3>
            <h3>{location}</h3>
            <h3>{resume}</h3>

        </div>

    )
}
