import './chart.css'
import Chartdiagram from '../../components/chartdiagram/Chartdiagram'
import React, { useEffect, useState } from 'react';
import {gasAppRef} from '../../configuration/firebaseutils';
import mergedGasType  from '../../data';
//import database from '../../configuration/firebase';

export default function Chart() {
  const [hashArray, setHashArray] = useState([]);
  const [dataset,setdataset] = useState([]);
  const [type,settype] = useState('regular');

  function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${year}/${month}/${day} ${hours}:${minutes}`;

  }
  
  function padZero(number) {
    return number.toString().padStart(2, '0');
  }

  ////////////////////////////////////// empty tank values
  function valuegas(value,type){
    let val=0;
    let { emptyTank } = mergedGasType[type];
 
    // if (type === 'buddy') {
    //   emptyTank = 1;
    //   val=value - emptyTank;
    // } else if (type === 'budget') {
    //   emptyTank = 4.5;
    //   val=value - emptyTank;
    // } else if (type === 'regular') {
    //   emptyTank = 13.5;
    //   val=value - emptyTank;
    // }
    val=value-emptyTank;
    return val;
  }
  ///////////////////////////////////////////////

  useEffect(() => {
    const fetchData = () => {
      //const gasAppRef = database.ref('gasapp');
      gasAppRef.on('value', (snapshot) => {
        const dataval = snapshot.val();
        if (dataval) {
          const gasTimeArray = Object.values(dataval.gastime);
          setHashArray(gasTimeArray);
          settype(dataval.gas_type)
        }
      });
    };

    fetchData();

    // Clean up the event listener when the component unmounts
    return () => {
      //const gasAppRef = database.ref('gasapp');
      gasAppRef.off();
    };
  }, []);


  useEffect(() => {
    const data = hashArray.map(entry => ({
      //const date = new Date(timestamp * 1000);
      //x: formatDate(entry.time),
      x: entry.time*1000,
      y: valuegas(entry.value,type).toFixed(2)
    }));
    setdataset(data)
  },[hashArray,type])




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
  return (
    <div> 
        <div className='charter'>
          <Chartdiagram data={dataset}/>       
        </div>
    
    </div>
  )
}

//


// const gasTimeArray = Object.values(dataval.gastime);
// setHashArray(gasTimeArray);
/*
<div>{dataset.map((item, index) => (
            <div key={index}>
            <div>Hash: {index}</div>
            <div>x: {item.x}</div>
            <div>y: {item.y}</div>
          </div>
          ))}
        </div>

*/
