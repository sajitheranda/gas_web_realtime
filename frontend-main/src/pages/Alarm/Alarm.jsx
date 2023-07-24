import React, { useState ,useEffect } from 'react'
import Linechart1 from '../../components/linechart1/Linechart1'
import Alarmbutton from '../../gasdetails/alarmbutton/Alarmbutton'
import {gasAppRef} from '../../configuration/firebaseutils';
//import database from '../../configuration/firebase';
import './alarm.css'
import Leakage from '../../gasdetails/leakagetest/Leakage';
import moment from 'moment';
import 'moment-timezone';

export default function Alarm() {
  
  const [alarmval,setalarmval] = useState(1);
  const [starttime,setstarttime] = useState();
  const [endtime,setendtime] = useState();
  const [startweight,setstartweight] = useState();
  const [endweight,setendweight] = useState();
  const [status,setstatus] = useState(0);
  const [currentTime, setCurrentTime] = useState(null);
  const [weight,setweight] = useState(0);

  const [weightdifference,setweightdifference]  = useState(0);
  const [timedifference,settimedifference]  = useState(0);


  useEffect(() => {
    const fetchSriLankaTime = () => {
      const time = moment().tz('Asia/Colombo').valueOf();
      setCurrentTime(time);
    };

    // Fetch the time initially
    fetchSriLankaTime();

    // Set up the interval to update the time every 60 seconds
    const intervalId = setInterval(fetchSriLankaTime, 60000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);



  useEffect(() => {
    const fetchData = () => {
      //const gasAppRef = database.ref('gasapp');
      gasAppRef.on('value', (snapshot) => {
        const dataval = snapshot.val();
        if (dataval) {
          setalarmval(dataval.alarm)
          if(dataval.test.starttime){
            setstarttime(dataval.test.starttime)
          }
          if(dataval.test.endtime){
            setendtime(dataval.test.endtime)
          }
          if(dataval.test.startweight){
            setstartweight(dataval.test.startweight)
          }
          if(dataval.test.endweight){
            setendweight(dataval.test.endweight)
          }

          setstatus(dataval.test.status)
          setweight(dataval.gas)
          
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

  const handlePush = () => {
    const updatedValue = alarmval === 0 ? 1 : 0;
    
    gasAppRef.child('alarm')
      .set(updatedValue)
      .catch(alert);
      
  };


  const handletest=()=>{
    //status === 0 ? 'Start test': status === 1 ? 'End test' : 'Clear test'
    const updatedValue = status === 0 ? 1 : status === 1 ? 2 : 0;

    if(status === 0 && currentTime && weight){
      gasAppRef.child('test').child('starttime').set(currentTime)
      gasAppRef.child('test').child('startweight').set(weight)
    }else if(status === 1 && currentTime && weight){
      gasAppRef.child('test').child('endtime').set(currentTime)
      gasAppRef.child('test').child('endweight').set(weight)
    }else if(status === 2 && starttime && startweight && endtime && endweight ){
      gasAppRef.child('test').child('endtime').set(null)
      gasAppRef.child('test').child('endweight').set(null)
      gasAppRef.child('test').child('starttime').set(null)
      gasAppRef.child('test').child('startweight').set(null)
    }
    
    gasAppRef.child('test').child('status')
      .set(updatedValue)
      .catch(alert);

  };

  useEffect(() => {
    if(starttime && startweight && currentTime && weight){
      settimedifference(currentTime-starttime)
      setweightdifference(startweight - weight)
    }
  }, [starttime,startweight,currentTime,weight]);
  


  return (
    <div className='chart'>
      <div className='alarm'>
        <Alarmbutton alarmval={alarmval} handleClick={handlePush}/>
      </div>
      <div className='leakage'>
        <Leakage status={status} handletest={handletest} time={timedifference} weight={weightdifference}/>
      </div>
    </div>
  )
}

/*<Alarmbutton alarmval={alarmval} handleClick={handlePush}/>*/
