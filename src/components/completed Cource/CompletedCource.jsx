import React from 'react'
import co_course1 from '../../assets/co-cource1.png'
import co_course2 from '../../assets/co-cource2.png'
import co_course3 from '../../assets/co-cource3.png'
export default function CompletedCource() {
  return (
    <div className='container mt-4'>
        <h3>Completed your Course</h3>
        <p className='text-secondary text-opacity-50'>We know the best things for You.  Top picks for You.</p>
        <div className="row">
            <div className="col-md-4">
                <img src={co_course1} alt="co-cource1" className='w-100' />
                <div className='p-2'>
                    <h4 >Java Programming Beginner</h4>
                    <div>
                        <i className="fa-solid fa-user-tie me-2"></i>
                        <span className='text-blue'>Kitani Studio</span>
                    </div>
                    <p className='mt-1'>4/10 Videos Completed</p>
                </div>                
            </div>
            <div className="col-md-4">
                <img src={co_course2} alt="co-cource2" className='w-100' />
                <div className='p-2'>
                    <h4 >iOS 13 & Swift 5 - Complete iOS...</h4>
                    <div>
                        <i className="fa-solid fa-user-tie me-2"></i>
                        <span className='text-blue'>Kitani Studio</span>
                    </div>
                    <p className='mt-1'>12/40 Videos Completed</p>
                </div>                
            </div>
            <div className="col-md-4">
                <img src={co_course3} alt="co-cource3" className='w-100' />
                <div className='p-2'>
                    <h4 >Wordpress Course Intermediate</h4>
                    <div>
                        <i className="fa-solid fa-user-tie me-2"></i>
                        <span className='text-blue'>Kitani Studio</span>
                    </div>
                    <p className='mt-1'>3/8 Videos Completed</p>
                </div>                
            </div>
            
        </div>
    </div>
)
}
