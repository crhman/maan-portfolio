import React from 'react';
import './service.css';
import Services_Data from '../../assets/services_data'; // Assuming you have a servicesData.js file with service details
import arrow_icon from '../../assets/arrow_icon.svg'; // Import your arrow icon

const Service = () => {
    return (
        <div id='services' className='service'>
            <div className="services-title">
                <h1>My service</h1>
                 <hr style={{width:"100%", height:"5px", backgroundColor:"#27C529", marginTop:"10px", marginBottom:"30px"}} />
            </div>
            <div className="service-container">
                {Services_Data.map((service, index) => (
                    <div className="service-card" key={index}>
                      <h3>{service.s_no}</h3>
                     <h2>{service.s_name}</h2>
                     <p>{service.s_desc}</p>
                     <div className="service-readmore">
                        <p>read more</p>
                        <img src={arrow_icon} alt="" />
                     </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service;
