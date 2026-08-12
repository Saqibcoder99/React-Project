import React from "react";


const Card= ({setShowBooking,SelectedCar}) => {    
  console.log(SelectedCar);
    
    return (    
<div className="booking-overlay">
  <div className="booking-modal">

    <button className="close-btn" onClick={()=>{
      document.body.style.overflow="auto"
      setShowBooking(false)} }>x</button>

    <div className="booking-car">
        <img src={SelectedCar.image}  alt="" />
    </div>

    <div className="booking-content">
      <span class="booking-badge">Quick Booking</span>

      <h2>Book Your Car</h2>
      <p className="booking-subtitle">
        Complete your booking for your selected car.
      </p>

      <div className="selected-car">
        <div>
          <h3>{SelectedCar.name}</h3>
          <p>{SelectedCar.transmission} • {SelectedCar.seats} • {SelectedCar.fuel}</p>
        </div>

        <div className="car-price">
          <strong>{SelectedCar.price}</strong>
          <span>/day</span>
        </div>
      </div>

      <div className="input-group">
        <label>Your Name</label>
        <input type="text" placeholder="Enter Your Name" />
      </div>

      <button className="confirm-btn">
        Confirm Booking
      </button>

      <p className="secure-text">
        🔒 Your booking information is secure.
      </p>
    </div>

  </div>
</div>)
}


export default Card