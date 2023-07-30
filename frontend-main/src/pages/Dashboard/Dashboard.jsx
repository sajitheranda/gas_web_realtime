import Gaspercentage from '../../gasdetails/gaspercentage/Gaspercentage'
import Weightgas from '../../gasdetails/weight/Weightgas'
import './dashboard.css'
import React, { useEffect, useState } from 'react';
import {gasAppRef} from '../../configuration/firebaseutils';
import moment from 'moment';
import 'moment-timezone';
import mergedGasType from '../../data'; 


export default function Dashboard() {
  const [percentage, setPercentage] = useState(0);
  const [gas, setGas] = useState(0);
  const [gasType, setGasType] = useState('buddy');
  const [remain_day,setremain_day] = useState(0);
  const [gas_weight,setgas_weight] = useState(0);
  const [finish_date,setfinish_date] = useState('Sun, May 21, 2023');
  const [startdate, setstartdate] = useState(0);
  const [starttime, setstarttime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  function convertMillisecondsToDaysAndHours(milliseconds) {
    const millisecondsInADay = 24 * 60 * 60 * 1000;
    const millisecondsInAnHour = 60 * 60 * 1000;
  
    const days = Math.floor(milliseconds / millisecondsInADay);
    const hours = Math.floor((milliseconds % millisecondsInADay) / millisecondsInAnHour);
  
    return `${days} days ${hours} hours`;
  }


  useEffect(() => {
    const fetchData = () => {
      gasAppRef.on('value', (snapshot) => {
        const dataval = snapshot.val();
        if (dataval) {
          setGas(dataval.gas);
          setGasType(dataval.gas_type);
          setstartdate(dataval.date);
          setstarttime(dataval.time);
        }
      });
    };

    fetchData();

    // Clean up the event listener when the component unmounts
    return () => {
      gasAppRef.off();
    };
  }, []);

  useEffect(() => {
    const fetchSriLankaTime = () => {
      const time = moment().tz('Asia/Colombo').valueOf();
      setCurrentTime(time);
    };

    fetchSriLankaTime();
  }, []);

  useEffect(() => {
    if (gas && gasType) {
      let per;
      // let onlyGas = 10;
      // let emptyTank = 1;
      // if (gasType === 'buddy') {
      //   onlyGas = 10;
      //   emptyTank = 1;
      // } else if (gasType === 'budget') {
      //   onlyGas = 10;
      //   emptyTank = 4.5;
      // } else if (gasType === 'regular') {
      //   onlyGas = 12.5;
      //   emptyTank = 13.5;
      // }
      const { onlyGas, emptyTank } = mergedGasType[gasType];

      per = Math.floor(((gas - emptyTank) / onlyGas) * 100);

      if (0 <= per && per <= 100) {
        setPercentage(per);
      }else if(per < 0){
        setPercentage(0);
      }else if(per > 100){
        setPercentage(100);
      }
    }
  }, [gas, gasType]);



  useEffect(() => {
    // let onlyGas;
    // let emptyTank;
    // if(gasType){  
    //   if (gasType === 'buddy') {
    //     onlyGas = 10;
    //     emptyTank = 1;
    //     setgas_weight(gas-emptyTank);
    //   } else if (gasType === 'budget') {
    //     onlyGas = 10;
    //     emptyTank = 4.5;
    //     setgas_weight(gas-emptyTank);
    //   } else if (gasType === 'regular') {
    //     onlyGas = 12.5;
    //     emptyTank = 13.5;
    //     setgas_weight(gas-emptyTank);
    //   } else {
    //     setgas_weight(0);
    //   }
    //   }
    let { onlyGas, emptyTank } = mergedGasType[gasType];
    if(gas-emptyTank>=0){
      setgas_weight(gas-emptyTank);
    }else{
      setgas_weight(-1);
    }
    

    if(currentTime && onlyGas){
      let totaltime=startdate+starttime;
      let finish=totaltime+((currentTime-totaltime)/(onlyGas-gas_weight))*onlyGas;
      let date = new Date(finish);
      let options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
      let formattedDate = date.toLocaleDateString('en-US', options);
      setfinish_date(formattedDate);
      //setfinish_date(gas);

      let remain_time=finish-currentTime;
      setremain_day(convertMillisecondsToDaysAndHours(remain_time))
    }
                       
        
  }, [currentTime,gas_weight,gasType,startdate,starttime,gas]);



  return (
    <div className='dash'>
      <div className='percentage'>
        <Gaspercentage percentage={percentage}/>
      </div>
      <div className='weightgas'>
        <Weightgas gas_weight ={gas_weight}  finish={finish_date} remain_day={remain_day}/>
      </div>
      
    </div>
  )
}
