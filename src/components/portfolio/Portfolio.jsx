import React from 'react'
import { useEffect, useState } from 'react';
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import {
  selectedPortfolio,
  swePortfolio,
  projectsPortfolio,
  uiPortfolio,
  designPortfolio,
  servicePortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const list = [
    {
      id: "selected",
      title: "Selected Works",
    },
    {
      id: "swe",
      title: "SWE",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "ui",
      title: "UI/UX",
    },
    {
      id: "design",
      title: "Art and Design",
    },
    {
      id: "service",
      title: "Service",
    },
  ];

  // useEffect to setData
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(selectedPortfolio);
        break;
      case "swe":
        setData(swePortfolio);
        break;
      case "projects":
        setData(projectsPortfolio);
        break;
      case "ui":
        setData(uiPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "service":
        setData(servicePortfolio);
        break;
      default:
        setData(selectedPortfolio);
    }
  }, [selected]);

  return (
    <div className='portfolio' id="portfolio">
      <h1 className="active">Work and Portfolio</h1>
      <ul>
        {
          // arrow function with passing prop to PortfolioList, uses setSelected state
          // menus for stuff like Selected Works or SWE
        }
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id} />
        ))}
      </ul>

      {
        // arrow function to map all items with images from data, uses d
      }
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}

      </div>
    </div>
  )
}
