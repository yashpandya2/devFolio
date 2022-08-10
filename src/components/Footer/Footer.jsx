import {  Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import React from 'react'
import "./Footer.css"
import {BsGithub, BsInstagram, BsLinkedin, BsWhatsapp} from 'react-icons/bs'
 
const Footer = () => {
  return <div className='footer'>
    <div>
        <Typography variant='h5'>About Me</Typography>
        <Typography>Hey, Yash Pandya is Here. I'm <b> Full Stack Developer </b> and <b>WEB 3.0 Beginner </b></Typography>

        <Link to="/contact" className="footerContactBtn">
            <Typography>Connect With Me</Typography>
        </Link>
    </div>
    <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/yashpandya136/" target="black">
          <BsGithub />
        </a>
        <a href="https://instagram.com/yashpandya136/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/yashpandya136/" target="black">
          <BsLinkedin />
        </a>
        <a href="https://wa.me/16351902200" target="black">
          <BsWhatsapp />
        </a>
      </div>
  </div>
}

export default Footer