import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className="navbarbox">
      <div className="navbarleft">
        <img src='/Images/gas_img1.jpg' alt='project image' className='project_img'/>
      </div>
      <div className="navbarmiddle">
        <span className="logo">Gas Tracker</span>
      </div>
      <div className="navbarright">
        {/* <button className="navlink">Home</button>
        <button className="navlink">Profile</button> */}
      </div>
    </div>
  )
}
