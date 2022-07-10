import React from 'react'
import Typewriter from 'typewriter-effect';
import "./contact.scss"
import { Mail, LinkedIn } from '@mui/icons-material';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <h1><strong>if(you<wbr/>Want<wbr/>To<wbr/>Contact<wbr/>Me == true) &#123;</strong></h1>
        <h2>
          feel free to email me at <a href='mailto:wquan@princeton.edu'><Mail className='icon' />wquan@princeton.edu</a> or message me on  <a href='https://www.linkedin.com/in/warren-quan/'><LinkedIn className='icon' /> LinkedIn</a>! i am always interested in new opportunities to grow and am happy to answer any questions! <Typewriter options={{ strings: ['thank you so much for coming!', 'come back soon!', ':D'], autoStart: true, delay: 75, loop: true, skipAddStyles: false }} />
        </h2>
        <h1><strong>&#125;</strong></h1>
      </div>
      <div className="bottom">
        website developed and designed (with love) by warren quan © 2022


      </div>

    </div>
  )
}
