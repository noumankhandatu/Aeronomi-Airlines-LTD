import React from 'react'
// Import SectionHeading
import SectionHeading from '../Common/SectionHeading'
// Import ServiceCard
import ServiceCard from '../Common/Service/ServiceCard'
// Import ServiceData
import {ServiceData} from '../Common/Service/ServiceData'

const ServicesCard = () => {
    return (
        <>
            <section id="services_page">
                <div className="container">
                    <SectionHeading heading="We Serve Various Ways" para="Solving your supply chain needs from end to end, taking the
        complexity out of container shipping. We are at the forefront of developing innovation."/>
                    <div className="service_wrapper_top">
                        <div className="row">

                            {ServiceData.map((data, index) => (
                                <div className="col-lg-4" key={index}>
                                    <ServiceCard img={data.img} heading={data.heading} para={data.para}
                                                 button={data.button}/>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesCard
