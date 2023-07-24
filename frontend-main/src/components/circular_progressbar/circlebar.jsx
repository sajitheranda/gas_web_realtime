import React from 'react'
import { CircularProgressbar,buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


export default function ({percentage, size, strokeWidth}) {
    // const gradientStartColor = '#EA8279'; // Start color
    // const gradientEndColor = '#8DD660'; // End color
  
    // const gradientColor = `linear-gradient(to right, ${gradientStartColor}, ${gradientEndColor})`;
  
    // const progressStyle = {
    //   background: gradientColor,
    //   width: `${percentage}%`,
    //   height: '20px',
    //   borderRadius: '10px',
    //   transition: 'width 0.5s ease',
    // };
  
    // return (
    //   <div className="progressbar-container">
    //     <div className="progressbar" style={progressStyle}>
    //       <span className="progressbar-text">{`${percentage}%`}</span>
    //     </div>
    //   </div>
    // );


    ////////////////for circle
    // const gradientStartColor = '#EA8279'; // Start color
    // const gradientEndColor = '#8DD660'; // End color

    // const gradientColor = `conic-gradient(${gradientStartColor} 0%, ${gradientEndColor} ${percentage}%, transparent ${percentage}% 100%)`;

    // const progressStyle = {
    //     background: gradientColor,
    //     width: '200px',
    //     height: '200px',
    //     borderRadius: '50%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     ontSize: '20px',
    //     fontWeight: 'bold',
    //     color: 'black',
    // };

    // return (
    //     <div className="circular-progressbar">
    //         <div className="progress" style={progressStyle}>
    //         {`${percentage}%`}
    //         </div>
    //     </div>
    // );
    const startColor = 'green';
const endColor = 'orange';
const middleColor = 'yellow';

const radius = size / 2;
const circumference = 2 * Math.PI * radius;
const progressOffset = ((100-percentage) / 100) * circumference;

const gradientId = `gradient-${startColor}-${middleColor}-${endColor}`;

return (
  <svg className="circular-progressbar" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
    <defs>
      <linearGradient id={gradientId} gradientTransform="rotate(90)">
        <stop offset="0%" stopColor={startColor} />
        <stop offset="50%" stopColor={middleColor} />
        <stop offset="100%" stopColor={endColor} />
      </linearGradient>
    </defs>
    <circle
      className="progress-background"
      cx={radius}
      cy={radius}
      r={radius - strokeWidth / 2}
      fill="transparent"
      stroke="#ddd"
      strokeWidth={strokeWidth}
    />
    <circle
      className="progress"
      cx={radius}
      cy={radius}
      r={radius - strokeWidth / 2}
      stroke={`url(#${gradientId})`}
      fill="transparent"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeDasharray={circumference}
      strokeDashoffset={progressOffset}
      transform={`rotate(-90 ${radius} ${radius})`}
    />
    <text
      x={radius}
      y={radius}
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="24px"
      fontWeight="bold"
      fill="white"
    >
      {`${percentage}`}%
    </text>
  </svg>
);
}
