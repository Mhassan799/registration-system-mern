import React from 'react'
import Navbar from '../Navbar/Navbar'
import Topbar from '../Topbar/Topbar'
import toast, { Toaster } from 'react-hot-toast';
import Carousal from '../Carousal/Carousal';


const Layout = ({children}) => {
  return (
    <>
     
              <Navbar/>
        <div className="topbar">
          {/* <Topbar/> */}
            <div className="user-menu">

            </div>
        </div>
      
        <main> 
        <Toaster />
    {children} </main>
    </>
  )
}

export default Layout
