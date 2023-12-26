import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import '../Register/Register.css'
import { BsEnvelopeFill, BsUnlockFill } from 'react-icons/bs'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../../redux/features/AlertSlice'
import toast from 'react-hot-toast'

const Login = () => {
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch()

  
  const submitHandler = async (e) => {
    e.preventDefault();
  
    try {
      dispatch(showLoading());
      const res = await axios.post('http://localhost:8080/api/user/login', {
        email,
        password,
      });
      dispatch(hideLoading());
  
      // Assuming the backend returns a token for a successful login
      localStorage.setItem('token', res.data.token);
      console.log("Success toast called")
      toast.success('Login successful');
      navigate('/');
    } catch (error) {
      dispatch(hideLoading());
    
      console.error(error);
    
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
    
  };
  

  return (
    <>
        <Layout>
        <div className="main-block my-5">
  <h1>Login</h1>
  <form onSubmit={submitHandler}>
    <hr />
    

    <label id="icon"><BsEnvelopeFill /></label>
    <input type="email"   placeholder="Email" 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    required  />
    <label id="icon" ><BsUnlockFill /></label>
    <input type="password" placeholder="Password"  
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
    required />
    <hr />
    
    <hr />
    <div className="btn-block">
      <p>If you have not regitered <Link to= '/register'>Register</Link>   First to login</p>
      <button type="submit">Login</button>
    </div>
  </form>
</div>
        </Layout>
    </>
  )
}

export default Login
