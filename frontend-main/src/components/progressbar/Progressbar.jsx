import React, { useState } from 'react'
import Circlebar from '../circular_progressbar/circlebar';

export default function Progressbar() {
    const [percentage,setpercentage]=useState(0);
  return (
    <div>
        Progressbar
        <div className="showpercenatge">
        <Circlebar percentage={percentage} size={300}  strokeWidth={25} />
            <input type='range' min='0' max='100' value={percentage} onChange={(ev)=>setpercentage(ev.target.value)}></input>
            <span>  percentage = {percentage}</span>
        </div>
    </div>
  )
    
}
