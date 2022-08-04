import React from 'react'
import TermsConditionContent from '../component/TermsCondition'
import CommonBanner from '../component/Common/Banner'
import OurPartner from '../component/Common/OurPartner'

const TermsCondition = () => {
    return (
        <>
            <CommonBanner heading="Terms & Condition" page="Terms & Condition"/>
            <TermsConditionContent/>
            <OurPartner/>
        </>
    )
}

export default TermsCondition
