import Link from 'next/link'
import { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">
          <img src="https://z-cdn-media.chatglm.cn/files/22c2d31f-4673-4a45-97cf-ac86f3157cd2_CVPL%20logo.png" alt="Crestvista" />
        </div>
        <button className="mobile-menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>
        <nav className={open? 'open' : ''}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#properties">Properties</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
