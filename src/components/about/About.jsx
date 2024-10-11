import React from 'react'
import "./about.scss"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="wrapper">
      <h1>let <strong>about</strong> =</h1>
      <h2>
        "hello! i’m <span className='mainColor'>warren</span>, a recently graduated vietnamese <span className='mainColor'>computer science</span> student at <span className='mainColor'> 
         princeton university </span> with focuses on <span className='mainColor'>robotics</span>,  <span className='mainColor'>finance</span>
         , and  <span className='mainColor'>visual arts</span>! <br/><br/>
        growing up in san francisco, i had a strong connection with <span className='mainColor'>technology </span>
        through watching all the new developments within silicon valley. and, as a  <span className='mainColor'> fli (first-gen, low-income) </span>
        student, i want to support the communities that has given so many resources and support to me, allowing me to obtain the opportunities i have today. <span className='mainColor'>now, i aspire to combine my
        <strong> programming</strong> and <strong> design</strong>  skillsets to create impactful projects for <strong> social good</strong>.</span>"
      </h2>
    </div>
    </div>
  )
}
