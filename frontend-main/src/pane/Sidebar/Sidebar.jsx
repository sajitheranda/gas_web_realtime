import React, { useState } from 'react'
import './sidebar.css'
import {AiTwotoneHome,AiOutlineDashboard} from 'react-icons/ai';
import { BsAlarmFill,BsCassette,BsCloudDownloadFill} from 'react-icons/bs';
import {FaBars,FaChartBar} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import {FiDownloadCloud} from 'react-icons/fi'



export default function Sidebar({children}) {
    const [isOpen,setIsOpen] = useState(false);
    const toggle =()=>setIsOpen(!isOpen);


  const menuitem=[
    {
        path:"/",
        name:"Home",
        icon:<AiTwotoneHome/>
    },
    {
        path:"/Dashboard",
        name:"Dashboard",
        icon:<AiOutlineDashboard/>
    },
    {
        path:"/Chart",
        name:"Line chart",
        icon:<FaChartBar/>
    },
    {
        path:"/Alarm",
        name:"Alarm",
        icon:<BsAlarmFill/>
    },
    {
        path:"/Download",
        name:"Download",
        icon:<BsCloudDownloadFill/>
    }

]
  return (
    <div className='plannar'>
        <div className='leftbar' style={{flex : isOpen? '4' : '1'}  }>
        <div className="bars">
            <span className='words' style={{display : isOpen? 'block' : 'none'}}>Gas weight</span>
            <FaBars className='fabars' onClick={toggle}/>
        </div>
        <div className="containered">{
            menuitem.map((item,index)=>(
                <NavLink to={item.path} key={index} className='link' activeclassname='active'>
                    <div className="icon">{item.icon}</div>
                    <div className="link_text" style={{display : isOpen? 'block' : 'none'}}>{item.name}</div>
                </NavLink>
                ))
    
        }</div>
        </div>
        <div className='child'>{children}</div>
      
    </div>
  )
}
