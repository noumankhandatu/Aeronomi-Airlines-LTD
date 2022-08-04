import React from 'react'
//  OwlCarousel Slider Import
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//  Client Slider Img Import
import img1 from '../../assets/img/partner/client-1.png'
import img2 from '../../assets/img/partner/client-2.png'
import img3 from '../../assets/img/partner/client-3.png'
import img4 from '../../assets/img/partner/client-4.png'
import img5 from '../../assets/img/partner/client-5.png'

const OurPartnerData = [
    {
        img: img1
    },
    {
        img: img2
    },
    {
        img: img3
    },
    {
        img: img4
    },
    {
        img: img5
    },
    {
        img: img1
    }
]

const OurPartner = () => {

    let responsive = {
        0: {
            items: 2,
        },
        600: {
            items: 2,
        },
        960: {
            items: 2,
        },
        1200: {
            items: 3,
        },
    }
    return (
        <>
            <section id="partner_area_slider">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="partner_heading">
                                <h2>Our Partners:</h2>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                            <div className="partner_slider_wrapper">
                                <OwlCarousel className="owl-theme" responsive={responsive} autoplay={true}
                                             autoplayHoverPause={true} autoplayTimeout={2500}
                                             loop={true} margin={10} nav={false} dots={false}>
                                    {OurPartnerData.map((data, index) => (
                                        <div className="partner_logo" key={index}>
                                            <img src={data.img} alt="logo-img"/>
                                        </div>
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

export default OurPartner
