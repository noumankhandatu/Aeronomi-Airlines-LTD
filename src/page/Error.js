import React from 'react'
import CommonBanner from '../component/Common/Banner'
import ErrorMessages from '../component/Error'
import OurPartner from '../component/Common/OurPartner'

const Error = () => {
    return (
        <>
            <CommonBanner heading="Error" page="Error"/>
            <ErrorMessages/>
            <OurPartner/>
        </>
    )
}

export default Error
