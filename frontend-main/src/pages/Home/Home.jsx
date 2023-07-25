import React, { useEffect, useState } from 'react';
import {gasAppRef} from '../../configuration/firebaseutils';
import Editform from '../../Form/Editform/Editform'
import Showform from '../../Form/Showform/Showform';

export default function Home() {

  const intialform={  name: '',email: '',date:'',time:'',gasType: 'buddy',};
  const [formData,setFormData]=useState(intialform);
  const [isediting,setisediting]=useState(false);
  const [timemill,settimemill]=useState(100);
  const [datemill,setdatemill]=useState(100);

  useEffect(() => {
    const fetchData = () => {
      gasAppRef.on('value', (snapshot) => {
        const dataval = snapshot.val();
        if (dataval) {
          setFormData((prevData) => ({
            ...prevData,
            name: dataval.name,
            email: dataval.email,
            gasType: dataval.gas_type,
          }));
        }

        settimemill(dataval.time)
        setdatemill(dataval.date)
      });
    };

    fetchData();

    // Clean up the event listener when the component unmounts
    return () => {
      gasAppRef.off();
    };
  }, []);

  useEffect(() => {
    const dateObject = new Date(datemill);

    /////////////// date
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
    const dater = `${year}-${month}-${day}`;
    //////////////

    //////////////// make time
    // const hours = String(timeObject.getHours()).padStart(2, '0');
    // const minutes = String(timeObject.getMinutes()).padStart(2, '0');
    // const timer = `${hours}:${minutes}`;

    const hours = Math.floor(timemill / (1000 * 60 * 60));
    const minutes = Math.floor((timemill % (1000 * 60 * 60)) / (1000 * 60));
    const  timer = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    //////////////

    setFormData((prevData) => ({
      ...prevData,
      date :dater,
      time :timer,
    }));


  }, [timemill,datemill]);

  const handleEdit = () => {
    setisediting(!isediting);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    // Save the edited form data here (e.g., update API, etc.)
    setisediting(false);
  };

  const handleChangeform = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };

  const saveClick=()=>{
    //let updatedValue=0;
    //gasAppRef.child('alarm').set(updatedValue).catch(alert);
    let dateString = formData.date;
    let [year, month, day] = dateString.split("-");
    let millidate = new Date(year, month - 1, day).getTime();  
    ///////////// Calculate milliseconds
    let  timeString = formData.time;
    let [hour, minute] = timeString.split(":");
    let  millitime  = hour * 60 * 60 * 1000 + minute * 60 * 1000;


    /// save data
    gasAppRef.child('name').set(formData.name).catch(alert);
    gasAppRef.child('email').set(formData.email).catch(alert);
    gasAppRef.child('date').set(millidate).catch(alert);
    gasAppRef.child('time').set(millitime).catch(alert);
    gasAppRef.child('gas_type').set(formData.gasType).catch(alert);
    setisediting(false);
  }

  const cancelClick=()=>{
    setisediting(false);
  }





  return (
    <div>
      <Showform formData={formData}  handleChange={handleChangeform} 
      isediting={isediting} handleClick={handleEdit} saveClick={saveClick}
       cancelClick={cancelClick}/>
    </div>
  )
}
