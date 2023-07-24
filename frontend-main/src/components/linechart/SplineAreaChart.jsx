import React from 'react';
//import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Text } from 'recharts';
import './spinearechart.css'
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';
import { parse, format } from 'date-fns';
//import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from 'recharts';


export default function SplineAreaChart() {
  const data = [
    { month: parse('2022/12/12', 'yyyy/MM/dd', new Date()), value: 400 },
    { month: parse('2022/12/13', 'yyyy/MM/dd', new Date()), value: 300 },
    { month: parse('2022/12/13', 'yyyy/MM/dd', new Date()), value: 600 },
    { month: parse('2023/1/5', 'yyyy/MM/dd', new Date()), value: 800 },
    { month: parse('2023/1/12', 'yyyy/MM/dd', new Date()), value: 700 },
    { month: parse('2023/1/16', 'yyyy/MM/dd', new Date()), value: 900 },
    { month: parse('2023/1/18', 'yyyy/MM/dd', new Date()), value: 900 },
    { month: parse('2023/1/24', 'yyyy/MM/dd', new Date()), value: 900 },
    { month: parse('2023/1/28', 'yyyy/MM/dd', new Date()), value: 900 },
    { month: parse('2023/2/3', 'yyyy/MM/dd', new Date()), value: 900 },
    { month: parse('2023/2/10', 'yyyy/MM/dd', new Date()), value: 900 },
    { month: parse('2023/2/20', 'yyyy/MM/dd', new Date()), value: 900 },
    { month: parse('2023/2/26', 'yyyy/MM/dd', new Date()), value: 900 },
    { month: parse('2023/3/5', 'yyyy/MM/dd', new Date()), value: 900 },
    { month: parse('2023/12/15', 'yyyy/MM/dd', new Date()), value: 900 },
  ];
      return (
      <div>
      <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickFormatter={(tickValue) => format(tickValue, 'MMM dd yyyy')}
          tick={{ fill: '#fff' }}
        />
        <YAxis tick={{ fill: '#fff' }} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="rgb(144, 53, 186)" fill="rgb(144, 53, 186)" />
      </LineChart>
    </ResponsiveContainer>
    </div>
        );
}

//type="monotone"
//type="linear"

/*{ <ResponsiveContainer width="100%" height={400}>
<AreaChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis
    dataKey="month"
    tickFormatter={(tickValue) => format(tickValue, 'MMM dd yyyy')}
    tick={{ fill: '#fff' }}
  />
  <YAxis tick={{ fill: '#fff' }} />
  <Tooltip />
  <defs>
    <linearGradient id="areaChartGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#d36e15" stopOpacity={0.9} />
      <stop offset="95%" stopColor="#d36e15" stopOpacity={0} />
    </linearGradient>
  </defs>
  <Area type="monotone" dataKey="value" stroke="rgb(144, 53, 186)" fill="url(#areaChartGradient)" />
</AreaChart>
</ResponsiveContainer> }*/
