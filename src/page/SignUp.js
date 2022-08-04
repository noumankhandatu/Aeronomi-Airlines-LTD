import React from 'react'
import CommonBanner from '../component/Common/Banner'
import SignUpForm from "../component/SignUp";
import OurPartner from '../component/Common/OurPartner'

const SignUp = () => {
    return (
        <>
            <CommonBanner heading="SignUp" page="SignUp"/>
            <SignUpForm heading="Create an Account!"/>
            <OurPartner/>
        </>
    )
}

export default SignUp
