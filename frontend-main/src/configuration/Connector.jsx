// import React from 'react'
// import database from './firebase';
// import { useState } from 'react';

// export default function Connector() {
//     const [name, setName] = useState();
//     const [age, setAge] = useState();
 
//     // Push Function
//     const Push = () => {
//         database.ref("user").set({
//             name: name,
//             age: age,
//         }).catch(alert);
//     }
 
//     return (
//         <div className="App" style={{ marginTop: 250 }}>
//             <center>
//                 <input placeholder="Enter your name" value={name}
//                     onChange={(e) => setName(e.target.value)} />
//                 <br /><br />
//                 <input placeholder="Enter your age" value={age}
//                     onChange={(e) => setAge(e.target.value)} />
//                 <br /><br />
//                 <button onClick={Push}>PUSH</button>
//             </center>
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import database from './firebase';

export default function Connector() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await database.ref('user').once('value');
      const userData = snapshot.val();
      if (userData) {
        setName(userData.name);
        setAge(userData.age);
      }
    };

    fetchData();
  }, []);

  const handlePush = () => {

    const ageValue = parseInt(age, 10); // Parse age as an integer
    if (Number.isNaN(ageValue)) {
      alert('Please enter a valid age.');
      return;
    }
    database
      .ref('user')
      .set({
        name: name,
        age: age,
      })
      .catch(alert);
  };

  return (
    <div className="App" style={{ marginTop: 20 }}>
      <center>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Enter your age"
          value={age}
          type="number"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handlePush}>PUSH</button>
      </center>
    </div>
  );
}
