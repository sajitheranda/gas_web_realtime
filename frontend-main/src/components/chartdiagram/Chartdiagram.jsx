import React from 'react'
import Chart from 'react-apexcharts';
import './chartdiagram.css'

export default function Chartdiagram({data}) {
    
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
              formatter: (value) => {
                const date = new Date(value);
                const year = date.getFullYear();
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const day = (date.getDate()).toString().padStart(2, '0');;
                const hours = date.getHours().toString().padStart(2, '0');
                const minutes = date.getMinutes().toString().padStart(2, '0');
                //const seconds = date.getSeconds().toString().padStart(2, '0');
                return `${year}/${month}/${day} ${hours}:${minutes}`;
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
