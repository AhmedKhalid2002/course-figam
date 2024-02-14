import React from 'react'
import course from '../../assets/Video.png'
import mask from '../../assets/Mask.png'
import solid from '../../assets/Portrait Solid.png'
export default function CourseDetails() {
  return (
    <div className='container'>
        <div className='mt-4'>
            <p>Development / Mobile Engineer </p>
            <h1>Make Uber Clone App</h1>
            <div className='d-flex'>
                <p className='text-danger'>Steven Arnatouvic</p>
                <span className='ms-3'><i className="fa-solid fa-star text-warning "></i>4.8</span>
            </div>
        </div>
        <div className="row">
            <div className="col-md-8">
                <div>
                    <img src={course} alt="course" className='w-100' />
                </div>
                <ul class="nav  ">
                    <li class="nav-item">
                        <a className="nav-link text-black" >Description</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link text-black" style={{borderBottom:'1px solid #C5322A'}} >Courses</a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link text-black"  >Review</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-4">
                <div className='d-flex'>
                    <h4>US$22.40</h4>
                    <h5 className='text-secondary text-decoration-line-through  m-1 ms-3'>$30.13</h5>
                </div>
                <div className='text-white'  style={{backgroundColor:"#A04AE3",width:"80px"}}>
                    <p>20% OFF</p>
                </div>
                <div >
                    <button className='btn btn-color w-100 text-white '>Buy Now</button>
                    <button className='btn w-100 border mt-3'> <i className="fa-regular fa-heart"></i> Wishlist</button>
                </div>
                <div>
                    <ul className='list-unstyled p-4 text-secondary'>
                        <li><i className="fa-regular fa-clipboard "></i> 22 Section</li>
                        <li><i className="fa-solid fa-book mt-1"></i> 152 Lectures</li>
                        <li><i className="fa-solid fa-tv mt-1"></i> 21h 33m total lenghts</li>
                        <li><i className="fa-solid fa-volume-high mt-1"></i> English</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-8">
                <div className='p-4'>
                    <h5>About Course</h5>
                    <p>Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</p>
                </div>
                <div >
                    <div>
                        <h5>Review</h5>
                        <div className='d-flex align-items-center '>
                            <div>
                                <img src={mask} alt="mask"  />
                            </div>
                            <div className='ms-3'>
                                <h4 className='text-blue'>Leonardo  Da Vinci</h4>
                                <p>Loved the course. I've learned some very subtle tecniques, expecially on leaves.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center '>
                            <div>
                                <img src={mask} alt="mask"  />
                            </div>
                            <div className='ms-3'>
                                <h4 className='text-blue'>Mai  Da Vinci</h4>
                                <p>Loved the course. I've learned some very subtle tecniques, expecially on leaves.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center '>
                            <div>
                                <img src={mask} alt="mask"  />
                            </div>
                            <div className='ms-3'>
                                <h4 className='text-blue'>Leonardo  Da Vinci</h4>
                                <p>Loved the course. I've learned some very subtle tecniques, expecially on leaves.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 d-none d-lg-block ">
                <div>
                    <img src={solid} alt="solid"  />
                </div>
            </div>
        </div>
    </div>
  )
}
