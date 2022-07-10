import React from 'react'
import "./portfolioCards.scss"

export default function PortfolioCards({ img, title, role, date, location, resume }) {
    return (
        <div className="portfolioCards">
            <div className="item" >
                <div className='left'>
                    <img
                        src={img}
                        alt=""
                    />
                </div>
                <div className='right'>
                    <div>
                        <h1>{title}</h1>
                        <h3>{role} | {date} | {location}</h3>

                        <ul>
                            {
                                // arrow function to list off resume ite
                            }
                            {resume.map((item) => {
                                if(typeof item === "string"){
                                    return <li>- {item}</li>
                                }
                                else{
                                    return <li>{item}</li>
                                }
})}
                        </ul>
     
                    </div>
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
