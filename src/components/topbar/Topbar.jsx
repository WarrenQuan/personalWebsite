import React from 'react'
import "./topbar.scss"
import {LocalPhone, Mail} from '@mui/icons-material';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> warren quan. </a>
                    <div className="itemContainer">
                        <LocalPhone className='icon'/>
                        <span> 1 415 299 7865 </span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>wquan@princeton.edu</span>
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
