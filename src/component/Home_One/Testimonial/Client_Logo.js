import React from 'react'
// Import ClientLogo
import {ClientLogo} from '../Testimonial/TestimonialData'
//  OwlCarousel Slider Import
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ClientLogos = () => {
    let responsiveOne = {
        0: {
            items: 2,
        },
        600: {
            items: 3,
        },
        960: {
            items: 4,
        },
        1200: {
            items: 5,
        },
    }
    return (
        <>
            <div id="client_logo_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="client_logo_slider">

                                <OwlCarousel margin={10} responsive={responsiveOne} loop={true} autoplay={true}
                                             autoplayHoverPause={true} autoplayTimeout={2500}>
                                    {ClientLogo.map((data, index) => (
                                        <a href="#!" key={index}><img src={data.img} alt="logo img"/></a>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientLogos
