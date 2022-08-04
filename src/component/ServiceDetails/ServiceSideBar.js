import React from 'react'
import {Link} from 'react-router-dom';
// ServiceSideBar Area
const ServiceSideBar = () => {
    return (
        <>
            <div className="col-lg-4">
                <div className="service_details_sidebar">
                    <div className="sidebar_service_wrappers">
                        <h3>Our Service</h3>
                        <ul>
                            <li><Link to="/service">Finance Audit</Link></li>
                            <li><Link to="/service">Healthcare Consulting</Link></li> 
                            <li><Link to="/service">Strategic Marketing</Link></li>
                            <li><Link to="/service">Contingency Plans</Link></li>
                            <li><Link to="/service">Mergers & Acquisitions</Link></li>
                            <li><Link to="/service">Marketing & Sales</Link></li>
                        </ul>
                    </div>
                    <div className="sidebar_service_wrappers">
                        <h3>Our Brochures</h3>
                        <ul>
                            <li><a href="#!"> <i className="far fa-file-pdf"></i> Service Brochure.Pdf</a></li>
                            <li><a href="#!"><i className="far fa-file-word"></i> About Company.Doc</a></li>
                        </ul>
                    </div>
                    <div className="sidebar_service_wrappers">
                        <h3>Contact Us</h3>
                        <div className="contact_sidebar">
                            <h6>Visit our office</h6>
                            <p>244, Cargo Hub, Los Angeles, California- 90005</p>
                        </div>
                        <div className="contact_sidebar">
                            <h6>Call us on</h6>
                            <p>Office: +44 567 890123</p>
                            <p> Tollfree: 1800-123-45-6789</p>
                        </div>
                        <div className="contact_sidebar">
                            <h6>Mail Us at</h6>
                            <p>Mailus@CargoHub.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSideBar
