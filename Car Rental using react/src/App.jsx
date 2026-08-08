import { useState } from 'react'
import heroImg from './assets/hero1.png'
import './App.css'

function App() {
  return (
    <>
      <nav>
        <div className="left-side">
          <div className="logo">
            <i class="bi bi-car-front-fill"></i>  DriveX
          </div>

        </div>
        <div className="middle-side">
          <ul>
            <li>Home</li>
            <li>Cars</li>
            <li>Services</li>
            <li>Deals</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="btns">
          <button className='login'><i class="bi bi-person"></i>  Log in</button>
          <button className='signup'><i class="bi bi-person-add"></i>   Sign Up</button>
        </div>

      </nav>
      <div className="hero-sec">
        <div className="left-side">
          <div className="content">
            <p>Find Your Perfect Ride</p>
            <h2>Drive Your Dream, Live Your <span>Journey</span></h2>
            <p className='des'>Premium cars. Best prices. Unforgetable experencies. Book your perfect car today!</p>
          </div>
          <div className="booking-box">

            {/* Pick-up Location */}
            <div className="booking-field">
              <label>Pick-up Location</label>

              <div className="field-input">
                <i className="bi bi-geo-alt-fill"></i>
                <span>Select location</span>
                <i className="bi bi-chevron-down dropdown-icon"></i>
              </div>
            </div>


            {/* Pick-up Date */}
            <div className="booking-field">
              <label>Pick-up Date</label>

              <div className="field-input">
                <i className="bi bi-calendar3"></i>
                <span>Select date</span>
              </div>
            </div>


            {/* Drop-off Date */}
            <div className="booking-field">
              <label>Drop-off Date</label>

              <div className="field-input">
                <i className="bi bi-calendar3"></i>
                <span>Select date</span>
              </div>
            </div>


            {/* Search Button */}
            <button className="search-btn">
              <i className="bi bi-search"></i>
              Search Cars
            </button>

          </div>
          <div className="hero-stats">

            {/* Happy Customers */}
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-people"></i>
              </div>

              <div className="stat-content">
                <h3>10K+</h3>
                <p>Happy Customers</p>
              </div>
            </div>


            {/* Premium Cars */}
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-car-front"></i>
              </div>

              <div className="stat-content">
                <h3>5000+</h3>
                <p>Premium Cars</p>
              </div>
            </div>


            {/* Locations */}
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>

              <div className="stat-content">
                <h3>50+</h3>
                <p>Locations</p>
              </div>
            </div>


            {/* Customer Support */}
            <div className="stat-item">
              <div className="stat-icon">
                <i className="bi bi-headset"></i>
              </div>

              <div className="stat-content">
                <h3>24/7</h3>
                <p>Customer Support</p>
              </div>
            </div>

          </div>
        </div>
        <div className="right-side">
          <img src={heroImg} alt="car" height={500} width={800} />
        </div>
      </div>
    </>
  )
}

export default App
