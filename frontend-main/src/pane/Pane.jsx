import React from 'react'
import './pane.css'
import {BrowserRouter ,Route ,Routes} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Dashboard from '../pages/Dashboard/Dashboard'
import Alarm from '../pages/Alarm/Alarm'
import About from '../pages/About/About'
import Sidebar from './Sidebar/Sidebar'
import Chart from '../pages/Chart/Chart'

export default function Rightpane() {
  return (
    <div className='right'>
        <BrowserRouter>
        <Sidebar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/Chart' element={<Chart/>}></Route>
          <Route path='/Alarm' element={<Alarm/>}></Route>
          <Route path='/Download' element={<About/>}></Route>
        </Routes>
        </Sidebar>
        </BrowserRouter>
    </div>
  )
}
