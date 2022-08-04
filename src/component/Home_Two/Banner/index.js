import React from 'react'
import {Link} from 'react-router-dom';
// Import FormInput
import FormInput from '../../Common/FormInput'
//  OwlCarousel Slider Import
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HomeBannerTwo = () => {

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
            <section id="homeTwo_banner">
                <div className="banner-slider-two">
                    <OwlCarousel className="owl-theme" responsive={responsive} autoplay={true} autoplayHoverPause={true}
                                 autoplayTimeout={2500}
                                 loop={true} nav={true} dots={false}>
                        <div className="banner-item-two banner-two-img-one">
                            <div className="container">
                                <div className="banner_two_inner">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="banner-text-two">
                                                <h6>Since 1992</h6>
                                                <h1>Digital Shipping Solution</h1>
                                                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                                    quis ipsum suspendisse.</p>
                                                <Link className="btn btn-theme" to="/about">Get A Quote</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="track_order_banner">
                                                <h3>Track Your Order</h3>
                                                <form action="#!" className="from-tracking">
                                                    <FormInput
                                                        tag={'input'}
                                                        type={'text'}
                                                        name={'Tracking_Id'}
                                                        classes={'form-control'}
                                                        placeholder={'Tracking Id no:'}
                                                    />
                                                    <FormInput
                                                        tag={'input'}
                                                        type={'text'}
                                                        name={'email'}
                                                        classes={'form-control'}
                                                        placeholder={'Email Address'}
                                                    />
                                                    <FormInput
                                                        tag={'button'}
                                                        val={'Track Now'}
                                                    />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-item-two banner-two-img-one">
                            <div className="container">
                                <div className="banner_two_inner">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="banner-text-two">
                                                <h6>Since 1992</h6>
                                                <h1>Digital Shipping Solution</h1>
                                                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                                    quis ipsum suspendisse.</p>
                                                <Link className="btn btn-theme" to="/about">Get A Quote</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="track_order_banner">
                                                <h3>Track Your Order</h3>
                                                <form action="#!" className="from-tracking">
                                                    <FormInput
                                                        tag={'input'}
                                                        type={'text'}
                                                        name={'Tracking_Id'}
                                                        classes={'form-control'}
                                                        placeholder={'Tracking Id no:'}
                                                    />
                                                    <FormInput
                                                        tag={'input'}
                                                        type={'text'}
                                                        name={'email'}
                                                        classes={'form-control'}
                                                        placeholder={'Email Address'}
                                                    />
                                                    <FormInput
                                                        tag={'button'}
                                                        val={'Track Now'}
                                                    />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        </>
    )
}

export default HomeBannerTwo
