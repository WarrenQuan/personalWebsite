import React from 'react'
import "./portfolioCards.scss"

export default function PortfolioCards({ img, title }) {
    return (
        <div className="item">
            <img
                src={img}
                alt=""
            />
            <h3>{title}</h3>
        </div>

    )
}
