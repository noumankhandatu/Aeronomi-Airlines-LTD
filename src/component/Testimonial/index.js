import React from 'react'
//Import ClientCard
import ClientCard from '../Common/Client/ClientCard'
//Import ClientsData
import {ClientsData} from '../Common/Client/ClientData'
//  OwlCarousel Slider Import
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestimonialSlider = () => {
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
            <section id="testimonial_homeTwo">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-12">
                            <div className="client_review_two ">
                                <OwlCarousel className="owl-theme" responsive={responsive} autoplay={false}
                                             autoplayHoverPause={true} autoplayTimeout={2500}
                                             loop={true} margin={10} nav={false} dots={true}>
                                    {ClientsData.map((data, index) => (
                                        <ClientCard img={data.img} name={data.name} des={data.des} para={data.para}
                                                    key={index}/>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialSlider
