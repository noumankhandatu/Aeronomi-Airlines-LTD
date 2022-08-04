import React from 'react'
// Import ServiceSideBar
import ServiceSideBar from './ServiceSideBar'
// Import ServiceContent
import ServiceContent from './ServiceContent'

const ServiceDetailsMain = () => {
    return (
        <>
            <section id="service_details_area">
                <div className="container">
                    <div className="row">
                        <ServiceContent/>
                        <ServiceSideBar/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceDetailsMain
