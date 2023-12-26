import Color from 'color'
import React from 'react'
import toast from 'react-hot-toast'
import { BsBookFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const dispatch = useDispatch()
  
  const logoutHandler= ()=>{
    localStorage.clear()
    navigate('/login')
    toast.success('succesfuly logout')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      
     
            
  <div className="container-fluid">
    
   
    <Link to = "/" className="navbar-brand d-flex" href="#">
      
    <BsBookFill size={'50px'} color='#00dcff' />
    <h2>BookMela</h2>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact Us
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Services
          </a>
        </li>
       
        
      </ul>
      <div class="d-flex ml-auto">
       {localStorage.getItem('token')?  
       ( <Link className="btn btn-outline-success" onClick={logoutHandler}>Logout</Link>)
       :
       (<>
       <Link to = '/login' className="btn btn-outline-success mx-1" >Login</Link>
       <Link to = '/register' className="btn btn-success" >SignUp</Link>
       </>
       )
       }
        
       

        

        


      </div>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar

