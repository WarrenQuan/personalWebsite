import React from 'react'
import "./portfolioCards.scss"

export default function PortfolioCards({ img, title, role, date, location, resume }) {
    return (
        <div className="portfolioCards">
            <div className="item" style={{
                backgroundImage: `url(${img})`
            }}>
                <div className='right'>
                    <h2>{title}</h2>
                    <p>{role} | {date} | {location}</p>
                    <p>{resume}</p>
                </div>
            </div>
        </div>
        /*
            <div className="item">
                <div className="right">
                    <h3ß>{title}</h3>
                    <h3>{role}</h3>
                    <h3>{date}</h3>
                    <h3>{location}</h3>
                    <h3>{resume}</h3>
                </div>
            </div>
            */
    )
}
