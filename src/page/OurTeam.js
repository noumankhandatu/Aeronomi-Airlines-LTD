import React from 'react'
import TeamCards from '../component/OurTeam'
import CommonBanner from '../component/Common/Banner'
import OurPartner from '../component/Common/OurPartner'

const OurTeam = () => {
    return ( 
        <>
            <CommonBanner heading="Our Team" page="Our Team"/>
            <TeamCards/>
            <OurPartner/>
        </>
    )
}

export default OurTeam;
