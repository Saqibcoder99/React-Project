import React from "react";
const Card=({data})=>{
    return (  <div className="benefit-card">

            <div className="benefit-icon">
              <i className={data.icon}></i>
            </div>

            <div>
              <h3>{data.title}</h3>

              <p>
               {data.description}
              </p>
            </div>

          </div>)
}
export default Card