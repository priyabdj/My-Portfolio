import React from 'react'
import './Services.css'
import arrow_icon from '../../assets/arrow_icon.svg'
import Services_Data from '../../assets/services_data'
const Services = () => {
  return (
    <div id='project' className='Project'>
       
    <div className="project-title">
         <h1>My Project</h1>
    </div>
<div className="service-container">
 {
    Services_Data.map((service,index)=>{
        return <div key ={index}className='services-format'>
            <h4>{service.s_no}</h4>
            <h3>   <a className='project-link' href={service.s_link} target="_blank" rel="noopener noreferrer">
                  {service.s_name}
                </a></h3>
            <h5>{service.s_desc}</h5>
            <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon}alt="" />
            </div>
            </div>
    })
 }
</div>
</div>
    
  )
}

export default Services