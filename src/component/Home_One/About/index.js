import React from 'react'
// Import Counter
import Counter from './Counter';
// About Img
import img1 from '../../../assets/img/home1/about.png'
import img2 from '../../../assets/img/home1/sign.png'
// Counter Data
const CounterData = [
    {
        countStart: 100,
        countEnd: 12345,
        heading: "COMPANY ESTABLISHED",
        icon: " fas fa-building"
    },
    {
        countStart: 100,
        countEnd: 12345,
        heading: "COUNTRIES SERVED",
        icon: "fas fa-globe"
    },
    {
        countStart: 100,
        countEnd: 12345,
        heading: "PORTS SERVED",
        icon: " fas fa-building"
    },
]

const HomeAbout = () => {
    return (
        <>
            <section id="home_about_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_img">
                                <img src={img1} alt="About_Img"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_content">
                                <div className="heading-left-border">
                                    <h2>Global Leader of the Logistics</h2>
                                </div>
                                <h3>All our efforts and investments are geared towards offering better solutions.</h3>
                                <p>Solving your supply chain needs from end to end, taking the complexity out of
                                    container shipping. We are at the forefront of developing innovative supply chain
                                    solutions.</p>
                                <div className="about_sign_arae">
                                    <div className="distaion_area">
                                        <h5>Jonathon Doelan</h5>
                                        <h6>Chairman, Transtics</h6>
                                    </div>
                                    <div className="signature">
                                        <img src={img2} alt="About_Img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about_counter_area">
                        <div className="row">
                            {CounterData.map((data, index) => (
                                <Counter countStart={data.countStart} countEnd={data.countEnd} heading={data.heading}
                                         icon={data.icon} key={index}/>))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeAbout