import { useState } from 'react'
import logo from './assets/logo.png'
import heroImg from './assets/hero1.png'
import categoryAllCars from './assets/category_All.png'
import categorySUV from './assets/category_SUV.png'
import categorySedan from './assets/category_sedan.png'
import categoryElectric from './assets/electric_category.png'
import categoryLuxury from './assets/luxry_category.png'
import categoryHatchback from './assets/hatchback_category.png'

import './App.css'
import Card from './components/category'
import Featured from './components/featured'
import ChooseDrive from './components/chooseDriveX'
import CustomerFeedback from './components/customerReviews'
import BookingCar from './components/bookingCar'

function App() {
  const cars = [
    // ==================== SUV ====================
    {
      id: 1,
      name: "Range Rover Evoque",
      category: "SUV",
      price: "$89",
      oldPrice: "$112",
      seats: 5,
      transmission: "Automatic",
      fuel: "Diesel",
      image: "range_rover.png",
    },
    {
      id: 2,
      name: "BMW X5",
      category: "SUV",
      price: "$105",
      oldPrice: "$125",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://imgd-ct.aeplcdn.com/1056x660/n/40f3bbb_1676647.png?q=80",
    },
    {
      id: 3,
      name: "Mercedes GLC",
      category: "SUV",
      price: "$110",
      oldPrice: "$135",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://tse2.mm.bing.net/th/id/OIP.qkup7LjLufM4kav7oFnK0wHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 4,
      name: "Audi Q7",
      category: "SUV",
      price: "$95",
      oldPrice: "$118",
      seats: 7,
      transmission: "Automatic",
      fuel: "Diesel",
      image: "audi-Q7.png",
    },
    {
      id: 5,
      name: "Toyota Land Cruiser",
      category: "SUV",
      price: "$125",
      oldPrice: "$150",
      seats: 7,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://imgd.aeplcdn.com/1056x594/n/0xan40b_1643911.jpg?q=80&wm=1",
    },

    // ==================== SEDAN ====================
    {
      id: 6,
      name: "BMW 5 Series",
      category: "Sedan",
      price: "$75",
      oldPrice: "$88",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://ackodrive-prod.ackoassets.com/image/bmw/5-series/phytonic-blue/default/Transparent.png",
    },
    {
      id: 7,
      name: "Mercedes C-Class",
      category: "Sedan",
      price: "$65",
      oldPrice: "$72",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "mercedees-C.png",
    },
    {
      id: 8,
      name: "Toyota Camry",
      category: "Sedan",
      price: "$58",
      oldPrice: "$70",
      seats: 5,
      transmission: "Automatic",
      fuel: "Hybrid",
      image: "https://di-sitebuilder-assets.dealerinspire.com/Toyota/MLP/Camry/2025/color-Heavy-Metal.png",
    },
    {
      id: 9,
      name: "Honda Accord",
      category: "Sedan",
      price: "$55",
      oldPrice: "$65",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://th.bing.com/th/id/R.81a1ea4a49ae2996433e3eef19c94635?rik=O4hqJZ6u1ehRGg&pid=ImgRaw&r=0",
    },

    // ==================== LUXURY ====================
    {
      id: 10,
      name: "BMW 7 Series",
      category: "Luxury",
      price: "$150",
      oldPrice: "$180",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://imgcdn.sayaratbay.com/large/gallery/color/4/2010/bmw-7-series-color-800970.jpg",
    },
    {
      id: 11,
      name: "Mercedes S-Class",
      category: "Luxury",
      price: "$175",
      oldPrice: "$210",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://www.pngkit.com/png/full/847-8476621_did-you-know-every-new-mercedes-benz-s.png",
    },
    {
      id: 12,
      name: "Porsche Panamera",
      category: "Luxury",
      price: "$165",
      oldPrice: "$195",
      seats: 4,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://platform.cstatic-images.com/in/v2/stock_photos/0b482066-0062-4dca-b3bb-5a92f512776c/e8df5937-15ed-4ef7-b26d-552a59cb262a.png",
    },

    // ==================== HATCHBACK ====================
    {
      id: 13,
      name: "Kia Picanto",
      category: "Hatchback",
      price: "$35",
      oldPrice: "$42",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ja/picanto-my25/discover/kia-picanto-my25-MilkyBeige-1.png",
    },
    {
      id: 14,
      name: "Volkswagen Golf",
      category: "Hatchback",
      price: "$48",
      oldPrice: "$58",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://images.ctfassets.net/3xid768u5joa/SQTMMWK7C6aozpV9vACuW/892537d66a3dc9c9baf46cc78b3e8ac9/02_VolkswagenGolf_ColourGuide_PureWhitesolid_12.08_MR.webp",
    },
    {
      id: 15,
      name: "Honda Civic Hatchback",
      category: "Hatchback",
      price: "$52",
      oldPrice: "$62",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
      image: "https://tse2.mm.bing.net/th/id/OIP.vhOy5pd0fCeuGcEDPNZQugHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },

    // ==================== ELECTRIC ====================
    {
      id: 16,
      name: "Tesla Model 3",
      category: "Electric",
      price: "$85",
      oldPrice: "$100",
      seats: 5,
      transmission: "Automatic",
      fuel: "Electric",
      image: "https://tse1.mm.bing.net/th/id/OIP.9ris5k--PtWLnx8g1E6xGwHaFj?r=0&w=640&h=480&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 17,
      name: "Tesla Model Y",
      category: "Electric",
      price: "$95",
      oldPrice: "$115",
      seats: 5,
      transmission: "Automatic",
      fuel: "Electric",
      image: "https://tse3.mm.bing.net/th/id/OIP.CoiWqJc7bYtjwsbkEYSIkgHaEK?r=0&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 18,
      name: "BMW i4",
      category: "Electric",
      price: "$90",
      oldPrice: "$108",
      seats: 5,
      transmission: "Automatic",
      fuel: "Electric",
      image: "https://tse4.mm.bing.net/th/id/OIP.BZSLJmhLOPzI2mpuxN9UpwHaE4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      id: 19,
      name: "Audi e-tron",
      category: "Electric",
      price: "$115",
      oldPrice: "$135",
      seats: 5,
      transmission: "Automatic",
      fuel: "Electric",
      image: "https://tse1.mm.bing.net/th/id/OIP.ic1PnrHZkVZbTr3RQBAWrAHaDd?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ]; 
  const categories = [
    {
      icon: "bi-grid",
      title: "All",
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
      image: "range_rover.png",
      name:"Range Rover",
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
      image: "https://ackodrive-prod.ackoassets.com/image/bmw/5-series/phytonic-blue/default/Transparent.png",
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
      image: "audi-Q7.png",
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
      image: "mercedees-C.png",
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
  const [showBooking, setShowBooking] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null)
  const [filteredCars, setfilteredCars] = useState(null)
  let value = filteredCars === "All" ? cars :
    cars.filter((item) => (
      item.category === filteredCars
    ))
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
            <li className='active'>Home</li>
            <li>Cars</li>
            <li>Services</li>
            <li>Deals</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="btns">
          <button className='login'><i className="bi bi-person"></i>  Log in</button>
          <button className='signup'><i className="bi bi-person-add"></i>   Sign Up</button>
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
              <label htmlFor="pickup-location">Pick-up Location</label>

              <div className="field-input">
                {/* <i className="bi bi-geo-alt-fill"></i> */}

                <select id="pickup-location" defaultValue="">
                  <option >
                    Select location
                  </option>
                  <option value="karachi">Karachi</option>
                  <option value="lahore">Lahore</option>
                  <option value="islamabad">Islamabad</option>
                  <option value="rawalpindi">Rawalpindi</option>
                </select>

                {/* <i className="bi bi-chevron-down dropdown-icon"></i> */}
              </div>
            </div>


            {/* Pick-up Date */}
            <div className="booking-field">
              <label htmlFor="pickup-date">Pick-up Date</label>

              <div className="field-input">

                <input
                  id="pickup-date"
                  type="date"
                />
              </div>
            </div>


            {/* Drop-off Date */}
            <div className="booking-field">
              <label htmlFor="dropoff-date">Drop-off Date</label>

              <div className="field-input">

                <input
                  id="dropoff-date"
                  type="date"
                />
              </div>
            </div>


            {/* Search Button */}
            <button className="search-btn" type="button">
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
          <img src={heroImg} alt="car" />
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
            categories.map((item,id) => (
              <Card key={id} data={item} setfilteredCars={setfilteredCars} />
            )
            )}
        </div>
      </section>

     { filteredCars&&(
      <section className='section'>
        <div className="section-header">
          <h2>Available Cars</h2>
        </div>

        <div className="featured-grid">
          { 
            value.map((item) => (
              <Featured data={item} setShowBooking={setShowBooking} setSelectedCar={setSelectedCar} />
            )
            )}
        </div>
      </section>
      )}

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
              <Featured key={item.id} data={item} setShowBooking={setShowBooking} setSelectedCar={setSelectedCar} />
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
            whyChoose.map((item,id) => (
              <ChooseDrive key={id} data={item} />
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
            customerReviews.map((item,id) => (
              <CustomerFeedback key={id} data={item} />
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
              <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/download-on-the-app-store-logo-png-23.png" alt="" />
            </div>
          </div>
        </div>


        <div className="footer-bottom">
          © 2024 DriveX. All rights reserved.
        </div>

      </footer>


      {showBooking ? <BookingCar setShowBooking={setShowBooking} SelectedCar={selectedCar} /> : null}
    </>
  )
}

export default App
