import React from 'react'
import Chart from 'react-apexcharts';
import './linechart1.css'

export default function Linechart1() {
    const data = [
        { x: '2022/12/12', y: 400 },
        { x: '2022/12/25', y: 300 },
        { x: '2022/12/29', y: 600 },
        { x: '2023/1/5', y: 800 },
        { x: '2023/1/12', y: 700 },
        { x: '2023/1/16', y: 900 },
        { x: '2023/1/18', y: 690 },
        { x: '2023/1/24', y: -100 },
        { x: '2023/1/28', y:-60 },
        { x: '2023/2/3', y: 180 },
        { x: '2023/2/10', y:500 },
        { x: '2023/2/20', y:370 },
        { x: '2023/2/26', y: 560 },
        { x: '2023/3/5', y: 900 },
        { x: '2023/12/15', y:180 },
      ];
      const options = {
        chart: {
          id: 'line-chart',
        },
        xaxis: {
            type: 'datetime',
            labels: {
              style: {
                colors: '#fff',
              },
            },
            title: {
                text: 'Date',
                style: {
                  color: 'rgb(6, 128, 8)',
                  fontSize: '14px',
                },
              },
          },
          yaxis: {
            labels: {
              style: {
                colors: '#fff',
              },
              formatter: (value) => value.toFixed(0),
            },
            title: {
                text: 'weight(kg)',
                style: {
                  color: 'rgb(6, 128, 8)',
                  fontSize: '14px',
                
                },
              },
          },
        colors: ['#a93b05'],
        fill: {
          colors: ['#d36e15'],
          opacity: 0.8,
        },
        
      };
    
      const series = [
        {
          name: 'Series 1',
          data: data.map((item) => ({ x: new Date(item.x), y: item.y })),
        },
      ];
    
      return (
        <div>
            <h2 className='title'>Gas Usage</h2>
        <Chart options={options} series={series} type="area" width="95%" height={450} />
        </div>
      );
    
}
