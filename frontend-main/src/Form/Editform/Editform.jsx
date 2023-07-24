import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './editform.css'

export default function Editform() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date:'',
        time:'',
        gasType: 'buddy',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
        // Reset the form fields
        setFormData({
          name: '',
          email: '',
          date:'',
          time:'',
          gasType: 'buddy',
        });
      };
    
      return (
        <div className="contain_form">
        <div className='imager'>
            
        </div>
        <div className='former'>
        <div className="container">
          <h2 className='title_head'>User Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
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
                required
              />
            </div>
            <div className="mb-3">
          <label htmlFor="gasType" className="form-label">
            Type of gas:
          </label>
          <select
            name="gasType"
            value={formData.gasType}
            onChange={handleChange}
            className="form-control"
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
            required
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
            required
          />
        </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
        </div>
        </div>
      );
}
