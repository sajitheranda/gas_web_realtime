import React from 'react'

export default function Circularbar({percentage, size, strokeWidth}) {
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
