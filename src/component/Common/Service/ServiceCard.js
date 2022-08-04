import React from 'react'
import {Link} from 'react-router-dom';
// ServiceCard Area
const ServiceCard = props => {
    return (
        <>
            <div className="service-card">
                <img src={props.img} alt="image_service"/>
                <div className="service-caption">
                    <h3>{props.heading}</h3>
                    <p>{props.para}</p>
                    <Link to="/service_details" className="read_more_btn">{props.button}<i
                        className="fas fa-long-arrow-alt-right"></i></Link>
                </div>
            </div>

        </>
    )
}

export default ServiceCard
