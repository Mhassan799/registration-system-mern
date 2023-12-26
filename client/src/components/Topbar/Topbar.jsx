import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Topbar = () => {
  return (
    <>
      <div className="top ">
                <div className="container">
            <div className="icons  ">
                <ul className='d-flex'>
            <li>
            <BsInstagram /></li>
            <li>
            <BsFacebook /></li>
            <li>
            <BsLinkedin /></li>
            <li>
            <BsTwitter /></li>
            </ul>
            </div></div>
            </div>
    </>
  )
}

export default Topbar
