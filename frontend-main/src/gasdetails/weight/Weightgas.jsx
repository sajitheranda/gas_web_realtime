// import React, { useEffect, useState } from 'react';
// import './weightgas.css'
// import database from '../../configuration/firebaseutils';
// import moment from 'moment';
// import 'moment-timezone';

// export default function Weightgas() {
//     const [remain_day,setremain_day] = useState(0);
//     const [gas_weight,setgas_weight] = useState(0);
//     const [finish_date,setfinish_date] = useState('Sun, Nov 21, 2021');
//     const [currentTime, setCurrentTime] = useState(null);

//     useEffect(() => {
//         const fetchSriLankaTime = () => {
//           const time = moment().tz('Asia/Colombo').valueOf();
//           setCurrentTime(time);
//         };
    
//         fetchSriLankaTime();
//       }, []);

//     useEffect(() => {
//         const fetchData = () => {
//           const ref = database.ref('gasapp');
//           ref.on('value', (snapshot) => {
//             const data = snapshot.val();
//             if (data) {
//                 let gas=data.gas;
//                 let startdate=data.date;
//                 let starttime=data.time;
//                 let gasType=data.gas_type;

//                 if(gasType){
//                     let onlyGas;
//                     let emptyTank;
//                     if (gasType === 'buddy') {
//                         onlyGas = 10;
//                         emptyTank = 1;
//                         setgas_weight(gas-emptyTank);
//                       } else if (gasType === 'budget') {
//                         onlyGas = 10;
//                         emptyTank = 4.5;
//                         setgas_weight(gas-emptyTank);
//                       } else if (gasType === 'regular') {
//                         onlyGas = 12.5;
//                         emptyTank = 13.5;
//                         setgas_weight(gas-emptyTank);
//                       } else {
//                         setgas_weight(0);
//                       }
//                 }

//                 if(startdate && starttime && currentTime){
//                     let totaltime=startdate+starttime;
                           


//                 }
//             }
//           });
//         };
    
//         fetchData();
    
//         // Clean up the event listener when the component unmounts
//         return () => {
//           const ref = database.ref('gasapp');
//           ref.off();
//         };
//       }, [currentTime]);




//     const milliseconds = 1637457200000; // Example milliseconds value
//     const date = new Date(milliseconds);
//     const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
//     const formattedDate = date.toLocaleDateString('en-US', options);

//   return (
//     <div className='weightgas'>
//     <div className='square'>
//         <span className='title'>Remain Days : </span>
//         <span className='value'>10</span>
//     </div>
//     <div className='square'>
//         <span className='title'>Gas weight : </span>
//         <span className='value'>{gas_weight.toFixed(2)} kg</span>
//     </div>
//     <div className='square'>
//         <span className='title'>Finished Date : </span>
//         <span className='value'>{formattedDate}</span>
//     </div>
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react';
import './weightgas.css'
import { gasAppRef } from '../../configuration/firebaseutils';
import moment from 'moment';
import 'moment-timezone';

export default function Weightgas({gas_weight =0,finish='no data',remain_day='no data'}) {

    // const milliseconds = 1637457200000; // Example milliseconds value
    // const date = new Date(milliseconds);
    // const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    // const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className='weightgas'>
    <div className='square'>
        <span className='title'>Remain Days : </span>
        <span className='value'>{remain_day}</span>
    </div>
    <div className='square'>
        <span className='title'>Gas weight : </span>
        <span className='value'>{gas_weight.toFixed(2)} kg</span>
    </div>
    <div className='square'>
        <span className='title'>Finished Date : </span>
        <span className='value'>{finish}</span>
    </div>
    </div>
  )
}
