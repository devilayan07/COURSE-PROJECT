import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import "../ApplyCourse/ApplyCourse.css"
import { fetchApply } from '../../../ReduxToolkit/CourseSlice'

function ApplyCourse() {
    const{id}=useParams()
    const dispatch=useDispatch()
    const[user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        city:"",
        address:"",
        qualification:"",
        programing_knowledge:"",
        experiance:""
    })
    const handleChange=(e)=>{
      const{name,value}=e.target
     setUser({...user,[name]:value})
    }

    const handleSubmit=(e)=>{
      e.preventDefault()
      const data={
        
        name:user.name,
        email:user.email,
        phone:user.phone,
        city:user.city,
        address:user.address,
        qualification:user.qualification,
        programing_knowledge:user.programing_knowledge,
        experiance:user.experiance
      }

      dispatch(fetchApply({id,payload:data}))

    }
  return (
    <center style={{marginTop:"80px"}}>
      <div className='course'>
    <form onSubmit={handleSubmit} >
        <h2 style={{textAlign:"center"}}>Course Enrollment Form</h2>
        <label for="name" >Name:</label>
        <input type="text" name="name" id="name" value={user.name} onChange={handleChange} className='sandy' required/>
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        
        <input type="email" name="email" id="email" value={user.email} onChange={handleChange} className='sandy'required/>
        <br />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" value={user.phone} onChange={handleChange} className='sandy' required/>
        <br />
        <br />
        <label htmlFor="city">City:</label>
        <input type="text" name="city" id="city" value={user.city} onChange={handleChange} className='sandy' required/>
        <br />
        <br />
        <label htmlFor="address">Address:</label>
        <textarea name="address" id="address" value={user.address} onChange={handleChange} className='address' required></textarea>
        <br />
        <br />
        <label htmlFor="qualification">Qualification:</label>
        <input type="text" name="qualification" id="qualification" value={user.qualification} onChange={handleChange} className='sandy' required/>
        <br />
        <br />
        <label htmlFor="programing_knowledge">Programing Knowledge:</label>
        <select name="programing_knowledge" id="programing_knowledge" value={user.programing_knowledge} onChange={handleChange} required>
        <option value="">Select One</option>
        <option value="Beginner">c programming</option>
        <option value="Intermediate">Advance Js</option>
        <option value="Advanced">React Js</option>

        </select>
        <br />
        <br />
        <label htmlFor="experiance">Experiance: </label>
      <select
        id="experiance"
        name="experiance"
        value={user.experiance}
        onChange={handleChange}
        required
      >
        <option value="">Select One</option>
        <option value="None">None</option>
        <option value="Basic">6 month</option>
        <option value="Intermediate">1 year</option>
        <option value="Advanced">2 year</option>
      </select>
    <br />
    <br />

   <input type="submit" value="submit" style={{backgroundColor:"green"}} />

    </form>
    </div>
      
    </center>
  )
}

export default ApplyCourse
