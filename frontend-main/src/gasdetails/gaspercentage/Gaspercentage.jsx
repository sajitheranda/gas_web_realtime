
import Circularbar from '../../components/circularbar/Circularbar'
import './gaspercentage.css'
import React, { useEffect, useState } from 'react';
//import database from '../../configuration/firebase';
import { gasAppRef } from '../../configuration/firebaseutils';


// export default function Gaspercentage() {
//   const [percentage, setPercentage] = useState(10);
//   const [gas, setGas] = useState(0);
//   const [gasType, setGasType] = useState('buddy');

//   useEffect(() => {
    
//     const gasAppRef = database.ref('gasapp'); // Extracted database reference

//     const fetchData = () => {
//       gasAppRef.on('value', (snapshot) => {
//         const dataval = snapshot.val();
//         if (dataval) {
//           setGas(dataval.gas);
//           setGasType(dataval.gas_type);
//         }
//       });
//     };

//     fetchData();

//     // Clean up the event listener when the component unmounts
//     return () => {
//       gasAppRef.off();
//     };
//   }, []);

//   useEffect(() => {
//     if (gas && gasType) {
//       let per;
//       let onlyGas = 10;
//       let emptyTank = 1;
//       if (gasType === 'buddy') {
//         onlyGas = 10;
//         emptyTank = 1;
//       } else if (gasType === 'budget') {
//         onlyGas = 10;
//         emptyTank = 4.5;
//       } else if (gasType === 'regular') {
//         onlyGas = 12.5;
//         emptyTank = 13.5;
//       }

//       per = Math.floor(((gas- emptyTank) / onlyGas) * 100);
//       //alert(per.toString())

//       if (0 <= per && per <= 100) {
//         setPercentage(per);
//       }
//     }

//   },[gas,gasType]);


//   return (
//     <div className='gaspercentage'>
//       <div className='headtext'>Gas percentage</div>
//       <div>
//         <Circularbar percentage={percentage} size={300} strokeWidth={20} />
//       </div>
//     </div>
//   );
// }


export default function Gaspercentage({percentage}) {
  

  return (
    <div className='gaspercentage'>
      <div className='headtext'>Remaining Gas percentage</div>
      <div>
        <Circularbar percentage={percentage} size={300} strokeWidth={20} />
      </div>
    </div>
  );
}