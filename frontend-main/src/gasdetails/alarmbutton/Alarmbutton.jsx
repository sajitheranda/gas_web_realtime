import React, { useEffect, useState } from 'react'
import './alarmbutton.css'

export default function Alarmbutton({alarmval,handleClick}) {

    const buttonStyles = {
        backgroundColor: alarmval === 0 ? 'blue':'rgb(105, 23, 5)',
      };
    

  return (
    <div className='alarmer'>
    <div className='buttonhead'>Alarm button</div>
    <button onClick={handleClick} style={buttonStyles} className='buttonalarm'>
      {alarmval === 0 ? 'Alarm On':'Alarm Off' }
    </button>
    </div>
  )
}
