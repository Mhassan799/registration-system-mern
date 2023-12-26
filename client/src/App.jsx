import { useState } from 'react'


import { useSelector } from 'react-redux'
import Spinner from './components/Spinner/Spinner'
import { showLoading,hideLoading } from './redux/features/AlertSlice'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './components/Register/Register'
import Homepage from './components/pages/Homepage/Homepage'
import Login from './components/Login/Login'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import PublicRoutes from './components/PublicRoutes/PublicRoutes'



function App() {
  const { loading } = useSelector((state) => state.alerts)
  const [count, setCount] = useState(0)

  return (
   
    <>
    
      <Router basename='/'>
      <Routes>
      <Route path = '/' element=
      {<ProtectedRoutes>
      <Homepage/>
      </ProtectedRoutes>}
     />
        

      
      <Route path = '/register' element= 
      {<PublicRoutes>
      <Register/> 
      </PublicRoutes>}
       />

      <Route path = '/login' element= 
      {<PublicRoutes>
      <Login/> 
      </PublicRoutes>}
       />


      
      </Routes>
      </Router>
    
    </>
   
  )
}

export default App
