import React from 'react'
import {Link} from 'react-router-dom';
// Import Img
import img1 from '../../../assets/img/common/about-service.jpg'

const HomeTwoAbout = () => {
    return (
        <>
            <section id="service_about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_service_img">
                                <img src={img1} alt="img-about"/>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 col-12">
                            <div className="about_service_text">
                                <div className="heading-left-border">
                                    <h2>Global Leader of the Logistics</h2>
                                </div>
                                <p>Our warehousing services are known nationwide to be one of the most reliable, safe
                                    and affordable,
                                    because we take pride in delivering the best of warehousing services, at the most
                                    reasonable prices.</p>
                                <p>Pleasure and praising pain was born and I will give you a complete account of system,
                                    and expound actual teachings occasionally circumstances.</p>
                                <Link to="/about" className="btn btn-theme">More About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeTwoAbout
