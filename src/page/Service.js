import React from 'react'
import CommonBanner from '../component/Common/Banner'
import ServicesCard from '../component/Service/ServicesCard'
import Counter from '../component/Common/Counter'
import HomeTwoAbout from '../component/Home_Two/About'
import OurPartner from '../component/Common/OurPartner'

const Service = () => {
    return (
        <>
            <CommonBanner heading="Services" page="Services"/>
            <ServicesCard/>
            <Counter/>
            <HomeTwoAbout/>
            <OurPartner/>
        </>
    )
}

export default Service
