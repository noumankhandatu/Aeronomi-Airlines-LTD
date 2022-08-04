import React from 'react'
import CommonBanner from '../component/Common/Banner'
import TrackShipment from '../component/TrackYourShipment'
import OurPartner from '../component/Common/OurPartner'

const TrackYourShip = () => {
    return (
        <>
            <CommonBanner heading="Track Your Shipment" page="Track Your Shipment"/>
            <TrackShipment/>
            <OurPartner/>
        </>
    )
}

export default TrackYourShip
