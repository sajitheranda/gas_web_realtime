import React from 'react'
import './leakage.css'

export default function Leakage({status=0,time=0,weight=0,handletest}) {

  const buttonStyles = {
    backgroundColor: status === 0 ? 'blue': status === 1 ? 'rgb(105, 23, 5)' : 'rgb(177, 93, 8)',
  };

  const leakStyles = {
    color: weight > 0.2 ? 'red' : 'rgb(23, 207, 16)',
  };

  const convert= (milliseconds) => {
    const hours = Math.floor(milliseconds / (60 * 60 * 1000));
    const minutes = Math.floor((milliseconds % (60 * 60 * 1000)) / (60 * 1000));
    return `${hours} hours and ${minutes} minutes`;
  };

  return (
    <div className='leaker'>
      <div className='headertitle'>Gas Leak Test</div>
      <div className='bigbox'> 
        <span>Test time : </span>
        {/*time*/}
        <span className='valuver'>{convert(time)}</span>
      </div>
      <div className='bigbox'>
        <span>Reduce weight : </span>
        <span className='valuver'>{weight.toFixed(2)} kg</span>
      </div>
      <div className='bigbox'>
        <span>Status : </span>
        <span className='valuver' style={leakStyles}>
          {weight >= 0.1 ? 'leak':'no leak'} 
        </span>
      </div>
     
     
     
      
      <button style={buttonStyles} className='leakbutton' onClick={handletest}>
        {status === 0 ? 'Start test': status === 1 ? 'End test' : 'Clear test'} 
      </button>
     
      
      
    </div>
  )
}
