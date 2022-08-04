import React from 'react'
// Import SectionHeading
import SectionHeading from '../../Common/SectionHeading'
// Import TeamCard
import TeamCard from '../../Common/Team/TeamCard'
// Import TeamData
import {TeamData} from '../../Common/Team/TeamData'
//  OwlCarousel Slider Import
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const TeamArea = () => {

    let responsive = {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        960: {
            items: 2,
        },
        1200: {
            items: 3,
        },
    }

    return (
        <>
            <section id="team_area">
                <div className="container">
                    <SectionHeading heading="Our Team" para="Solving your supply chain needs from end to end, taking the
complexity out of container shipping. We are at the forefront of developing innovation."/>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="team-slider">
                                <OwlCarousel className="owl-theme" responsive={responsive} autoplay={false}
                                             autoplayHoverPause={true} autoplayTimeout={2500}
                                             loop={true} margin={10} nav={false} dots={true}>
                                    {TeamData.map((data, index) => (
                                        <TeamCard img={data.img} heading={data.heading} para={data.para}
                                                  name={data.name} des={data.des} key={index}/>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamArea
