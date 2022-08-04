import React from 'react'
import PricingTable from '../component/Common/PricingTable'
import CommonBanner from '../component/Common/Banner'
import OurPartner from '../component/Common/OurPartner'
const PricingContent = () => {
 return (
  <>
    <CommonBanner heading="Our Pricing Plan" page="Our Pricing Plan"/>
   <PricingTable/>
   <OurPartner/>
  </>
 )
}

export default PricingContent
