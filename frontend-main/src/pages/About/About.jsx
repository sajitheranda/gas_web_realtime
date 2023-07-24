import React, { useState } from 'react';
import './about.css'

export default function About() {

  const [isHovering, setIsHovering] = useState(false);
  
  // Function to handle the mouse entering the button area
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  // Function to handle the mouse leaving the button area
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const fileDownloadUrl = 'https://dms.uom.lk/s/f8jiFa4PTQn6poT'; // Replace with the direct download URL obtained from Google Drive.

  const handleButtonClick = () => {
    window.open(fileDownloadUrl, '_blank'); // Open the file download link in a new tab/window.
  };



  return (
    <div className='abouter'>
      <div className='downloads'>
      <div className='titlehead'>
        Plan you Gas cylinder smartly
      </div>
      <div className='titlebody'>
      Try GasCheck today and experience the convenience of having a trustworthy gas percentage 
      calculator at your fingertips. It's time to simplify your gas mixture calculations with GasCheck
       the web app and mobile app you can trust, anytime, anywhere!
      </div>

      <button onClick={handleButtonClick}  className={`button ${isHovering ? 'large' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        Download android app
      </button>
      </div>
      <div className='backgound_imager'></div>
    </div>
  )
}
