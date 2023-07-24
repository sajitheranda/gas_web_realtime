import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './showform.css'

export default function Showform({handleClick,isediting=true,formData,handleChange,saveClick,cancelClick}) {
    // const [formData, setFormData] = useState({
    //     name: 'abc',
    //     email: 'abc@gmail.com',
    //     date:'2023-12-23',
    //     time:'00:00',
    //     gasType: 'buddy',
    // });

   

    return (
        <div className="contain_form">
            <div className='imager'>
                
            </div>
            <div className='former'>
                <div className="container">
                    <h2 className='title_head'>User Details</h2>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control"
                            disabled={!isediting} // Disable the input field to prevent editing
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            disabled={!isediting} // Disable the input field to prevent editing
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gasType" className="form-label">
                            Type of gas
                        </label>
                        <select
                            name="gasType"
                            value={formData.gasType}
                            onChange={handleChange}
                            className="form-control"
                            disabled={!isediting} // Disable the select field to prevent editing
                        >
                            <option value="buddy">buddy</option>
                            <option value="budget">budget</option>
                            <option value="regular">regular</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">
                            Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="form-control"
                            disabled={!isediting} // Disable the input field to prevent editing
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="time" className="form-label">
                            Time
                        </label>
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="form-control"
                            disabled={!isediting} // Disable the input field to prevent editing
                        />
                    </div>

                    


                    <div>
                        {isediting ? (<div>
                                        <button type="submit" className="save_btn" onClick={saveClick} >
                                          Save
                                        </button>
                                        <button type="button" className="cansel_btn" onClick={cancelClick} >
                                          Cancel
                                        </button>
                                      </div>)
                          :(<button onClick={handleClick} className="edit_btn">Edit Form</button>)}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
