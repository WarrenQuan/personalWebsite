import React from 'react'
import "./topbar.scss"
import {LocalPhone, Mail, LinkedIn, GitHub} from '@mui/icons-material';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo" id="logo"> warren quan. </a>
                    <div className="itemContainer">
                        <LocalPhone className='icon'/>
                        <span> 1 415 299 7865 </span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <a href='mailto:wquan@princeton.edu'>wquan@princeton.edu</a>
                    </div>
                    <div className="itemContainer">
                        <LinkedIn className='icon'/>
                        <a href = 'https://www.linkedin.com/in/warren-quan/'>LinkedIn</a>
                    </div>
                    <div className="itemContainer">
                        <GitHub className='icon'/>
                        <a href = 'https://github.com/WarrenQuan'>GitHub</a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick = {()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>

        </div>
    )
}
