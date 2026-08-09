import { useState } from 'react'
import logo from './assets/logo.png'
import heroImg from './assets/hero1.png'
import categoryAllCars from './assets/category_All.png'
import categorySUV from './assets/category_SUV.png'
import categorySedan from './assets/category_sedan.png'
import categoryElectric from './assets/electric_category.png'
import categoryLuxury from './assets/luxry_category.png'
import categoryHatchback from './assets/hatchback_category.png'
import rangeRover from './assets/range_rover.png'
import Audi from './assets/audi.png'
import BMW from './assets/bmw.png'
import Mercedees from './assets/mercedees.png'

import './App.css'
import Card from './components/category'
import Featured from './components/featured'
import ChooseDrive from './components/chooseDriveX'
import CustomerFeedback from './components/customerReviews'


function App() {
  const categories = [
    {
      icon: "bi-grid",
      title: "All Cars",
      cars: "120+ Cars",
      image: categoryAllCars,
    },
    {
      icon: "bi-car-front",
      title: "SUV",
      cars: "45+ Cars",
      image: categorySUV,
    },
    {
      icon: "bi-car-front",
      title: "Sedan",
      cars: "30+ Cars",
      image: categorySedan,
    },
    {
      icon: "bi-gem",
      title: "Luxury",
      cars: "25+ Cars",
      image: categoryLuxury,
    },
    {
      icon: "bi-car-front",
      title: "Hatchback",
      cars: "20+ Cars",
      image: categoryHatchback,
    },
    {
      icon: "bi-lightning-charge",
      title: "Electric",
      cars: "15+ Cars",
      image: categoryElectric,
    },
  ];
  const featuredCars = [
    {
      id: 1,
      discount: "-20%",
      image: rangeRover,
      name: "Range Rover Evoque",
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Diesel",
      price: "$89",
      oldPrice: "$112",
      isFavorite: false,
    },

    {
      id: 2,
      discount: "-15%",
      image: BMW,
      name: "BMW 5 Series",
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      price: "$75",
      oldPrice: "$88",
      isFavorite: false,
    },

    {
      id: 3,
      discount: null,
      image: Audi,
      name: "Audi Q7",
      transmission: "Automatic",
      seats: "7 Seats",
      fuel: "Diesel",
      price: "$95",
      oldPrice: null,
      isFavorite: true,
    },

    {
      id: 4,
      discount: "-10%",
      image: Mercedees,
      name: "Mercedes C-Class",
      transmission: "Automatic",
      seats: "5 Seats",
      fuel: "Petrol",
      price: "$65",
      oldPrice: "$72",
      isFavorite: false,
    },
  ];
  const whyChoose = [
    {
      icon: "bi bi-house-check",
      title: "Best Price Guarantee",
      description: "We offer competitive prices for all cars."
    },
    {
      icon: "bi bi-calendar-check",
      title: "Free Cancellation",
      description: "Cancel up to 48 hours before pick-up."
    },
    {
      icon: "bi bi-speedometer2",
      title: "Unlimited Mileage",
      description: "Drive as much as you want, worry-free."
    },
    {
      icon: "bi bi-headset",
      title: "24/7 Support",
      description: "Our support team is always here for you."
    },
    {
      icon: "bi bi-shield-check",
      title: "Secure Booking",
      description: "Your booking is safe and secure with us."
    }
  ];
  const customerReviews = [
    {
      id: 1,
      review: "Amazing experience! The car was clean, new and perfect for our road trip.",
      name: "Hasan Ashraf",
      role: "Verified Customer",
      image: "https://avatars.githubusercontent.com/u/140997677?v=4"
    },
    {
      id: 2,
      review: "Easy booking, great prices and excellent customer service. Highly recommended!",
      name: "Arham Maqsood",
      role: "Verified Customer",
      image: "https://avatars.githubusercontent.com/u/224722350?v=4"
    },
    {
      id: 3,
      review: "DriveX made my trip unforgettable. Will definitely book again!",
      name: "Abdullah Hamdani",
      role: "Verified Customer",
      image: "https://avatars.githubusercontent.com/u/175876289?v=4"
    }
  ];
  return (
    <>
      <nav>
        <div className="left-side">
        <div className="logo">
          <img src={logo} alt="logo" />
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
          <img src={heroImg} alt="car" height={500} />
        </div>
      </div>

      <section className="section">
        <div className="section-header">
          <h2>Browse by Category</h2>
          <a href="#">
            View All <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        <div className="category-grid">
          {
            categories.map((item) => (
              <Card data={item} />
            )
            )}
        </div>
      </section>



      <section className="section">
        <div className="section-header">
          <h2>Featured Cars</h2>

          <a href="#">
            View All <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        <div className="featured-grid">
          {
            featuredCars.map((item) => (
              <Featured data={item} />
            )
            )}

        </div>
      </section>



      <section className="section">

        <div className="section-header">
          <h2>Why Choose DriveX?</h2>
        </div>

        <div className="benefits-grid">
          {
            whyChoose.map((item) => (
              <ChooseDrive data={item} />
            ))
          }

        </div>

      </section>



      <section className="deals-section">

        <div className="deal-content">

          <span className="deal-tag">
            Limited Time Offer
          </span>

          <h2>Weekend Special Deals</h2>

          <p>
            Get up to 30% OFF on selected cars.
            Book now and save more.
          </p>

          <button className="deal-btn">
            Explore Deals
            <i className="bi bi-arrow-right"></i>
          </button>

        </div>


        <div className="deal-timer">

          <div className="timer-box">
            <strong>02</strong>
            <span>Days</span>
          </div>

          <div className="timer-box">
            <strong>14</strong>
            <span>Hours</span>
          </div>

          <div className="timer-box">
            <strong>36</strong>
            <span>Mins</span>
          </div>

          <div className="timer-box">
            <strong>45</strong>
            <span>Secs</span>
          </div>

        </div>


        <div className="deal-car">
          <img
            src={heroImg}
            alt="Premium Car"
          />
        </div>

      </section>



      <section className="section">

        <div className="section-header">
          <h2>What Our Customers Say</h2>

          <a href="#">
            View All <i className="bi bi-arrow-right"></i>
          </a>
        </div>


        <div className="testimonial-grid">

          {
            customerReviews.map((item) => (
              <CustomerFeedback data={item} />
            ))
          }

        </div>

      </section>



      <section className="newsletter">

        <div className="newsletter-icon">
          <i className="bi bi-send-fill"></i>
        </div>

        <div className="newsletter-text">
          <h2>Stay Updated</h2>
          <p>Subscribe to get special offers and updates.</p>
        </div>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>
        </div>

      </section>



      <footer className="footer">

        <div className="footer-grid">

          <div className="footer-brand">

            <h2>
              <i className="bi bi-car-front-fill"></i>
              DriveX
            </h2>

            <p>
              Your trusted partner for premium car rentals.
              Drive your dream with the best cars and
              unforgettable experiences.
            </p>

            <div className="social-icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-linkedin"></i>
            </div>

          </div>


          <div className="footer-column">
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Press</a>
            <a href="#">Contact</a>
          </div>


          <div className="footer-column">
            <h3>Services</h3>
            <a href="#">Car Rental</a>
            <a href="#">Chauffeur Service</a>
            <a href="#">Airport Transfer</a>
            <a href="#">Long Term Rental</a>
            <a href="#">Corporate Rental</a>
          </div>


          <div className="footer-column">
            <h3>Support</h3>
            <a href="#">Help Center</a>
            <a href="#">FAQs</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cancellation Policy</a>
          </div>


          <div className="footer-column">
            <h3>Contact Us</h3>

            <p>
              <i className="bi bi-geo-alt"></i>
              123 DriveX Street, Los Angeles, CA
            </p>

            <p>
              <i className="bi bi-telephone"></i>
              +1 (555) 123-4567
            </p>

            <p>
              <i className="bi bi-envelope"></i>
              info@drivex.com
            </p>

          </div>
          <div className="footer-column">
            <h3>We Accept</h3>
            <div className="aceept-img">
              <img src="https://tse3.mm.bing.net/th/id/OIP.SgdgVPCRgWJV2JVf06qYHAHaEK?r=0&w=3840&h=2160&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
              <img src="https://tse3.mm.bing.net/th/id/OIP.2GBsE98iH4hZsEB-8DZqNQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
              <img src="https://th.bing.com/th/id/R.81b2d3c1602b4a523d67a851d7d58db7?rik=M4evuvDRWTdEIg&pid=ImgRaw&r=0" alt="" />
              <img src="https://tse1.mm.bing.net/th/id/OIP.g1SNe3QbzwwQs1cTe19JDQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
            </div>
            <h3>Download App</h3>
             <div className="download-logo">
              <img src="https://www.pngall.com/wp-content/uploads/10/Google-Play-Logo-PNG-Image.png" alt="" />
              <img  src="https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png" alt=""  />
             </div>
          </div>
        </div>


        <div className="footer-bottom">
          © 2024 DriveX. All rights reserved.
        </div>

      </footer>
    </>
  )
}

export default App
