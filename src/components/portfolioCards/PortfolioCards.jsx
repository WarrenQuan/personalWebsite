import React from 'react'
import "./portfolioCards.scss"

export default function PortfolioCards({ img, title, role, date, location, resume }) {
    return (
        <div className="container">
            <div className="item">
                <div className="left">
                    <div className="leftContainer">
                        <h2>{title}</h2>
                        <p>{role} | {date} | {location}</p>
                        <p>{resume}</p>
                    </div>
                </div>
                <div className="right">
                    <img
                        src={img}
                        alt=""
                    />
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
