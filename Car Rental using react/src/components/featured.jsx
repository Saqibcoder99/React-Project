import React from "react";

const Card=({data})=>{
    

     return(<div className="car-card">

            <div className="discount">{data.discount}</div>

            <button className="favorite-btn">
              <i className="bi bi-heart"></i>
            </button>

            <div className="car-image">
              <img
                src={data.image}
                alt={data.name}
              />
            </div>

            <div className="car-info">

              <h3>{data.name}</h3>

              <div className="car-details">
                <span>
                  <i className="bi bi-gear"></i>
                  {data.transmission}
                </span>

                <span>
                  <i className="bi bi-people"></i>
                   {data.seats}
                </span>

                <span>
                  <i className="bi bi-fuel-pump"></i>
                   {data.fuel}
                </span>
              </div>

              <div className="price">
                <strong>{data.price}</strong>
                <span>/day</span>
                <del>{data.oldPrice}</del>
              </div>

              <button className="book-btn">
                Book Now
              </button>

            </div>

          </div>)
}
export default Card