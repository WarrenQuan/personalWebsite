// import React, { useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect';
import "./intro.scss"
// import { init } from 'ityped'
import {KeyboardArrowDown} from '@mui/icons-material';

export default function Intro() {
  
  /* const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { showCursor: false,
       strings: ['developer', 'designer', 'student' ] })
  },[]) */ 

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/selfPortrait.png" alt="" />
        </div></div>
      <div className="right">
        <div className="wrapper">
          <h2>hello world! my name is </h2>
          <h1> warren quan</h1>
          <h2 >i am a&nbsp;<span> <Typewriter options={{strings:['developer', 'designer', 'learner' ], autoStart:true, delay:75, loop:true, skipAddStyles:false}}/></span>
          </h2> 
          <a href="#about">
          <div className="itemContainer">
            <KeyboardArrowDown className='icon' color="disabled" style={{ fontSize: 60 }}/>
          </div>
        </a>
        </div>
      
      </div>
    </div>
  )
}
