import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import portfolio from '../../assets/portfolio.png'
import cart from '../../assets/cart.png'
import notification from '../../assets/notification.png'
export default function Navbar() {
return(
    <>
        <nav className="navbar navbar-expand-lg  ">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={logo} alt="log" /> MyCourse.io</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-black " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Browser
                    </a>
                    <ul className="dropdown-menu p-2" style={{width:'400px'}}>
                        <li>
                            <a className="h5 text-decoration-none " href="#">Design</a>
                            <p className='text-secondary '>All About Design Course</p>
                        </li>
                        <hr />
                        <li>
                            <a className="h5 text-decoration-none" href="#">Programming</a>
                            <p className='text-secondary '>Website and Mobile Programming</p>
                        </li>
                        <hr />
                        <li>
                            <a className="h5 text-decoration-none" href="#">Business & Marketing</a>
                            <p className='text-secondary '>Website and Mobile Programming</p>
                        </li>
                        <hr />
                        <li>
                            <a className="h5 text-decoration-none" href="#">Photo & vidieo</a>
                            <p className='text-secondary '>Website and Mobile Programming</p>
                        </li>
                        <hr />
                        <li>
                            <a className="h5 text-decoration-none" href="#">Writing</a>
                            <p className='text-secondary '>Website and Mobile Programming</p>
                        </li>
                    </ul>
                    </li>
                </ul>
                <form className="d-flex w-50" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center  ">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" href="#"><img src={notification} alt="notification" /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" href="#"><img src={cart} alt="cart" /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" href="#"><img src={portfolio} alt="portfolio" /></Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </>
)
}
