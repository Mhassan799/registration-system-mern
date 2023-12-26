import React, { useState } from 'react'
import './Register.css'
import Layout from '../Layout/Layout'
import { BsEnvelopeFill, BsFileEarmarkPerson, BsPhone, BsUnlockFill } from 'react-icons/bs'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Register = () => {
  const [name, setName]= useState('')
  const [email, setEmail]= useState('') 
  const [phone, setPhone]= useState('') 
  const [password, setPassword]= useState('') 
  const [cpassword, setCpassword]= useState('') 


  const navigate = useNavigate()
  const submitHandler = async (e) =>{
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/user/signup',{
        name,email,phone,password,cpassword
      })
      console.log(res.data)
      if(res.status >= 200 && res.status < 300){
        console.log("Success toast called")
        toast.success('registered successfully')
        navigate('/login')
      }
    
    } catch (error) {
      console.log(error)
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  }



  return (
    <Layout>
    <>
       <div className="main-block my-5">
  <h1>Registration</h1>
  <form onSubmit={submitHandler}>
    <hr />
    
    <hr />
    <label id="icon"><BsFileEarmarkPerson /></label>
    <input type="text"   placeholder="Name" 
    value={name} onChange={(e)=> setName(e.target.value)}
    />
    
    <label id="icon" ><BsEnvelopeFill /></label>
    <input type="email"  placeholder="Email"  
    value={email} onChange={(e)=> setEmail(e.target.value)}
    />
     <label id="icon" ><BsPhone /></label>
    <input type="text"   placeholder="Phone"  
    value={phone} onChange={(e)=> setPhone(e.target.value)}
   required />
    <label id="icon" ><BsUnlockFill /></label>
    <input type="password"   placeholder="Password" 
    value={password} onChange={(e)=> setPassword(e.target.value)}
    
    />
    <label id="icon" ><BsPhone /></label>
    <input type="text"   placeholder="Confirm Password" required
    value={cpassword} onChange={(e)=> setCpassword(e.target.value)}
    
    />
    <hr />
    
    <hr />
    <div className="btn-block">
    <p>If you already have an acoount click <Link to= '/login'>here</Link>  to login</p>
      <button type="submit" >Register</button>
    </div>
  </form>
</div>

    </>
    </Layout>
  )
}

export default Register
