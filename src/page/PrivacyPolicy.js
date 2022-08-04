import React from 'react'
import OurPolicies from '../component/PrivacyPolicy'
import CommonBanner from '../component/Common/Banner'
import OurPartner from '../component/Common/OurPartner'

const PrivacyPolicy = () => {
    return (
        <>
            <CommonBanner heading="Privacy Policy" page="Privacy Policy"/>
            <OurPolicies/>
            <OurPartner/>
        </>
    )
}

export default PrivacyPolicy
