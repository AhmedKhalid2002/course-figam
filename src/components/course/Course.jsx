import React from 'react'
import course1 from '../../assets/course1.png'
import course2 from '../../assets/course2.png'
import course3 from '../../assets/course3.png'
import course4 from '../../assets/course4.png'
import course5 from '../../assets/course5.png'
import course6 from '../../assets/course6.png'
import course7 from '../../assets/course7.png'
import course8 from '../../assets/course8.png'
import { Link } from 'react-router-dom'

export default function Course() {
  return (
    <div className='container mt-4'>
        <h2>Trending Course</h2>
        <p className='text-secondary text-opacity-50 '>We know the best things for You.  Top picks for You.</p>
        <div className="row g-4">
            <div className="col-md-3">
                <Link to='/courseDetails'><img src={course1} alt="cource1" className='w-100' /></Link>
                <div className='mt-2'>
                    <h5 >UI DESIGN FOR BEGINNERS</h5>
                    <div>
                        <i className="fa-solid fa-user-tie me-2"></i>
                        <span className='text-blue'>Kitani Studio</span>
                    </div>
                    <p className='mt-1'>Learn how to make web application with Vue.js Framework.</p>
                </div> 
                <div >
                    <i className="fa-solid fa-star text-warning "></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                </div>
                <div className='d-flex '>
                    <p className='h4'>$24.92</p>
                    <p className='text-decoration-line-through h4 ms-3 text-secondary text-opacity-50 '>$32.90</p>
                </div>
            </div>
            <div className="col-md-3">
                <Link to='/courseDetails'><img src={course2} alt="cource1" className='w-100' /></Link>
                <div className='mt-2'>
                    <h5 >MOBILE DEV REACT NATIVE</h5>
                    <div>
                        <i className="fa-solid fa-user-tie me-2"></i>
                        <span className='text-blue'>Kitani Studio</span>
                    </div>
                    <p className='mt-1'>More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...</p>
                </div> 
                <div >
                    <i className="fa-solid fa-star text-warning "></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                </div>
                <div className='d-flex '>
                    <p className='h4'>$24.92</p>
                    <p className='text-decoration-line-through h4 ms-3 text-secondary text-opacity-50 '>$32.90</p>
                </div>
            </div>
            <div className="col-md-3">
                <Link to='/courseDetails'><img src={course3} alt="cource1" className='w-100' /></Link>
                <div className='mt-2'>
                    <h5 >WEBSITE DEV ZERO TO HERO</h5>
                    <div>
                        <i className="fa-solid fa-user-tie me-2"></i>
                        <span className='text-blue'>Kitani Studio</span>
                    </div>
                    <p className='mt-1'>Learn how to make web application with Vue.js Framework.</p>
                </div> 
                <div >
                    <i className="fa-solid fa-star text-warning "></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                </div>
                <div className='d-flex '>
                    <p className='h4'>$24.92</p>
                    <p className='text-decoration-line-through h4 ms-3 text-secondary text-opacity-50 '>$32.90</p>
                </div>
            </div>
            <div className="col-md-3">
                <Link to='/courseDetails'><img src={course4} alt="cource1" className='w-100' /> </Link>
                <div className='mt-2'>
                    <h5 >Adobe Illustrator Scretch Course</h5>
                    <div>
                        <i className="fa-solid fa-user-tie me-2"></i>
                        <span className='text-blue'>Kitani Studio</span>
                    </div>
                    <p className='mt-1'>Learn how to make web application with Vue.js Framework.</p>
                </div> 
                <div >
                    <i className="fa-solid fa-star text-warning "></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                </div>
                <div className='d-flex '>
                    <p className='h4'>$24.92</p>
                    <p className='text-decoration-line-through h4 ms-3 text-secondary text-opacity-50 '>$32.90</p>
                </div>
            </div>
            <div className="col-md-3">
                <Link to='/courseDetails'><img src={course5} alt="cource1" className='w-100' /> </Link>
                <div className='mt-2'>
                    <h5 >Bootcamp  Vue.js Web Framework</h5>
                    <div>
                        <i className="fa-solid fa-user-tie me-2"></i>
                        <span className='text-blue'>Kitani Studio</span>
                    </div>
                    <p className='mt-1'>Learn how to make web application with Vue.js Framework.</p>
                </div> 
                <div >
                    <i className="fa-solid fa-star text-warning "></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                </div>
                <div className='d-flex '>
                    <p className='h4'>$24.92</p>
                    <p className='text-decoration-line-through h4 ms-3 text-secondary text-opacity-50 '>$32.90</p>
                </div>
            </div>
            <div className="col-md-3">
                <Link to='/courseDetails'><img src={course6} alt="cource1" className='w-100' /></Link>
                <div className='mt-2'>
                    <h5 >Design Fundamentals</h5>
                    <div>
                        <i className="fa-solid fa-user-tie me-2"></i>
                        <span className='text-blue'>Kitani Studio</span>
                    </div>
                    <p className='mt-1'>Learn how to make web application with Vue.js Framework.</p>
                </div> 
                <div >
                    <i className="fa-solid fa-star text-warning "></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                </div>
                <div className='d-flex '>
                    <p className='h4'>$24.92</p>
                    <p className='text-decoration-line-through h4 ms-3 text-secondary text-opacity-50 '>$32.90</p>
                </div>
            </div>
            <div className="col-md-3">
                <Link to='/courseDetails'><img src={course7} alt="cource1" className='w-100' /></Link>
                <div className='mt-2'>
                    <h5 >Ionic - Build iOS, Android & Web...</h5>
                    <div>
                        <i className="fa-solid fa-user-tie me-2"></i>
                        <span className='text-blue'>Kitani Studio</span>
                    </div>
                    <p className='mt-1'>Learn how to make web application with Vue.js Framework.</p>
                </div> 
                <div >
                    <i className="fa-solid fa-star text-warning "></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                </div>
                <div className='d-flex '>
                    <p className='h4'>$24.92</p>
                    <p className='text-decoration-line-through h4 ms-3 text-secondary text-opacity-50 '>$32.90</p>
                </div>
            </div>
            <div className="col-md-3">
                <Link to='/courseDetails'><img src={course8} alt="cource1" className='w-100' /></Link>
                <div className='mt-2'>
                    <h5 >VUE JS SCRATCH COURSE</h5>
                    <div>
                        <i className="fa-solid fa-user-tie me-2"></i>
                        <span className='text-blue'>Kitani Studio</span>
                    </div>
                    <p className='mt-1'>Learn how to make web application with Vue.js Framework.</p>
                </div> 
                <div >
                    <i className="fa-solid fa-star text-warning "></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                </div>
                <div className='d-flex '>
                    <p className='h4'>$24.92</p>
                    <p className='text-decoration-line-through h4 ms-3 text-secondary text-opacity-50 '>$32.90</p>
                </div>
            </div>
        </div>
    </div>
  )
}
