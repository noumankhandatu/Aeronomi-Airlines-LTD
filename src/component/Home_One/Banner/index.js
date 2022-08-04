import React from 'react'
import {Link} from 'react-router-dom';
//  OwlCarousel Slider Import
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HomeBanner = () => {

    let responsive = {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        960: {
            items: 1,
        },
        1200: {
            items: 1,
        },
    }
    return (
        <>
            <section id="homeOne_banner">
                <div className="banner-slider">
                    <OwlCarousel className="owl-theme" responsive={responsive} autoplay={true} autoplayHoverPause={true}
                                 autoplayTimeout={2500}
                                 loop={true} nav={false} dots={true}>

                        <div className="banner-item banner-img-one">
                            <div className="container">
                                <div className="banner_one_inner">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                            <div className="banner-text">
                                                <h1>Shipping Products <br/>Worldwide</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua quis
                                                    ipsum suspendisse.</p>
                                                <Link className="btn btn-theme" to="/request_quote">Get A Quote</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-item banner-img-two">
                            <div className="container">
                                <div className="banner_one_inner">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                            <div className="banner-text">
                                                <h1>Shipping Products <br/>Worldwide</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua quis
                                                    ipsum suspendisse.</p>
                                                <Link className="btn btn-theme" to="/request_quote">Get A Quote</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-item banner-img-three">
                            <div className="container">
                                <div className="banner_one_inner">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                            <div className="banner-text">
                                                <h1>Shipping Products <br/>Worldwide</h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua quis
                                                    ipsum suspendisse.</p>
                                                <Link className="btn btn-theme" to="/request_quote">Get A Quote</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
                <div className="banner_social_icon">
                    <ul>
                        <li><a href="#!"><i className="fab facebook fa-facebook-f"></i></a></li>
                        <li><a href="#!"><i className="fab twitter fa-twitter"></i></a></li>
                        <li><a href="#!"><i className="fab instagram fa-instagram"></i></a></li>
                        <li><a href="#!"><i className="fab linkedin fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default HomeBanner
