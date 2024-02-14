import React from 'react'
import instructor1 from '../../assets/Instructor1.png'
import instructor2 from '../../assets/Instructor2.png'
import instructor3 from '../../assets/Instructor3.png'
import instructor4 from '../../assets/Instructor4.png'

export default function Instructor() {
  return (
    <div className='container mt-4'>
    <h3>Popular Instructor</h3>
    <p className='text-secondary text-opacity-50'>We know the best things for You.  Top picks for You.</p>
    <div className="row">
        <div className="col-md-3">
            <img src={instructor1} alt="co-cource1" className='w-100' />          
        </div>
        <div className="col-md-3">
            <img src={instructor2} alt="co-cource2" className='w-100' />

        </div>
        <div className="col-md-3">
            <img src={instructor3} alt="co-cource3" className='w-100' />
        </div>
        <div className="col-md-3">
            <img src={instructor4} alt="co-cource3" className='w-100' />
        </div>
    </div>
</div>
  )
}
