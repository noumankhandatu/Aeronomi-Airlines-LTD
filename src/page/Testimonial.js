import React from 'react'
import CommonBanner from '../component/Common/Banner'
import TestimonialSlider from '../component/Testimonial'
import OurPartner from '../component/Common/OurPartner'

const Testimonials = () => {
    return (
        <>
            <CommonBanner heading="Testimonials" page="Testimonials"/>
            <TestimonialSlider/>
            <OurPartner/>
        </>
    )
}

export default Testimonials
