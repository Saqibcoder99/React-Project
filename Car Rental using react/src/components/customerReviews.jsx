import React from "react";
const Card=({data})=>{
    
    return ( <div className="testimonial-card">

            <div className="stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </div>

            <p>
             {data.review}
            </p>

            <div className="customer">

              <div className="customer-avatar">
                <img src={data.image} alt={data.name} />
              </div>

              <div>
                <h4>{data.name}</h4>
                <span>{data.role}</span>
              </div>

            </div>

          </div>)
}
export default Card