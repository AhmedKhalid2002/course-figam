import React from 'react'
import style from './Landing.module.css'
export default function Landing() {
  return (
    <div className={style.landing}>
        <div className='vh-100 d-flex flex-column justify-content-center p-5'>
            <div>
                <h1>Learn something new everyday.</h1>
                <p className='text-secondary text-opacity-50 h5'>Become professionals and ready to join the world.</p>
            </div>
            <div className='mt-3'>
                <button className='btn btn-light fw-medium text-blue'>Browser course</button>
                <button className={`${style.bgBlue} btn text-white fw-medium ms-3 `}>Start make your account</button>
            </div>
        </div>
    </div>
  )
}
