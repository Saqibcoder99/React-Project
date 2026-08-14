import React from "react";


const Card= ({data,setfilteredCars}) => {    
    return (<div className="category-card"onClick={()=>(
        
    setfilteredCars(data.title)

    )}>
  
        <div className="category-icon">
      <i className={`bi ${data.icon}`}></i>
        </div>

        <div className="category-image">
            <img
                src={data.image}
                alt={data.title}
            />
        </div>

        <h3>{data.title}</h3>
        <p>{data.cars}</p>

    </div>)
}


export default Card