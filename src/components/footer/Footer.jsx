import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='bg-black mt-5 p-5'>
        <div className="container p-5">
            <div className="row ">
                <div className="col-md-3">
                    <Link to="" className='navbar-brand text-white fs-5 '><img src={logo} alt="log" /> MyCourse.io</Link>
                </div>
                <div className="col-md-3">
                    <ul className='text-white list-unstyled '>
                        <li>Web Programming</li>
                        <li>Mobile Programming</li>
                        <li>Java Beginner</li>
                        <li>PHP Beginner</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className='text-white list-unstyled '>
                        <li>Adobe Illustrator</li>
                        <li>Adobe Photoshop</li>
                        <li>Java Beginner</li>
                        <li>Design Logo</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className='text-white list-unstyled '>
                        <li>Writing Course</li>
                        <li>Photography</li>
                        <li>Video Making</li>
                    </ul>
                </div>
            </div>
            <hr className='text-white '/>
            <div className='d-flex justify-content-between '>
                <p>Copyright © MyCourse.io 2024. All Rights Reserved</p>
                <div >
                    <i class="fa-brands fa-facebook-f fs-4"></i>
                    <i class="fa-brands fa-twitter fs-4 mx-3"></i>   
                    <i class="fa-brands fa-instagram fs-4"></i>            
                </div>
            </div>
        </div>
        
    </div>
  )
}
