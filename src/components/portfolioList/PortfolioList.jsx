import React from 'react'
import "./portfolioList.scss"

export default function PortfolioList({title, active, setSelected, id}) {
    // pass in states to change the css depending on which one is active and 
    // which id it has 
    
    return (
    <li className = {active ? "portfolioList active" : "portfolioList"} 
    onClick={() => setSelected(id)}>
       {title}
    </li>
  )
}