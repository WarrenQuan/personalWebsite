import React from 'react'
import "./portfolioCards.scss"
import {InfoOutlined, Link} from '@mui/icons-material';

export default function PortfolioCards({ img, title, role, date, location, resume, link }) {
    return (
        <div className="portfolioCards">
            <div className="item" >
                <div>
                    <h1>{title}</h1>
                    {
                        // don't show '|' if not needed
                    }
                    <h3>{role} {role ? <h6> || </h6> : ""} {date} {(role || date) && location ? <h6> || </h6> : ""} {location} {(role || date || location) && link ? <h6> || </h6>  : ""}{link}</h3>
                <ul>
                    {
                        // arrow function to list off resume ite
                    }
                    {resume.map((item) => {
                            return <li>
                                - {item}</li>
                    })}
                </ul>

            </div>

        </div>
        </div >
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
