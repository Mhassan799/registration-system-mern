import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'

import axios from 'axios'
import { Link } from 'react-router-dom'
import Carousal from '../../Carousal/Carousal'

const Homepage = () => {
  const [books,setBooks]=useState([])
  const getAllBook = async()=>{
    try{
      const res = await axios.get('http://localhost:8080/api/book/get-books');
      setBooks(res.data.book)
      console.log(res.data.book)
    }
    catch(error){
      console.log(error)
      console.log("error h")
    }
  }


  useEffect(() => {
    getAllBook();
  }, [])
  return (
    <Layout>
    <>
      
    <Carousal/>
    <div className="container mx-auto">
      <div className="col-md-9">
        <h1 className='text-center'>All Books</h1>
        <div className="d-flex">
        {books?.map((b) => {
  return (
    <Link
      key={b._id}
      //  to={`/dashboard/admin/products/${b.slug}`}
      className="product-link"
    >
      <div className="card m-2" style={{ width: "18rem" }}>
        <img src={`http://localhost:8080/api/book/get-photo/${b._id}`} className="card-img-top" alt={b.name} style={{height: "18rem"}}/>

        <div className="card-body">
          <h5 className="card-title">{b.name}</h5>
          <p className="card-text">{b.description}</p>
        </div>
      </div>
    </Link>
  );
})}
        </div>
      </div>
      </div>
    </></Layout>
  )
}

export default Homepage
